export class BaseService {
  constructor(options = {}) {
    this._baseURL = options.baseURL || '';
    this._headers = options.headers || {};
  }

  _fetchJSON = async (endpoint, options = {}) => {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers
    });

    // if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  };

  setBasicAuth = token => {
    this._headers.Authorization = `${token}`;
    return this;
  };

  setHeader = (key, value) => {
    this._headers[key] = value;
    return this;
  };

  get = (endpoint, options = {}) => {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET'
    });
  };

  post = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    if (isFormData) {
      this.setHeader('Content-Type', 'multipart/form-data');
    }
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'POST'
    });
  };

  put = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    if (isFormData) {
      this.setHeader('Content-Type', 'multipart/form-data');
    }
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'PUT'
    });
  };

  delete = (endpoint, options = {}) => {
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      method: 'DELETE'
    });
  };
}

export const api = new BaseService({
  baseURL: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyDkDtC340gMyi7KPnIUyae7oC3p_uYZTEY`,
  headers: {
    'content-type': 'application/json',
    'client-id': '0506aacd-8eaa-42bf-b3d0-9b45298a66ce'
  }
});

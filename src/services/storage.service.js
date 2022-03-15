const REFRESH_TOKEN = 'refreshToken';
const ACCESS_TOKEN = 'accessToken';

class StorageService {
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }

  getRefreshToken = () => this.getItem(REFRESH_TOKEN);

  setRefreshToken = token => this.setItem(REFRESH_TOKEN, token);

  removeRefreshToken = () => this.removeItem(REFRESH_TOKEN);

  getAccessToken = () => this.getItem(ACCESS_TOKEN);

  setAccessToken = token => this.setItem(ACCESS_TOKEN, token);

  removeAccessToken = () => this.removeItem(ACCESS_TOKEN);

  setCookie(name, value, days = 1, path) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    }

    const dir = path || '/';
    document.cookie = `${name}=${value + expires}; path=${dir}`;
  }

  getCookie(name) {
    const nameEQ = name + '=';
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }

  deleteCookie = name => {
    this.setCookie(name, '', -1);
  };
}

export const storageService = new StorageService();

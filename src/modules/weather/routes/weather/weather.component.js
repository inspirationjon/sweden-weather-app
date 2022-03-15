import React from 'react';

import { hoc } from '../../../../utils/hoc';
import PlaceAutocomplete from 'react-places-autocomplete';
import { useWeather } from './weather.props';
import { Info } from '../../components/info';

export const Weather = hoc(
  useWeather,
  ({ address, setAddress, coordinates, handleSelect, data, error }) => {
    return (
      <div className='p-5'>
        <div className='mb-2 mx-auto w-50'>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>

          <PlaceAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  type='text'
                  {...getInputProps({
                    className: 'form-control ',
                    placeholder: 'Type address'
                  })}
                />

                <div>{loading && <div>Loading ...</div>}</div>

                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? 'wheat' : '#fff'
                  };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={suggestion.placeId}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            )}
          </PlaceAutocomplete>
        </div>

        <Info data={data} error={error} />
      </div>
    );
  }
);

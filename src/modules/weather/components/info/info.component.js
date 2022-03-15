import React from 'react';

import { hoc } from '../../../../utils/hoc';
import { useInfo } from './info.props';

export const Info = hoc(useInfo, ({ data, error }) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Time</th>
            <th>Value</th>
            <th>Unit</th>
          </tr>
        </thead>

        <tbody>
          {data?.map(row => (
            <tr className='table-row' key={row.validTime}>
              <td>
                {row.validTime.split('T').join(' ').split(':00Z').join(' ')}
              </td>
              <td>{row.parameters?.[0]?.values?.[0]}</td>
              <td>{row.parameters?.[0]?.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && (
        <p className='alert alert-warning'>
          Data only available for <strong>cities in Sweden</strong> !!!
        </p>
      )}
    </div>
  );
});

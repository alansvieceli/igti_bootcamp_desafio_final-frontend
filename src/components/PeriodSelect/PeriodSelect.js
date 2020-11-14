import React from 'react';

import { listPeriods } from '../../helpers/periods.js';

const PeriodSelect = ({ onChange, value }) => {
  const handleChange = event => {
    onChange(event.target.value);
    //setDateFilter();
  };

  return (
    <div>
      <select value={value} onChange={handleChange} style={styles.select}>
        {listPeriods.map(value => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const styles = {
  select: {
    display: 'block',
    width: 110,
  },
};

export default PeriodSelect;

import React from 'react';

import PeriodButton from '../PeriodButton';
import PeriodSelect from '../PeriodSelect';

import { getNext, getPrior } from '../../helpers/periods.js';

const Period = ({ dateFilter, onChangeFilter }) => {
  const handleClick = type => {
    const value = type === 1 ? getNext(dateFilter) : getPrior(dateFilter);
    onChangeFilter(value);
  };

  return (
    <div style={styles.wrapper}>
      <PeriodButton
        onClick={handleClick}
        type={-1}
        icon={'arrow_circle_down'}
      />
      <PeriodSelect onChange={onChangeFilter} value={dateFilter} />
      <PeriodButton onClick={handleClick} type={1} icon={'arrow_circle_up'} />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  },
};

export default Period;

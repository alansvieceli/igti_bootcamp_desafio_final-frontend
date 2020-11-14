import React from 'react';

const PeriodButton = ({ onClick, type, icon }) => {
  const handleClick = value => {
    onClick(value);
  };

  return (
    <div style={styles.box}>
      <button
        className="btn waves-effect waves-light"
        type="button"
        onClick={() => handleClick(type)}
      >
        <i className="material-icons center">{icon}</i>
      </button>
    </div>
  );
};

const styles = {
  box: {
    margin: '5px',
  },
};

export default PeriodButton;

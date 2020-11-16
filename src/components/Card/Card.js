import React from 'react';

import { formatInteger, formatNumber } from '../../helpers/values.js';

const Card = ({ day, category, description, value, type }) => {
  const brackgroundColor = type === '-' ? styles.despesa : styles.receita;
  return (
    <div style={{ ...styles.wrapper, ...brackgroundColor }}>
      <div style={{ ...styles.containerBase, ...styles.day }}>
        {formatInteger(day)}
      </div>
      <div style={{ ...styles.containerBase, ...styles.wrapperDesc }}>
        <div style={styles.category}>{category}</div>
        <div style={styles.description}>{description}</div>
      </div>
      <div style={styles.containerBase}>{formatNumber(value)}</div>
      <div style={styles.containerBase}>
        <i className="material-icons">edit</i>
        <i className="material-icons">delete</i>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid black',
    padding: '5px',
    marginTop: '10px',
  },
  wrapperDesc: {
    flex: 1,
  },
  containerBase: {
    padding: '5px',
    marging: '5px',
  },
  day: {
    fontWeight: 'bold',
  },
  category: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '0.8rem',
  },
  despesa: {
    backgroundColor: '#f0a1a8',
  },
  receita: {
    backgroundColor: '#a1f0dc',
  },
};

export default Card;

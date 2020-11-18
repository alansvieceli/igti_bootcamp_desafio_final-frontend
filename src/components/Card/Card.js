import React from 'react';

import Action from '../Action';
import { formatInteger, formatNumber } from '../../helpers/values.js';

const Card = ({ data, onDelete, onPersist }) => {
  const brackgroundColor = data.type === '-' ? styles.despesa : styles.receita;

  const handleActionClick = (id, type) => {
    if (type === 'delete') {
      onDelete(id);
      return;
    }
    onPersist(data);
  };

  return (
    <div style={{ ...styles.wrapper, ...brackgroundColor }}>
      <div style={{ ...styles.containerBase, ...styles.day }}>
        {formatInteger(data.day)}
      </div>
      <div style={{ ...styles.containerBase, ...styles.wrapperDesc }}>
        <div style={styles.category}>{data.category}</div>
        <div style={styles.description}>{data.description}</div>
      </div>
      <div style={styles.containerBase}>{formatNumber(data.value)}</div>
      <div style={styles.containerBase}>
        <Action type={'edit'} id={data._id} onActionClick={handleActionClick} />
        <Action
          type={'delete'}
          id={data._id}
          onActionClick={handleActionClick}
        />
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

import React from 'react';

import { formatNumber } from '../../helpers/values';

const Text = ({ label, value, format, color }) => {
  const valor = format ? formatNumber(value) : value;

  let cor;
  switch (color) {
    case 'verde':
      cor = styles.verde;
      break;
    case 'vermelho':
      cor = styles.vermelho;
      break;
    default:
      cor = styles.black;
      break;
  }

  return (
    <div style={styles.wrapper}>
      <span>{label}:</span>
      <span style={{ ...styles.value, ...cor }}>{valor}</span>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '2px',
    width: '25%',
  },
  value: {
    padding: '2px',
    fontWeight: 'bold',
  },
  verde: {
    color: '#3CB371',
  },
  vermelho: {
    color: 'red',
  },
  black: {
    color: 'black',
  },
};

export default Text;

import React from 'react';
import Text from '../Text';

const Resumo = ({ totLancamentos, receitas, despesas, saldo }) => {
  return (
    <div style={styles.wrapper}>
      <Text
        label={'Lançamentos'}
        value={totLancamentos}
        format={false}
        color={'preto'}
      />
      <Text label={'Receitas'} value={receitas} format={true} color={'verde'} />
      <Text
        label={'Despesas'}
        value={despesas}
        format={true}
        color={'vermelho'}
      />
      <Text label={'Saldo'} value={saldo} format={true} color={'verde'} />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '2px',
  },
};

export default Resumo;

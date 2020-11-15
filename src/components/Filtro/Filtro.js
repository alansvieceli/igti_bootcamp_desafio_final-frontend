import React from 'react';

const Filtro = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.botao}>
        <a className="waves-effect waves-light btn">
          <i className="material-icons left">add</i>NOVO LANÇAMENTO
        </a>
      </div>
      <div style={styles.edit}>
        <input placeholder="Filtro" />
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
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  botao: {
    width: '24%',
  },
  edit: {
    width: '76%',
  },
};

export default Filtro;

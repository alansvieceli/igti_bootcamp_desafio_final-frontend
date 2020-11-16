import React from 'react';

const Filtro = ({ filter, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.botao}>
        <a className="waves-effect waves-light btn">
          <i className="material-icons left">add</i>NOVO LANÇAMENTO
        </a>
      </div>
      <div style={styles.edit}>
        <input
          placeholder="Filtro"
          type="text"
          value={filter}
          onChange={handleChange}
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
    paddingTop: '10px',
  },
  botao: {
    width: '24%',
  },
  edit: {
    width: '76%',
  },
};

export default Filtro;

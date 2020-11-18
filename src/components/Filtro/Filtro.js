import React from 'react';

const Filtro = ({ filter, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  const handleClick = () => {
    console.log('NOVO LANÇAMENTO');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.botao}>
        <button className="waves-light btn" onClick={handleClick}>
          <i className="material-icons left">add</i>NOVO LANÇAMENTO
        </button>
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
    width: '220px',
  },
  edit: {
    flex: '1',
  },
};

export default Filtro;

import React from 'react';

import Modal from 'react-modal';

Modal.setAppElement('#root');

const Cadastro = ({ data, onClose }) => {
  const handleModalClose = () => {
    onClose(null);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    /*
    const formData = {
      id,
      newValue: gradeValue,
    };
    */

    //onSave(formData);
  };

  return (
    <div>
      <Modal isOpen={true} style={styles}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Edição de lançamentos</span>
          <button
            className="waves-effect waves-lights btn red dark-4"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>

        <div style={styles.wrapper}>
          <form className="col s12" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <p>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      id="inputReceita"
                      checked={data.type === '+' && true}
                    />
                    <span>Receita</span>
                  </label>
                </p>
              </div>
              <div className="input-field col s6">
                <p>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      id="inputDespesa"
                      checked={data.type === '-' && true}
                    />
                    <span>Despesa</span>
                  </label>
                </p>
              </div>
              <div className="input-field col s12">
                <input
                  id="inputDescricao"
                  type="text"
                  value={data.description}
                />
                <label className="active" htmlFor="inputDescricao">
                  Descrição:
                </label>
              </div>
              <div className="input-field col s12">
                <input id="inputCategoria" type="text" value={data.category} />
                <label className="active" htmlFor="inputCategoria">
                  Categoria:
                </label>
              </div>
              <div className="input-field col s6">
                <input id="inputValor" type="number" value={data.value} />
                <label className="active" htmlFor="inputValor">
                  Valor:
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="inputValor"
                  type="date"
                  className="datepicker"
                  value={data.yearMonthDay}
                />
                <label className="active" htmlFor="inputValor">
                  Data:
                </label>
              </div>
            </div>
          </form>
        </div>
        <div style={styles.bottom}>
          <button
            className="waves-effect waves-light btn"
            //disabled={errorMessage.trim() !== ''}
          >
            Salvar
          </button>
          <span style={styles.errorMessage}>Erro</span>
        </div>
      </Modal>
    </div>
  );
};

const styles = {
  wrapper: {
    border: '1px solid lightgray',
    padding: '6px',
    boxShadow: '1px 1px #888888',
    marginBottom: '10px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },

  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },

  content: {
    position: 'absolute',
    top: '20%',
    left: '35%',
    right: '35%',
    bottom: '23%',
  },
};

export default Cadastro;

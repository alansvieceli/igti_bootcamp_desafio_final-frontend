import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Spinner from './components/Spinner';
import Resumo from './components/Resumo';
import Period from './components/Period';
import Filtro from './components/Filtro';
import Dados from './components/Dados';
import Cadastro from './components/Cadastro';

import * as api from './api/api.service.js';
import { getNow } from './helpers/dates.js';

const App = () => {
  const [dateFilter, setDateFilter] = useState(getNow());
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  const handleChangeDateFilter = value => {
    setDateFilter(value);
  };

  const handleChangeDescriotionFilter = value => {
    const newFilteredTransactions = allTransactions.filter(trans =>
      trans.descriptionLowerCase.includes(value.toLowerCase())
    );

    setDescriptionFilter(value);
    setFilteredTransactions(newFilteredTransactions);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = value => {
    console.log(value);
  };
  const handlePersist = value => {
    setSelectedTransaction(value);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const getTransaction = async () => {
      const data = await api.getTransaction(dateFilter);
      setTimeout(() => {
        setAllTransactions(data);
        setFilteredTransactions(data);
      }, 2000);
    };
    getTransaction();
  }, [dateFilter]);

  useEffect(() => {
    const rec = filteredTransactions
      .filter(trans => trans.type === '+')
      .reduce((acc, curr) => acc + curr.value, 0);

    const desp = filteredTransactions
      .filter(trans => trans.type === '-')
      .reduce((acc, curr) => acc + curr.value, 0);

    setReceitas(rec);
    setDespesas(desp);
  }, [filteredTransactions]);

  return (
    <div className="container">
      <Header />
      <h5 className="center">Controle Financeiro</h5>
      {allTransactions.length <= 0 && <Spinner description={'Aguarde'} />}
      {allTransactions.length > 0 && (
        <div>
          <Period
            dateFilter={dateFilter}
            onChangeFilter={handleChangeDateFilter}
          />
          <Resumo
            totLancamentos={allTransactions.length}
            receitas={receitas}
            despesas={despesas}
            saldo={receitas - despesas}
          />
          <Filtro
            filter={descriptionFilter}
            onChange={handleChangeDescriotionFilter}
          />
          <Dados
            data={filteredTransactions}
            onDelete={handleDelete}
            onPersist={handlePersist}
          />
        </div>
      )}
      {isModalOpen && (
        <Cadastro data={selectedTransaction} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default App;

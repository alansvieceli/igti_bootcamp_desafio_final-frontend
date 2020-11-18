import React from 'react';

import Card from '../Card';

const Dados = ({ data, onDelete, onPersist }) => {
  const handleDelete = value => {
    onDelete(value);
  };
  const handlePersist = value => {
    onPersist(value);
  };

  return (
    <div>
      {data.map(obj => {
        return (
          <Card
            key={obj._id}
            data={obj}
            onDelete={handleDelete}
            onPersist={handlePersist}
          />
        );
      })}
    </div>
  );
};

export default Dados;

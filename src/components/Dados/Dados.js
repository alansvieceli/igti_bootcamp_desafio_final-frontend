import React from 'react';

import Card from '../Card';

const Dados = ({ data }) => {
  return (
    <div>
      {data.map(obj => {
        return (
          <Card
            key={obj._id}
            day={obj.day}
            category={obj.category}
            description={obj.description}
            value={obj.value}
            type={obj.type}
          />
        );
      })}
    </div>
  );
};

export default Dados;

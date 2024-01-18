import React from 'react';
import "../styles/Lista.css";
function Lista  ({ lista, index, removeLista })  {
  return (
    <div>
      {lista}
      <button onClick={() => removeLista(index)}>X</button>
    </div>
  );
};

export default Lista;

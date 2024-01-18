import './App.css';
import React, { useState } from 'react';
import Lista from './components/Lista';

function App() {
  const [listas, setListas] = useState([]);
  const [input, setInput] = useState('');

  const addLista = () => {
    setListas([...listas, input]);
    setInput('');
  };

  const removeLista = (index) => {
    const newListas = [...listas];
    newListas.splice(index, 1);
    setListas(newListas);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addLista}>Add</button>
      {listas.map((lista, index) => (
        <Lista key={index} index={index} lista={lista} removeLista={removeLista} />
      ))}
    </div>
  );
}

export default App;

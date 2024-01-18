import React from 'react';

function BotonTemporizador ({ startTimer, stopTimer, resetTimer })  {
  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default BotonTemporizador;

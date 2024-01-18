import React from 'react';

function Temporizador({ temporizador }) {
  return (
    <div>
      <span>{Math.trunc(temporizador / 60)} mins </span>
      <span>{temporizador % 60} secs</span>
    </div>
  );
}

export default Temporizador;

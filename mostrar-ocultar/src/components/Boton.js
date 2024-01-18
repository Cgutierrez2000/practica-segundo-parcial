import React from 'react';

const Boton = ({ show, setShow }) => {
  return (
    <button onClick={() => setShow(!show)}> Show / Hide</button>
  );
};

export default Boton;
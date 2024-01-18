import React from 'react';

function InputForm ({ setValuer }) {
  return (
    <form>
      <label htmlFor="html">Input Percentage:</label>
      <input type="number" onChange={setValuer} />
    </form>
  );
};

export default InputForm;

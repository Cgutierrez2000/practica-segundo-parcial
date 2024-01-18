import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import InputForm from './components/InputForm';

export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <InputForm setValuer={setValuer} />
      </div>
    </>
  );
}

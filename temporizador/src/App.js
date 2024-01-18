import { useState } from "react";
import Temporizador from "./components/Temporizador";
import BotonTemporizador from './components/BotonTemporizador';
import "./App.css";
import "./styles/BotonTem.css";


function App() {
  const [temporizador, setTemporizador] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTemporizador((temporizador) => temporizador + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTemporizador(0);
  };

  return (
    <div className="container-boton">
      <h1>Timer</h1>
      <Temporizador temporizador={temporizador} />
      <BotonTemporizador startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
    </div>
  );
}
export default App;

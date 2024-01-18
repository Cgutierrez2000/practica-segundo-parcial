
import { useState } from "react";
import Boton from "./components/Boton";
import "./styles/Boton.css";
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container-boton">
      <Boton show={show} setShow={setShow} />
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}

export default App;
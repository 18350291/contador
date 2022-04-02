import {useState} from "react";

function App() {

  const [cuenta, setcuenta] = useState(0)

  const handleClickSuma = () => {
    setcuenta(cuenta+1);
  }

  const handleClickResta = () => {
    setcuenta(cuenta-1);
  }

  const handleClickBorra = () => {
    setcuenta(cuenta-cuenta);
  }

  return (
    <div className="App">
      <h3>Contador</h3>
      <hr/>
        <h2 className="text-center">{cuenta}</h2>
      <hr/>

      <div 
        style={{ 
          display: "flex", 
          justifyContent: "center", 

        }}>
        <button type="button" className="btn btn-primary" onClick={handleClickSuma}>+1</button>
        <button type="button" className="btn btn-primary" onClick={handleClickResta}>-1</button>
        <button type="button" className="btn btn-primary" onClick={handleClickBorra}>Borrar</button>

      </div>

      

    </div>
  );
}

export default App;

import {useState} from "react";

function App() {

  const [cuenta, setcuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClickSuma = () => {
    setcuenta(cuenta+paso);
  }

  const handleClickResta = () => {
    setcuenta(cuenta-paso);
  }

  const handleClickReinicia = () => {
    setcuenta(cuenta-cuenta);
    setPaso(1);
  }

  const handleInputChange = (e) => {
    if(isNaN(e.target.value)){
      return;
    }
      setPaso(Number(e.target.value));

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
          justifyContent: "flex-end", 
          marginRight:"15px"

        }}>

        <label>
          Paso
          <input 
            id="Paso"
            name="Paso"
            type="text" 
            value={paso}
            onChange={handleInputChange}
            style={{
              marginLeft:"15px",
              width: "60px"
            }}
          />
        </label>

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleClickReinicia}
          style={{marginLeft:"15px"}}
        >
          Reiniciar
        </button>

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleClickSuma}
          style={{marginLeft:"15px"}}
        >
          +1
        </button>

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleClickResta}
          style={{marginLeft:"15px"}}
        >
          -1
        </button>



      </div>

      

    </div>
  );
}

export default App;

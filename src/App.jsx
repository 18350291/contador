import {useState} from "react";

function App() {

  const [cuenta, setcuenta] = useState(0)

  const handleClick = () => {
    setcuenta(cuenta+1);
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
          marginRight: "25px"
        }}>
        <button type="button" className="btn btn-primary" onClick={handleClick}>+1</button>

      </div>

    </div>
  );
}

export default App;


import './App.css';
import { useState } from 'react';

function App() {

const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [edad, setEdad] = useState(0);
const [email, setEmail] = useState('');


const mostrarDatos = () => {
  alert(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
};
  return (
    <div className="App">
     <div className="datos">
     <label > Nombre:</label>
      <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label >Apellido:</label>
      <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <br />
      <label  >Edad:</label>
      <input type="number" id="edad" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <br />
      <label >Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={mostrarDatos}>Registrarse</button>
     </div>
    </div>

  );
}

export default App;

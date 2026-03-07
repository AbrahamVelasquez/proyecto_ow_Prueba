import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import { useState } from 'react'

function App() {

  // let number = 0;
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");

  let myPlaceholder = "Escribe aquí";

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number)
  }

  const sayHello = () => {
    console.log('Hello');
  }

  const handleChange = (e) => {
    setMyValue(e.target.value) // Esta línea arregla que se escriba en el input
    console.log(e.target.value)
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      
      <main className="main-content">
        <h2 onClick={sayHello}>Hola mundo</h2>

        <h2 onClick={addOne}>Number: {number}</h2>

        <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange} />

        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App

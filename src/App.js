import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import Spinner from './components/Spinner/Spinner';
import Carrusel from './components/Carrusel/Carrusel';
import productos from "./productos.json"
import { useState, useEffect } from 'react';
// import Productos from './components/Productos/Productos';
function App() {

  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {

    const operacion = new Promise ((resolve, reject) => {

      setTimeout (() =>  {
      
        resolve({
          status : 200,
          data : productos.productos
        })

      },2000)

    })  
  
    operacion.then((resultado) => {
      setProductos(resultado.data)
      console.log(resultado)
    }, err => {
      console.log(err + "Error")
    }).catch((err) => {
      console.log(err)
    })
  }
 
  useEffect (() => {
    pedirProductos()
    return () => {
      setProductos([])
    }
  }, [])

  return (

    <div className="App"> 
    <NavBar/>
    {/* <Productos></Productos> */}
    {/* <Counter nombre= "Componente 1"></Counter>
    <Counter nombre= "Componente 2"></Counter>
    <Counter nombre= "Componente 3"></Counter> */}
    {/* <Carrusel imagenes={imagenesCarrusel}/> */}
    {/* <Spinner></Spinner> */}
    </div>
  );
}

export default App;

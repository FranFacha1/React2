import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import Spinner from './components/Spinner/Spinner';
import productos from "./productos.json"
import { useState, useEffect } from 'react';
import Api from './components/Api';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error404 from './components/404Error/Error404';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import Item from './components/Item/Item';

// import Productos from './components/Productos/Productos';
function App() {

  // const [productos, setProductos] = useState([]);

  // const pedirProductos = () => {

  //   const operacion = new Promise ((resolve, reject) => {

  //     setTimeout (() =>  {
      
  //       resolve({
  //         status : 200,
  //         data : productos.productos
  //       })

  //     },2000)

  //   })  
  
  //   operacion.then((resultado) => {
  //     setProductos(resultado.data)
  //     console.log(resultado)
  //   }, err => {
  //     console.log(err + "Error")
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
 
  // useEffect (() => {
  //   pedirProductos()
  //   return () => {
  //     setProductos([])
  //   }
  // }, [])

  return (

    <Router className="App"> 
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
      <Route path='/item/detail/:id' element={<ItemDetail></ItemDetail>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>

    </Router>
  );
}

export default App;

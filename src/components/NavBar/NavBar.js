import React from 'react'
import "./NavBar.css"
import Carrito from './Carrito/Carrito'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYevRbSPlkzBNcoaOcGeKnvY6nhYCQGZY0PA&usqp=CAU"
    return (
    <div className= "div-main">

        <div className="div-buttons">

            <div className='container-navbar'>
                
                <div>
                    <img className="img" src={src}></img>
                </div>

                <div className='buttons' >
                    <NavLink to="/" className='button'>Incio</NavLink>
                    <NavLink to="/cart"className='button'>Carrito</NavLink>     
                </div>

                <Carrito></Carrito>

            </div>


        </div>


    </div>
  )
}

export default NavBar


// rface crea la funcion del componente

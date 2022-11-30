import React, {useState,useEffect} from 'react'

const Counter = (props) => {

    const {nombre} = props


    // UseState

    const [contador, setContador] = useState(0)
    
    // console.log(contador)

    const sumar = () => {
        setContador (contador + 1)
    }

    const restar = () => {

        if(contador > 0) {
            setContador(contador - 1)
        }
    }

    // UseEffect

    useEffect (() => {
        
        // montar || cuando termina de cargar

        console.log("el componente esta listo");

        if (contador > 0) {
            console.log("contador es mayor")
        } else {
            console.log("contador es menor")
        }

        return () => {
            
            // desmontar o cuando muere

            console.log("el componente murio")
        }
    }, [
        contador
        // Cuando hay algun cambio || mostrar cambios
        
    ])


  return (
    <div>
        <h1>{nombre}</h1>
        <h2>El valor del contador es : {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
    </div>
  )
}

export default Counter
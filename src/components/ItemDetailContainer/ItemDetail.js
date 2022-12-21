import React from 'react'
import { useParams } from 'react-router-dom'
import items from "../../productos.json"

const ItemDetail = () => {

  let itemParam = useParams()

  let itemConsulta = items.find((item) => item.id === itemParam.id);


  return (
    <>
      <h1>Se encontro el auto {itemConsulta.descripcion}</h1>
    </>
  )
}

export default ItemDetail
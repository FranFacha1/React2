import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {

  const {id} = useParams()

  return (
    <h1>Se cargo el componente con id {id}</h1>
  )
}

export default ItemDetail
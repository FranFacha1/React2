import React from 'react'
import Item from '../Item/Item'
import items from "../../productos.json"
const ItemListContainer = () => {


  return (
    <>
      {
        items.map((item) => (
          <Item key={items.id} id={item.id} name={item.name} img={item.img}></Item>
        ))
      }
    </>
  )
}

export default ItemListContainer
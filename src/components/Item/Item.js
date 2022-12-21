import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const {name, id, img} = props

  return (
    <Link className='link_' to={`/item/detail/${id}`}>
        <div>
        
            <h1>{name}</h1>
            <img src={img}></img>

        </div>
    </Link>
  )
}

export default Item
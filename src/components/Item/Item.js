import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const {name, id} = props

  return (
    <Link className='link_' to={`/item/detail/${id}`}>
        <div>
        
            <h1>{name}</h1>
            <h4>{id}</h4>

        </div>
    </Link>
  )
}

export default Item
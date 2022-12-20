import React, { useState, useEffect } from 'react'
import axios from "axios"
const Api = () => {
    const [img, setImg] = useState("");
    const [search, setSearch] = useState("")

    const getData = async (pokeName) => {
        
        try {
            const {data:{sprites:{other}}} = await axios.get(`https://pokeapi.co/api/v2/pokemon/ ${pokeName} || pikachu`);
            
            const img = other ["official-artwork"] ["front_default"]

            // const img = data.sprites.other["official-artwork"].["front_default"]

            setImg(img)
            
        } catch (error) {
            console.log(error)
        }
      }


    useEffect(() => {

      getData()
    
      return () => {
        setImg("")
      }
    }, [])
    

  return (
    <div>
        {img ? <img src={img} alt="poke-image"></img> : <h1>Cargando...</h1>}
        <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id=""></input>
        <button onClick={() => getData(search)}>Buscar</button>
    </div>
  )
}

export default Api
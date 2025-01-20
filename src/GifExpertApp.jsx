import React, { useState } from 'react'
import {AddCategory} from "./componentes/AddCategory";
export const GifExpertApp = () => {

  const [categories, setCategorie] = useState(['One push', 'Dragon Ball',])
  
  const onAddCategory = () => {
    setCategorie([...categories,'Valorant'])
  }

  return(
    <>
    {/* Titulo */}
    <h1>Gif</h1>
    {/* Input */}
    <AddCategory/>
    {/* Listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {
        categories.map(category =>{
          return <li key ={category}>{category}</li>/*tiene que ser unico para qu ayude al Dom para renderizar */
        })
      }
    </ol>
      {/* gIF item */}

    </>
  )
}

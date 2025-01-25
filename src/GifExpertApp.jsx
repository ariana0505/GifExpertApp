import React, { useState } from 'react'
import {AddCategory} from "./componentes/AddCategory";
export const GifExpertApp = () => {

  const [categories, setCategorie] = useState(['One push', 'Dragon Ball',])
  
  const onAddCategory = (onNewCategory) => {
    setCategorie([onNewCategory,...categories])
  } 

  return(
    <>
    {/* Titulo */}
    <h1>Gif</h1>
    {/* Input */}
    <AddCategory 
      onNewCategory ={ (value) => onAddCategory(value)}
    />
    {/* Listado de Gif */}
  
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

import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory'

export const GifExpertApp = () => {

  const [categoria, setCategoria] = useState(['One push', 'Dragon Ball',])
  
  const onAddCategory = () => {
    setCategoria(['Valorant',...categoria])
  }

  return(
    <>
    {/* Titulo */}
    <h1>Gif</h1>
    {/* Input */}
    
    {/* Listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {
        categoria.map(category =>{
          return <li key ={category}>{category}</li>/*tiene que ser unico para qu ayude al Dom para renderizar */
        })
      }
    </ol>
      {/* gIF item */}

    </>
  )
}

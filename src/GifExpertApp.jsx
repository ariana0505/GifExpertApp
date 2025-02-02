import React, { useState } from 'react'
import {AddCategory} from "./componentes/AddCategory";
import { GifGrid } from './componentes/GifGrid';
export const GifExpertApp = () => {

  const [categories, setCategorie] = useState(['One push', 'Dragon Ball',])
  
  const onAddCategory = (onNewCategory) => {

    if(categories.includes(onNewCategory)) return;
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
        categories.map(category => <GifGrid
        category={category}
        key={category}
        />)
      }
    </ol>
      {/* gIF item */}

    </>
  )
}

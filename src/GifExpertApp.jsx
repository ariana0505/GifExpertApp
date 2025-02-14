import React, { useState } from 'react'
import {AddCategory} from "./component/AddCategory";
import { GifGrid } from './component/GifGrid';
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
    {/* el key es para que react sepa que elemento se esta modificando */}
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

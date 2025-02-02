import React from 'react'
import { getGif } from '../helpers/GetGifs'


export const GifGrid = ({category}) => {
    
    getGif(category)
  return (
    <>
    <h3>{category}</h3>
    <p>hola {category}</p>
    </>
  )
}

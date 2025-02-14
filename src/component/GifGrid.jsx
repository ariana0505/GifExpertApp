import React from 'react'

import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({category}) => {
  const {images, setLoading} = useFetchGifs(category)	
  
  return (
    <>
    <h3>{category}</h3>
    <div className='card-grid'>
          {
            images.map((images) =>
              <GifItem 
              // estoy esparciendo todas las propertis con el operador espred
              {...images}
              key={images.id}
              />
            )

          }
    </div>
    </>
  )
}

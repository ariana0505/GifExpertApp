import React, { useEffect } from 'react'
import { getGif } from '../helpers/GetGifs'
import { useState } from 'react'

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([])	

  const getImages = async() => {
    const newImages = await getGif(category)
    setImages(newImages)
  }
  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
    <h3>{category}</h3>
    <ol>
          {
            images.map(({url,id}) =>
              <img src={url} key={id}/>
            )

          }
        </ol>
    </>
  )
}

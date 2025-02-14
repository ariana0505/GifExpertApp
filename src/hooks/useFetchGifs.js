import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/GetGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState ([]);
  const [loading, setLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGif(category)
    setImages(newImages)
    setLoading(false)
  }
  useEffect(() => {
    getImages()
  }, [])

  return{
    images, /*images: images*/
    setLoading
  }
}

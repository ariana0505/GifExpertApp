import React from 'react'

const getGif = async(category) => {
    const url =`https://api.giphy.com/v1/stickers/search?api_key=896shWlW35idlm0bP8r004oes33ipLrD&q=${category}&limit=20`;
    const resp =await fetch(url);
    const {data } = await resp.json();
    
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
}

export const GifGrid = ({category}) => {
    
    getGif(category)
  return (
    <>
    <h3>{category}</h3>
    <p>hola {category}</p>
    </>
  )
}

import React from 'react'
import Card from './Card';

const ImageSlider = () => {


  const images = ["/Avatar.png", 
    "/portrait-defaut.jpg", 
    "/Avatar.png", 
    "/Avatar.png"];
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="absolute left-0 top-0 flex gap-4">
         <Card image={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
      ImageSlider</div>
  )
}

export default ImageSlider
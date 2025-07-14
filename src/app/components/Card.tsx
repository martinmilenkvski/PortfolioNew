import React from 'react'

type CardProps = {
  image: string;
  alt: string;
};

const Card = ({ image, alt }: CardProps) => {
  return (
    <div>
        Card Component
      <h2 className="text-lg font-bold">Card Title</h2>
      <p className="text-sm text-gray-600">Card Subtitle</p>
      
      <img src={image} alt={alt} className="w-full h-auto" />
    </div>
  )
}

export default Card;
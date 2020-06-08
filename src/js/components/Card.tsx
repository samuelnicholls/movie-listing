import React from 'react'

type CardProps = {
  id: number
  name: string
  image: string
  rating: string
  genre: string
}

const Card = ({ id, name, image, rating, genre }: CardProps) => {
  return (
    <li key={id} className='c-card'>
      <div className='c-card__wrapper'>
        <img alt={name} src={image} className='c-card__image' />
        <div className='c-card__circle'>
          <span className='c-card__rating'>{rating}</span>
        </div>
      </div>
      <p className='c-card__title'>{name}</p>
      <p className='c-card__genre'>{genre}</p>
    </li>
  )
}

export default Card

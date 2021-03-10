import React from 'react'

export interface CardProps {
  name: string
  rating: number
  image: string
}

const Card = ({ name, rating, image }: CardProps) => {
  return (
    <li className='c-card'>
      <div className='c-card__wrapper'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={name}
          className='c-card__image'
        />
        <div className='c-card__circle'>
          <span className='c-card__rating'>{rating}</span>
        </div>
      </div>
      <p className='c-card__title'>{name}</p>
    </li>
  )
}

export default Card

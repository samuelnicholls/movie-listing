import React from 'react'

export interface ButtonProps {
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ title, onClick}: ButtonProps) => {
  return (
    <button className='c-button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button

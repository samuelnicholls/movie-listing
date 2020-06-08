import React from 'react'

type ButtonProps = {
  title: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className='c-button' onClick={onClick} type='button'>
      {title}
    </button>
  )
}

export default Button

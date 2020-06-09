import React from 'react'

type ButtonProps = {
  title: string
  setVisible: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({ title, setVisible }: ButtonProps) => {
  const loadMore = () => {
    setVisible((prevState: number) => prevState + 5)
  }

  return (
    <button className='c-button' onClick={loadMore} type='button'>
      {title}
    </button>
  )
}

export default Button

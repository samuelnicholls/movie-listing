import React from 'react'

type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className='c-heading'>
      <h1 className='c-heading__text'>{title}</h1>
    </div>
  )
}

export default Heading

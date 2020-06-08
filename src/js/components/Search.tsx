import React from 'react'

type HeadingProps = {
  placeholder: string
  value: string
  onChange(event: React.FormEvent<HTMLInputElement>): void
}

const Search = ({ placeholder, value, onChange }: HeadingProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='c-input'
      value={value}
      onChange={onChange}
    />
  )
}

export default Search

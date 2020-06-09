import React from 'react'

type HeadingProps = {
  placeholder: string
  value: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ placeholder, value, setSearchTerm }: HeadingProps) => {
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  return (
    <input
      type='text'
      placeholder={placeholder}
      className='c-input'
      value={value}
      onChange={handleChange}
    />
  )
}

export default Search

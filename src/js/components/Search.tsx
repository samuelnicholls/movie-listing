import React from 'react'

export interface SearchProps {
  placeholder: string
  value: string
  setSearchTerm: (search: string) => void
}

const Search = ({ placeholder, value, setSearchTerm }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='search'>
      <label htmlFor='search'>Search Movie</label>
      <input
        id='search'
        type='text'
        placeholder={placeholder}
        className='c-input'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search

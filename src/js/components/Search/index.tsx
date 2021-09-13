import React from 'react'
import * as Styles from './styles'

type SearchProps = {
  placeholder: string
  value: string
  setSearchTerm: (search: string) => void
}

export default function Search({ placeholder, value, setSearchTerm }: SearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Styles.Search>
      <Styles.searchInput
        id='search'
        type='text'
        placeholder={placeholder}
        className='c-input'
        value={value}
        onChange={handleChange}
      />
    </Styles.Search>
  )
}

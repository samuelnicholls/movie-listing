import React, { useState } from 'react'
import data from '../../data.json'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Button from '../components/Button'
import Search from '../components/Search'

const App = (): JSX.Element => {
  const [movies] = useState(data.MovieList)
  const [visible, setVisible] = useState(5)
  const [searchTerm, setSearchTerm] = useState('')

  const results = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  )

  return (
    <div>
      <div className='o-wrapper'>
        <Heading title='Movie Listing' />
      </div>
      <div className='o-main'>
        <div className='o-row'>
          <Search
            placeholder='Search Movies...'
            value={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
      <ul className='l-grid'>
        {results.slice(0, visible).map((result) => (
          <Card
            id={result.id}
            name={result.name}
            image={result.image}
            rating={result.rating}
            genre={result.genre}
          />
        ))}
      </ul>
      <div className='o-row'>
        {visible < results.length && (
          <Button title='Load More' setVisible={setVisible} />
        )}
      </div>
    </div>
  )
}

export default App

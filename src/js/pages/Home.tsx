import React, { useState, useRef, useEffect } from 'react'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Button from '../components/Button'
import Search from '../components/Search'
import NoResults from '../components/NoResults'

export interface Movie {
  id: number
  original_title: string
  vote_average: number
  poster_path: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchPosts = useRef(() => {})

  fetchPosts.current = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=c1bdb094fe63d4afc855acb4db0e462e&language=en-EN&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, ...data.results]) 
        setPage(page + 1)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const fetchNewPosts = () => {
    fetchPosts.current()
  }

  const results = movies.filter((movie: Movie) =>
    movie.original_title.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  )

  useEffect(() => {
    fetchPosts.current()
  }, [])

  return (
    <>
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
        {results.map((result: Movie) => (
          <Card
            key={result.id}
            name={result.original_title}
            rating={result.vote_average}
            image={result.poster_path}
          />
        ))}
      </ul>
      {results.length <= 0 && <NoResults />}
      {results.length > 19 && (
        <div className='o-row'>
          <Button onClick={fetchNewPosts} title='Load More' />
        </div>
      )}
    </>
  )
}

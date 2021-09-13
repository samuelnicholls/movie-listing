import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Listing from './components/Listing'

export default function App() {
  const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }
  `
  return (
    <>
      <GlobalStyles />
      <Listing/>
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </>
  )
}

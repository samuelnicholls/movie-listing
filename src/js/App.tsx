import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Home from './pages/Home'

export default function App() {
  const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }
  `
  
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <GlobalStyle />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </HashRouter>
  )
}

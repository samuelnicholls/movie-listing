import styled from 'styled-components'
import { mediaQueries } from '../../base/breakpoints'
import { BLACK, WHITE } from '../../base/colours'

export const Heading = styled.div`
  background-color: ${BLACK};
  text-align: center;
  padding: 10px;
  ${mediaQueries('ts')`
    padding: 40px;
  `}
`

export const headingText = styled.h1`
  color: ${WHITE};
  font-size: 30px;
  margin: 0;
  ${mediaQueries('ts')`
  font-size: 40px;
  `}
`

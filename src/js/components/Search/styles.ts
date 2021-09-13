import styled from 'styled-components'
import { mediaQueries } from '../../base/breakpoints'
import { BLACK } from '../../base/colours'

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${mediaQueries('ts')`
    padding: 40px;
  `}
`

export const searchInput = styled.input`
  width: 100%;
  max-width: 960px;
  padding: 10px;
  border: 1px solid ${BLACK};
  ${mediaQueries('ts')`
    padding: 20px;
  `}
`

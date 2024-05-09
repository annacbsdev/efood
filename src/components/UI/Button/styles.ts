import styled from 'styled-components'
import { cores } from '../../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.rosa};
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  text-decoration: none;
`

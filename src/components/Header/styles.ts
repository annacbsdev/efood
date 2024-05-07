import styled from 'styled-components'
import fundo from '../../assets/fundo.jpg'
import { cores } from '../../styles'

export const HeaderStyles = styled.header`
  height: 160px;
  display: flex;
  align-items: center;
  background-image: url(${fundo});
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 56px;
  }

  h2 {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: ${cores.rosa};
  }
`

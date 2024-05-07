import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductCardStyles = styled.div`
  width: 320px;
  height: 340px;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
  }

  h1 {
    font-size: 16px;
  }

  p,
  button {
    font-size: 14px;
  }

  p {
    line-height: 22px;
  }

  button {
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
  }
`

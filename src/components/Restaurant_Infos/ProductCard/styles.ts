import styled from 'styled-components'
import { colors } from '../../../styles'

export const ProductCardStyles = styled.div`
  width: 320px;
  height: 340px;
  background-color: ${colors.pink};
  color: ${colors.beige};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  h2 {
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
    background-color: ${colors.beige};
    color: ${colors.pink};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
  }
`

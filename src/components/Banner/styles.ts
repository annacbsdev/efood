import styled from 'styled-components'
import fundo from '../../assets/fundo.jpg'

export const BannerContainer = styled.div`
  background-image: url(${fundo});
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  justify-content: space-between;

  img {
    height: 56px;
  }
  h1 {
    font-weight: 900;
    font-size: 36px;
    text-align: center;
  }
`

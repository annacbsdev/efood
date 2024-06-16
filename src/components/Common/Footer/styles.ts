import styled from 'styled-components'
import { colors } from '../../../styles'

export const FooterStyles = styled.footer`
  height: 300px;
  background-color: ${colors.footer};
  padding: 40px;
  text-align: center;
  img {
    margin-bottom: 32px;
  }
  p {
    margin-top: 80px;
    font-size: 10px;
  }
  .icone {
    color: ${colors.footer};
    background-color: ${colors.pink};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 4px;
    margin-left: 4px;
    cursor: pointer;
  }
`

import styled from 'styled-components'
import { cores } from '../../../styles'

export const FooterStyles = styled.footer`
  height: 300px;
  background-color: ${cores.footer};
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
    color: ${cores.footer};
    background-color: ${cores.rosa};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 4px;
    margin-left: 4px;
    cursor: pointer;
  }
`

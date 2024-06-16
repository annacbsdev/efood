import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  beige: '#FFEBD9',
  footer: '#FFEBD9'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: #FFF8F2;
    color: ${colors.pink};
  }

  .container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`

export default GlobalCss

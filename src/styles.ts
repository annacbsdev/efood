import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  bege: '#FFF8F2',
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
    background-color: ${cores.bege};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`

export default GlobalCss

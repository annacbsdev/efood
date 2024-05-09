import { BrowserRouter } from 'react-router-dom'

import GlobalCss from './styles'
import Rotas from './routes'
import Footer from './components/Common/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

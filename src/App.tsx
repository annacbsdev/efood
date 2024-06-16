import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

import GlobalCss from './styles'
import RoutesEfood from './routes'
import Footer from './components/Common/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesEfood />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

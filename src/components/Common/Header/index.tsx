import { HeaderContent, HeaderStyles } from './styles'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <HeaderContent>
          <Link to="/">
            <h2>Restaurantes</h2>
          </Link>
          <img src={logo} alt="Logo Efood" />
          <h2>0 produto(s) no carrinho</h2>
        </HeaderContent>
      </div>
    </HeaderStyles>
  )
}

export default Header

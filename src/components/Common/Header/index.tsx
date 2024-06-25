import { HeaderContent, HeaderStyles } from './styles'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { open } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { IoCaretBack } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderStyles>
      <div className="container">
        <HeaderContent>
          <Link to="/">
            <h2>Restaurantes</h2>
            <span>
              <IoCaretBack />
            </span>
          </Link>
          <img src={logo} alt="Logo Efood" />
          <h2 onClick={openCart}>{items.length} produto(s) no carrinho</h2>
          <span onClick={openCart}>
            <FaShoppingCart />
          </span>
        </HeaderContent>
      </div>
    </HeaderStyles>
  )
}

export default Header

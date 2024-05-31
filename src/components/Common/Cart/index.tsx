import { CartContainer, CartItem, Overlay, Sidebar } from './styles'
import lixo from '../../../assets/lixo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../../Restaurant_Infos/RestaurantMenu'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>
                <img src={lixo} />
              </button>
            </CartItem>
          ))}
        </ul>
        <div className="valor_total">
          <p>Valor Total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </div>
        <button>Continuar com a compra</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

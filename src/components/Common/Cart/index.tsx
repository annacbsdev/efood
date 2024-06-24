import React, { useState } from 'react'
import {
  CartButton,
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  StyledForm
} from './styles'
import lixo from '../../../assets/lixo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../../Restaurant_Infos/RestaurantMenu'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'
import InputMask from 'react-input-mask'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [isCheckoutAddress, setIsCheckoutAddress] = useState(false)
  const [isCheckoutPayment, setIsCheckoutPayment] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      //address
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      //payment
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      // Address
      receiver: Yup.string().min(5).required('O campo é obrigatório'),
      address: Yup.string().min(3).required('O campo é obrigatório'),
      city: Yup.string().min(3).required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),

      // Payment
      cardDisplayName: Yup.string().min(3),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: parseInt(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: parseInt(values.cardCode),
            expires: {
              month: parseInt(values.expiresMonth),
              year: parseInt(values.expiresYear)
            }
          }
        }
      })
      console.log(data)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

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

  const handleCheckoutAddress = () => {
    setIsCheckoutAddress(true)
  }

  const handleCheckoutPayment = () => {
    setIsCheckoutAddress(false)
    setIsCheckoutPayment(true)
  }

  const handleGoBackToAddress = () => {
    setIsCheckoutAddress(true)
    setIsCheckoutPayment(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {isSuccess && data ? (
            <StyledForm>
              <div>
                <h2>Pedido realizado - {data?.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras. <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
              </div>
              <CartButton onClick={closeCart}>Concluir</CartButton>
            </StyledForm>
          ) : !isCheckoutAddress && !isCheckoutPayment ? (
            <>
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
              <CartButton type="button" onClick={handleCheckoutAddress}>
                Continuar com a compra
              </CartButton>
            </>
          ) : isCheckoutAddress && !isCheckoutPayment ? (
            <StyledForm>
              <h2>Entrega</h2>
              <div>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
                <div className="smallField">
                  <div>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </div>
                </div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <CartButton type="button" onClick={handleCheckoutPayment}>
                Continuar com o pagamento
              </CartButton>

              <CartButton
                type="button"
                onClick={() => setIsCheckoutAddress(false)}
              >
                Voltar para o carrinho
              </CartButton>
            </StyledForm>
          ) : (
            <StyledForm>
              <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
              <div>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  id="cardDisplayName"
                  type="text"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
                <div className="numberAndCode">
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </div>
                </div>
                <div className="smallField">
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </div>
                </div>
              </div>
              <CartButton type="submit" onSubmit={() => console.log(data)}>
                Finalizar pagamento
              </CartButton>

              <CartButton type="button" onClick={handleGoBackToAddress}>
                Voltar para a edição do endereço
              </CartButton>
            </StyledForm>
          )}
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

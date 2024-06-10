import React, { useState } from 'react'
import {
  CartContainer,
  CartItem,
  CompletedText,
  Form,
  Overlay,
  Sidebar
} from './styles'
import lixo from '../../../assets/lixo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../../Restaurant_Infos/RestaurantMenu'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [isCheckoutAddress, setIsCheckoutAddress] = useState(false)
  const [isCheckoutPayment, setIsCheckoutPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      //address
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: '',
      //payment
      cardDisplayName: '',
      cardNumber: '',
      cardCode: 0,
      expiresMonth: 0,
      expiresYear: 0
    },
    validationSchema: Yup.object({
      // Address
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'O CEP precisa estar no formato 12345-678')
        .required('O campo é obrigatório'),
      number: Yup.number()
        .min(1, 'O número precisa ser maior que zero')
        .required('O campo é obrigatório'),
      complement: Yup.string(),

      // Payment
      cardDisplayName: Yup.string()
        .min(5, 'O nome no cartão precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'O número do cartão precisa ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .matches(
          /^\d{3,4}$/,
          'O código de segurança precisa ter 3 ou 4 dígitos'
        )
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'O mês de expiração precisa ser entre 01 e 12'
        )
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'O ano de expiração precisa ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
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
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
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
        {isSuccess && data ? (
          <>
            <CompletedText>
              <h2>Pedido realizado - ORDER_ID</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </CompletedText>
            <button onClick={closeCart}>Concluir</button>
          </>
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
            <button onClick={handleCheckoutAddress}>
              Continuar com a compra
            </button>
          </>
        ) : isCheckoutAddress && !isCheckoutPayment ? (
          <>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit
                handleCheckoutPayment()
              }}
            >
              <h2>Entrega</h2>
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
              <div>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="number"
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
              <button type="submit">Continuar com o pagamento</button>
            </Form>
            <button onClick={() => setIsCheckoutAddress(false)}>
              Voltar para o carrinho
            </button>
          </>
        ) : !isCheckoutAddress && isCheckoutPayment ? (
          <>
            <Form
              onSubmit={(e) => {
                e.preventDefault
                form.handleSubmit
              }}
            >
              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                id="cardDisplayName"
                type="text"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              />
              <div>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    id="cardCode"
                    type="number"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    id="expiresMonth"
                    type="number"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    id="expiresYear"
                    type="number"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                </div>
              </div>
              <button type="submit">Finalizar pagamento</button>
            </Form>
            <button onClick={handleGoBackToAddress}>
              Voltar para a edição do endereço
            </button>
          </>
        ) : (
          <h1> oi</h1>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

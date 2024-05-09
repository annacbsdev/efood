import ProductCard from '../ProductCard'
import { Modal, ModalContent, RestaurantMenuStyles, Text } from './styles'
import { Prato } from '../RestaurantList'
import { useState } from 'react'
import fechar from '../../../assets/close.png'

type Props = {
  products: Prato[]
}

interface ModalState extends Prato {
  isVisible: boolean
}

const RestaurantMenu = ({ products }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    } else {
      return descricao
    }
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      id: 0,
      nome: '',
      porcao: '',
      preco: 0
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <div className="container">
      <RestaurantMenuStyles>
        {products.map((product) => {
          return (
            <li
              onClick={() => {
                setModal({
                  isVisible: true,
                  descricao: product.descricao,
                  foto: product.foto,
                  id: product.id,
                  nome: product.nome,
                  porcao: product.porcao,
                  preco: product.preco
                })
              }}
              key={product.id}
            >
              <ProductCard
                title={product.nome}
                description={getDescricao(product.descricao)}
                image={product.foto}
              />
            </li>
          )
        })}
        <Modal className={modal.isVisible ? 'visible' : ''}>
          <ModalContent className="container">
            <img src={modal.foto} />
            <div>
              <Text>
                <h2>{modal.nome}</h2>
                <p>{modal.descricao}</p>
                <p>Serve: {modal.porcao}</p>
                <div>
                  <button>
                    Adicionar ao carrinho - {formataPreco(modal.preco)}
                  </button>
                </div>
              </Text>
            </div>
            <img
              className="fechar"
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </ModalContent>
          <div
            onClick={() => {
              closeModal()
            }}
            className="overlay"
          ></div>
        </Modal>
      </RestaurantMenuStyles>
    </div>
  )
}

export default RestaurantMenu

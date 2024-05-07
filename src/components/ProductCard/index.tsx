import { ProductCardStyles } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => {
  return (
    <ProductCardStyles>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Adicionar ao carrinho</button>
    </ProductCardStyles>
  )
}

export default ProductCard

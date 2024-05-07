import Button from '../Button'
import { CardContainer, CategoryList, Content, Title } from './styles'
import estrela from '../../assets/estrela.png'

type Props = {
  title: string
  category: string[]
  description: string
  rating: number
  image: string
  restaurantPage: string
}

const Card = ({
  category,
  description,
  image,
  rating,
  title,
  restaurantPage
}: Props) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <Content>
        <CategoryList>
          {category.map((category: string) => (
            <Button type="button" title={category} key={category}>
              {category}
            </Button>
          ))}
        </CategoryList>
        <Title>
          <h1>{title}</h1>
          <span>
            {rating} <img src={estrela} />
          </span>
        </Title>
        <p>{description}</p>
        <div>
          <Button type="link" to={restaurantPage} title="Saiba mais">
            Saiba mais
          </Button>
        </div>
      </Content>
    </CardContainer>
  )
}

export default Card

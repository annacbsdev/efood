import Button from '../../UI/Button'
import { CardContainer, CategoryList, Content, Title } from './styles'
import estrela from '../../../assets/estrela.png'

type Props = {
  title: string
  category: string[]
  description: string
  rating: number
  image: string
  id: number
}

const Card = ({ category, description, image, rating, title, id }: Props) => {
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
          <Button type="link" to={`/restaurant/${id}`} title="Saiba mais">
            Saiba mais
          </Button>
        </div>
      </Content>
    </CardContainer>
  )
}

export default Card

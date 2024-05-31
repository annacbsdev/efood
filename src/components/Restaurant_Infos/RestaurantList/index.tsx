import Card from '../RestaurantCard'
import { RestaurantListStyles } from './styles'
import { useGetRestaurantsQuery } from '../../../services/api'

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <RestaurantListStyles>
        {restaurants.map((restaurant) => (
          <Card
            title={restaurant.titulo}
            category={[restaurant.tipo]}
            description={restaurant.descricao}
            image={restaurant.capa}
            rating={restaurant.avaliacao}
            id={restaurant.id}
            key={restaurant.id}
          />
        ))}
      </RestaurantListStyles>
    </div>
  )
}

export default RestaurantList

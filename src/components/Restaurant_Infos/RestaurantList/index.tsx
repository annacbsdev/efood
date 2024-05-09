import Card from '../RestaurantCard'
import { RestaurantListStyles } from './styles'
import { useEffect, useState } from 'react'

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
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados dos restaurantes')
        }
        const data = await response.json()
        setRestaurants(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestaurants()
  }, [])

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

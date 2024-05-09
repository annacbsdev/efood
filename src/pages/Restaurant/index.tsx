import { useEffect, useState } from 'react'
import Header from '../../components/Common/Header'
import RestaurantBanner from '../../components/Restaurant_Infos/RestaurantBanner'
import RestaurantMenu from '../../components/Restaurant_Infos/RestaurantMenu'
import { Restaurante } from '../../components/Restaurant_Infos/RestaurantList'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Restaurante>()

  const { id } = useParams()

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados dos restaurantes')
        }
        const data = await response.json()
        setRestaurant(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestaurants()
  }, [])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const cardapio = restaurant.cardapio

  return (
    <>
      <Header />
      <RestaurantBanner
        category={restaurant?.tipo}
        image={restaurant?.capa}
        title={restaurant?.titulo}
      />
      <RestaurantMenu products={cardapio} />
    </>
  )
}
export default Restaurant

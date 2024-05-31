import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import Header from '../../components/Common/Header'
import RestaurantBanner from '../../components/Restaurant_Infos/RestaurantBanner'
import RestaurantMenu from '../../components/Restaurant_Infos/RestaurantMenu'
import Cart from '../../components/Common/Cart'

const Restaurant = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const cardapio = restaurant.cardapio

  return (
    <>
      <Header />
      <RestaurantBanner
        category={restaurant.tipo}
        image={restaurant.capa}
        title={restaurant.titulo}
      />
      <RestaurantMenu products={cardapio} />
      <Cart />
    </>
  )
}
export default Restaurant

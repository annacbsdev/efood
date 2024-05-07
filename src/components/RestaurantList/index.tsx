import sushi from '../../assets/sushi.png'
import ladolce from '../../assets/ladolce.png'
import Card from '../RestaurantCard'
import { RestaurantListStyles } from './styles'

const RestaurantList = () => {
  return (
    <div className="container">
      <RestaurantListStyles>
        <Card
          category={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          rating={4.9}
          title="Hioki Sushi"
          restaurantPage="/"
        />
        <Card
          category={['Italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={ladolce}
          rating={4.6}
          title="La Dolce Vita Trattoria"
          restaurantPage="/restaurant"
        />
        <Card
          category={['Italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={ladolce}
          rating={4.6}
          title="La Dolce Vita Trattoria"
          restaurantPage="/restaurant"
        />
        <Card
          category={['Italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={ladolce}
          rating={4.6}
          title="La Dolce Vita Trattoria"
          restaurantPage="/restaurant"
        />
        <Card
          category={['Italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={ladolce}
          rating={4.6}
          title="La Dolce Vita Trattoria"
          restaurantPage="/restaurant"
        />
        <Card
          category={['Italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={ladolce}
          rating={4.6}
          title="La Dolce Vita Trattoria"
          restaurantPage="/restaurant"
        />
      </RestaurantListStyles>
    </div>
  )
}

export default RestaurantList

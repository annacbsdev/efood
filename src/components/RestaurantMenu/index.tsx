import ProductCard from '../ProductCard'
import pizza from '../../assets/pizza.png'
import { RestaurantMenuStyles } from './styles'

const RestaurantMenu = () => {
  return (
    <div className="container">
      <RestaurantMenuStyles>
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
        <ProductCard
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          image={pizza}
        />
      </RestaurantMenuStyles>
    </div>
  )
}

export default RestaurantMenu

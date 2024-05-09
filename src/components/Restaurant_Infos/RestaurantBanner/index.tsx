import { RestaurantBannerContent, RestaurantBannerStyles } from './styles'

export type Props = {
  image: string
  category: string
  title: string
}

const RestaurantBanner = ({ image, category, title }: Props) => {
  return (
    <RestaurantBannerStyles image={image}>
      <div className="container">
        <RestaurantBannerContent>
          <p>{category}</p>
          <h1>{title}</h1>
        </RestaurantBannerContent>
      </div>
    </RestaurantBannerStyles>
  )
}

export default RestaurantBanner

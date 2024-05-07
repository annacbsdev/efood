import { RestaurantBannerContent, RestaurantBannerStyles } from './styles'

const RestaurantBanner = () => {
  return (
    <RestaurantBannerStyles>
      <div className="container">
        <RestaurantBannerContent>
          <p>Italiana</p>
          <h1>La Dolce Vita Trattoria</h1>
        </RestaurantBannerContent>
      </div>
    </RestaurantBannerStyles>
  )
}

export default RestaurantBanner

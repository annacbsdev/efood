import styled from 'styled-components'
import banner from '../../assets/ladolcebanner.png'

export const RestaurantBannerStyles = styled.div`
  height: 40vh;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
`

export const RestaurantBannerContent = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 0;

  p,
  h1 {
    color: white;
    font-size: 32px;
  }

  p {
    font-weight: 100;
  }
`

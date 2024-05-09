import styled from 'styled-components'
import { Props } from '.'

export const RestaurantBannerStyles = styled.div<
  Omit<Props, 'category' | 'title'>
>`
  height: 40vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
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
    z-index: 1;
    text-transform: capitalize;
  }

  p {
    font-weight: 100;
  }
`

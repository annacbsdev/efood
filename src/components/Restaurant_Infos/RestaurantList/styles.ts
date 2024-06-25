import styled from 'styled-components'

export const RestaurantListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  column-gap: 80px;
  margin: 80px 0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 40px;
  }
`

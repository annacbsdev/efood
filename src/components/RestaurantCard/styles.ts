import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div`
  max-width: 480px;
  background-color: white;
  border: 1px solid ${cores.rosa};
  position: relative;
  img {
    width: 100%;
  }
  > div {
    padding: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  p {
    line-height: 22px;
  }
`

export const CategoryList = styled.ul`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  ${ButtonContainer} {
    margin-left: 8px;
    font-size: 12px;
    padding: 6px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1,
  span {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  img {
    width: 20px;
  }
`

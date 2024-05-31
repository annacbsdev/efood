import styled from 'styled-components'
import { cores } from '../../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 16px;
  max-width: 360px;
  width: 100%;

  > button {
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
    width: 100%;
  }

  .valor_total {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;

    p {
      font-weight: bold;
      color: ${cores.bege};
    }
  }
`

export const CartItem = styled.li`
  background-color: ${cores.bege};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  button {
    background: none;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`

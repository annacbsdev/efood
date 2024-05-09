import styled from 'styled-components'
import { cores } from '../../../styles'

export const RestaurantMenuStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px 0;

  li {
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  display: flex;
  justify-content: space-between;

  z-index: 1;

  > :first-child {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px 0 0 32px;
  }

  .fechar {
    width: 16px;
    height: 16px;
    margin: 8px 8px 0 0;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 280px;
  margin-left: 24px;

  h2,
  p {
    color: ${cores.bege};
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0;
  }

  button {
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    padding: 4px 8px;
    cursor: pointer;
  }
`

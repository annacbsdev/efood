import styled from 'styled-components'
import { colors } from '../../../styles'

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
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 16px;
  max-width: 360px;
  width: 100%;

  .valor_total {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;

    p {
      font-weight: bold;
      color: ${colors.beige};
    }
  }
`

export const CartItem = styled.li`
  background-color: ${colors.beige};
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
    color: ${colors.pink};
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

export const CartButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.pink};
  border: none;
  font-weight: bold;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;
  margin-bottom: 8px;
`

export const StyledForm = styled.div`
  color: ${colors.beige};

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    border: none;
    background-color: ${colors.beige};
    padding: 8px;
    width: 100%;
    font-weight: bold;
    margin-bottom: 8px;
  }

  > div {
    margin-bottom: 24px;
  }

  .smallField {
    display: flex;
    gap: 34px;
  }

  .numberAndCode {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 34px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const EmptyCart = styled.h2`
  color: ${colors.beige};
`

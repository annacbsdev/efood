import logo from '../../assets/logo.png'

import { BannerContainer } from './styles'

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <img src={logo} alt="Logo Efood" />
        <h1>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </h1>
      </BannerContainer>
    </>
  )
}

export default Banner

import logo from '../../../assets/logo.png'
import { TiSocialInstagram } from 'react-icons/ti'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FooterStyles } from './styles'

const Footer = () => {
  return (
    <FooterStyles>
      <img src={logo} alt="Logo Efood" />
      <div>
        <TiSocialInstagram className="icone" />
        <FaFacebookF className="icone" />
        <FaTwitter className="icone" />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterStyles>
  )
}

export default Footer

import { FooterContainer, ContainerImages, LinksContainer, ContainerText } from './styles'
import Whatsapp from '../../assets/whats.svg'
import Insta from '../../assets/insta.svg'
import Email from '../../assets/email.svg'
import Face from '../../assets/face.svg'

function Footer() {
  return (
    <FooterContainer>
      <LinksContainer>
        <ContainerImages style={{ alignItems: 'center', display: 'flex' }}>
          <img src={Whatsapp} alt="whataspp" width="25" />
          <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
            (51) 666-666-69
          </span>
        </ContainerImages>

        <ContainerImages style={{ alignItems: 'center', display: 'flex' }}>
          <img src={Email} alt="whataspp" width="25" />
          <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
            gsohne@gmail.com
          </span>
        </ContainerImages>
        <ContainerText>
          <img src={Face} alt="whataspp" width="35" style={{ marginRight: '25px' }} />

          <img src={Insta} alt="whataspp" width="35" />
        </ContainerText>
      </LinksContainer>
    </FooterContainer>
  )
}

export default Footer

import { ContainerName, CardContainer, H1, H2, ImageContainer, Img } from './styles-classes'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Whats from '../../assets/whatsapp.png'

function Classes() {
  return (
    <>
      <Header />
      <ContainerName>
        <H1>Aulas de Alemão</H1>
      </ContainerName>
      <ImageContainer>
        <H2>Aulas de Português</H2>
      </ImageContainer>
      <CardContainer>
        <a href="https://wa.me/+5551993965345">
          <Img src={Whats} alt="whats" width="95" />
        </a>
      </CardContainer>
      <Footer />
    </>
  )
}

export default Classes

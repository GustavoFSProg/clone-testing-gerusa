import {
  ContainerName,
  CardContainer,
  Image,
  Imagem,
  H1,
  H2,
  Text,
  ImageContainer,
  Card,
  Span,
  Button,
  Img,
} from './styles-translate'
import Foto from '../../assets/alemao.jpeg'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Logo from '../../assets/logo1.jpg'
import Whats from '../../assets/whatsapp.png'

function Translate() {
  return (
    <>
      <Header />
      <ContainerName>
        {/* <H1>
          <Imagem src={Logo} alt="logo" />
        </H1>
        <H2> Tradução Juramentada de Alemão</H2>
        <H2> Aulas de Alemão e Yoga</H2> */}
        <H1>Tradução</H1>
      </ContainerName>
      <ImageContainer>
        <H1>Tradução - Juramentada de Alemão</H1>
      </ImageContainer>
      <CardContainer>
        {/* <a href="https://wa.me/+5551993965345?text=Olá, gostaria de um orçamento"> */}
        <a href="https://wa.me/+5551993965345">
          <Img src={Whats} alt="whats" width="95" />
        </a>
      </CardContainer>
      <Footer />
    </>
  )
}

export default Translate

import {
  ContainerName,
  CardContainer,
  ContainerText,
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
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Alemanha from '../../assets/alemanha.jpg'
import Whats from '../../assets/whatsapp.png'

function Translate() {
  return (
    <>
      <Header />

      <ContainerName>
        <img width="100%" src={Alemanha} alt="alemanha" />
      </ContainerName>
      <ContainerText>
        <H1>Tradução - Juramentada de Alemão</H1>
      </ContainerText>

      <ImageContainer></ImageContainer>
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

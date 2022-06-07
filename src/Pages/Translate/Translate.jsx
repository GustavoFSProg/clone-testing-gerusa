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
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the
        </Text>
        <Image src={Foto} alt="imagem" />
      </ImageContainer>

      {/* <a href="https://wa.me/+5551993965345?text=Olá, gostaria de um orçamento"> */}
      <a href="https://wa.me/+5551993965345">
        <Img src={Whats} alt="whats" width="95" />
      </a>
      <Footer />
    </>
  )
}

export default Translate

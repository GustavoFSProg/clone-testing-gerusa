import './App.css'
import Header from './components/Header/Header'
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
} from './styles-app'
import Foto from './assets/image1.jpg'
import Footer from './components/Footer/Footer'
import Logo from './assets/logo1.jpg'

function App() {
  return (
    <>
      <div>
        <ContainerName>
          <Header />
          <H1>
            <Imagem src={Logo} alt="logo" />
          </H1>
          <H2> Tradução Juramentada de Alemão</H2>
          <H2> Aulas de Alemão e Yoga</H2>
        </ContainerName>
        <ImageContainer>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of th
          </Text>
          <Image src={Foto} alt="imagem" />
        </ImageContainer>
        <CardContainer>
          <Card>asasdf</Card>
          <Card>asasdf</Card>
          <Card>asasdf</Card>
        </CardContainer>
        <Footer />
      </div>
    </>
  )
}

export default App

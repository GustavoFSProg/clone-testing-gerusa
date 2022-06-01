import './App.css'
import Header from './components/Header'
import { ContainerName, Image, H1, Text, ImageContainer } from './styles-app'
import Foto from './assets/image1.jpg'

function App() {
  return (
    <div>
      <Header />
      <ContainerName>
        <H1>Gerusa Gamm </H1>
        <H1 style={{ fontSize: '1.6rem' }}> Tradutora Juramentada</H1>
      </ContainerName>
      <ImageContainer>
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of th
        </Text>
        <Image src={Foto} alt="imagem" />
      </ImageContainer>
    </div>
  )
}

export default App

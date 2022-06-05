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
  Span,
  Button,
  Img,
} from './styles-app'
import Foto from './assets/alemao.jpeg'
import Footer from './components/Footer/Footer'
import Logo from './assets/logo1.jpg'
import Whats from './assets/whatsapp.png'
import './app.css'

function App() {
  return (
    <>
      <Header />
      <ContainerName>
        <H1>
          <Imagem src={Logo} alt="logo" />
        </H1>
        <H2> Tradução Juramentada de Alemão</H2>
        <H2> Aulas de Alemão e Yoga</H2>
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
      <CardContainer>
        <Card>
          <h2>Tradução</h2>
          <Span>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this Lorem Ipsum generators
          </Span>
          <Button onClick={() => alert('You Clicked Traduction!')}>Ver mais</Button>
        </Card>
        <Card>
          <h2>Yoga</h2>

          <Span>
            TThere are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this Lorem Ipsum generators
          </Span>
          <Button onClick={() => alert('You Clicked Yoga!')}>Ver mais</Button>
        </Card>
        <Card>
          <h2>Aulas de Alemão</h2>

          <Span>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this Lorem Ipsum generators
          </Span>
          <Button onClick={() => alert('You Clicked Alemão!')}>Ver mais</Button>
        </Card>
        {/* <a href="https://wa.me/+5551993965345?text=Olá, gostaria de um orçamento"> */}
        <a href="https://wa.me/+5551993965345">
          <Img src={Whats} alt="whats" width="95" />
        </a>
      </CardContainer>
      <Footer />
    </>
  )
}

export default App

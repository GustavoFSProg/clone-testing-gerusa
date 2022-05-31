import { HeaderContainer, Span, LinksContainer, LogoContainer } from './styles'
import Logo from '../assets/logo.jpg'

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img width="70" src={Logo} alt="logo" />
      </LogoContainer>
      <LinksContainer>
        <Span>HOME</Span>
        <Span>AULAS</Span>
        <Span>TRADUÇÃO</Span>
        <Span>CONTATO</Span>
        <Span>BLOG</Span>
        <Span>BLOG</Span>
        <Span>BLOG</Span>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header

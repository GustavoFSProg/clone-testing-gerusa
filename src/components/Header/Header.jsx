import { HeaderContainer, Span, LinksContainer } from './styles'
import Menu from '../Menu/menu'
function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Menu />
        <Span>HOME</Span>
        <Span>AULAS</Span>
        <Span>TRADUÇÃO</Span>
        <Span>CONTATO</Span>
        <Span>FORMAÇÃO</Span>
        <Span>ALEMÃO</Span>
        <Span>SERVIÇOS</Span>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header

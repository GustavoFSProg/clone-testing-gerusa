import { HeaderContainer, Span, LinksContainer } from './styles'
import Menu from '../Menu/menu'
function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Menu />
        <Span>HOME</Span>
        <Span>TRADUÇÃO</Span>
        <Span>YOGA</Span>
        <Span>AULAS ALEMÃO</Span>
        <Span>CONTATO</Span>
        <Span>FORMAÇÃO</Span>
        <Span>SERVIÇOS</Span>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header

import { HeaderContainer, Span, LinksContainer } from './styles'
import { Link } from 'react-router-dom'
import Menu from '../Menu/menu'
function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Menu />
        <Span>
          <Link style={{ textDecoration: 'none' }} to="/">
            HOME
          </Link>
        </Span>
        <Span>
          <Link to="/translate" style={{ textDecoration: 'none' }}>
            TRADUÇÃO
          </Link>
        </Span>
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

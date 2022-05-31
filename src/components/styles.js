import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10.5rem;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`
export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6.5rem;
  background: #f2f2f2;
  align-items: center;
  justify-content: space-around;
`
export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: #00cc44;
  align-items: center;
  justify-content: center;
`
export const Span = styled.span`
  font-size: 0.879rem;
  margin-right: 4rem;
  font-weight: bold;
  font-family: 'Blinker';
  letter-spacing: 0.1rem;
  transition: ease 0.5s;
  width: 4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  cursor: pointer;

  &:hover {
    background: black;
    height: 3.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

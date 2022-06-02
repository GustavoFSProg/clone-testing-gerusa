import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  color: white;
  background: #006666;
  margin-top: 4rem;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3rem;

  @media screen and (max-width: 700px) {
    padding-bottom: 100px;
  }
`

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 3.5rem;
  gap: 15px;
  grid-gap: 15px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: none;
  font-weight: bold;
  font-family: 'Arial';
  letter-spacing: 0.1rem;
  transition: ease 0.5s;
  width: 12rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* &:hover {
    background: black;
    height: 3.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`
export const ContainerText = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 700px) {
    margin-top: 18px;
  }
`
export const ContainerImages = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 700px) {
    margin-top: 11px;
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  z-index: 2 !important;

  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 850px) {
    height: 7.4rem;
    top: 0px;
    margin-top: 0px;
  }
`

// export const HeaderContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 10.5rem;
//   flex-direction: column;
//   margin-top: 0px;
//   top: 0px;

//   align-items: center;
//   justify-content: space-around;

//   @media screen and (max-width: 850px) {
//     height: 7.4rem;
//     top: 0px;
//     margin-top: 0px;
//   }
// `

// export const Imagem = styled.img`
//   width: 13%;
//   margin-left: 35px;

//   @media screen and (max-width: 850px) {
//     width: 0px;
//     margin-left: 0px;
//     display: none;
//   }
// `
export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: #e0a21f;
  align-items: center;
  justify-content: center;
  color: #003366;
  /* padding-top: 15px; */
  padding-left: 2px;
  margin-top: -10px;

  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: left;
    padding-top: 0px;
    position: absolute;
    top: 0;
    height: 3.5rem;
    padding-left: 14px;
    width: 96%;
    margin-top: 0px;
  }
`
export const Span = styled.span`
  font-size: 1rem;
  margin-right: 4rem;
  font-weight: bold;
  font-family: 'Blinker';
  letter-spacing: 0.1rem;
  transition: ease 0.5s;
  /* width: 4rem; */
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

  @media screen and (max-width: 850px) {
    display: none;
  }
`
export const Menu = styled.div`
  width: 30px;
  height: 25px;
  background: yellow;
  display: none;
  border-radius: 4px;

  @media screen and (max-width: 850px) {
    display: flex;
    /* margin-left: 20px; */
  }
`

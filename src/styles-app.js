import styled from 'styled-components'

export const ContainerName = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  /* background: #ffffe6; */

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 20.5rem;
    flex-direction: column;
    margin-top: -15px;
  }
`

export const H1 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  color: #9d2b16;
  font-size: 2.3rem;

  @media screen and (max-width: 700px) {
    font-size: 1.6rem;
    width: 80%;
    margin-bottom: 7px;
  }
`

export const H2 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  color: #9d2b16;
  font-size: 1.1rem;
  margin-top: 10px;
  letter-spacing: 0.02rem;
  padding-bottom: 1px;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
    width: 84%;
    margin-top: 5px;
    padding-bottom: 3px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 400;
  height: 400px;
  flex-direction: row;
  margin-top: 160px;

  align-items: center;
  justify-content: center;
  margin-bottom: 280px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 260px;
    margin-top: 28px;
  }
`
export const Image = styled.img`
  width: 35%;
  height: 90%;
  border-radius: 48%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    border-radius: 48%;
    width: 58%;
    margin-top: 40px;
    height: 165px;
  }
`
export const Text = styled.div`
  width: 38%;
  color: #9d5716;
  font-family: 'Kalam';
  font-size: 30px;
  margin-right: 115px;

  @media screen and (max-width: 800px) {
    font-size: 19px;
    width: 88%;
    height: auto;
    margin-left: 90px;
    /* margin-top: 80px; */
    margin-right: 78px;
  }
`

export const Imagem = styled.img`
  width: 45%;
  border-radius: 48%;
  margin-top: 32px;

  /* margin-left: 35px; */

  @media screen and (max-width: 850px) {
    width: 37%;
    margin-bottom: 15px;
  }
`

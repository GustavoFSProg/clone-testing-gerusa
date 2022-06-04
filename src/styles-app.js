import styled from 'styled-components'

export const ContainerName = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 20.5rem;
    flex-direction: column;
    position: relative;
  }
`

export const H1 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  color: #9d2b16;
  font-size: 2.3rem;

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    font-size: 1rem;
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
  padding-top: 160px;

  align-items: center;
  justify-content: center;
  margin-bottom: 180px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    /* padding-bottom: 260px; */
    padding-top: 65px;
  }

  @media screen and (min-width: 800px) and (max-width: 950px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 260px;
    padding-top: 80px;
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
  font-size: 1.8rem;
  margin-right: 115px;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;

    width: 88%;
    height: auto;
    margin-left: 90px;
    margin-right: 78px;
  }

  @media screen and (min-width: 600px) and (max-width: 950px) {
    font-size: 1.2rem;

    padding-bottom: 260px;
    padding-top: 80px;
  }
`

export const Imagem = styled.img`
  width: 45%;
  border-radius: 48%;
  padding-top: 38px;

  @media screen and (max-width: 850px) {
    margin-bottom: 15px;
    width: 60%;
  }
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 365px 365px 365px;
  width: 100%;
  height: 56rem;
  background: #e6f3ff;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  height: 37rem;
  border-radius: 20px;
  background: linear-gradient(to right bottom, #0066cc 20%, #00264d 45%);
  color: white;
  font-size: 1.1rem;
  font-family: 'Montserrat 200';

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
    width: 18rem;
    height: 40.5rem;
  }
`
export const Span = styled.span`
  width: 75%;
  height: auto;
`
export const Button = styled.button`
  width: 13rem;
  margin-top: 30px;
  font-family: 'Arial';
  font-size: 1rem;
  border-radius: 9px;
  padding: 8px;
  background: #0059b3;
  color: white;
  transition: ease 0.3s;
  cursor: pointer;

  &:hover {
    background: gray;
  }
`

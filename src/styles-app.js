import styled from 'styled-components'

export const ContainerName = styled.div`
  display: flex;
  width: 100%;
  height: 10.5rem;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
  background: #ffffcc;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 6.6rem;
  }
`

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;

  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 400;
  height: 400px;
  flex-direction: row;
  margin-top: 100px;

  align-items: center;
  justify-content: center;

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
  color: darkblue;
  font-family: 'Blinker';
  font-size: 30px;
  margin-right: 115px;

  @media screen and (max-width: 800px) {
    font-size: 19px;
    width: 88%;
    height: auto;
    margin-left: 90px;
    margin-top: 20px;
    margin-right: 78px;
  }
`

import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  width: 100%;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ResultTextImgContainer = styled.div``

export const ResultText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`

export const ResultImageItem = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

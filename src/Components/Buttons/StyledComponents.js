import styled from 'styled-components'

export const ButtonLiContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`

export const ButtonImage = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const ImageItem = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

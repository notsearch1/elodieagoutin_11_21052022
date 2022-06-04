import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  margin:0 auto;
  padding: 10px;
  border: 3px solid #ff6060;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 2s infinite linear;
  height: 100px;
  width: 100px;
`



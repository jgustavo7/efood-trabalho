import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
  max-width: 1024px;
  min-width: 375px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`

export const Cores = {
  primary: '#FFEBD9',
  text: '#E66767',
  background: '#FFF8F2',
  white: '#FFF',
  overlayColor: 'rgba(0, 0, 0, 0.8)'
}

export default GlobalStyle

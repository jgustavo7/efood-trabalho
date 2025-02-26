import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  )
}

export default App

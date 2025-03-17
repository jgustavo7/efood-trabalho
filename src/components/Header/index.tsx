import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './styles'

import logo from '../../assets/imagens/logo.svg'
import { Container } from '../../styles'

export type HeaderProps = {
  title?: string
  textContent?: string
}

const Header = ({ textContent, title }: HeaderProps) => (
  <HeaderContainer>
    <Container>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <TextContainer>
        <Text>{textContent}</Text>
      </TextContainer>
    </Container>
  </HeaderContainer>
)

export default Header

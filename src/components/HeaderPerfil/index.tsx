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
}

const HeaderPerfil = ({ title }: HeaderProps) => (
  <HeaderContainer>
    <Container>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
    </Container>
    <TitleLink to="/">{title}</TitleLink>
    <Title>Produto(s) no carrinho</Title>
  </HeaderContainer>
)

export default HeaderPerfil

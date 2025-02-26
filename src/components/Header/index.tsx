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

export type HeaderProps = {
  title?: string
  textContent?: string
}

const Header = ({ textContent, title }: HeaderProps) => (
  <HeaderContainer>
    <div>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
    </div>
  </HeaderContainer>
)

export default Header

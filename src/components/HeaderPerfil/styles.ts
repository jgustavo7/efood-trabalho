import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../styles'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 64px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('https://raw.githubusercontent.com/BrunoOliveira16/Curso-Engenheiro-Front-End-EBAC/main/Modulo-35/ImagesEfood/hero.png');
  background-size: cover;
  background-repeat: no-repeat;

  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`

export const HeroHeader = styled.div`
  color: ${Cores.text};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Title = styled.li`
  color: ${Cores.text};
  display: flex;
  padding-left: 480px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
`

export const TitleLink = styled(Link)`
  color: ${Cores.text};
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  padding-right: 260px;
`

export const Links = styled.ul`
  display: flex;
`

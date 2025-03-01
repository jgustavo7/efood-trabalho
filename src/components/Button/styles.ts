import styled, { css } from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

type ButtonProps = {
  $displayMode?: 'full' | 'inline'
  $coresMode?: 'primary' | 'second'
}

const baseButton = css<ButtonProps>`
  width: ${(props) => (props.$displayMode === 'full' ? '100%' : 'auto')};
  display: ${(props) => (props.$displayMode === 'full' ? 'block' : 'inline')};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) =>
    props.$coresMode === 'primary' ? Cores.background : Cores.text};
  border: none;
`

export const ButtonContainer = styled.button<ButtonProps>`
  ${baseButton}
  cursor: pointer;
`

export const ButtonContainerLink = styled(Link)<ButtonProps>`
  ${baseButton}
  text-decoration: none;
`

import styled from 'styled-components'
import { Cores } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
  padding: 6px 10px;
  background-color: ${Cores.text};
`

export const TagTitle = styled.h3`
  color: ${Cores.background};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`

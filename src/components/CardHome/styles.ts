import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardListContainer = styled.div`
  padding: 80px 0 120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  background-color: ${Cores.background};
`

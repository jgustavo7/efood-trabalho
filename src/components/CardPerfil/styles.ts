import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerListPerfil = styled.main`
  position: relative;
  width: 100%;
`

export const CardListContainer = styled.div`
  padding: 80px 120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
  width: 100%;
  background-color: ${Cores.background};
`

export const TextMessage = styled.p`
  color: ${Cores.text};
  font-size: 18px;
  font-weight: 400;
`

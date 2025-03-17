import styled from 'styled-components'
import { Container, Cores } from '../../styles'

export const BannerContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 280px;
  padding: 25px 0 32px;
  display: block;
  background: no-repeat center/cover;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.7;

  &::after: {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }

  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
`

export const Title = styled.h1`
  color: ${Cores.white};
  font-size: 32px;
  font-weight: 900;
  padding-top: 150px;
  padding-left: 80px;
`

export const SubTitle = styled.p`
  color: ${Cores.white};
  font-size: 32px;
  font-weight: 100;
  opacity: 0.8;
  padding-left: 80px;
`

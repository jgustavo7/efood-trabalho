import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 1346px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Cores.primary};
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px auto 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Text = styled.p`
  color: ${Cores.text};
  font-size: 10px;
  text-align: center;
  font-weight: 400;
  line-height: normal;
`

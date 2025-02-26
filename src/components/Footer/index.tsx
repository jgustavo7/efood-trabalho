import Logo from '../Logo'

import { FooterContainer, SocialIcons, Text } from './styles'

const Footer = () => (
    <FooterContainer>
        <Logo kind="link" cover="https://raw.githubusercontent.com/BrunoOliveira16/Curso-Engenheiro-Front-End-EBAC/main/Modulo-35/ImagesEfood/logo.png" title="Logo Efood" to="/" />
        <SocialIcons>
            <img />
        </SocialIcons>
        <Text>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
        </Text>
    </FooterContainer>
)

export default Footer

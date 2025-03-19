import { BannerContainer, SubTitle, Title } from './styles'

import bannerImg from '../../assets/imagens/banner-perfil.png'
import { Container } from '../../styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <SubTitle>Italiana</SubTitle>
      <div>
        <Title>La Dolce Vitta Trattoria</Title>
      </div>
    </div>
  </BannerContainer>
)

export default Banner

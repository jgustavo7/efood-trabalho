import CardPerfil from '../../components/CardPerfil'

import { PerfilContainer } from './styles'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerPerfil } from '../../styles'


const Perfil = () => {
  return (
    <>
      <PerfilContainer>
        <ContainerPerfil>
          <HeaderPerfil title="Restaurantes" />
          <Banner />
          <CardPerfil product={} />
        </ContainerPerfil>
      </PerfilContainer>
    </>
  )
}

export default Perfil

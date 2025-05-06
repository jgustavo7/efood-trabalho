import CardPerfil from '../../components/CardPerfil'

import { PerfilContainer } from './styles'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerPerfil } from '../../styles'
import { useEffect, useState } from 'react'
import { Product } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Product[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <PerfilContainer>
        <ContainerPerfil>
          <HeaderPerfil title="Restaurantes" />
          <Banner />
          <CardPerfil product={restaurante} />
        </ContainerPerfil>
      </PerfilContainer>
    </>
  )
}

export default Perfil

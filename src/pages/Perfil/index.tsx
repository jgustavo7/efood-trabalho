import CardPerfil from '../../components/CardPerfil'

import { PerfilContainer } from './styles'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerPerfil } from '../../styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean | undefined
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

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
          <CardPerfil restaurante={restaurante} />
        </ContainerPerfil>
      </PerfilContainer>
    </>
  )
}

export default Perfil

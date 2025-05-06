import CardHome from '../../components/CardHome'

import Header from '../../components/Header'

import { Container } from '../../styles'
import { HomeContainer } from './styles'
import { useEffect, useState } from 'react'

export type Product = {
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

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <HomeContainer>
        <Header textContent="Viva experiencias gastronomicas no conforto da sua casa" />
        <Container>
          <CardHome product={restaurantes} />
        </Container>
      </HomeContainer>
    </>
  )
}

export default Home

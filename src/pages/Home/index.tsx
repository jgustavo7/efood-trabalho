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

const Restaurantes = () => {
  const [bella, setBella] = useState<Product[]>([])
  const [arabe, setArabe] = useState<Product[]>([])
  const [japones, setJapones] = useState<Product[]>([])
  const [portugues, setPortugues] = useState<Product[]>(
    []
  )
  const [pizzaria, setPizzaria] = useState<Product[]>([])
  const [vegano, setVegano] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setBella(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setArabe(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setJapones(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPortugues(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPizzaria(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setVegano(res))
  })
}

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Header textContent="Viva experiencias gastronomicas no conforto da sua casa" />
        <Container>
          <CardHome product={} />
        </Container>
      </HomeContainer>
    </>
  )
}

export default Home

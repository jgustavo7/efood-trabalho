import Header from '../../components/Header'
import CardPerfil from '../../components/CardPerfil'
import ProductPerfil from '../../models/ProductPerfil'

import comida from '../../assets/imagens/pizza.png'

import { PerfilContainer } from './styles'
import Banner from '../../components/Banner'

const comidas: ProductPerfil[] = [
  {
    id: 1,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    card: 'second',
    kindButton: 'button',
    nameButton: 'Adicionar ao Carrinho',
    title: 'Pizza Marguerita',
    cover: comida,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  return (
    <>
      <PerfilContainer>
        <Header title="restaurantes" />
        <Banner />
        <CardPerfil product={comidas} />
      </PerfilContainer>
    </>
  )
}

export default Perfil

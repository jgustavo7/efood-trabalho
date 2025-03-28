import CardPerfil from '../../components/CardPerfil'
import ProductPerfil from '../../models/ProductPerfil'

import comida from '../../assets/imagens/pizza.png'

import { PerfilContainer } from './styles'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerPerfil } from '../../styles'

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
        <ContainerPerfil>
          <HeaderPerfil title="Restaurantes" />
          <Banner />
          <CardPerfil product={comidas} />
        </ContainerPerfil>
      </PerfilContainer>
    </>
  )
}

export default Perfil

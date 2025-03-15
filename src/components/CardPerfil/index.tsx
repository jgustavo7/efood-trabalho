import Card from '../Card'

import { CardListContainer, ContainerListPerfil, TextMessage } from './styles'

import ProductPerfil from '../../models/ProductPerfil'

type Props = {
  product: ProductPerfil[]
}

const CardPerfil = ({ product }: Props) => (
  <ContainerListPerfil>
    <CardListContainer>
      {product.map((product) => (
        <Card
          key={product.id}
          card="second"
          kindButton="button"
          nameButton="Adicionar ao carrinho"
          title={product.title}
          description={product.description}
          cover={product.cover}
          handleClick={product.handleClick}
          tagHighlight={undefined}
          image={''}
        />
      ))}
    </CardListContainer>
  </ContainerListPerfil>
)

export default CardPerfil

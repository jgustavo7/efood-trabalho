import { useState } from 'react'
import { Product } from '../../pages/Home'
import Card from '../Card'

import { CardListContainer, ContainerListPerfil, TextMessage } from './styles'

export type Props = {
  product: Product[]
}

const CardPerfil = ({ product }: Props) => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  )
  const [showModal, setShowModal] = useState(false)

  function handleCardClick(productId: number) {
    setSelectedProductId(productId)
    setShowModal(true)
  }

  return (
    <ContainerListPerfil>
      <CardListContainer>
        {product.map((product) => (
          <Card
            key={product.id}
            card="second"
            kindButton="button"
            nameButton="Adicionar ao carrinho"
            title={product.cardapio.nome}
            description={product.cardapio.descricao}
            cover={product.cardapio.foto}
            handleClick={() => handleCardClick(product.id)}
          />
        ))}
      </CardListContainer>
    </ContainerListPerfil>
  )
}

export default CardPerfil

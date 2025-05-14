import { useState } from 'react'
import Card from '../Card'

import { CardListContainer, ContainerListPerfil, TextMessage } from './styles'
import { Restaurante } from '../../pages/Perfil'

export type Props = {
  restaurante: Restaurante[]
}

const CardPerfil = ({ restaurante }: Props) => {
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
        {restaurante.map((restaurante) => (
          <Card
            key={restaurante.cardapio.id}
            card="second"
            kindButton="button"
            nameButton="Adicionar ao carrinho"
            title={restaurante.cardapio.nome}
            description={restaurante.cardapio.descricao}
            cover={restaurante.cardapio.foto}
            handleClick={() => handleCardClick(restaurante.id)}
          />
        ))}
      </CardListContainer>
    </ContainerListPerfil>
  )
}

export default CardPerfil

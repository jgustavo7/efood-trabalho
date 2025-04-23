import Button from '../Button'

import {
  ModalContainer,
  ContainerImage,
  Title,
  Text,
  ContainerText,
  ModalContent,
  Overlay
} from './styles'

type ModalProps = {
  title: string
  cover: string
  description: string
  potion: string
  price: number
  openModal: boolean
  closeModal?: () => void
  handleAddItem?: () => void
}

const Modal = ({
  cover,
  title,
  description,
  potion,
  price,
  openModal = false,
  closeModal,
  handleAddItem
}: ModalProps) => {
  function renderTextPotion(potion: string) {
    if (potion === '1 pessoa') {
      return <Text>Serve: {potion}</Text>
    }
    return <Text>Serve: de {potion}</Text>
  }

  return (
    <ModalContainer $isOpen={openModal}>
      <Overlay />

      <ModalContent>
        <ContainerImage>
          <img src={cover} alt={title} />
        </ContainerImage>
        <ContainerText>
          <Title>{title}</Title>
          <Text>{description}</Text>
          {renderTextPotion(potion)}
          <Button
            kind="button"
            displayMode="inline"
            coresMode="second"
            placeholder={`Adicionar ao Carrinho`}
            onClick={handleAddItem}
          />
        </ContainerText>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal

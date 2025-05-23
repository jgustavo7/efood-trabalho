import Button from '../Button'
import Tag from '../Tag'
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardImagem,
  ContainerTags,
  Cover,
  Icon,
  Text,
  Title
} from './styles'

export type CardProps = {
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  iconName?: string
  rating?: string
  tagType?: string | undefined
  tagHighlight?: boolean | undefined
  to?: string
  handleClick?: () => void
}

const Card = ({
  card = 'primary',
  kindButton = 'link',
  title,
  cover,
  description,
  iconName,
  rating,
  nameButton,
  tagType,
  tagHighlight,
  to,
  handleClick
}: CardProps) => {
  function renderTypeButton(kind: string) {
    return (
      <Button
        kind={kindButton}
        placeholder={nameButton}
        onClick={kind === 'button' ? handleClick : undefined}
        to={kind === 'link' ? `${to}` : undefined}
        displayMode={card === 'primary' ? 'inline' : 'full'}
        coresMode={card}
      />
    )
  }

  function renderTags(type: string, highlight: boolean | undefined) {
    if (type && highlight === true) {
      return (
        <ContainerTags>
          <Tag placeholder="Destaques da semana" />
          <Tag placeholder={type} />
        </ContainerTags>
      )
    }

    return (
      <ContainerTags>
        <Tag placeholder={type} />
      </ContainerTags>
    )
  }

  return (
    <CardContainer>
      <CardImagem $card={card}>
        <Cover src={cover} alt={cover} />
      </CardImagem>

      <CardContent $card={card}>
        <CardHeader>
          <Title $card={card}>{title}</Title>

          <CardHeader>
            {rating && <Title $card={card}>{rating}</Title>}
            {iconName && <Icon src={iconName} alt={iconName} />}
          </CardHeader>
        </CardHeader>

        <Text $card={card}>{description}</Text>

        {renderTypeButton(kindButton)}
      </CardContent>

      {tagType && renderTags(tagType, tagHighlight)}
    </CardContainer>
  )
}

export default Card

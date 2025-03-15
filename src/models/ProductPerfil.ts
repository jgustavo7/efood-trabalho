class ProductPerfil {
  id: number
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  handleClick?: () => void

  constructor(
    id: number,
    card: 'primary' | 'second',
    kindButton: 'button' | 'link',
    title: string,
    cover: string,
    description: string,
    nameButton: string,
    handleClick?: () => void
  ) {
    this.id = id
    this.card = card
    this.kindButton = kindButton
    this.title = title
    this.cover = cover
    this.description = description
    this.nameButton = nameButton
    this.handleClick = handleClick
  }
}

export default ProductPerfil

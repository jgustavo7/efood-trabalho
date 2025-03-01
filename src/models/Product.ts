class Product {
  id: number
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  iconName?: string
  rating?: string
  tagType?: string | undefined
  tagHighlight: boolean | undefined
  to?: string
  image: string
  handleClick?: () => void

  constructor(
    id: number,
    card: 'primary' | 'second',
    kindButton: 'button' | 'link',
    title: string,
    cover: string,
    description: string,
    nameButton: string,
    iconName?: string,
    rating?: string,
    tagType?: string,
    to?: string,
    image: string,
    handleClick?: () => void
  ) {
    this.id = id
    this.card = card
    this.kindButton = kindButton
    this.title = title
    this.cover = cover
    this.description = description
    this.nameButton = nameButton
    this.iconName = iconName
    this.rating = rating
    this.tagType = tagType
    this.to = to
    this.image = image
    this.handleClick = handleClick
  }
}

export default Product

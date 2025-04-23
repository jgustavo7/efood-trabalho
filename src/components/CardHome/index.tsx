import Card from '../Card'

import Star from '../../assets/icons/estrela.svg'
import { CardListContainer } from './styles'
import { Product } from '../../pages/Home'

export type Props = {
  product: Product[]
}

const CardHome = ({ product }: Props) => {
  const getProductTags = (product: Product) => {
    const tags = []

    if (product.id) {
      tags.push(product.id)
    }

    return tags
  }

  return (
  <CardListContainer>
    {product.map((product) => (
      <div key={product.id}>
        <Card
          key={product.id}
          card="primary"
          kindButton="link"
          nameButton="Sabia Mais"
          to={`/perfil/${product.id}`}
          iconName={Star}
          title={product.titulo}
          description={product.descricao}
          rating={product.avaliacao}
          tagType={product.tipo}
          tagHighlight={product.destacado}
          cover={product.capa}
        />
      </div>
    ))}
  </CardListContainer>
)
}

export default CardHome

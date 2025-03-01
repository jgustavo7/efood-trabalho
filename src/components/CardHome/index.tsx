import Product from '../../models/Product'
import Card from '../Card'

import Star from '../../assets/icons/estrela.svg'
import { CardListContainer } from './styles'

type Props = {
  product: Product[]
}

const CardHome = ({ product }: Props) => (
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
          title={product.title}
          description={product.description}
          rating={product.rating}
          tagType={product.tagType}
          tagHighlight={product.tagHighlight}
          cover={product.cover}
        />
      </div>
    ))}
  </CardListContainer>
)

export default CardHome

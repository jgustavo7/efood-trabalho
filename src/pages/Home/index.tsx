import CardHome from '../../components/CardHome'
import Header from '../../components/Header'
import Product from '../../models/Product'

import restaurante from '../../assets/imagens/restaurante.png'

import { Container } from '../../styles'
import { HomeContainer } from './styles'

const restaurantes: Product[] = [
  {
    id: 1,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: 'Restaurante Italiano',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: true,
    to: 'link',
    image: restaurante
  }
]

const Home = () => (
  <HomeContainer>
    <Container>
      <CardHome product={restaurantes} />
    </Container>
  </HomeContainer>
)

export default Home

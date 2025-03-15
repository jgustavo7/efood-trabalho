import CardHome from '../../components/CardHome'
import Product from '../../models/Product'
import Header from '../../components/Header'

import restaurante from '../../assets/imagens/restaurante.png'

import { Container } from '../../styles'
import { HomeContainer } from './styles'

const restaurantes: Product[] = [
  {
    id: 1,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: true,
    to: 'link'
  },
  {
    id: 2,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: false,
    to: 'link'
  },
  {
    id: 3,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: false,
    to: 'link'
  },
  {
    id: 4,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: false,
    to: 'link'
  },
  {
    id: 5,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: false,
    to: 'link'
  },
  {
    id: 6,
    card: 'primary',
    kindButton: 'button',
    title: 'La Dolce Vita Trattoria',
    cover: restaurante,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nameButton: 'Saiba mais',
    iconName: 'Italiana',
    rating: '5.0',
    tagType: 'italiana',
    tagHighlight: false,
    to: 'link'
  }
]

const Home = () => (
  <HomeContainer>
    <Header textContent="Viva experiencias gastronomicas no conforto da sua casa" />
    <Container>
      <CardHome product={restaurantes} />
    </Container>
  </HomeContainer>
)

export default Home

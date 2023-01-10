import { HomeContainer } from './styles'
import { Profile } from '../../components/Profile'
import { Publications } from '../../components/Publications'
export const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <Publications />
    </HomeContainer>
  )
}

import right from '../../assets/header-images/right.svg'
import left from '../../assets/header-images/left.svg'
import logo from '../../assets/header-images/logo.svg'

import { Content, HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <img src={left} alt="" id="left" />
        <img src={logo} alt="Logo GitHub Blog" />
        <img src={right} alt="" id="right" />
      </Content>
    </HeaderContainer>
  )
}

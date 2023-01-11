import right from '../../assets/header-images/right.svg'
import left from '../../assets/header-images/left.svg'
import logo from '../../assets/header-images/logo.svg'

import { Content, HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <img src={left} alt="" id="left" />
        <div>
          <img src={logo} alt="Logo GitHub Blog" />
          <h1>github blog</h1>
        </div>
        <img src={right} alt="" id="right" />
      </Content>
    </HeaderContainer>
  )
}

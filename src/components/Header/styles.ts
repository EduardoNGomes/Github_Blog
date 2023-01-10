import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  width: 100%;
`

export const Content = styled.div`
  padding: 1rem;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  margin: 0 auto;

  #left {
    width: 409px;
    height: 188px;

    margin-top: 7rem;
  }

  #right {
    width: 371px;
    height: 236px;

    margin-top: 3rem;
  }
`

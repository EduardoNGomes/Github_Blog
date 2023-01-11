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

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    justify-content: center;
    align-items: center;
    img {
      width: 45px;
      height: 40px;
    }
    h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 160%;

      color: ${(props) => props.theme.blue};

      text-transform: uppercase;
      text-shadow: 2px 2px 8px black;
    }
  }
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

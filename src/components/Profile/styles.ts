import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 3.2rem;

  display: flex;
  gap: 3.2rem;
  img {
    width: 148px;
    height: 148px;
  }
`

export const ProfileInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
      text-transform: capitalize;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 130%;
    }

    a {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 1.2rem;

      text-transform: uppercase;
    }
  }
  p {
    font-size: 1.6rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  ul {
    display: flex;
    gap: 2.4rem;
    margin-top: 1.6rem;
  }

  ul li {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    line-height: 160%;
    svg {
      color: ${(props) => props.theme['base-label']};
    }
    span {
      font-size: 1.6rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

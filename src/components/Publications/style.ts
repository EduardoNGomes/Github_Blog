import styled from 'styled-components'

export const PublicationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }
  input {
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};

    font-size: 1.6rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-label']};
  }
`

export const PublicationsCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

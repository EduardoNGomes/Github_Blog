import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 864px;
  margin: -5rem auto;

  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 600px;
    margin: -2rem auto;
  }
  @media (max-width: 500px) {
    width: 350px;
    margin: -2rem auto;
  }
`

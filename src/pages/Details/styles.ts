import styled from 'styled-components'

export const DetailsContainer = styled.div`
  max-width: 864px;
  margin: -5rem auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`
export const DetailsHeader = styled.section`
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      gap: 8px;

      border: none;
      background-color: transparent;

      font-weight: 700;
      font-size: 1.2rem;

      text-transform: uppercase;

      color: ${(props) => props.theme.blue};
    }

    a {
      display: flex;
      gap: 8px;
      align-items: center;

      font-weight: 700;
      font-size: 12px;

      text-transform: uppercase;

      color: ${({ theme }) => theme.blue};

      text-decoration: none;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    /* Base/Title */
    color: ${(props) => props.theme['base-title']};
  }

  ul {
    display: flex;
    gap: 3.2rem;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 2rem;

    color: ${(props) => props.theme['base-span']};
  }
`
export const DetailsMain = styled.main`
  .markdown {
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .markdown li,
  .markdown a,
  .markdown p,
  .markdown {
    font-weight: 400;
    font-size: 1.6rem;

    color: ${(props) => props.theme['base-text']};
  }
  .markdown code {
    display: block;
    font-weight: 400;

    font-size: 1.6rem;
    padding: 1.6rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;
  }

  .markdown li {
    list-style: disc;
  }
`

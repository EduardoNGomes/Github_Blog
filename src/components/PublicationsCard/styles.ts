import styled from 'styled-components'

export const PublicationsCardContent = styled.div`
  cursor: pointer;
  max-height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 16px;

    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-span']};
    }
  }

  .markdown {
    display: flex;
    flex-direction: column;
  }
  .markdown li,
  .markdown a,
  .markdown {
    font-weight: 400;
    font-size: 1.6rem;

    color: ${(props) => props.theme['base-text']};
    line-break: strict;

    overflow: hidden;
    text-overflow: ellipsis;
  }
  .markdown code {
    font-weight: 400;
    font-size: 1rem;
  }
`

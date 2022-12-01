import styled from 'styled-components';

export const ArticlesContainer = styled.div`
  margin-top: 4.5rem;
`;

export const FilterContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.baseSpan};
      font-size: 0.875rem;
    }
  }

  input {
    border: 1px solid ${(props) => props.theme.baseBorder};
    border-radius: 6px;
    background-color: ${(props) => props.theme.baseInput};

    color: ${(props) => props.theme.baseText};

    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    width: 100%;
    height: 50px;

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;

export const ArticlesList = styled.ul`
  list-style: none;
  margin: 3rem 0 0 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Article = styled.li`
  background: ${(props) => props.theme.basePost};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme.baseTitle};
      font-size: 1.25rem;
      font-weight: bold;
    }

    span {
      color: ${(props) => props.theme.baseSpan};
      font-size: 0.875rem;
      white-space: nowrap;
    }
  }

  p {
    margin-top: 1.25rem;

    span {
      /* overflow-wrap: break-word; */
      word-wrap: break-word;
    }
  }
`;

import styled from 'styled-components';

export const ArticleContainer = styled.article``;

export const Header = styled.header`
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.25rem;
      text-decoration: none;
      text-transform: uppercase;

      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin: 1.25rem 0 1rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    li {
      font-size: 1rem;

      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.5rem;

      color: ${(props) => props.theme.baseSpan};

      transition: color 0.2s;

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`;

export const Body = styled.div`
  padding: 2.5rem 2rem;

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 125%;
    margin: 2rem 0 1rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.75rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead tr th,
    tbody tr td {
      padding: 0.25rem 0.75rem;
    }

    thead {
      tr {
        th {
          background-color: ${(props) => props.theme.baseBorder};
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        td {
          border-bottom: 1px solid ${(props) => props.theme.baseBorder};
        }
      }
    }
  }

  ul {
    margin: 1rem 0 1rem 1rem;
  }

  pre {
    background-color: ${(props) => props.theme.baseProfile};
    font-size: 0.875rem;
    padding: 1rem;
  }

  hr {
    margin: 1rem 0;
    border-width: 1px 0 0 0;
    border-color: ${(props) => props.theme.blue};
  }
`;

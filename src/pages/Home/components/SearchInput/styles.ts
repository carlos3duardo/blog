import styled from 'styled-components';

export const SearchInputContainer = styled.form`
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

import styled from 'styled-components';

export const PostBoxContainer = styled.div`
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
    }
  }
`;

import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: -5.5rem auto 0 auto;

  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;
`;

export const UserAvatar = styled.picture`
  display: block;
  width: 148px;
  height: 148px;
  img {
    display: block;
    width: inherit;
    height: inherit;
    border-radius: 8px;
  }
`;

export const UserInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h2 {
      color: ${(props) => props.theme.baseTitle};
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};

      font-size: 0.75rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;

      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }

  p {
    color: ${(props) => props.theme.baseText};
    flex: 1;
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

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.5rem;

        color: ${(props) => props.theme.baseSubtitle};

        transition: color 0.2s;

        svg {
          color: ${(props) => props.theme.baseLabel};
        }

        &:hover {
          color: ${(props) => props.theme.blue};
          svg {
            color: inherit;
          }
        }
      }
    }
  }
`;

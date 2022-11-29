import styled from 'styled-components';

import backgroundImage from './cover.png';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.baseProfile};
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 18.5rem;
`;

export const Logo = styled.figure`
  width: 148px;
  height: 98px;
  display: block;

  padding-top: 4rem;

  margin: 0 auto;

  img {
    display: block;
    width: inherit;
    height: inherit;
  }
`;

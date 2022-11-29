import { HeaderContainer, Logo } from './styles';

import logo from './logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </HeaderContainer>
  );
}

import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo } from './styles';
import logo from './logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </NavLink>
    </HeaderContainer>
  );
}

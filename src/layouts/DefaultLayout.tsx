import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainContainer } from './DefaultLayoutStyles';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

import { Outlet } from 'react-router-dom';

import { LayoutContainer, LayoutContentContainer } from './styles';
import { Header } from '../../components';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContentContainer>
        <Outlet />
      </LayoutContentContainer>
    </LayoutContainer>
  );
}

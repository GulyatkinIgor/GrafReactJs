import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  } from './navigation.styles';

const Navigation = () => {
  
  return (
    <Fragment>
      <NavigationContainer>
        <NavLinks>
          <NavLink to='/uslugi'>Uslugi</NavLink>        
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

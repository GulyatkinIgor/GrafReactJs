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
          <NavLink to='/'>Home</NavLink> 
          <NavLink to='/uslugi'>Uslugi</NavLink>
          <NavLink to='/aboutus'>About us</NavLink> 
          <NavLink to='/commerce'>Commerce</NavLink> 
          <NavLink to='/kotetg'>Kotetgi</NavLink> 
          <NavLink to='/novostroiki'>Novostroiki</NavLink> 
          <NavLink to='/sales'>Sales</NavLink> 
          <NavLink to='/rent'>Rent</NavLink>         
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

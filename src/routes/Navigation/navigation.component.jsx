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
          <NavLink to='/uslugi'>Услуги</NavLink>
          <NavLink to='/aboutus'>О компании</NavLink> 
          <NavLink to='/commerce'>Коммерческая</NavLink> 
          <NavLink to='/kotetg'>Котетджные поселки</NavLink> 
          <NavLink to='/novostroiki'>Новостройки</NavLink> 
          <NavLink to='/sales'>Продажа</NavLink> 
          <NavLink to='/rent'>Аренда</NavLink>         
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';


import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Nomer,
  } from './navigation.styles';

const Navigation = () => {
  
  return (
    <Fragment>
      <NavigationContainer>
        <NavLinks>
        <LogoContainer to='/'>
          <img src="../../assets/logo.png" alt="Link to resume" />        
        </LogoContainer>        
          <NavLink to='/uslugi'>Услуги</NavLink>
          <NavLink to='/aboutus'>О компании</NavLink> 
          <NavLink to='/commerce'>Коммерческая</NavLink> 
          <NavLink to='/kotetg'>Котетджные поселки</NavLink> 
          <NavLink to='/novostroiki'>Новостройки</NavLink> 
          <NavLink to='/sales'>Продажа</NavLink> 
          <NavLink to='/rent'>Аренда</NavLink>         
        </NavLinks>
        <Nomer>
          <div>г.Казань ул.Ф.Амирхана 12А 89520379479</div>
        </Nomer>
      </NavigationContainer>
     
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

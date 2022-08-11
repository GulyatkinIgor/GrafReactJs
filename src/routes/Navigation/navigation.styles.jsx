import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
background-color: azure;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLink = styled(Link)`
  padding: 20px 20px;
  flex-direction: column;
  cursor: pointer;
`;

export const Nomer = styled.div`
margin-top: 20px;
margin-right: 20px;
`;

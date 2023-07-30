import './css/Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png'
import CartBtn from './CartBtn';


const SidebarWrapper = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  color: #fff;
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  
`;

const SidebarItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  width: 100%;
`;

const SidebarLink = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <SidebarWrapper className='nav-bar'>
      <ul>
        <img src={logo} alt="" className='logo'/>
        <SidebarItem style={{marginTop:"30px"}}>
         <Link to ="/" style={{textDecoration:"none"}}> <SidebarLink>Home</SidebarLink></Link>
        </SidebarItem>
        <SidebarItem>
          <Link to ="/products"  style={{textDecoration:"none"}}><SidebarLink> Our Products</SidebarLink></Link>
        </SidebarItem>
        <SidebarItem>
          <CartBtn/>
        </SidebarItem>
        <SidebarItem>
         <Link to = "/settings"  style={{textDecoration:"none"}}><SidebarLink>Settings</SidebarLink></Link>
        </SidebarItem>
       
      </ul>
    </SidebarWrapper>
  );
};

export default Navbar;

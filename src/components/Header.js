import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';

function Header() {
  
  return(
    <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarText>
      
      Forum & Fauna
    </NavbarText>
    
  </Navbar>
   
  );
}

export default Header;
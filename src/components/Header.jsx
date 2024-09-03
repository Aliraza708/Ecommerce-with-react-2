import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { Link as Mylink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
  "Home","About","Contact","SingIn","SingUp"
  ];


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
       {/* <AcmeLogo> */}
          <p className="font-bold text-inherit">ACME</p>
        {/* </AcmeLogo> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <Mylink to={"/"} color="foreground">
            Home
          </Mylink>
        </NavbarItem>
        <NavbarItem >
          <Mylink to={"About"} color="foreground" >
            About
          </Mylink>
        </NavbarItem>
        <NavbarItem>
          <Mylink to={"Contact"} color="foreground" href="#">
          Contact
          </Mylink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem className="hidden lg:flex font-semibold font-sans">
          <Mylink to={"SingIn"}>SingIn </Mylink>
           / 
         <Mylink to={"SingUp"}> SingUp </Mylink>
        </NavbarItem>
      </NavbarContent>
     
      <NavbarMenu>
      <NavbarItem >
          <Mylink to={"/"} color="foreground">
            Home
          </Mylink>
        </NavbarItem>
        <NavbarItem >
          <Mylink to={"About"} color="foreground">
          About
          </Mylink>
        </NavbarItem>
        <NavbarItem >
          <Mylink to={"Contact"} color="foreground">
          Contact
          </Mylink>
        </NavbarItem>
         <NavbarItem >
          <Mylink to={"SingIn"} color="foreground">
          SingUp
          </Mylink>
          /
          <Mylink to={"SingUp"} color="foreground">
            SingIn
          </Mylink>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header
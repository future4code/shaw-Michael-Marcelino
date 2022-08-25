import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import { HeaderContainer, HeaderSoc, Me, ScroolDown } from './styled'

const Header = () => {
  return (
    <HeaderSoc>
      <HeaderContainer className="container ">
        <h5>Hello I'm</h5>
        <h1>Michael Douglas </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        {/*  <h5 className="text-light">Passionate about technology and programming.</h5> */}
        <CTA />

        <HeaderSocial />

        <Me >
          <img src={ME} alt="me" />
        </Me>

        <ScroolDown  href="#contact" >Scroll Down</ScroolDown>
      </HeaderContainer>
    </HeaderSoc>
  );
};

export default Header;

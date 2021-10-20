import React from "react";

import PopUp from "./subcomponents/PopUp";
import UpperNavbar from "./subcomponents/UpperNavbar";

const Header = ({ sideMenuToggler }) => {
  return (
    <>
      <PopUp />
      <UpperNavbar sideMenuToggler={sideMenuToggler} />
    </>
  );
};

export default Header;

import "./App.css";
import { useState } from "react";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import SideMenu from "./components/sideMenu/SideMenu";

import { Container } from "./App.styles";

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  function sideMenuToggler() {
    setSideMenuOpen(!sideMenuOpen);
  }

  return (
    <>
      <Container>
        <Header sideMenuToggler={sideMenuToggler} />
        <SideMenu
          sideMenuToggler={sideMenuToggler}
          sideMenuOpen={sideMenuOpen}
        />

        <Body />
        <Footer />
      </Container>
    </>
  );
}

export default App;

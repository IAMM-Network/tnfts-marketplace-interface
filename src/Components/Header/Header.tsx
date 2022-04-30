import React, { useState } from "react";
import { Container } from "../Layout";
import { HeaderWrapper, HeaderContent } from "./styles";
import IAMMIcon from "../../assets/images/iamm-logo.png";
import Hamburger from 'hamburger-react'

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Container maxWidth="90%">
        <HeaderContent>
          <img src={IAMMIcon} alt="iamm-icon" width={100} height={48} />
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

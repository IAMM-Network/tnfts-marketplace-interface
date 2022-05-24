import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../Layout";
import { HeaderWrapper } from "./styles";
import { IAMMTextIcon } from "../Svg";
import Hamburger from "hamburger-react";
import { Flex } from "../Box";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <HeaderWrapper main={pathname !== "/"}>
      <Container maxWidth="90%">
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <IAMMTextIcon width="100px" fill="white" />
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

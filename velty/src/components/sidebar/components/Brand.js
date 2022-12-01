import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

import logo from "../../../assets/img/logo.png";

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align="center" direction="column">
      <img src={logo} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;

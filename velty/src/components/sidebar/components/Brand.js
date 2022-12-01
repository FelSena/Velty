import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

import logo from "../../../assets/img/logo.png";

export function SidebarBrand() {
  return (
    <Flex align="center" direction="column" gap="20px">
      <img src={logo} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;

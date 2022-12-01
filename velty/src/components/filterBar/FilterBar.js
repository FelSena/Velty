import React from "react";
// Chakra Imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom Components
import { DateBar } from "./dateBar/DateBar";
export default function FilterBar() {
  const navbarIcon = useColorModeValue("gray.400", "white");
  let menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  return (
    <Flex
      w={{ sm: "100%", md: "644px" }}
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      bg={menuBg}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
      mb="20px"
    >
      <Text color={navbarIcon} fontSize="sm" textAlign="center">
        Filtrar por data
      </Text>
      <DateBar
        mb={{ base: "10px", md: "unset" }}
        me="10px"
        borderRadius="30px"
        placeholder="Data Inicial"
      />
      <DateBar
        mb={{ base: "10px", md: "unset" }}
        me="10px"
        borderRadius="30px"
        placeholder="Data Final"
      />
    </Flex>
  );
}

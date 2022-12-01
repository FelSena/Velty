import React from "react";
import { Box, CircularProgress, Flex, Grid, Text } from "@chakra-ui/react";

export default function NoAccess() {
  return (
    <Box
      pt={{ base: "250px", md: "350px", xl: "500px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize={{ base: "21px", xl: "30px" }} color="gray.500">
        Pagina em Desenvolvimento!
      </Text>
      <CircularProgress isIndeterminate color="green.500" />
    </Box>
  );
}

import React from "react";

import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import Card from "components/card/Card.js";

export default function Default(props) {
  const { startContent, endContent, name, growth, value, small, decrease } =
    props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card w="387px" h="196px">
      <Flex direction="column" h="100%" align="start" justify="space-between">
        {startContent}
        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "4xl",
            }}
          >
            <Flex gap="4px">
              {value}
              {small ? (
                <Flex align="center">
                  <Text
                    color="secondaryGray.600"
                    fontSize="xl"
                    fontWeight="400"
                  >
                    {small}
                  </Text>
                </Flex>
              ) : null}
            </Flex>
          </StatNumber>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
            mb="15px"
          >
            {name}
          </StatLabel>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
            </Flex>
          ) : null}
          {decrease ? (
            <Flex align="center">
              <Text color="red.500" fontSize="xs" fontWeight="700" me="5px">
                {decrease}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}

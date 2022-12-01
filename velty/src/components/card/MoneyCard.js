import React from "react";

import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import { HSeparator } from "components/separator/Separator";

import { MdAttachMoney } from "react-icons/md";

export default function Default(props) {
  const { name, value, bg } = props;

  const textColor = useColorModeValue("gray.100", "white");
  const textColorSecondary = "gray.100";
  const brandColor = useColorModeValue(`${bg}`, `${bg}`);
  const boxBg = useColorModeValue("gray.100", "gray.100");

  return (
    <Card
      bg={brandColor}
      w={{ base: "280px", md: "380px" }}
      h="310px"
      alignItems="center"
    >
      <SimpleGrid
        my="auto"
        h="75%"
        w="100%"
        justify={{ base: "center", xl: "center" }}
      >
        <IconBox
          w="56px"
          h="56px"
          bg={boxBg}
          icon={
            <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
          }
        />
        <Stat my="auto">
          <StatNumber
            color={textColor}
            fontSize={{
              base: "4xl",
              md: "5x1",
            }}
          >
            <Flex gap="4px">{value}</Flex>
          </StatNumber>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "xl",
            }}
          >
            {name}
          </StatLabel>
        </Stat>
      </SimpleGrid>
      <HSeparator bg={boxBg} w={{ base: "280px", md: "380px" }} />
      <SimpleGrid my="auto" h="25%" w="100%">
        <Stat my="auto">
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            <Flex gap="4px">R$ {(Math.random() * 20 + 1).toFixed(2)}</Flex>
          </StatNumber>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            Média por cliente
          </StatLabel>
        </Stat>
      </SimpleGrid>
    </Card>
  );
}

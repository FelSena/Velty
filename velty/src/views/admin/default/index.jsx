import React from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Grid,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import MoneyCard from "components/card/MoneyCard";
import IconBox from "components/icons/IconBox";
import { MdAttachMoney } from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
  columnsDataDefault,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import tableDataDefault from "views/admin/default/variables/tableDataDefault.json";
import MoneyStatistics from "components/card/MoneyStatistics";
import ColumnsTable from "./components/ComplexTable";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        align="center"
        gap="20px"
        me="20px"
        ms={{ base: "24px", md: "0px" }}
        mt={{ base: "20px", md: "0px" }}
        mb="20px"
        direction={{ base: "column", md: "row" }}
      >
        <MoneyCard bg="#EC7A7A" value="R$ 312.321,00" name="Receita total" />
        <MoneyCard bg="#7A85EC" value="R$ 74.421,00" name="Lucro total" />
        <MoneyCard bg="#65D4AC" value="R$ 3,12" name="Lucro por venda" />
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          growth="+2.6%(+12)"
          name="Clientes Ativos"
          value="3.312"
        />

        <MiniStatistics growth="+15.3%(+2)" name="Clientes Novos" value="12" />

        <MiniStatistics
          growth="+42,6% (+8)"
          name="Clientes adicionados"
          value="42"
        />

        <MiniStatistics
          decrease="-22,6% (+R$ 12,20)"
          name="LTV"
          value="R$ 142,32"
        />

        <MiniStatistics
          growth="+42,6% (+3)"
          name="Turnover"
          value="24,3%"
          small="32"
        />

        <MiniStatistics
          growth="+32,6% (+6)"
          name="Turnover recuperado"
          value="54,42%"
          small="12"
        />
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MoneyStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
              mb="8px"
            />
          }
          growth="+15,3% (+223)"
          name="Cotações realizadas"
          value="312.321"
        />

        <MoneyStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
              mb="8px"
            />
          }
          growth="+15,3% (+223)"
          name="Vendas finalizadas"
          value="212.012"
        />

        <MoneyStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
              mb="8px"
            />
          }
          growth="+15,3% (+223)"
          name="Cotações não concluídas"
          value="42.021"
        />

        <MoneyStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
              mb="8px"
            />
          }
          growth="+15,3% (+223)"
          name="Cotações não respondidas"
          value="3.122"
          small="3%"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
        <ColumnsTable
          columnsData={columnsDataDefault}
          tableData={tableDataDefault}
          tableName="Planos"
          subtitle="123 planos ativos"
        />
      </SimpleGrid>
    </Box>
  );
}

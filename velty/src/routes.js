import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
  MdDashboard,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NoAccess from "views/admin/noAccess";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Vendas",
    layout: "/admin",
    path: "/vendas",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NoAccess,
    secondary: true,
  },
  {
    name: "Relatórios",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/relatorios",
    component: NoAccess,
  },
  {
    name: "Lojas Parceiras",
    layout: "/admin",
    path: "/lojas",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: NoAccess,
  },
  {
    name: "Clientes",
    layout: "/admin",
    path: "/clientes",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: NoAccess,
  },
];

export default routes;

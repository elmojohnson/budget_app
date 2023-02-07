import { useState } from "react";
import { Route } from "@/types/App";

const useApp = () => {
  const [isMobileOpen, setMobileOpen] = useState<boolean>(false);
  const routes: Route[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Transactions",
      href: "/transactions",
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
  ];

  const handleDrawerToggle = () => setMobileOpen(!isMobileOpen);

  return { routes, isMobileOpen, handleDrawerToggle };
};

export default useApp;

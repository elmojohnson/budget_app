import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Route } from "@/types/App";

import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useApp = () => {
  const router = useRouter();

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/user/login");
      } else {
        setLoggedIn(true);
      }
    });
  }, []);

  return { isLoggedIn, routes, isMobileOpen, handleDrawerToggle };
};

export default useApp;

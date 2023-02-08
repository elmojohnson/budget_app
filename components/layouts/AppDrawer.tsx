import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

import { useRouter } from "next/router";

// MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const AppDrawer = () => {
  const router = useRouter();
  const { routes, handleDrawerToggle, isMobileOpen } = useContext(AppContext);

  return (
    <Box sx={{ width: 250 }}>
      <List>
        {routes.map((route, i) => {
          return (
            <ListItem key={i} disablePadding>
              <ListItemButton
                selected={router.pathname === route.href}
                onClick={() => {
                  router.push(route.href, undefined, { shallow: true });
                  if (isMobileOpen) {
                  }
                  handleDrawerToggle();
                }}
              >
                <ListItemText
                  primary={route.label}
                  sx={{ fontWeight: "bold" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AppDrawer;

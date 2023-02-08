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
  const { routes } = useContext(AppContext);

  return (
    <Box sx={{ width: 250 }}>
      <List>
        {routes.map((route, i) => {
          return (
            <ListItem
              key={i}
              disablePadding
              onClick={() =>
                router.push(route.href, undefined, { shallow: true })
              }
            >
              <ListItemButton>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AppDrawer;

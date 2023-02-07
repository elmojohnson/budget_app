import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

import Navbar from "./Navbar";
import AppDrawer from "./AppDrawer";

// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const { isMobileOpen, handleDrawerToggle } = useContext(AppContext);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Drawer sx={{ display: { sm: "none", md: "flex" } }} variant="permanent">
        <AppDrawer />
      </Drawer>
      <Drawer
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "flex", md: "none" } }}
      >
        <AppDrawer />
      </Drawer>
      <Box
        sx={{
          width: { sm: "100%", md: "calc(100% - 250px)" },
          ml: { sm: "0px", md: "250px" },
        }}
      >
        <Navbar />
        <Container maxWidth="xl" sx={{ py: 2 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

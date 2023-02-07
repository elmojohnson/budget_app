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
      <Drawer sx={{ display: { xs: "none", md: "flex" } }} variant="permanent" open>
        <AppDrawer />
      </Drawer>
      <Drawer
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "flex", md: "none" } }}
        variant="temporary"
      >
        <AppDrawer />
      </Drawer>
      <Box
        sx={{
          width: { xs: "100%", md: "calc(100% - 250px)" },
          ml: { xs: "0px", md: "250px" },
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

import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { useRouter } from "next/router";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const router = useRouter();
  const { handleDrawerToggle, routes } = useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Budget
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {routes.map((route, i) => (
              <Button
                key={i}
                sx={{ color: "#fff" }}
                onClick={() =>
                  router.push(route.href, undefined, { shallow: true })
                }
              >
                {route.label}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => router.push("/user", undefined, { shallow: true })}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

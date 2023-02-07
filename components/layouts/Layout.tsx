import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import AppDrawer from "./AppDrawer";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" sx={{py: 2}} >{children}</Container>
      <AppDrawer />
    </div>
  );
};

export default Layout;

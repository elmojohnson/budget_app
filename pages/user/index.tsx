import Layout from "@/components/layouts/Layout";
import useUser from "@/hooks/useUser";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const User = () => {
  const { email, handleLogout } = useUser();

  return (
    <Layout>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ mb: 2 }}>Logged in as {email}</Typography>
        <Button onClick={handleLogout} variant="outlined">
          Logout
        </Button>
      </Box>
    </Layout>
  );
};

export default User;

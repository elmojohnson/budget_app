import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Accounts = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Accounts</Typography>
        <Button
          variant="contained"
          onClick={() =>
            router.push("/accounts/create", undefined, { shallow: true })
          }
        >
          Create
        </Button>
      </Box>
    </Layout>
  );
};

export default Accounts;

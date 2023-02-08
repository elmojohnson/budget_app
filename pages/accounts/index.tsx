import { useRouter } from "next/router";
import useAccounts from "@/hooks/useAccounts";

import Layout from "@/components/layouts/Layout";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AccountItem from "@/components/items/AccountItem";
import CircularProgress from "@mui/material/CircularProgress";

const Accounts = () => {
  const router = useRouter();
  const { accounts, isLoading } = useAccounts();

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
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
      {isLoading ? (
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={2}>
          {accounts.map((account) => {
            return <AccountItem key={account.id} {...account} />;
          })}
        </Stack>
      )}
    </Layout>
  );
};

export default Accounts;

import { useRouter } from "next/router";
import useAccounts from "@/hooks/useAccounts";

import Layout from "@/components/layouts/Layout";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
      {
        isLoading ? <p>Loading...</p> : <div>{
          accounts.map(account => {
            return <p key={account.id}>{account.name}</p>
          })
          }</div>
      }
    </Layout>
  );
};

export default Accounts;

import React from "react";
import { Account } from "@/types/Account";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const AccountItem: React.FC<Account> = (account) => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Stack>
            <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
              {account.name}
            </Typography>
            <Typography variant="subtitle1">
              ${account.initial_balance.toLocaleString("AU")}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AccountItem;

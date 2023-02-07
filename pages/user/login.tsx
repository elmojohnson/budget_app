import React from "react";
import useLogin from "@/hooks/useLogin";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Login = () => {
  const { email, password, handleEmail, handlePassword, handleLogin } = useLogin();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 400, mx: 4 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Budget App
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Email"
              variant="standard"
              sx={{ mb: 2 }}
              helperText="Email Error"
              type="email"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              label="Password"
              variant="standard"
              sx={{ mb: 2 }}
              helperText="Login with magic link"
              type="password"
              value={password}
              onChange={handlePassword}
            />
            <Button variant="contained" size="small" onClick={handleLogin} disabled={!email && !password ? true : false}>
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

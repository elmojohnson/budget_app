import React from "react";
import useLogin from "@/hooks/useLogin";

import { Formik } from "formik";
import LoginSchema from "@/validation/LoginSchema";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";

const Login = () => {
  const { handleLogin, errorMsg } = useLogin();

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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              submitForm,
              isSubmitting,
            }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  error={errors.email && touched.email ? true : false}
                  label="Email"
                  variant="standard"
                  sx={{ mb: 2 }}
                  helperText={errors.email && touched.email ? errors.email : null}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <TextField
                  error={errors.password && touched.password ? true : false}
                  label="Password"
                  variant="standard"
                  sx={{ mb: 2 }}
                  helperText={errors.password && touched.password ? errors.password : null}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <Button type="submit" variant="contained" sx={{mb: 2}} onClick={submitForm} disabled={isSubmitting}>
                  Login
                </Button>
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
              </Box>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

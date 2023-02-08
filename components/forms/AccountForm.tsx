import React from "react";

// Formik
import { Formik } from "formik";
import AccountSchema from "@/validation/AccountSchema";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AccountForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          name: "",
          initial_balance: "",
          notes: "",
        }}
        validationSchema={AccountSchema}
        onSubmit={(values, { setSubmitting }) => console.log(values)}
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
              error={errors.name && touched.name ? true : false}
              label="Name"
              sx={{ mb: 2 }}
              helperText={errors.name && touched.name ? errors.name : null}
              type="text"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <TextField
              error={
                errors.initial_balance && touched.initial_balance ? true : false
              }
              label="Initial Balance"
              sx={{ mb: 2 }}
              helperText={
                errors.initial_balance && touched.initial_balance
                  ? errors.initial_balance
                  : null
              }
              type="number"
              name="initial_balance"
              required
              value={values.initial_balance}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <TextField
              error={errors.notes && touched.notes ? true : false}
              label="Notes"
              sx={{ mb: 2 }}
              helperText={errors.notes && touched.notes ? errors.notes : null}
              type="text"
              name="notes"
              multiline
              rows={4}
              value={values.notes}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mb: 2 }}
              onClick={submitForm}
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default AccountForm;

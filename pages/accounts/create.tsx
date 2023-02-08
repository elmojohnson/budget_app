import AccountForm from "@/components/forms/AccountForm";
import Layout from "@/components/layouts/Layout";

// MUI
import Typography from "@mui/material/Typography";

const CreateAccount = () => {
  return (
    <Layout>
      <Typography variant="h5">Create an account</Typography>
      <AccountForm />
    </Layout>
  );
};

export default CreateAccount;

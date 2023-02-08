import AccountForm from "@/components/forms/AccountForm";
import Layout from "@/components/layouts/Layout";

// MUI
import Typography from "@mui/material/Typography";

const CreateAccount = () => {
  const props = {
    id: "",
    name: "",
    initial_balance: 0,
    notes: "",
    handleFormSubmit: (values: any) => {
      console.log(values);
    },
  };
  return (
    <Layout>
      <Typography variant="h5">Create an account</Typography>
      <AccountForm {...props} />
    </Layout>
  );
};

export default CreateAccount;

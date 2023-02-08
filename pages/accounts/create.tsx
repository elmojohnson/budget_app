import useCreateAccount from "@/hooks/useCreateAccount";

// Components
import Layout from "@/components/layouts/Layout";
import AccountForm from "@/components/forms/AccountForm";

// MUI
import Typography from "@mui/material/Typography";

const CreateAccount = () => {
  const { handleFormSubmit } = useCreateAccount();

  const props = {
    id: "",
    name: "",
    initial_balance: 0,
    notes: "",
    handleFormSubmit,
    button_message: "Create",
  };

  return (
    <Layout>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Create an account
      </Typography>
      <AccountForm {...props} />
    </Layout>
  );
};

export default CreateAccount;

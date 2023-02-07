import Layout from "@/components/layouts/Layout";
import useUser from "@/hooks/useUser";

import Button from "@mui/material/Button";

const User = () => {
  const {handleLogout} = useUser();
  return (
    <Layout>
      <Button onClick={handleLogout}>Logout</Button>
    </Layout>
  );
};

export default User;

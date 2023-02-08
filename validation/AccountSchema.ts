import * as Yup from "yup";

const AccountSchema = Yup.object().shape({
  name: Yup.string().max(100, "Name is too long").required("Please enter account name"),
  initialBalance: Yup.number().required("Please enter initial balance"),
  notes: Yup.string(),
});

export default AccountSchema;

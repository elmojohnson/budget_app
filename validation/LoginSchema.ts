import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export default LoginSchema;

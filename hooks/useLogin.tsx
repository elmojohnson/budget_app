import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: any) => setEmail(e.target.value);
  const handlePassword = (e: any) => setPassword(e.target.value);

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return { email, password, handleEmail, handlePassword, handleLogin };
};

export default useLogin;

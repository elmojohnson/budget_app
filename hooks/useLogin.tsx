import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");
  
  // @ts-expect-error
  const handleLogin = (values: any, { setSubmitting }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setErrorMsg("");
        router.push("/");
      })
      .catch((err) => {
        setErrorMsg("Incorret credentials.");
        console.error(err);
      });

    setSubmitting(false);
  };

  return { handleLogin, errorMsg };
};

export default useLogin;

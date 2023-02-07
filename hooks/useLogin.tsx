import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return { handleLogin, errorMsg };
};

export default useLogin;

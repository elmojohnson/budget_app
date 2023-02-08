import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { auth } from "../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleLogout = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
        router.push("/user/login");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setEmail(user?.email);
    });
  }, []);

  return { email, handleLogout };
};

export default useUser;

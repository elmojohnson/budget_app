import React from "react";
import { useRouter } from "next/router";

import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";

const useUser = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
        router.push("/user/login");
      })
      .catch((err) => console.error(err));
  };

  return { handleLogout };
};

export default useUser;

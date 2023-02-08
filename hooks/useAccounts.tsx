import { useState, useEffect } from "react";
import { Account } from "@/types/Account";

// Firebase
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAccounts = () => {
    setLoading(true);
    
    onAuthStateChanged(auth, async (user) => {
      const accountRef = collection(db, "accounts");
      const q = query(accountRef, where("user_id", "==", user?.uid));
      const querySnapshot = await getDocs(q);

      let arr: any[] = [];

      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setAccounts(arr);
    });

    setLoading(false);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return { accounts, isLoading };
};

export default useAccounts;

import { useRouter } from "next/router";

// Firebase
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useCreateAccount = () => {
  const router = useRouter();

  // @ts-expect-error
  const handleFormSubmit = (values: any, { setSubmitting }) => {
    // Get current user id
    onAuthStateChanged(auth, async (user) => {
      // Create account
      try {
        await addDoc(collection(db, "accounts"), {
          ...values,
          user_id: user?.uid,
          created_at: serverTimestamp(),
        });
        router.push("/accounts")
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    });
  };

  return { handleFormSubmit };
};

export default useCreateAccount;

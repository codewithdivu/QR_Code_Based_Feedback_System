import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/config";

const useAuth = () => {
  const localAdminUser = sessionStorage.getItem("authUser")
    ? JSON.parse(sessionStorage.getItem("authUser"))
    : null;

  const [user, setUser] = useState(localAdminUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        sessionStorage.setItem("authUser", JSON.stringify(authUser));
        setIsLoading(false);
      } else {
        setUser(null);
        sessionStorage.clear();
        setIsLoading(false);
      }
    });
    return () => listener();
  }, []);

  return { user, isLoading };
};

export default useAuth;

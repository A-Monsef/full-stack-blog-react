import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User in useAuth:", user);
    setLoading(false);
  }, [user]);

  return { user, loading };
};

export default useAuth;

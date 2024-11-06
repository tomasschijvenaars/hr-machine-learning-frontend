import { createContext, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import axios from "axios";

// Utils
import { PROFILE_PATH, REGISTER_PATH, LOGIN_PATH } from "@constants/path.const";

// Actions
import { getUser } from "@actions";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  const isPublicPage = [LOGIN_PATH, REGISTER_PATH].includes(router.pathname);

  useEffect(() => {
    if (!isPublicPage) {
      const getData = async () => {
        if (userId) {
          try {
            const loggedInUser = await getUser(userId);
            setUser(loggedInUser);
          } catch (error) {
            console.error("Error loading user:", error);
          }
        }
        setLoading(false); // Ensure loading state is set to false
      };

      getData();
    } else {
      setLoading(false); // Immediately end loading on the login page
    }
  }, [isPublicPage, userId, router]);

  const logout = async () => {
    try {
      await router.replace(LOGIN_PATH);
    } finally {
      sessionStorage.clear();
      setUser(null); // Reset user to null on logout
    }
  };

  const login = async (username, password) => {
    try {
      const { data } = await axios.post("http://localhost:8000/login", { username, password });
        
      if (!data.success) return null;

      const { _id } = data;

      console.log(_id);

      if (typeof window !== "undefined") {
        console.log("fwefw")
        await sessionStorage.setItem("userId", _id);
      }

      await router.replace(PROFILE_PATH);
    } catch(error) {
      console.error("login error", error)
    }
  };

  const value = useMemo(
    () => ({
      login,
      logout,
      currentUser: user,
    }),
    [user]
  );

  if (loading) return;

  return isPublicPage ? (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider> // Render children directly if on login page
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

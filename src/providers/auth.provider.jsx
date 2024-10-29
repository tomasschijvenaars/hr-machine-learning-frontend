import { createContext, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Utils
import { HOME_PATH, REGISTER_PATH } from "@constants/path.const";

// Actions
import { getUser } from "@actions";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      try {        
        if (typeof window !== "undefined") {
          const userId = sessionStorage.getItem("userId");

          const loggedInUser = await getUser(userId);

          return setUser(loggedInUser);
        }
      } catch (error) {
        console.error('Error loading candidate:', error);
      }
    };

    getData();
  }, []);

  const currentUser = user;

  const logout = async () => {
    try {
      await router.replace(REGISTER_PATH);
    } finally {
      sessionStorage.clear();
    }
  };

  const login = async (email, password) => {
    console.log(email, password);
    await router.replace(HOME_PATH);
    return null;
  };

  const value = useMemo(
    () => ({
      login,
      logout,
      currentUser,
    }),
    [currentUser, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

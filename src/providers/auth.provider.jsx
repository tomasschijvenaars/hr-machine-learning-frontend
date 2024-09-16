import { createContext, useMemo } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Utils
import { HOME_PATH, LOGIN_PATH } from "@constants/path.const";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();

  const currentUser = { first_name: "Jeremy" };

  const logout = async () => {
    try {
      await router.replace(LOGIN_PATH);
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
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

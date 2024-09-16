import { useContext } from "react";

// Core
import { AuthContext } from "../providers/auth.provider";

/**
 *  Auth context
 * - Login
 * - Logout
 * - currentUser
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) return null;
  return context;
};
 
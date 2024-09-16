import { useAuth } from "../provider.hook";

const usePermissionManager = () => {
  const { currentUser } = useAuth();

  // Checks if the user is a super admin
  const isSuperAdmin = () => {
    if (!currentUser) return false;
    if (!currentUser.is_super_admin) return false;

    if (typeof currentUser.is_super_admin !== "boolean") return false;

    return true;
  };

  return {
    isSuperAdmin,
  };
};

export default usePermissionManager;

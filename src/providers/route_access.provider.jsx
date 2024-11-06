import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Core
import ErrorPage from "../pages/_error.page";

// Utils
import { LOGIN_PATH, REGISTER_PATH  } from "@constants/path.const";
import { useAuth } from "@hooks";

function RouteAccessProvider({ children }) {
  const { pathname } = useRouter();

  const currentUser =  useAuth()?.currentUser;

  // const { isSuperAdmin } = usePermissionManager();

  let allowed = true;

  const isPublicPage = [LOGIN_PATH, REGISTER_PATH].includes(pathname);

  // Management
  // ---------------------------------
  if (!isPublicPage) {
    // Swap these two and navigate to management to test the route access provider
    const isAllowed = !!currentUser;
    // const isAllowed = isSuperAdmin();

    allowed = isAllowed;
  }

  return allowed ? children : <ErrorPage statusCode={403} />;
}

RouteAccessProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouteAccessProvider;

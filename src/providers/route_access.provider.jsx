import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Core
import ErrorPage from "../pages/_error.page";

// Utils
import { usePermissionManager } from "@hooks";

function RouteAccessProvider({ children }) {
  const { pathname } = useRouter();

  const { isSuperAdmin } = usePermissionManager();

  let allowed = true;

  // Management
  // ---------------------------------
  if (pathname.startsWith("/management")) {
    // Swap these two and navigate to management to test the route access provider
    const isAllowed = true;
    // const isAllowed = isSuperAdmin();

    allowed = isAllowed;
  }

  return allowed ? children : <ErrorPage statusCode={403} />;
}

RouteAccessProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouteAccessProvider;

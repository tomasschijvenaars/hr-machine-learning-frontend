import PropTypes from "prop-types";

// Core
import { CssBaseline } from "@mui/material";
import RouteAccessProvider from "./route_access.provider";
import ThemeProvider from "./theme.provider";
import AuthProvider from "./auth.provider";

function MasterProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouteAccessProvider>
          <CssBaseline enableColorScheme />
          {children}
        </RouteAccessProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

MasterProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageProps: PropTypes.object,
};

export default MasterProvider;

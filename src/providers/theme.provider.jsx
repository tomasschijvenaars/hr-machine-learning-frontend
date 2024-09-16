import PropTypes from "prop-types";

// Core
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import defaultTheme from "@themes/default.theme";

function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

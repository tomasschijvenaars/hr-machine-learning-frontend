import PropTypes from "prop-types";

// Core
import { useTheme } from "@mui/material/styles";

// Style
import styles from "./main.style";

function Main({ children }) {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <main 
      style={classes.main} 
      >
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

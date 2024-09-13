import PropTypes from "prop-types";

// Core
import { useTheme } from "@mui/material/styles";
import { LoadingButton as MuiLoadingButton } from "@mui/lab";

// Style
import styles from "./button.style";

function Button(props) {
  const {
    children,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <MuiLoadingButton
      {...rest}
      css={[
        classes.buttonRoot,
      ]}
    >
      {children}
    </MuiLoadingButton>
  );
}

Button.propTypes = {
  cardButton: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;

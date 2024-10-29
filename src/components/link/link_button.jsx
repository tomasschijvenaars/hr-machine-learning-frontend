import PropTypes from "prop-types";
import { forwardRef } from "react";
import NextLink from "next/link";

// Core
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

// Style
import styles from "./link_button.style";

const LinkButton = forwardRef((props, ref) => {
  const {
    children,
    href,
    isVisible = true,
    name,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  if (!isVisible) return null;

  return (
    <NextLink href={href || ""} prefetch={false} passHref legacyBehavior>
      <Button
        {...rest}
        id={name}
        ref={ref}
        css={classes.label}
      >
        {children}
      </Button>
    </NextLink>
  );
});

LinkButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  isVisible: PropTypes.bool,
  name: PropTypes.string,
};

export default LinkButton;

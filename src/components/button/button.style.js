const styles = theme => ({
  buttonRoot: {
    boxShadow: "none",
    textTransform: "initial",
    fontSize: theme.typography.body1.fontSize,
    "&.MuiButton-containedSecondary:hover": {
      color: theme.palette.secondary.contrastText,
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 32,
      minHeight: 32,
    },
  },
});

export default styles;

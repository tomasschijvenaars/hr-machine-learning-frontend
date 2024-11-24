const styles = theme => ({
  buttonRoot: {
    boxShadow: "none",
    textTransform: "initial",
    fontSize: theme.typography.body1.fontSize,
    "&.MuiButton-containedSecondary:hover": {
      color: '#72BEAE',
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 36,
      minHeight: 20,
    },
  },
});

export default styles;

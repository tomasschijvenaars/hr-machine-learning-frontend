const styles = theme => ({
    appBarContainer: {
      flexShrink: 0,
      width: '100%',
      position: "sticky",
      backgroundColor: "white",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.001), 0px 1px 10px 0px rgba(0,0,0,0.02)", 
      color: "black",
      [theme.breakpoints.down("lg")]: {
        height: theme.appBar,
        width: "100%",
      },
    },
    appBar: {
      width: theme.appBar,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "white",
      flexShrink: 0,
      [theme.breakpoints.down("lg")]: {
        flexDirection: "row",
        height: theme.appBar,
        width: "100%",
      },
    },
    appBarSubContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "row",
        height: theme.appBar,
        width: "100%",
      },
    },
    appBarTitel: {
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'black',
      textDecoration: 'none',
      "&:hover": {
        backgroundColor:  'black',
        color: 'pink',
      },
    }
  });
  
  export default styles;
  
import { useMediaQuery as useReactResponsive } from "react-responsive";
import { useTheme } from "@mui/material/styles";

/* general media query */
const useMediaQuery = value => {
  const theme = useTheme();
  let breakpoint = { minWidth: theme.breakpoints.values[value] };

  if (value === "sm") {
    breakpoint = { maxWidth: theme.breakpoints.values.sm };
  }
  return useReactResponsive(breakpoint);
};

export default useMediaQuery;

// Core
import { Grid } from "@mui/material";
import { LoginForm } from "@forms";

function LoginPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
       <Grid item xs={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default LoginPage;

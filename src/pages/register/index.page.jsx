// Core
import { Grid } from "@mui/material";
import { RegisterForm } from "@forms";

function Register() {
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
        <RegisterForm />
      </Grid>
    </Grid>
  );
}

export default Register;

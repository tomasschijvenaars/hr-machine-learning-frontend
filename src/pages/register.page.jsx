import { useRouter } from "next/router";

// Core
import { Grid } from "@mui/material";
import { Button } from "@components";
import { RegisterForm } from "@forms";

// Utils
import { LOGIN_PATH } from "@constants/path.const";

function RegisterPage() {
  const router = useRouter();

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

        <Button onClick={() => router.push(LOGIN_PATH)}>Inloggen</Button>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;

import { useRouter } from "next/router";

// Core
import { Grid } from "@mui/material";
import { Button } from "@components";
import { LoginForm } from "@forms";

// Utils
import { REGISTER_PATH } from "@constants/path.const";

function LoginPage() {
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
        <LoginForm />

        <Button onClick={() => router.push(REGISTER_PATH)}>Registreren</Button>
      </Grid>
    </Grid>
  );
}

export default LoginPage;

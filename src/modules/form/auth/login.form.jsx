import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import { Fragment } from "react";

// Core
import { Stack } from "@mui/material";
import { Button } from "@components";
import { TextField } from "@fields";

// Utils
import { useAuth } from "@hooks";
import { PROFILE_PATH } from "@constants/path.const";

function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    const { username, password } = values;

    await login(username, password);
  };

  return (
    <Fragment>
      <form>
        <Stack gap={1}>
          <TextField
            control={control}
            name="username"
            label="Username"
          />

          <TextField 
            control={control}
            name="password"
            label="Password"
            type="password"
          />
          
          <Button
            color="primary"
            variant="contained"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
            onClick={handleSubmit(handleSubmitForm)}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Fragment>
  );
}

export default LoginForm;

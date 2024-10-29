import { useForm } from "react-hook-form";
import { useState } from "react";

// Core
import { Grid, Stack, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { Button } from "@components";
import { useTheme } from "@mui/material/styles";

// Utils
import { setProfileValues } from "./_default_values"
import { useAuth } from "@hooks";

// Actions
import { DefaultLayout } from "@layouts";
import { TextField } from "@fields";

//Style
import EditIcon from "@mui/icons-material/Edit";

function ProfileGeneralPage() {
  const theme = useTheme();

  const { currentUser, logout } = useAuth();

  const { control, formState, handleSubmit, reset } = useForm({
    defaultValues: setProfileValues(currentUser),
    mode: "onChange",
  });

  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  const isMobile = muiUseMediaQuery(theme.breakpoints.down("md"));

  return (
    <DefaultLayout>
      <Grid item xs={3} mt={5} mb={5} justifyContent="center" display="flex">
        <form>
          <Stack
            gap={1}
            display="flex"
            sx={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <TextField
              control={control}
              name="username"
              label="Username"
              value={currentUser?.username}
            />

            <TextField
              control={control}
              name="password"
              label="Password"
              type="password"
            />

            <Stack width="max-content" justifyContent="center" display="flex">
              <Button
                color="secondary"
                variant="contained"
                disabled={!formState.isValid}
                loading={formState.isSubmitting}
                onClick={handleSubmit(handleSubmitForm)}
              >
                <EditIcon />
              </Button>
            </Stack>
            <Button color="secondary" variant="contained" onClick={logout}>
              Logout
            </Button>
          </Stack>
        </form>
      </Grid>
    </DefaultLayout>
  );
}

export default ProfileGeneralPage;

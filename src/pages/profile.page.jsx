// Core
import { Stack, Grid } from "@mui/material";
import { ProfileForm } from "@forms";
import { Persona } from "@modules";

// Actions
import { DefaultLayout } from "@layouts";

function ProfilePage() {
  return (
    <DefaultLayout>
      <Grid item xs={3} mt={5} mb={5} justifyContent="center" display="flex">
        <Stack alignItems="center">
          <Persona />

          <ProfileForm />
        </Stack>
      </Grid>
    </DefaultLayout>
  );
}

export default ProfilePage;

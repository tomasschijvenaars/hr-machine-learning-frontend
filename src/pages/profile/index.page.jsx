// Core
import { Typography, Stack, Grid } from "@mui/material";
import { ProfileForm } from "@forms";
import { Button } from "@components";

// Utils
import { useAuth } from "@hooks";

// Actions
import { DefaultLayout } from "@layouts";

function ProfileGeneralPage() {
  const { currentUser, logout } = useAuth();

  return (
    <DefaultLayout>
      <Grid item xs={3} mt={5} mb={5} justifyContent="center" display="flex">
        <Stack gap={1} alignItems="center">
          <Typography variant="h3">{currentUser.username}</Typography>

          <ProfileForm />

          <Button color="secondary" variant="contained" onClick={logout}>
            Logout
          </Button>
        </Stack>
      </Grid>
    </DefaultLayout>
  );
}

export default ProfileGeneralPage;

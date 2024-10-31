import { useForm } from "react-hook-form";
import { useState } from "react";

// Core
import { Grid, Stack, Tooltip,  useMediaQuery as muiUseMediaQuery } from "@mui/material";
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
import LogoutIcon from '@mui/icons-material/Logout';

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
     <Grid
  style={{
    position: 'absolute',
    top: isMobile ? 60 : 70,
    backgroundColor: '#F5F5F5',
    width: "100%",
    height: "150px",
  }}
>
</Grid>
<Grid direction="column">
      <Grid item xs={3} mt={10} mb={5} justifyContent="start" display="flex" position="relative" backgroundColor="white" width="fit-content" padding={4} border="1px solid lightgrey" borderRadius="10px">
      
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
            <Tooltip title="Logout">
            <Button onClick={logout} style={{color:"black"}} alt="test">
            <LogoutIcon/>
            </Button>
            </Tooltip>
          </Stack>
        </form>
      </Grid>
      <Grid item xs={3} mt={2} mb={5} justifyContent="start" display="flex" position="relative" backgroundColor="white" width="fit-content"   minWidth="100%" padding={4} border="1px solid lightgrey" borderRadius="10px">
      
      <form>
        <Stack
          gap={1}
          display="flex"
          sx={{ flexDirection: isMobile ? "column" : "row" }}
        >
          <TextField
            control={control}
            name="name"
            label="Name"
            value={currentUser?.username}
          />

          <TextField
            control={control}
            name="phonenumber"
            label="Phonenumber"
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
        </Stack>
      </form>
    </Grid>
    </Grid>
    </DefaultLayout>
  );
}

export default ProfileGeneralPage;

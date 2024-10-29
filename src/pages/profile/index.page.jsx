import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// Core
import { Grid, Stack, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { Button } from "@components";
import { useTheme } from "@mui/material/styles";

// Actions
import { getUser } from "@actions";
import DefaultLayout from "src/layouts/default.layout";
import { AppBar } from "src/layouts/app_bar/index";
import { TextField } from "src/components/field/index";

function ProfileGeneralPage() {
  const theme = useTheme();
  const router = useRouter();

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

   const handleSubmitForm = async values => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8000/register", values);
      
      if (data.success) {
        const { id } = data;

        console.log(id)
        
        router.push(`http://localhost:420/profile/${id}`)
      }
      setLoading(false)
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const { slug } = router.query;

  const [profile, setProfile] = useState();

  const isMobile = muiUseMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUser(slug);

        return setProfile(user);
      } catch (error) {
        console.error('Error loading candidate:', error);
      }
    };

    if (slug) getData();
  }, [slug]);

  return (
    <DefaultLayout>
      <Grid item xs={3} mt={5} mb={5} justifyContent="center" display="flex">
      
      <form>
        <Stack gap={1} display="flex" sx={{ flexDirection: isMobile ? "column" : "row" }}>
          <TextField
            control={control}
            name="Username"
            label="username"
          />

          <TextField 
            control={control}
            name="Password"
            label="password"
            type="password"
          />
          
        
        </Stack>
        <Stack mt={3} width="50%" justifyContent="end" display="flex">
          <Button
            color="secondary"
            variant="contained"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
            onClick={handleSubmit(handleSubmitForm)}
            
          >
            Wijzig gegevens
          </Button>
          </Stack>
      </form>

      </Grid>
    </DefaultLayout>
  );
}

export default ProfileGeneralPage;

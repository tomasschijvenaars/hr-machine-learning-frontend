import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import axios from "axios";

// Core
import { Stack } from "@mui/material";
import { Button } from "@components";
import { TextField } from "@fields";

function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false); 

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

          <TextField
            control={control}
            name="password_check"
            label="Password again"
            type="password"
          />
          
          <Button
            color="secondary"
            variant="contained"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
            onClick={handleSubmit(handleSubmitForm)}
          >
            Register
          </Button>
        </Stack>
      </form>
    </Fragment>
  );
}

export default RegisterForm;

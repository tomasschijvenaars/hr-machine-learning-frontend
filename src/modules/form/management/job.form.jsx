import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Fragment } from "react";
import axios from "axios";

// Core
import { Stack } from "@mui/material";
import { Button } from "@components";
import { TextField, PickerField, NumberField } from "@fields";

// Utils
import { jobValidation } from "./_validation";
import { setJobValues } from "./_default_values";
import { JOB_PATH } from "@constants/path.const";
import { JOB_SKILLS } from "@constants/job.const";
import { useAuth } from "@hooks";

function JobForm({ job }) {
  const router = useRouter();
  const { currentUser } = useAuth();

  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(jobValidation),
    defaultValues: setJobValues(job),
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      const { data } = await axios.post("http://localhost:8000/jobs", values);
      
      if (data.success) {
        const { id } = data;
        
        router.push(JOB_PATH(id))
      }
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
            name="name"
            label="Name"
          />

          <TextField 
            control={control}
            name="function"
            label="Function"
          />

          <NumberField 
            control={control}
            name="years_of_experience"
            label="Years of experience"
          />

          <PickerField
            control={control}
            name="skills"
            label="Skills"
            options={Object.values(JOB_SKILLS)}
            disableCloseOnSelect
            multiple
          />

          <NumberField 
            control={control}
            name="year_salary"
            label="Year salary"
          />
          
          <Button
            color="secondary"
            variant="contained"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
            onClick={handleSubmit(handleSubmitForm)}
          >
            Create
          </Button>
        </Stack>
      </form>
    </Fragment>
  );
}

export default JobForm;

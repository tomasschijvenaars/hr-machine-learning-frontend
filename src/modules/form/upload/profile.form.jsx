import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import axios from "axios";

// Core
import { UploadPdfField } from "@fields";
import { Button } from "@components";

// Utils
import { profileValidation } from "./_validation";
import { useAuth } from "@hooks";

function ProfileForm() {
  const { currentUser } = useAuth();

  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(profileValidation),
    mode: "onChange",
  });

  const handleSubmitForm = async (values) => {
    const mappedValues = {
      ...values,
      ...(values.pdf?.[0] ? { file: values.pdf[0] } : null),
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/users/${currentUser._id}/cv`,
        mappedValues,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      reset();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Fragment>
      <form>
        <UploadPdfField control={control} name="pdf" />
      </form>

      <Button
        color="secondary"
        variant="contained"
        disabled={!formState.isValid}
        loading={formState.isSubmitting}
        onClick={handleSubmit(handleSubmitForm)}
      >
        Confirm
      </Button>
    </Fragment>
  );
}

export default ProfileForm;

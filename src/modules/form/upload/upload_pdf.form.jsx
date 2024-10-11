import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import axios from "axios";

// Core
import { UploadPdfField } from "@fields";
import { Button } from "@components";

// Utils
import { uploadPdfValidation } from "./_validation";

function UploadPdfForm() {
  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(uploadPdfValidation),
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    const mappedValues = {
      file: values.pdf[0]
    }

    try {
      const response = await axios.post("http://localhost:8000/savepdf/", mappedValues, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      reset();

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Fragment>
        <form>
          <UploadPdfField 
            control={control}
            name="pdf"
          />
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

export default UploadPdfForm;

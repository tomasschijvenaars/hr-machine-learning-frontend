import * as yup from "yup";

/* Upload pdf validation */
export const uploadPdfValidation = yup.object({
  pdf: yup.mixed().required(),
});

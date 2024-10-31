import * as yup from "yup";

/* Upload pdf validation */
export const profileValidation = yup.object({
  pdf: yup.mixed().required(),
});

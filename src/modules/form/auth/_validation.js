import * as yup from "yup";

/* Register validation */
export const registerValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  password_check: yup.string().required(),
});

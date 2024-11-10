import * as yup from "yup";

/* Job validation */
export const jobValidation = yup.object({
  name: yup.string().required(),
  function: yup.string().required(),
  years_of_experience: yup.number().integer().required(),
  skills: yup.array().of(yup.string().required()),
  year_salary: yup.number().integer().required(),
});

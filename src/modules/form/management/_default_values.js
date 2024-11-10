/* Job form values */
export const setJobValues = job => ({
  name: job?.name,
  function: job?.function,
  years_of_experience: job?.years_of_experience,
  skills: job?.skills,
  year_salary: job?.year_salary,
});

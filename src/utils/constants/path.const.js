/* General pages */
export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";

export const PROFILE_PATH = "/profile";
export const ADMIN_PATH = "/admin"

/* Management pages */
export const JOBS_PATH = "/management/jobs/";
export const JOB_PATH = id => `/management/jobs/${id}`;
export const CREATE_JOB_PATH = "/management/jobs/create";
export const SELECT_CV_PATH = id => `/management/jobs/${id}/select-cv`;

//-------------------------------------------------------------
// Public Routes
//-------------------------------------------------------------
export const PUBLIC_ROUTES = [
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH
];

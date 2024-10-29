/* Profile default values */
export const setProfileValues = currentUser => ({
  username: currentUser?.username,
  password: currentUser?.password,
});

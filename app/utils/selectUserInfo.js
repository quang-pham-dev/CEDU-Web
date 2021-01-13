export const selectCurrentUser = userCognito => ({
  token: userCognito.signInUserSession.accessToken.jwtToken,
  username: userCognito.username,
  email: userCognito.attributes.email,
  phone_number: userCognito.attributes.phone_number,
});

export const selectCurrentUserContainer = userCognito => {
  let userMode = 'PUBLIC';
  if (userCognito.user_mode) {
    userMode = userCognito.user_mode;
  }
  return {
    id: userCognito.userDataKey,
    fullname: userCognito.attributes['custom:fullname'],
    user_mode: userMode,
  };
};

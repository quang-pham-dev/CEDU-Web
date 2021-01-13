export const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
    {
      label: 'Full Name',
      key: 'fullname',
      required: true,
      displayOrder: 4,
      type: 'fullname',
      custom: true,
    },
    {
      label: 'Phone Number',
      key: 'phone_number',
      required: true,
      displayOrder: 5,
      type: 'string',
    },
  ],
};

export default signUpConfig;


export const types = {
  SUBMIT_LOGIN_FORM: "SUBMIT_LOGIN_FORM"
};

export const actions = {
  submitLoginForm: (values) => ({
    type: types.SUBMIT_LOGIN_FORM,
    user: values.user,
    password: values.password
  })
};
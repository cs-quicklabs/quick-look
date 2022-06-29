import * as yup from "yup";

const hasEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export const validateRequiredEmail = () =>
yup
  .string()
  .trim()
  .email('Email is not valid')
  .required('Email is required')
  .matches(hasEmail, 'Email is not valid');
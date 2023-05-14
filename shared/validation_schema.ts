import * as Yup from 'yup';
import { ContactStepValues, CredentialsStepValues } from './types';

const REQUIRED_ERROR_TEXT = 'Required field';

/** Credentials step validation schema */
export const credentialsValidationSchema: Yup.ObjectSchema<CredentialsStepValues> =
  Yup.object({
    email: Yup.string()
      .defined()
      .email('Invalid email')
      .required(REQUIRED_ERROR_TEXT),
    password: Yup.string()
      .defined()
      .required(REQUIRED_ERROR_TEXT)
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .matches(/[0-9]/, 'Password requires at least one digit')
      .matches(/[a-zA-Z]/, 'Password requires at least one symbol'),
  });

/** Contact information step validation schema */
export const contactValidationSchema: Yup.ObjectSchema<ContactStepValues> =
  Yup.object({
    firstName: Yup.string().defined().required(REQUIRED_ERROR_TEXT),
    lastName: Yup.string().defined().required(REQUIRED_ERROR_TEXT),
    birthDate: Yup.string().defined().required(REQUIRED_ERROR_TEXT),
    phone: Yup.string().defined().required(REQUIRED_ERROR_TEXT),
    street: Yup.string().optional(),
    city: Yup.string().optional(),
    state: Yup.string().optional(),
    zip: Yup.string().optional(),
  });

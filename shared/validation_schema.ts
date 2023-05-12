import * as Yup from 'yup';

const REQUIRED_ERROR_TEXT = 'Required field';

/** Credentials step validation schema */
export const credentialValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required(REQUIRED_ERROR_TEXT),
  password: Yup.string().required(REQUIRED_ERROR_TEXT),
});

/** Contact information step validation schema */
export const contactValidationSchema = Yup.object({
  firstName: Yup.string().required(REQUIRED_ERROR_TEXT),
  lastName: Yup.string().required(REQUIRED_ERROR_TEXT),
});

/** CredentialsFormData interface inferred from the validation schema */
export interface CredentialsFormData
  extends Yup.InferType<typeof credentialValidationSchema> {}

/** ContactFormData interface inferred from the validation schema */
export interface ContactFormData
  extends Yup.InferType<typeof contactValidationSchema> {}

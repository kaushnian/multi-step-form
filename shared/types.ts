import { ObjectSchema } from 'yup';

/** Credentials step values */
export type CredentialsStepValues = {
  email: string;
  password: string;
};

/** Contact information step values */
export type ContactStepValues = {
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
};

/** All values of the form */
export type FormValues = CredentialsStepValues & ContactStepValues;

/** Form step component props */
export type StepProps = {
  validationSchema: ObjectSchema<CredentialsStepValues | ContactStepValues>;
};

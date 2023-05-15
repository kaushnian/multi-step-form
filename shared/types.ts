import { ObjectSchema } from 'yup';

/** Credentials step values */
export type CredentialsStepValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

/** Contact information step values */
export type ContactStepValues = {
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  hasAddress: boolean;
  street: string;
  city: string;
  state: string;
  zip: string;
};

/** Security step values */
export type SecurityStepValues = {
  question: string;
  answer: string;
};

/** All values of the form */
export type FormValues = CredentialsStepValues &
  ContactStepValues &
  SecurityStepValues;

/** Step component props */
export type StepProps = {
  validationSchema: ObjectSchema<
    CredentialsStepValues | ContactStepValues | SecurityStepValues
  >;
};

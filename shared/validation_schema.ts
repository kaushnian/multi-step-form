import * as Yup from 'yup';
import {
  ContactStepValues,
  CredentialsStepValues,
  SecurityStepValues,
} from './types';

/** Credentials step validation schema */
export const credentialsValidationSchema: Yup.ObjectSchema<CredentialsStepValues> =
  Yup.object({
    email: requiredStringSchema().email('Invalid email'),
    password: requiredStringSchema()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .matches(/[0-9]/, 'Password requires at least one digit')
      .matches(/[a-zA-Z]/, 'Password requires at least one symbol'),
    passwordConfirmation: requiredStringSchema().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  });

/** Contact information step validation schema */
export const contactValidationSchema: Yup.ObjectSchema<ContactStepValues> =
  Yup.object({
    firstName: requiredStringSchema(),
    lastName: requiredStringSchema(),
    birthDate: requiredStringSchema(),
    phone: requiredStringSchema(),
    hasAddress: Yup.bool().default(false),
    street: addressSchema(),
    city: addressSchema(),
    state: addressSchema(),
    zip: addressSchema(),
  });

/** Security step validation schema */
export const securityValidationSchema: Yup.ObjectSchema<SecurityStepValues> =
  Yup.object({
    question: requiredStringSchema(),
    answer: requiredStringSchema(),
  });

function requiredStringSchema() {
  return Yup.string().required('Required field');
}

/** Address fields become required when the hasAddress checkbox is set */
function addressSchema() {
  return Yup.string()
    .default('')
    .when('hasAddress', { is: true, then: () => requiredStringSchema() });
}

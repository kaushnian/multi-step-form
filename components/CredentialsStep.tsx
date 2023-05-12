import { Form, Formik } from 'formik';
import FormRow from './FormRow';
import TextField from './TextField';
import Button from '@mui/material/Button';
import { useFormContext } from '@/context/form_context';
import {
  CredentialsFormData,
  credentialValidationSchema,
} from '@/shared/validation_schema';

/** Credentials step component */
export default function CredentialsStep() {
  const {
    formData: { credentials, setCredentials },
    currentStep,
    setCurrentStep,
  } = useFormContext();

  function handleSubmit(data: CredentialsFormData) {
    setCredentials(data);
    setCurrentStep(currentStep + 1);
  }

  return (
    <Formik
      initialValues={credentials}
      validationSchema={credentialValidationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <FormRow>
          <TextField type="email" label="Email" name="email" required />
        </FormRow>

        <FormRow>
          <TextField
            type="password"
            label="Password"
            name="password"
            required
          />
        </FormRow>

        <Button variant="contained" type="submit">
          Next
        </Button>
      </Form>
    </Formik>
  );
}

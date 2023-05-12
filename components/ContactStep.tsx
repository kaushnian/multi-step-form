import { useFormContext } from '@/context/form_context';
import {
  ContactFormData,
  contactValidationSchema,
} from '@/shared/validation_schema';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import FormRow from './FormRow';
import TextField from './TextField';

/** Contact information step component */
export default function ContactStep() {
  const {
    currentStep,
    setCurrentStep,
    formData: { contact, setContact },
  } = useFormContext();

  function handleSubmit(data: ContactFormData) {
    setContact(data);
    setCurrentStep(currentStep + 1);
  }

  function handlePreviousClick(data: ContactFormData) {
    setContact(data);
    setCurrentStep(currentStep - 1);
  }

  return (
    <Formik
      initialValues={contact}
      validationSchema={contactValidationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form noValidate>
          <FormRow>
            <TextField label="First Name" name="firstName" required />
          </FormRow>

          <FormRow>
            <TextField label="Last Name" name="lastName" required />
          </FormRow>

          <Button variant="contained" type="submit">
            Next
          </Button>
          <Button
            variant="contained"
            onClick={() => handlePreviousClick(values)}
          >
            Previous
          </Button>
        </Form>
      )}
    </Formik>
  );
}

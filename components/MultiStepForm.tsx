import { FormValues, StepProps } from '@/shared/types';
import Box from '@mui/material/Box';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { ReactElement, useState } from 'react';
import FormActions from './FormActions';

type Props = {
  children: ReactElement<StepProps>[];
  submitting: boolean;
  onSubmit(values: FormValues): void;
};

const INITIAL_VALUES: FormValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  phone: '',
  hasAddress: false,
  street: '',
  city: '',
  state: '',
  zip: '',
  question: '',
  answer: '',
};

/**
 * Multi step form component.
 *
 * Wraps the provided children (form steps) into a Formik instance.
 * The form is "submitted" on each next step transition if all inputs of the
 * current step are valid. Each step's validation schema is provided by the
 * current step component.
 */
export default function MultiStepForm({
  children,
  onSubmit,
  submitting,
}: Props) {
  const [stepNumber, setStepNumber] = useState(0);

  const steps = React.Children.toArray(children);

  const step = steps[stepNumber];

  if (!React.isValidElement<StepProps>(step))
    throw new Error(`This is not a valid form step component`);

  const isFinalStep = stepNumber === steps.length - 1;

  const handlePreviousClick = () => {
    if (stepNumber > 0) setStepNumber(step => step - 1);
  };

  /** onSubmit handler, called on each next step transition */
  const handleSubmit = async (
    values: FormValues,
    { setTouched }: FormikHelpers<FormValues>
  ) => {
    if (isFinalStep) {
      onSubmit(values);
    } else {
      setStepNumber(step => step + 1);
      // Set all fields untouched
      setTouched({});
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={step.props.validationSchema}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <Box minHeight={400}>{step}</Box>

        <FormActions
          submitting={submitting}
          showPrevious={stepNumber > 0}
          showSubmit={isFinalStep}
          onPrevious={handlePreviousClick}
        />
      </Form>
    </Formik>
  );
}

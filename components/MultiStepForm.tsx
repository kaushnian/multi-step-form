import { FormValues, StepProps } from '@/shared/types';
import Box from '@mui/material/Box';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { ReactElement, useState } from 'react';
import FormActions from './FormActions';

type Props = {
  children: ReactElement<StepProps>[];
};

const INITIAL_VALUES: FormValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthDate: '',
};

/**
 * Multi step form component.
 *
 * Wraps the provided children (form steps) into a Formik instance.
 * The form is submitted on each next step transition if all inputs of the
 * current step are valid. Each step's validation schema is provided by the
 * current step component.
 */
export default function MultiStepForm({ children }: Props) {
  const [stepNumber, setStepNumber] = useState(0);

  const steps = React.Children.toArray(children);

  const step = steps[stepNumber];

  if (!React.isValidElement<StepProps>(step))
    throw new Error(`This is not a valid form step component`);

  const isFinalStep = stepNumber === steps.length - 1;

  function handlePreviousClick() {
    if (stepNumber > 0) setStepNumber(step => step - 1);
  }

  /** Called on each next step transition */
  async function handleSubmit(
    values: FormValues,
    { setTouched }: FormikHelpers<FormValues>
  ) {
    if (isFinalStep) {
      console.log('Main form submit', values);
    } else {
      setStepNumber(step => step + 1);
      // Set all fields untouched
      setTouched({});
    }
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={step.props.validationSchema}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <Box minHeight={300}>{step}</Box>

        <FormActions
          showPrevious={stepNumber > 0}
          showSubmit={isFinalStep}
          onPrevious={() => handlePreviousClick()}
        />
      </Form>
    </Formik>
  );
}

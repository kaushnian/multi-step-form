import { FormValues, StepProps } from '@/shared/types';
import Grid from '@mui/material/Unstable_Grid2';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import Checkbox from './Checkbox';
import TextField from './TextField';
import Typography from '@mui/material/Typography';
import StepTitle from './StepTitle';

/** Contact information step component */
export default function ContactStep(_: StepProps) {
  const { values, resetForm } = useFormikContext<FormValues>();

  // Reset the address fields if the checkbox unset
  useEffect(() => {
    if (!values.hasAddress)
      resetForm({
        values: {
          ...values,
          street: '',
          city: '',
          state: '',
          zip: '',
        },
      });
  }, [values.hasAddress]);

  return (
    <Grid container gap={3}>
      <Grid xs>
        <StepTitle>Personal information</StepTitle>

        <TextField label="First Name" name="firstName" required />
        <TextField label="Last Name" name="lastName" required />
        <TextField
          label="Date of birth"
          type="date"
          name="birthDate"
          required
        />
        <TextField label="Phone" type="tel" name="phone" required />

        <Checkbox name="hasAddress" label="Include address" />
      </Grid>

      <Grid xs>
        {values.hasAddress && (
          <>
            <StepTitle>Address</StepTitle>

            <TextField label="Street" name="street" required />
            <TextField label="City" name="city" required />
            <TextField label="State" name="state" required />
            <TextField label="Zip" name="zip" required />
          </>
        )}
      </Grid>
    </Grid>
  );
}

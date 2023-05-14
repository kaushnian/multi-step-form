import { StepProps } from '@/shared/types';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import AddressCheckbox from './AddressCheckbox';
import TextField from './TextField';

/** Contact information step component */
export default function ContactStep(_: StepProps) {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <Grid container gap={1}>
      <Grid xs>
        <TextField label="First Name" name="firstName" required />
        <TextField label="Last Name" name="lastName" required />
        <TextField
          label="Date of birth"
          type="date"
          name="birthDate"
          required
        />
        <TextField label="Phone" type="tel" name="phone" required />
      </Grid>

      <Grid xs>
        <AddressCheckbox checked={showAddress} onChange={setShowAddress} />

        {showAddress && (
          <>
            <TextField label="Street" name="street" />
            <TextField label="City" name="city" />
            <TextField label="State" name="state" />
            <TextField label="Zip" name="zip" />
          </>
        )}
      </Grid>
    </Grid>
  );
}

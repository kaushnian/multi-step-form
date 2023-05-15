import { StepProps } from '@/shared/types';
import TextField from './TextField';
import Box from '@mui/material/Box';
import StepTitle from './StepTitle';

/** Credentials step component */
export default function CredentialsStep(_: StepProps) {
  return (
    <Box width={0.5}>
      <StepTitle>Account information</StepTitle>
      <TextField type="email" label="Email" name="email" required />
      <TextField type="password" label="Password" name="password" required />
      <TextField
        type="password"
        label="Confirm Password"
        name="passwordConfirmation"
        required
      />
    </Box>
  );
}

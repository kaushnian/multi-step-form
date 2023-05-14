import { StepProps } from '@/shared/types';
import TextField from './TextField';

/** Credentials step component */
export default function CredentialsStep(_: StepProps) {
  return (
    <>
      <TextField type="email" label="Email" name="email" required />
      <TextField type="password" label="Password" name="password" required />
    </>
  );
}

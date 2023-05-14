import { StepProps } from '@/shared/types';
import TextField from './TextField';

/** Contact information step component */
export default function ContactStep(_: StepProps) {
  return (
    <>
      <TextField label="First Name" name="firstName" required />
      <TextField label="Last Name" name="lastName" required />
      <TextField label="Date of birth" type="date" name="birthDate" required />
    </>
  );
}

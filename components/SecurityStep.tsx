import { StepProps } from '@/shared/types';
import MenuItem from '@mui/material/MenuItem';
import Select from './Select';
import TextField from './TextField';
import StepTitle from './StepTitle';

/** Security step component */
export default function SecurityStep(_: StepProps) {
  return (
    <>
      <StepTitle>Security question</StepTitle>
      <Select label="Select question" name="question" required>
        <MenuItem value="question1">
          What is your mother's maiden name?
        </MenuItem>
        <MenuItem value="question2">
          What was the name of your first pet?
        </MenuItem>
      </Select>

      <TextField name="answer" label="Answer" required />
    </>
  );
}

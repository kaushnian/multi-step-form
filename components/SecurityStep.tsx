import { StepProps } from '@/shared/types';
import MenuItem from '@mui/material/MenuItem';
import Select from './Select';
import TextField from './TextField';

/** Security step component */
export default function SecurityStep(_: StepProps) {
  return (
    <>
      <Select label="Security question" name="question" required>
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

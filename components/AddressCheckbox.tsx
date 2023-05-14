import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

type Props = {
  checked: boolean;
  onChange(checked: boolean): void;
};

/** Address checkbox component */
export default function AddressCheckbox({ checked, onChange }: Props) {
  return (
    <FormGroup sx={{ height: 76 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={e => onChange(e.target.checked)}
          />
        }
        label="Enter Address Information"
      />
    </FormGroup>
  );
}

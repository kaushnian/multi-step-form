import Box from '@mui/material/Box';
import { Field, FieldAttributes } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';

export default function Checkbox(props: FieldAttributes<{ label: string }>) {
  return (
    <Field
      component={CheckboxWithLabel}
      type="checkbox"
      Label={{ label: props.label }}
      name={props.name}
    />
  );
}

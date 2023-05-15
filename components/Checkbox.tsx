import Box from '@mui/material/Box';
import { Field, FieldAttributes } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';

/** Mui Checkbox with label wrapped into a Formik's Field component */
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

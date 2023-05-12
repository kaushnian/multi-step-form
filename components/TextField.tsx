import { Field, FieldConfig, FieldAttributes } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import MuiTextField from '@mui/material/TextField';

/** Text field component */
export default function TextField(props: FieldAttributes<{ label: string }>) {
  return (
    <Field
      component={(props: TextFieldProps) => (
        <MuiTextField {...fieldToTextField(props)} />
      )}
      {...props}
    />
  );
}

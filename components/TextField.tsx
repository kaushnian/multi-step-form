import MuiTextField from '@mui/material/TextField';
import { Field, FieldAttributes } from 'formik';
import { TextFieldProps, fieldToTextField } from 'formik-mui';
import Box from '@mui/material/Box';

/** Text field component, wraps MUI TextField into Formik's Field */
export default function TextField(props: FieldAttributes<{ label: string }>) {
  return (
    <Box height={84}>
      <Field
        component={(props: TextFieldProps) => (
          <MuiTextField {...fieldToTextField(props)} />
        )}
        {...props}
      />
    </Box>
  );
}

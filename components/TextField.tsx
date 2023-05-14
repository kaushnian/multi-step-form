import Box from '@mui/material/Box';
import { Field, FieldAttributes } from 'formik';
import { TextField as FormikMuiTextField } from 'formik-mui';

/** Text field component, wraps MUI TextField into Formik's Field */
export default function TextField(props: FieldAttributes<{ label: string }>) {
  return (
    <Box height={76}>
      <Field size="small" component={FormikMuiTextField} {...props} />
    </Box>
  );
}

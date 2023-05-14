import Box from '@mui/material/Box';
import { Field, FieldAttributes } from 'formik';
import { Select as FormikMuiSelect } from 'formik-mui';

/** Select component, wraps MUI select into Formik's Field */
export default function Select(props: FieldAttributes<{ label: string }>) {
  return (
    <Box height={76}>
      <Field
        formControl={{ sx: { width: 400 }, size: 'small' }}
        component={FormikMuiSelect}
        {...props}
      >
        {props.children}
      </Field>
    </Box>
  );
}

import { FormValues } from '@/shared/types';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';

/** Form review and submit, last step component */
export default function ReviewStep() {
  const { values } = useFormikContext<FormValues>();
  return (
    <>
      <Typography variant="h6">
        Please review the information you entered:
      </Typography>
      <ul>
        {Object.entries(values).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </>
  );
}

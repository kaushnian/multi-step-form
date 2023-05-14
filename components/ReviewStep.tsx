import { FormValues } from '@/shared/types';
import { useFormikContext } from 'formik';

/** Form review and submit, last step component */
export default function ReviewStep() {
  const { values } = useFormikContext<FormValues>();
  return (
    <ul>
      {Object.entries(values).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
}

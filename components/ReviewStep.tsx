import { FormValues } from '@/shared/types';
import { useFormikContext } from 'formik';
import StepTitle from './StepTitle';

/** Review and submit step component */
export default function ReviewStep() {
  const { values } = useFormikContext<FormValues>();

  return (
    <>
      <StepTitle>Please review the information you entered:</StepTitle>

      <ul>
        {Object.entries(values).map(([key, value]) => (
          <li key={key}>
            {key}: {value.toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

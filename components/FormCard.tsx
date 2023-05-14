import { FormValues } from '@/shared/types';
import {
  contactValidationSchema,
  credentialsValidationSchema,
} from '@/shared/validation_schema';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ContactStep from './ContactStep';
import CredentialsStep from './CredentialsStep';
import MultiStepForm from './MultiStepForm';
import SubmitStep from './SubmitStep';

type Props = {
  onSuccess(): void;
};

/** Form card component */
export default function FormCard({ onSuccess }: Props) {
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await submit(values);

      if (response.status !== 200) throw await response.json();

      onSuccess();
    } catch (error) {
      // TODO: Handle errors
    }
  };

  return (
    <Card>
      <CardHeader title="Form" />

      <CardContent>
        <MultiStepForm onSubmit={handleSubmit}>
          <CredentialsStep validationSchema={credentialsValidationSchema} />
          <ContactStep validationSchema={contactValidationSchema} />
          <SubmitStep />
        </MultiStepForm>
      </CardContent>
    </Card>
  );
}

async function submit(payload: FormValues) {
  return fetch('https://httpstat.us/200', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
}

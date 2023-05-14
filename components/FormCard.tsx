import { FormValues } from '@/shared/types';
import {
  contactValidationSchema,
  credentialsValidationSchema,
  securityValidationSchema,
} from '@/shared/validation_schema';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ContactStep from './ContactStep';
import CredentialsStep from './CredentialsStep';
import MultiStepForm from './MultiStepForm';
import ReviewStep from './ReviewStep';
import { useState } from 'react';
import SecurityStep from './SecurityStep';

type Props = {
  onSuccess(): void;
};

/** Form card component */
export default function FormCard({ onSuccess }: Props) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);

    try {
      const response = await submit(values);
      if (response.status !== 200) throw await response.json();
      onSuccess();
    } catch (error) {
      // TODO: Handle errors
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader title="Create a new user account" />

      <CardContent>
        <MultiStepForm onSubmit={handleSubmit} submitting={submitting}>
          <CredentialsStep validationSchema={credentialsValidationSchema} />
          <ContactStep validationSchema={contactValidationSchema} />
          <SecurityStep validationSchema={securityValidationSchema} />
          <ReviewStep />
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

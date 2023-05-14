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

/** Form card component */
export default function FormCard() {
  return (
    <Card>
      <CardHeader title="Form" />

      <CardContent>
        <MultiStepForm>
          <CredentialsStep validationSchema={credentialsValidationSchema} />
          <ContactStep validationSchema={contactValidationSchema} />
          <SubmitStep />
        </MultiStepForm>
      </CardContent>
    </Card>
  );
}

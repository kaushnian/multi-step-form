import { useFormContext } from '@/context/form_context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ContactStep from './ContactStep';
import CredentialsStep from './CredentialsStep';
import SubmitStep from './SubmitStep';

const stepComponents = [<CredentialsStep />, <ContactStep />, <SubmitStep />];

/** Multi Step Form component */
export default function MultiStepForm() {
  const { currentStep } = useFormContext();

  return (
    <Card>
      <CardHeader title="Form" />

      <CardContent sx={{ minHeight: 400 }}>
        {stepComponents[currentStep]}
      </CardContent>
    </Card>
  );
}

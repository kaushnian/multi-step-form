'use client';

import MultiStepForm from '@/components/MultiStepForm';
import { FormContext } from '@/context/form_context';
import {
  ContactFormData,
  CredentialsFormData,
} from '@/shared/validation_schema';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [credentials, setCredentials] = useState<CredentialsFormData>({
    email: '',
    password: '',
  });
  const [contact, setContact] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
  });

  return (
    <Container maxWidth="sm" sx={{ p: 4 }}>
      <FormContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          formData: { credentials, setCredentials, contact, setContact },
        }}
      >
        <MultiStepForm />
      </FormContext.Provider>
    </Container>
  );
}

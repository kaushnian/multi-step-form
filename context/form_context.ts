import {
  ContactFormData,
  CredentialsFormData,
} from '@/shared/validation_schema';
import { createContext, useContext } from 'react';

/** Form state */
export type FormState = {
  currentStep: number;
  setCurrentStep(step: number): void;
  formData: {
    credentials: CredentialsFormData;
    setCredentials(data: CredentialsFormData): void;
    contact: ContactFormData;
    setContact(data: ContactFormData): void;
  };
};

/** Form state context */
export const FormContext = createContext<FormState | undefined>(undefined);

/** Form state context hook */
export const useFormContext = () => useContext(FormContext)!;

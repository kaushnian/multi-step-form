import { useFormContext } from '@/context/form_context';

/** Review and submit step component */
export default function SubmitStep() {
  const { formData } = useFormContext();
  console.log(formData);

  return <></>;
}

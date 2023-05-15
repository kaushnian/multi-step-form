import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

type Props = { children: string };

/** Form step title component */
export default function StepTitle({ children }: Props) {
  return (
    <Typography variant="subtitle1" mb={3}>
      {children}
    </Typography>
  );
}

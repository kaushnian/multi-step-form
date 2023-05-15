import Typography from '@mui/material/Typography';

type Props = { children: string };

/** Step title component */
export default function StepTitle({ children }: Props) {
  return (
    <Typography variant="subtitle1" mb={3}>
      {children}
    </Typography>
  );
}

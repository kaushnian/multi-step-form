import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

type Props = {
  submitting: boolean;
  showPrevious: boolean;
  showSubmit: boolean;
  onPrevious(): void;
};

/**
 * Form actions component.
 *
 * Conditionally renders Previous, Next, and Submit buttons. Disables the Submit
 * button when the `submitting` prop is true.
 */
export default function FormActions({
  submitting,
  showPrevious,
  showSubmit,
  onPrevious,
}: Props) {
  return (
    <CardActions sx={{ justifyContent: 'end', gap: 1 }}>
      {showPrevious && <Button onClick={onPrevious}>Previous</Button>}

      <Button
        variant="contained"
        type="submit"
        color={showSubmit ? 'success' : 'primary'}
        disabled={submitting}
      >
        {showSubmit ? 'Submit' : 'Next'}
      </Button>
    </CardActions>
  );
}

import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

type Props = {
  submitting: boolean;
  showPrevious: boolean;
  showSubmit: boolean;
  onPrevious(): void;
};

/** Form actions component */
export default function FormActions({
  submitting,
  showPrevious,
  showSubmit,
  onPrevious,
}: Props) {
  return (
    <CardActions sx={{ justifyContent: 'end', gap: 1 }}>
      {showPrevious && (
        <Button variant="contained" onClick={onPrevious}>
          Previous
        </Button>
      )}

      <Button variant="contained" type="submit" disabled={submitting}>
        {showSubmit ? 'Submit' : 'Next'}
      </Button>
    </CardActions>
  );
}

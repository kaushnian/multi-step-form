import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

type Props = {
  onNext: () => void;
  onPrevious: () => void;
};

export default function FormActions({ onPrevious, onNext }: Props) {
  function handlePrevious() {
    onPrevious();
  }

  function handleNext() {
    onNext();
  }

  return (
    <CardActions sx={{ justifyContent: 'end', gap: 1 }}>
      <Button variant="contained" onClick={handlePrevious}>
        Previous
      </Button>
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
      <button type="submit">Submit</button>
    </CardActions>
  );
}

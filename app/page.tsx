'use client';

import FormCard from '@/components/FormCard';
import SuccessCard from '@/components/SuccessCard';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ p: 4 }}>
      {!submitted ? (
        <FormCard onSuccess={() => setSubmitted(true)} />
      ) : (
        <SuccessCard />
      )}
    </Container>
  );
}

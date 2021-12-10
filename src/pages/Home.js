import * as React from 'react';
import Cards from '../components/Cards';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
    <Typography sx={{ marginLeft: 32, marginTop: -5 }}>
      <h1>Indicadores</h1>
    </Typography>
    <Cards />
    </>
    

  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardList from '../components/CardList';

export default function Home() {
  return (
    <>
    <Typography sx={{ marginLeft: 32, marginTop: -5 }}>
      <h1>Indicadores</h1>
    </Typography>
    <CardList />
    
    </>
    

  );
}

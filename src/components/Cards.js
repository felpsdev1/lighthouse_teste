import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, marginLeft: 50, width: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <ListItemIcon>
        <ShoppingCartIcon />
        Vendas
        </ListItemIcon>
        
        </Typography>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
          245
        </Typography> 
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center'}}>
        
        <ArrowDropUpIcon sx={{ color: 'green', marginLeft: 5 }} />
          12,45%
          <ListItemIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}



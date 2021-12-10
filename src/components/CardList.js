import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={2.5}>
          <Card sx={{ minWidth: 275, marginLeft: 32, width: 50 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <ListItemIcon>
              <ShoppingCartIcon sx={{ color: '#1976d2' }} />
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
        </Grid>
        <Grid item xs={6} md={2.5}>
        <Card sx={{ minWidth: 275, marginLeft: 32, width: 50 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <ListItemIcon>
                <PaidIcon sx={{ color: '#4caf50' }} />
                    Faturamento
                </ListItemIcon>
                
                </Typography>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    R$12.267.943
                </Typography> 
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center'}}>
                
                <ArrowDropUpIcon sx={{ color: 'green', marginLeft: 5 }} />
                    4,67%
                  <ListItemIcon />
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ minWidth: 275, marginLeft: 32, width: 50 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <ListItemIcon>
                <AutorenewIcon sx={{ color: '#ffc107' }} />
                    Conversão
                </ListItemIcon>
                
                </Typography>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    12%
                </Typography> 
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center'}}>
                
                <ArrowDropDownIcon sx={{ color: 'red', marginLeft: 5 }} />
                    21,67%
                  <ListItemIcon />
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} md={2}>
        <Card sx={{ minWidth: 275, marginLeft: 6.85, width: 50 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <ListItemIcon>
                <PersonOutlineIcon sx={{ color: '#d500f9' }} />
                    Leads
                </ListItemIcon>
                
                </Typography>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    432
                </Typography> 
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center'}}>
                
                <ArrowDropUpIcon sx={{ color: 'green', marginLeft: 5 }} />
                    11,34%
                  <ListItemIcon />
                </Typography>
              </CardContent>
            </Card>
        </Grid>  
      </Grid>
    </Box>
  );
}
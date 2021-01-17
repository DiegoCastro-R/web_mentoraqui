import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { useStyles } from './styles';
import Logo from '../../assets/logoUPsf.png';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.mainGrid}>
      <CssBaseline />
      <Navbar />
      <Grid
        container
        xl
        direction="column"
        justify="space-between"
        style={{ background: '#2e2e2e' }}
        alignItems="center"
      >
        <img src={Logo} alt="logo" />
        <Typography variant="h5" display="block" style={{ color: 'white', marginTop: '-60px' }}>
          O site que conecta Mentores e
        </Typography>
        <Typography variant="h4" paragraph display="block" style={{ color: 'white' }}>
          Jovens Talentos!
        </Typography>
        <Typography variant="h6" paragraph display="block" style={{ color: 'white' }}>
          Faça parte desta rede!
        </Typography>
        <Button variant="contained" style={{ background: '#1D6C6C', color: '#ffff' }}>
          Cadastre-se
        </Button>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;

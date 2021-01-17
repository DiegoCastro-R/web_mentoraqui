import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import Logo from '../../assets/logoUPsf.png';

const Home: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', margin: 0, padding: 0, flex: 1, background: '#000000' }}>
      <Navbar />
      <Grid
        container
        xs
        direction="column"
        justify="space-between"
        alignItems="center"
        style={{ marginBottom: '16px' }}
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
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;

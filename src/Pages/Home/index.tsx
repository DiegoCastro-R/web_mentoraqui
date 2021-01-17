import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles } from './styles';
import Logo from '../../assets/logoUPsf.png';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainGrid}>
        <CssBaseline />
        {!isMobile ? <Navbar /> : <NavBarMobile />}

        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ background: '#2e2e2e', minHeight: '90vh' }}
          alignItems="center"
        >
          <img src={Logo} alt="logo" />
          {isMobile && (
            <Grid container direction="column" justify="space-between" alignItems="center">
              <Typography variant="h4" align="center" style={{ color: 'white', marginTop: '-60px' }}>
                O site que conecta Mentores e
              </Typography>
              <Typography variant="h4" style={{ color: 'white', fontSize: '30px' }}>
                Jovens Talentos!
              </Typography>
              <Typography variant="h6" style={{ color: 'white', marginBottom: '20px' }}>
                Faça parte desta rede!
              </Typography>
            </Grid>
          )}
          {!isMobile && (
            <Grid container direction="column" justify="space-between" alignItems="center">
              <Typography variant="h3" display="block" style={{ color: 'white', marginTop: '-60px' }}>
                O site que conecta Mentores e
              </Typography>
              <Typography variant="h3" style={{ color: 'white' }}>
                Jovens Talentos!
              </Typography>
              <Typography variant="h5" style={{ color: 'white', marginBottom: '20px' }}>
                Faça parte desta rede!
              </Typography>
            </Grid>
          )}

          <Button variant="contained" style={{ background: '#1D6C6C', color: '#ffff', width: '300px', height: '60px' }}>
            Cadastre-se
          </Button>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles } from './styles';
import Logo from '../../assets/logoUPsf.png';

const NotFound: React.FC = () => {
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

          <Grid container direction="column" justify="space-between" alignItems="center">
            <Typography variant="h4" align="center" style={{ color: 'white', marginTop: '-60px' }}>
              404 - Not Found
            </Typography>
          </Grid>

          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            style={{ background: '#1D6C6C', color: '#ffff', width: '300px', height: '60px' }}
          >
            Voltar a Home
          </Button>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;

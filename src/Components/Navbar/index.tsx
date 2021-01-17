import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Toolbar, AppBar } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import { useStyles } from './styles';

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ background: '#2e2e2e' }}>
        <Toolbar>
          <img src={Logo} style={{ width: '80px', height: 'auto' }} alt="logo" />
          <Grid
            style={{ marginLeft: '5rem', marginBottom: '15px' }}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography component={RouterLink} to="/" variant="h6" className={classes.title}>
              Home
            </Typography>
            <Typography component={RouterLink} to="/about" variant="h6" className={classes.title}>
              Sobre
            </Typography>
            <Typography component={RouterLink} to="/contactus" variant="h6" className={classes.title}>
              Contato
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo.png';
import { useStyles } from './styles';

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ background: '#2e2e2e' }}>
        <Toolbar>
          <img src={Logo} style={{ width: '80px', height: 'auto' }} alt="logo" />
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Sobre
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contato
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;

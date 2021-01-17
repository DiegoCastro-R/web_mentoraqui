import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu } from '@material-ui/core';

import Logo from '../../assets/logo.png';
import { useStyles } from './styles';

const NavBarMobile: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ background: '#2e2e2e' }}>
        <Toolbar>
          <img src={Logo} style={{ width: '80px', height: 'auto' }} alt="logo" />

          <div style={{ marginLeft: '240px', marginTop: '-30px' }}>
            <IconButton onClick={handleClick}>
              <MenuIcon style={{ color: '#fff', height: '80px' }} />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem />
              <Typography variant="h4" className={classes.title}>
                Home
              </Typography>
              <MenuItem />
              <Typography variant="h4" className={classes.title}>
                Sobre
              </Typography>
              <MenuItem />
              <Typography variant="h4" className={classes.title}>
                Contato
              </Typography>
              <MenuItem />
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBarMobile;

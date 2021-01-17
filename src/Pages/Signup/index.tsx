import React from 'react';
import { Button, Grid, TextField, Card, CardContent, Select, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles, BootstrapInput } from './styles';

const Singup: React.FC = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
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
          {isMobile && <Grid container direction="column" justify="space-between" alignItems="center" />}
          {!isMobile && (
            <Card className={classes.rootCard} variant="outlined">
              <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container direction="column" justify="space-between" alignItems="center">
                    <TextField className={classes.Text} id="fullName" label="Nome Completo" variant="outlined" />
                    <TextField className={classes.Text} id="email" label="Email" variant="outlined" />
                    <TextField className={classes.Text} id="telephone" label="Telefone" variant="outlined" />
                    <Select
                      className={classes.Select}
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value="">
                        <em> </em>
                      </MenuItem>
                      <MenuItem value={1}>Jovem Talento</MenuItem>
                      <MenuItem value={2}>Mentor(a)</MenuItem>
                    </Select>
                    <TextField
                      className={classes.Text}
                      id="password"
                      type="password"
                      label="Senha"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid direction="row" justify="center" alignItems="center">
                    <Button
                      variant="contained"
                      style={{
                        background: '#1D6C6C',
                        color: '#ffff',
                        width: '200px',
                        height: '50px',
                        marginRight: '80px',
                        marginLeft: '10px',
                      }}
                    >
                      Cadastrar
                    </Button>

                    <Button
                      component={RouterLink}
                      to="/"
                      color="secondary"
                      variant="contained"
                      style={{ color: '#ffff', width: '200px', height: '50px', margin: '10px' }}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          )}

          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Singup;

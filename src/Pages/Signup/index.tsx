import React from 'react';
import { Button, Grid, TextField, Card, CardContent, Select, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles, BootstrapInput } from './styles';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';

const Singup: React.FC = () => {
  const classes = useStyles();
  const notify = (message: string) => {
    toast(message);
  };
  interface formValues {
    fullName: string;
    email: string;
    phone: string;
    userCategory: string;
    password: string;
  }
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      userCategory: '',
      password: '',
    },
    onSubmit: (values: formValues) => {
      api.post('/users', values).then(() => {
        notify('Success');
      });
    },
  });
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
                <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
                  <Grid container direction="column" justify="space-between" alignItems="center">
                    <TextField
                      className={classes.Text}
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      id="fullName"
                      label="Nome Completo"
                      variant="outlined"
                    />
                    <TextField
                      className={classes.Text}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      id="email"
                      label="Email"
                      variant="outlined"
                    />
                    <TextField
                      className={classes.Text}
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      id="phone"
                      label="Telefone"
                      variant="outlined"
                    />
                    <Select
                      className={classes.Select}
                      labelId="demo-simple-select-filled-label"
                      id="userCategory"
                      name="userCategory"
                      value={formik.values.userCategory}
                      onChange={formik.handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value="">
                        <em> </em>
                      </MenuItem>
                      <MenuItem onChange={formik.handleChange} value={1}>
                        Jovem Talento
                      </MenuItem>
                      <MenuItem onChange={formik.handleChange} value={2}>
                        Mentor(a)
                      </MenuItem>
                    </Select>
                    <TextField
                      className={classes.Text}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      type="password"
                      label="Senha"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid direction="row" justify="center" alignItems="center">
                    <Button
                      type="submit"
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
        <ToastContainer />
      </Grid>
    </>
  );
};

export default Singup;

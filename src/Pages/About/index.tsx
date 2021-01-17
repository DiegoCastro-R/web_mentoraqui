import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles } from './styles';
import Logo from '../../assets/logo.png';

const About: React.FC = () => {
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
            <Grid container direction="row" justify="space-between" alignItems="center">
              <img src={Logo} style={{ width: '480px' }} alt="logo" />
              <Typography variant="h6" display="inline" style={{ color: 'white', marginRight: '100px' }}>
                Mentoraqui nasceu com a missão de conexão com propósito.
                <br /> É conectar jovens talentos com mentores
                <br /> que possuem experiência em diferentes mercados de trabalho,
                <br /> vivências e histórias, com o objetivo <br />
                de criarmos caminhos diferentes para transformação!
                <br />
                Após as mentorias indicamos instituições de ensino conveniadas,
                <br /> para que os jovens possam se qualificar na área desejada, <br />
                e/ou buscar emprego nas áreas que mais demandam mão de obra. <br />A plataforma tem como público-alvo
                jovens
                <br /> que estão em busca do primeiro emprego, <br />
                desenvolvimento de carreira e/ou iniciar o ensino superior / técnico.
              </Typography>
            </Grid>
          )}

          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default About;

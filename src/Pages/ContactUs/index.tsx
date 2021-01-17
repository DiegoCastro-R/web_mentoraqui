import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, IconButton,Grid, Typography,
  Card,CardMedia,CardContent,CardActions } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isMobile } from 'react-device-detect';
import Navbar from '../../Components/Navbar';
import NavBarMobile from '../../Components/NavbarMobile';
import Footer from '../../Components/Footer';
import { useStyles } from './styles';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const ContactUs: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainGrid}>
        <CssBaseline />
        {!isMobile ? <Navbar /> : <NavBarMobile />}

        <Grid
          container
          direction="column"

          style={{ background: '#2e2e2e' }}
          alignItems="center"
        >
  <Grid
          container
          direction="row"
          justify="space-evenly"
          style={{ background: '#2e2e2e', minHeight: '78vh' }}
          alignItems="center"
        >
         <Grid item  >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ana Paula Almeida
                    </Typography>
                    <Typography>
                      <br/>
                      UX/UI Desing
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/anaschran/'}} color="primary">
                      <LinkedInIcon ></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:anaschran28@gmail.com`}>
                      <MailIcon/>
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Diego Rodrigues
                    </Typography>
                    <Typography>
                    Engenharia / Desenvolvimento
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/diegocastro-r/'}} color="primary">
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:diego.rodrigues@growtisolutions.com`}>
                      <MailIcon/>
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>
              <Grid >
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Gabriel Pereira
                    </Typography>
                    <Typography>
                      Engenharia / Desenvolvimento
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/gabriel-ernesto-barboza-pereira-6933621a2/'}} color="primary">
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:gabriel.enerto2001@gmail.com`}>
                      <MailIcon/>
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lethicia Silva
                    </Typography>
                    <Typography>
                    <br/>
                      Marketing
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/lethicia-moura-307183ba/'}} color="primary">
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:lethmouras@gmail.com`}>
                      <MailIcon/>
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Scarlet de Araujo
                    </Typography>
                    <Typography>
                    <br/>
                      Business
                    </Typography>
                  </CardContent>
                  <CardActions>

                  <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/scarlet-ara%C3%BAjo-61160852/'}} color="primary">
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:scarlet.araujo@gmail.com`}>
                      <MailIcon/>
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>
              <Grid >

                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Simone Miquelin
                    </Typography>
                    <Typography>
                      Espcialista RH/Educação
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid>
                    <IconButton size="small" onClick={() => {window.location.href='https://www.linkedin.com/in/simone-miquelin/'}} color="primary">
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton size="small" color="primary" target="_top" rel="noopener noreferrer" href={`mailto:simonemiquelin@yahoo.com`}>
                      <MailIcon/>
                    </IconButton>
                    </Grid>
                  </CardActions>
                </Card>

              </Grid>
              </Grid>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;

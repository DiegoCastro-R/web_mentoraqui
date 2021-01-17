import styled from 'styled-components';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      width: '100vw',
      flex: 1,
      spacing: 0,
      justify: 'space-around',
    },
    root: {
      flexGrow: 1,
    },
    rootCard: {
      flexGrow: 1,
      padding: '20px',
      margin: '20px',
      background: '#ffff',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    Text: {
      width: '40vw',
      marginBottom: '20px',
    },
    TextMobile: {
      width: '80vw',
      marginBottom: '20px',
    },
    Select: {
      width: '40vw',
      marginBottom: '20px',
    },
    SelectMobile: {
      width: '80vw',
      marginBottom: '20px',
    },
  })
);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      height: '30px',
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  margin-bottom: 0;
`;

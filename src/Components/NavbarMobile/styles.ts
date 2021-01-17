import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import MuiMenuItem from '@material-ui/core/MenuItem';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {},
    title: {
      fontSize: '16px',
      margin: '30px',
      textAlign: 'center',
      textDecoration: 'none',
      textJustify: 'inherit',
      color: '#1D6C6C',
    },
    titleWeb: {
      fontSize: '16px',
      marginRight: theme.spacing(2),
    },
  })
);

export const MenuItem = withStyles({
  root: {
    justifyContent: 'center',
  },
})(MuiMenuItem);

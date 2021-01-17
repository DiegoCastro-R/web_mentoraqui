import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {},
    title: {
      fontSize: '16px',
      margin: '30px',
    },
    titleWeb: {
      fontSize: '16px',
      marginRight: theme.spacing(2),
    },
  })
);

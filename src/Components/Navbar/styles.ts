import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {},
    title: {
      fontSize: '16px',
      margin: '30px',
    },
  })
);

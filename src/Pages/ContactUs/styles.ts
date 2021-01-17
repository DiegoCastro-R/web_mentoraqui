import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      margin: 0,
      padding: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  margin-bottom: 0;
`;

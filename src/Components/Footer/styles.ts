/* eslint-disable import/no-unresolved */

import styled from 'styled-components';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BGImage from '../../assets/background-footer.png';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${BGImage})`,
      maxWidth: '100vw',
      marginBottom: '0',
      marginTop: '27px',
    },
    menuButton: {},
    title: {
      fontSize: '16px',
      margin: '30px',
    },
  })
);
export const Container = styled.div`
  backgroun: url:(${BGImage});
  background-size: cover;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const LinkItem = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

import React from 'react';
import { Grid } from '@material-ui/core';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} direction="row" justify="space-between" container alignItems="center">
      <Grid style={{ marginLeft: '180px' }} xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <img src={image2} style={{ width: '200px' }} alt="1" />
        </ul>
      </Grid>
      <Grid xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <img src={image1} style={{ width: '200px' }} alt="1" />
        </ul>
      </Grid>
      <Grid xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <img src={image3} style={{ width: '200px' }} alt="1" />
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;

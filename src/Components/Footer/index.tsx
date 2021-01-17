import React from 'react';
import { Grid, ListItem } from '@material-ui/core';

import { LinkItem } from './styles';

const Footer: React.FC = () => {
  const baseUrl = 'http://p2ptrading.com.br/';
  return (
    <Grid
      style={{ background: 'grey', margingBottom: 0, marginTop: '20px' }}
      direction="row"
      justify="space-between"
      container
      alignItems="center"
    >
      <Grid style={{ marginLeft: '230px' }} xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>Home</LinkItem>
          </ListItem>
        </ul>
      </Grid>
      <Grid xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>HOME</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>FAQ</LinkItem>
          </ListItem>
        </ul>
      </Grid>
      <Grid xs justify="space-between" direction="row" container alignItems="center">
        <ul>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>HOME</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>HOME</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href={`${baseUrl}Home`}>FAQ</LinkItem>
          </ListItem>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;

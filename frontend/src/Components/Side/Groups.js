import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  groups: {
    marginTop: '2.5rem',
  },
  group: {
    marginBottom: '1.8rem',
  },
  tag: {
    textAlign: 'center',
    width: 50,
    padding: 5,
    borderRadius: '20%',
    marginRight: '1rem',
    backgroundColor: '#3C393F',
  },
  tagName: {
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    color: '#828282',
  },
  button: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '0',
  },
}));

const Group = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.group} item xs={12} container direction='row' alignItems='center'>
      <Grid item xs={1} />
      <Button onClick={props.switch} className={classes.button}>
        <Paper className={classes.tag}>
          <Typography className={classes.tagName} variant='h5'>
            XY
          </Typography>
        </Paper>
        <Typography className={classes.name} variant='h5'>
          Group Name
        </Typography>
      </Button>
    </Grid>
  );
};

const Groups = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} container direction='row'>
      <Grid className={classes.groups} item xs={12} container direction='column'>
        <Group switch={props.switch} />
        <Group />
        <Group />
      </Grid>
    </Grid>
  );
};

export default Groups;

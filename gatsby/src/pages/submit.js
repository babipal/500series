import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import globalStyles from '../styles/global';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
}));

export default function SubmitPage() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <p>Coming Soon!</p>
    </div>
  );
}

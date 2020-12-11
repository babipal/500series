import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 1.5),
    borderTop: '1px solid black',
    background: '#eee',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>500 Series {new Date().getFullYear()}</p>
    </footer>
  );
}

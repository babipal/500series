import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  body: { padding: theme.spacing(1) },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.body}>{children}</div>
      <Footer />
    </div>
  );
}

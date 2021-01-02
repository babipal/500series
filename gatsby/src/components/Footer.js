import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 1.5),
    borderTop: '1px solid black',
    background: '#13100f',
    color: '#fafafa',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& li': {
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
      },
    },
  },
  link: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 1.5),
    color: '#fafafa',
    '&:hover': { background: '#333' },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>500Series.org {new Date().getFullYear()}</p>
      <ul className={classes.ul}>
        <li>
          <Link
            color="textPrimary"
            to="/"
            underline="none"
            className={classes.link}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            color="textPrimary"
            to="/about/"
            underline="none"
            className={classes.link}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            color="textPrimary"
            to="/contact/"
            underline="none"
            className={classes.link}
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

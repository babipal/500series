import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ul: {
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
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
    transition: 'all 0.3s ease-in',
    fontWeight: '700',
    borderRadius: 4,
    '&:hover': { background: '#f0f0f0' },
  },
}));

export default function LeftLinks({ closer = () => {} }) {
  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      <li>
        <Link
          color="textPrimary"
          to="/modules/"
          underline="none"
          className={classes.link}
          onClick={() => closer(false)}
        >
          Modules
        </Link>
      </li>
      <li>
        <Link
          color="textPrimary"
          to="/companies/"
          underline="none"
          className={classes.link}
          onClick={() => closer(false)}
        >
          Companies
        </Link>
      </li>

      <li>
        <Link
          color="textPrimary"
          to="/articles"
          underline="none"
          className={classes.link}
          onClick={() => closer(false)}
        >
          Articles
        </Link>
      </li>

      <li>
        <Link
          color="textPrimary"
          to="/reviews"
          underline="none"
          className={classes.link}
          onClick={() => closer(false)}
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          color="textPrimary"
          to="/submit"
          underline="none"
          className={classes.link}
          onClick={() => closer(false)}
        >
          Submit a Module
        </Link>
      </li>
    </ul>
  );
}

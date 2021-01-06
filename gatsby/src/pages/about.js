import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import globalStyles from '../styles/global';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
}));

export default function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <p>
        Hi, my name is Babi Pal, I created this website because I wanted to
        create a central resource for all things related to the 500 Series pro
        audio hardware. It seems like new options are being released for the
        format every day, and it would be able to find everything in one place.
      </p>
      <p>
        I am a web developer focusing primarily on the front end. This site was
        developed with <a href="https://www.gatsbyjs.com/">Gatsby</a>,{' '}
        <a href="https://sanity.io">Sanity.io</a>,{' '}
        <a href="https://reactjs.org/">ReactJS</a> and{' '}
        <a href="https://material-ui.com/">Material-UI</a>. The source code is
        availble on my <a href="https://github.com/babipal/500series">Github</a>
        .
      </p>
      <p>
        I have been recording music for 25+ years, and release my music as{' '}
        <a
          href="https://flightfeathers.bandcamp.com/album/in-the-darkness-of-my-night"
          target="_blank"
          rel="noreferrer"
        >
          Flight Feathers
        </a>
        .
      </p>
    </div>
  );
}

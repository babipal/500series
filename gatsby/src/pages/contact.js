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
      <h3>Contact Us</h3>

      <p>
        Please get in touch with any questions or concerns. If you are product
        manufacturer and would not like your items listed on this site, please
        let us know.
      </p>

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

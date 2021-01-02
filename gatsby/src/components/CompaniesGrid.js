import React from 'react';
import Img from 'gatsby-image';
import SanityImage from 'gatsby-plugin-sanity-image';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    listStyle: 'none',
    flexDirection: 'column',
  },
  listItem: { padding: theme.spacing(1) },
  link: { display: 'flex', alignItems: 'center' },
  img: {
    width: 50,
    marginRight: theme.spacing(1),
  },
}));

/*
gatsby-image vs. gatsby-plugin-sanity-image
          <SanityImage
            {...product.mainImage}
            height={300}
            width={300}
            alt={product.name}
            fit="clip"
          />



        <Img fluid={product.mainImage.asset.fluid} alt={product.name} />
*/

export default function CompaniesGrid({ companies = [] }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3">Companies</Typography>
      </Grid>
      <Grid item xs={12}>
        <ul className={classes.list}>
          {companies.map((company) => (
            <li key={company.id} className={classes.listItem}>
              <Link
                className={classes.link}
                to={`/company/${company.slug.current}/`}
              >
                <SanityImage
                  {...company.mainImage}
                  height={50}
                  width={50}
                  alt={company.name}
                  className={classes.img}
                />
                {company.name}
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

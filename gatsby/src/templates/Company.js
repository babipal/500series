import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ProductGrid from '../components/ProductGrid';
import globalStyles from '../styles/global';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
  thumbnail: {
    padding: 0,
    margin: theme.spacing(1),
    border: '1px solid #ccc',
  },
  breadcrumbLink: { display: 'flex' },
  icon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    width: 22,
    height: 22,
  },
}));

export default function SingleCompany({ data }) {
  const classes = useStyles();
  const { company, products } = data;
  const { name, id, url, description, mainImage, slug } = company;

  return (
    <Grid container className={classes.contentContainer}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.breadcrumbLink} color="textSecondary" to="/">
          {' '}
          <HomeIcon className={classes.icon} /> Home
        </Link>
        <Link
          className={classes.breadcrumbLink}
          color="textSecondary"
          to="/companies"
        >
          <BusinessIcon className={classes.icon} />
          Companies
        </Link>
        <Typography color="textPrimary">{name}</Typography>
      </Breadcrumbs>
      <Grid item xs={12}>
        <Typography variant="h2">{name}</Typography>
      </Grid>

      <Grid item xs={12}>
        {description.split('\n\n').map((paragraph, index) => (
          <Typography key={index} variant="body2" paragraph>
            {paragraph}
          </Typography>
        ))}
      </Grid>
      <Grid>
        <ProductGrid products={products.nodes} showFilter={false} />
      </Grid>
    </Grid>
  );
}

export const query = graphql`
  query($slug: String!) {
    company: sanityCompany(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      mainImage {
        ...ImageWithPreview
      }
      url
      description
    }
    products: allSanityProduct(
      filter: { company: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        mainImage {
          ...ImageWithPreview
        }
        company {
          name
        }
      }
    }
  }
`;

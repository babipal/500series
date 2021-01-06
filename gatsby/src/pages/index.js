import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProductGrid from '../components/ProductGrid';

const useStyles = makeStyles((theme) => ({
  // TODO - this is ugly, need to implement "@sanity/image-url" and get the
  // hero image url to use a background2
  hero: {},
  fullWidthImage: { width: '100vw', marginTop: theme.spacing(-2) },
  heroHeaders: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'rgba(0,0,0,.8)',
      display: 'table',
      color: 'white',
      padding: theme.spacing(2),
      margin: '0 auto',
      position: 'relative',
      top: -200,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  latestModules: { marginTop: theme.spacing(2), padding: theme.spacing(1) },
}));

export default function HomePage({ data }) {
  const classes = useStyles();
  const { homepageContent, products } = data;
  const { primaryImage, title, subtitle } = homepageContent;
  return (
    <>
      <div className={classes.hero}>
        <SanityImage
          {...primaryImage}
          height={200}
          alt={title}
          className={classes.fullWidthImage}
        />
        <Typography variant="h3" className={classes.heroHeaders} align="center">
          {title}
        </Typography>
        <Typography variant="h4" className={classes.heroHeaders} align="center">
          {subtitle}
        </Typography>
      </div>
      <div className={classes.latestModules}>
        <Typography variant="h3" align="center">
          Latest Modules
        </Typography>
        <ProductGrid products={products.nodes} showFilter={false} />
      </div>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    homepageContent: sanityContentBlock(name: { eq: "Homepage" }) {
      id
      name
      title
      primaryImage {
        ...ImageWithPreview
      }
      text {
        children {
          text
        }
      }
      subtitle
    }
    products: allSanityProduct(
      sort: { fields: _createdAt, order: DESC }
      limit: 4
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

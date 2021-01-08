import React from 'react';
import { graphql } from 'gatsby';
import imageUrlBuilder from '@sanity/image-url';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProductGrid from '../components/ProductGrid';

const useStyles = makeStyles((theme) => ({
  // TODO - pass url to this css so background image is not inline
  hero: {
    width: '100vw',
    marginTop: theme.spacing(-2),
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 400,
    [theme.breakpoints.up('sm')]: {
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      padding: 120,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '100% 100px',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      paddingTop: 120,
    },
  },
  fullWidthImage: { width: '100vw', marginTop: theme.spacing(-2) },
  heroHeaders: {
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'rgba(0,0,0,.8)',
      display: 'inline',
      color: 'white',
      padding: theme.spacing(2),
      margin: '0 auto',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  latestModules: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    '& h3': { fontSize: '2rem', margin: theme.spacing(2) },
  },
}));

// TODO - get project and dataset into a config,
// and ultimately wrap this thing in a plugin
const builder = imageUrlBuilder({
  projectId: 'sj9xx1i9',
  dataset: 'production',
});

function urlFor(source) {
  return builder.image(source);
}

export default function HomePage({ data }) {
  const classes = useStyles();
  const { homepageContent, products } = data;
  const { primaryImage, title, subtitle } = homepageContent;
  const imgUrl = urlFor(primaryImage).height(200).quality(35).url();

  return (
    <>
      <div
        className={classes.hero}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
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

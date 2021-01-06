import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import SanityImage from 'gatsby-plugin-sanity-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import globalStyles from '../styles/global';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
  breadcrumbLink: { display: 'flex' },
  icon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    width: 22,
    height: 22,
  },
  // to make a square wrapper
  // mainImageWrap: {
  //  width: '100%',
  //  paddingBottom: '100%',
  //  position: 'relative',
  // },
  mainImage: {
    height: '100%',
    width: '100%',
    maxHeight: 600,
    objectFit: 'contain',
    // position: 'absolute',
  },
  thumbnailButton: {
    padding: 0,
    margin: theme.spacing(1),
    border: '1px solid #ccc',
    backgroundColor: 'none',
    height: 100,
    width: 100,
    '&:focus': {
      outline: '2px solid black',
    },
  },
  thumbnail: {
    height: 98,
    width: 98,
    objectFit: 'contain',
  },
}));

export default function SingleModule({ data }) {
  const classes = useStyles();
  const { module } = data;
  const { mainImage, name, company, slug, altImages } = module;
  const [mainImgSrc, setMainImgSrc] = useState(mainImage);

  return (
    <>
      <Grid container spacing={4} className={classes.contentContainer}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              className={classes.breadcrumbLink}
              color="textSecondary"
              to="/"
            >
              {' '}
              <HomeIcon className={classes.icon} /> Home
            </Link>
            <Link
              className={classes.breadcrumbLink}
              color="textSecondary"
              to="/modules"
            >
              <ViewColumnIcon className={classes.icon} />
              Modules
            </Link>
            <Typography color="textPrimary">{name}</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.mainImageWrap}>
            <SanityImage
              {...mainImgSrc}
              height={500}
              alt={name}
              className={classes.mainImage}
            />
          </div>
          <div>
            {altImages.length > 0 && (
              <>
                <button
                  key={-1}
                  type="button"
                  className={classes.thumbnailButton}
                  onClick={() => setMainImgSrc(mainImage)}
                >
                  <SanityImage
                    {...mainImage}
                    height={100}
                    className={classes.thumbnail}
                    alt={`${name} main image`}
                  />
                </button>
                {altImages.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={classes.thumbnailButton}
                    onClick={() => setMainImgSrc(img)}
                  >
                    <SanityImage
                      {...img}
                      height={100}
                      className={classes.thumbnail}
                      alt={`${name} alternate image`}
                    />
                  </button>
                ))}
              </>
            )}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2">{module.name}</Typography>
          <Typography variant="h3">{company.name}</Typography>
          {module.description.split('\n\n').map((paragraph, index) => (
            <Typography key={index} variant="body2" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    module: sanityProduct(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      mainImage {
        ...ImageWithPreview
      }
      altImages {
        ...ImageWithPreview
      }
      description
      msrp
      url
      company {
        name
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
        url
      }
    }
  }
`;

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    padding: 0,
    margin: theme.spacing(1),
    border: '1px solid #ccc',
  },
}));

export default function SingleModule({ data }) {
  const classes = useStyles();
  const { module } = data;
  const { mainImage, company, slug, altImages } = module;
  const [mainImgSrc, setMainImgSrc] = useState(mainImage.asset.fluid);

  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Img fluid={mainImgSrc} alt={module.name} />
          {altImages.length > 0 && (
            <>
              <button
                type="button"
                className={classes.thumbnail}
                onClick={() => setMainImgSrc(mainImage.asset.fluid)}
              >
                <Img
                  fixed={mainImage.asset.fixed}
                  alt={`${module.name} main image`}
                />
              </button>
              {altImages.map((img) => (
                <button
                  type="button"
                  className={classes.thumbnail}
                  onClick={() => setMainImgSrc(img.asset.fluid)}
                >
                  <Img
                    fixed={img.asset.fixed}
                    alt={`${module.name} alternate image`}
                  />
                </button>
              ))}
            </>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2">{module.name}</Typography>
          <Typography variant="h3">{company.name}</Typography>
          {module.description.split('\n\n').map((paragraph) => (
            <Typography variant="body2" paragraph>
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
        asset {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbySanityImageFluid
          }
          fixed(height: 100, width: 100) {
            ...GatsbySanityImageFixed
          }
        }
      }
      altImages {
        asset {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbySanityImageFluid
          }
          fixed(height: 100, width: 100) {
            ...GatsbySanityImageFixed
          }
        }
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

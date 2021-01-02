import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProductGrid from '../components/ProductGrid';

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    padding: 0,
    margin: theme.spacing(1),
    border: '1px solid #ccc',
  },
}));

export default function SingleCompany({ data }) {
  const classes = useStyles();
  const { company, products } = data;
  const { name, id, url, description, mainImage, slug } = company;
  console.log(products);

  return (
    <>
      <Grid container spacing={4}>
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
    </>
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

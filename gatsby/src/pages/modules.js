import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import globalStyles from '../styles/global';
import ProductGrid from '../components/ProductGrid';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
}));

export default function ModulesPage({ data }) {
  const classes = useStyles();

  const products = data.products.nodes;
  return (
    <div className={classes.contentContainer}>
      <ProductGrid products={products} />
    </div>
  );
}

export const query = graphql`
  query ProductsQuery($slug: String) {
    products: allSanityProduct(
      filter: { tags: { elemMatch: { slug: { current: { eq: $slug } } } } }
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

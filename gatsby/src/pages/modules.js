import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
// import { Link } from "gatsby"
import { Link } from 'gatsby-theme-material-ui';
import ProductGrid from '../components/ProductGrid';

export default function ModulesPage({ data }) {
  const products = data.products.nodes;
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export const query = graphql`
  query ProductsQuery {
    products: allSanityProduct {
      nodes {
        name
        id
        slug {
          current
        }
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        company {
          name
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

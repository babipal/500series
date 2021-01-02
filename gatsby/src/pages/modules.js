import React from 'react';
import { graphql } from 'gatsby';
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

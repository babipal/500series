import React from 'react';
import { graphql } from 'gatsby';
import CompaniesGrid from '../components/CompaniesGrid';

export default function CompaniesPage({ data }) {
  const companies = data.companies.nodes;
  return (
    <div>
      <CompaniesGrid companies={companies} />
    </div>
  );
}

export const query = graphql`
  query CompaniesQuery {
    companies: allSanityCompany {
      nodes {
        id
        name
        slug {
          current
        }
        mainImage {
          ...ImageWithPreview
        }
      }
    }
  }
`;

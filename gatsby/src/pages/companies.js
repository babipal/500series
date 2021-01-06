import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import CompaniesGrid from '../components/CompaniesGrid';
import globalStyles from '../styles/global';

const useStyles = makeStyles((theme) => ({
  ...globalStyles(theme),
}));

export default function CompaniesPage({ data }) {
  const classes = useStyles();
  const companies = data.companies.nodes;
  return (
    <div className={classes.contentContainer}>
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

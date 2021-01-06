import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';

function getTagCounts(productTags) {
  const tags = productTags.nodes
    .map((product) => product.tags)
    .flat()
    .reduce((acc, tag) => {
      if (acc[tag.id]) {
        acc[tag.id].count++;
      } else {
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          slug: tag.slug.current,
          count: 1,
        };
      }
      return acc;
    }, {});
  return Object.values(tags);
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
    backgroundColor: '#e0e0e0',
    display: 'inline-flex',
    borderRadius: theme.spacing(2),
    color: '#000',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(14),
    padding: [[6, 8]],
    '&:hover': { textDecoration: 'none', backgroundColor: '#eee' },
  },
  count: {
    color: '#666',
    backgroundColor: '#bdbdbd',
    height: 24,
    width: 24,
    textAlign: 'center',
    borderRadius: 12,
    fontSize: theme.typography.pxToRem(13),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
}));

export default function ModulesFilter() {
  const classes = useStyles();

  const { productTags } = useStaticQuery(graphql`
    query {
      productTags: allSanityProduct {
        nodes {
          tags {
            name
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const tags = getTagCounts(productTags);

  return (
    <>
      <Link to="/modules" className={classes.chip}>
        All
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag.id}
          to={`/modules/${tag.slug}/`}
          className={classes.chip}
        >
          <span className={classes.count}>{tag.count}</span>
          {tag.name}
        </Link>
      ))}
    </>
  );
}

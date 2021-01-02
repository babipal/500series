import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
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
      {tags.map((tag) => (
        <Chip
          key={tag.id}
          label={tag.name}
          avatar={<Avatar>{tag.count}</Avatar>}
          component={Link}
          href={`/modules/${tag.slug}/`}
          className={classes.chip}
          clickable
        />
      ))}
    </>
  );
}

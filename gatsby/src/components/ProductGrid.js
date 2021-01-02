import React from 'react';
// import Img from 'gatsby-image';
import SanityImage from 'gatsby-plugin-sanity-image';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ModulesFilter from './ModulesFilter';

const useStyles = makeStyles(() => ({
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '4rem',
  },
}));

const singleStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
}));

/*
gatsby-image vs. sanity-image
          <SanityImage
            {...product.mainImage}
            height={300}
            width={300}
            alt={product.name}
            fit="clip"
          />
        </Link>

        <Img fluid={product.mainImage.asset.fluid} alt={product.name} />
*/
export const SingleProduct = ({ product }) => {
  const classes = singleStyles();

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardActionArea>
          <Link to={`/module/${product.slug.current}/`}>
            <SanityImage
              className={classes.img}
              {...product.mainImage}
              height={300}
              width={300}
              alt={product.name}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.company.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default function ProductGrid({ products = [], showFilter = true }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      {showFilter && (
        <Grid item xs={12}>
          <ModulesFilter />
        </Grid>
      )}
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </Grid>
  );
}

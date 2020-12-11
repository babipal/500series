import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '4rem',
  },
}));

export const SingleProduct = ({ product }) => (
  <Grid item xs={6} sm={4} md={3}>
    <Card>
      <CardActionArea>
        <Link to={`/module/${product.slug.current}`}>
          <Img fluid={product.mainImage.asset.fluid} alt={product.name} />
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

export default function ProductGrid({ products = [] }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </Grid>
  );
}

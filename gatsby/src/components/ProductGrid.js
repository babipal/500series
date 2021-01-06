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

const singleStyles = makeStyles((theme) => ({
  card: {
    padding: 16,
    height: '100%',
    textAlign: 'center',
  },
  img: {
    maxHeight: 300,
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
  company: {
    color: '#6f6f6f',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: '500',
    margin: [[theme.spacing(1), 0]],
    '&::before': {
      margin: '16px auto',
      content: '""',
      display: 'block',
      left: '5%',
      right: '5%',
      width: '90%',
      height: 1,
      backgroundImage:
        'linear-gradient(to right, transparent, rgb(188,188,188), transparent)',
    },
  },
}));

export const SingleProduct = ({ product }) => {
  const classes = singleStyles();

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card className={classes.card}>
        <Link to={`/module/${product.slug.current}`}>
          <CardActionArea>
            <div>
              <SanityImage
                className={classes.img}
                {...product.mainImage}
                height={300}
                alt={product.name}
              />
            </div>
            <CardContent>
              <Typography className={classes.company} gutterBottom variant="h5">
                {product.company.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
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

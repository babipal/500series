import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `500series.info`,
    siteUrl: `https://www.500series.info`,
    description: `500 series modules`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'sj9xx1i9',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: 'sj9xx1i9',
        dataset: 'production',
        defaultImageConfig: {
          fit: 'clip',
        },
      },
    },
  ],
};

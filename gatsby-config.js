// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

/**
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 * @type {import('gatsby').GatsbyConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  siteMetadata: {
    title: 'Woby',
    description: 'Gatsby WordPress Starter.',
    author: 'woby',
    siteUrl: 'https://woby.netlify.app',
    customLogoComponent: true,
    // Social icons URLs / If not using leave it empty ( `` )
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      youtube: 'https://youtube.com',
      twitter: 'https://twitter.com',
    },
    frontpageIntro: {
      firstTagline: 'Your favourite CMS',
      secondTagline: 'meets JAMStack',
      description:
        'Use WordPress along with Gatsby, to manage your content via worlds post popular CMS, and deploy it on a blazing fast front-end',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_URL,
        timeout: 3500,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // replace this url with the url of your wordpress install
        // http://127.0.0.1/wpgatsby/graphql

        url: process.env.WORDPRESS_ENDPOINT,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'dominantColor',
          quality: 82,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-woby',
        short_name: 'woby',
        start_url: '/',
        background_color: '#F4F5F6',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: '#f56565',
        display: 'standalone',
        icon: 'src/static/images/gatsbypress-icon.png',
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: 'any maskable',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};

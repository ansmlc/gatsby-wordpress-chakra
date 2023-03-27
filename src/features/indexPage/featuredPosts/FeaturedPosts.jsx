/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertIcon } from '@chakra-ui/react';
import FeaturePost from './FeaturePost';

function FeaturedPosts({ featured }) {
  if (featured && featured.length) {
    const featuredPosts = featured.map((featuredPost, index) =>
      index % 2 ? (
        <FeaturePost
          key={featuredPost.id}
          featuredDesc={featuredPost.excerpt}
          featuredImage={
            featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData
          }
          featuredTitle={featuredPost.title}
          featuredSlug={featuredPost.slug}
          txtAlign="left"
        />
      ) : (
        <FeaturePost
          key={featuredPost.id}
          featuredDesc={featuredPost.excerpt}
          featuredImage={
            featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData
          }
          featuredTitle={featuredPost.title}
          featuredSlug={featuredPost.slug}
          orderBaseTxt={2}
          orderLgTxt={1}
          orderBaseImg={1}
          orderLgImg={2}
        />
      )
    );
    return featuredPosts;
  }

  return (
    <Alert
      margin="0 auto"
      mb="4"
      justifyContent="center"
      borderRadius="brandRadius.card"
      boxShadow="xl"
      status="warning"
      maxW="lg"
    >
      <AlertIcon />
      Nothing found. Add some posts to Featured category
    </Alert>
  );
}

FeaturedPosts.propTypes = {
  featured: PropTypes.array.isRequired,
};

export default FeaturedPosts;

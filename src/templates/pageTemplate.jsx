/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Box, AspectRatio, Image, Heading } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { BaseLayout, DocumentHead } from '../features/rootLayout';
import { BreadcrumbsNav } from '../features/navigation';
import BaseBox from '../components/BaseBox';

// assets
import '@wordpress/block-library/build-style/style.css';
import 'wysiwyg.css';

export default function PagePost({ data }) {
  const page = data.allWpPage.nodes[0];
  const image = page?.featuredImage?.node?.localFile;
  return (
    <BaseLayout>
      <DocumentHead title={page.title} />
      <BreadcrumbsNav data={page} />
      <Fade duration={500} triggerOnce>
        <Heading as="h1" fontSize="4xl" lineHeight="1.1" marginTop="4" marginBottom="6">
          {page.title}
        </Heading>
      </Fade>
      <BaseBox as="article">
        {image ? (
          <AspectRatio maxW="1920px" ratio={16 / 9}>
            <Image
              as={GatsbyImage}
              image={getImage(image)}
              alt={page.title}
              rounded="brandRadius.image"
              roundedBottomLeft={0}
              roundedBottomRight={0}
            />
          </AspectRatio>
        ) : null}
        <Box
          className="wysiwyg"
          color="gray.800"
          padding={{ base: 4, md: 12 }}
          paddingY={{ base: 6 }}
        >
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Box>
      </BaseBox>
    </BaseLayout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        ...singlePageFields
      }
    }
  }
`;

PagePost.propTypes = {
  data: PropTypes.object.isRequired,
};

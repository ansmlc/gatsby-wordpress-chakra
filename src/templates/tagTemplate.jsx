/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { BaseLayout, DocumentHead } from '../features/rootLayout';
import { PostGrid, Pager, BlogFilterMenu } from '../features/blog';
import { ArchiveTitle } from '../components/headings';
import { BreadcrumbsNav } from '../features/navigation';

export const query = graphql`
  query ($slug: String!, $skip: Int!, $limit: Int!) {
    countpost: allWpPost(filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }) {
      nodes {
        __typename
      }
    }
    allWpPost(
      skip: $skip
      limit: $limit
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...postFields
          tags {
            nodes {
              slug
              name
              uri
            }
          }
          author {
            node {
              name
              slug
              avatar {
                url
              }
            }
          }
        }
      }
    }
    tags: allWpTag(limit: 6) {
      nodes {
        ...tagGroupFields
      }
    }
    categories: allWpCategory(limit: 6) {
      nodes {
        ...categoryGroupFields
      }
    }
  }
`;

function TagTemplate({ data, pageContext }) {
  const posts = data.allWpPost.edges;
  const postCount = data.countpost.nodes.length;
  const hashTag = `#${pageContext.tag}`;
  const categoryItems = data?.categories?.nodes;
  const tagItems = data?.tags?.nodes;
  return (
    <BaseLayout>
      <DocumentHead title={pageContext.tag} />
      <BreadcrumbsNav pageContext={pageContext} data={data} />
      <Flex>
        <Box>
          <ArchiveTitle title={hashTag} count={postCount} />
        </Box>
        <Spacer />
        <Box>
          <BlogFilterMenu tags={tagItems} categories={categoryItems} context="tag" />
        </Box>
      </Flex>
      <PostGrid context="blog" posts={posts} />
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </BaseLayout>
  );
}

TagTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default TagTemplate;

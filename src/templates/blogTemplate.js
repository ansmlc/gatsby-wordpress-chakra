import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Flex, Box, Spacer } from "@chakra-ui/react"
import { BaseLayout, DocumentHead } from "../features/rootLayout"
import { BreadcrumbsNav } from "../features/navigation"
import { PostGrid, Pager, BlogFilterMenu } from "../features/blog"
import { ArchiveTitle } from "../components/headings"

export const query = graphql`
query( $limit: Int!, $skip: Int!) {
  countpost: allWpPost(filter: {status: {eq: "publish"}})
  {
    nodes {
      __typename
    }
  }

  allWpPost(
    limit: $limit
    skip: $skip
    sort: { fields: date, order: DESC }
    filter: { categories: { nodes: { elemMatch: { slug: { ne: "featured" } } } } }
    ) 
  {
    edges {
      node {
        ...postFields
        categories {
          nodes {
            uri
          }
        }
        tags {
          nodes {
            name
            slug
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
`
const BlogPage  = ({ pageContext, data }) => {
    const posts = data?.allWpPost?.edges
    const allposts = data?.countpost
    const postsCount = allposts?.nodes?.length
    const categoryItems = data?.categories?.nodes
    const tagItems = data?.tags?.nodes
    return (
    <BaseLayout>
      <DocumentHead title="Blog" /> 
      <BreadcrumbsNav pageContext={pageContext}/>
      <Flex>
        <Box>
          <ArchiveTitle 
            data={posts} 
            count={postsCount} 
            title="Blog"
          />
        </Box>
        <Spacer />
        <Box>
          <BlogFilterMenu
            tags={tagItems} 
            categories={categoryItems}
            context={'blog'}
          />
        </Box>
      </Flex>
      <PostGrid context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </BaseLayout>
    )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
    nextPagePath: PropTypes.string
  }),
}

export default BlogPage

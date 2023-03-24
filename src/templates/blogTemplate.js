import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from "../components/layout/layout"
import Seo from "../components/cta/seo"
import Pager from "../components/posts/pager.js"
import ListPosts from "../components/posts/listPosts.js"
import ArchiveTitle from "../components/posts/archiveTitle"
import BlogMenuItems from "../components/posts/blogMenuItems.js"
import {
  Flex, 
  Box, 
  Spacer
} from "@chakra-ui/react"
import Crumb from "../components/layout/breadcrumbs"

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
    <Layout>
      <Seo title="Blog" /> 
      <Crumb pageContext={pageContext}/>
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
          <BlogMenuItems
            tags={tagItems} 
            categories={categoryItems}
            context={'blog'}
          />
        </Box>
      </Flex>
      <ListPosts context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </Layout>
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

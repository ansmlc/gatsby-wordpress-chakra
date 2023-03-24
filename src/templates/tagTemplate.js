import React from "react"
import { graphql } from "gatsby"
import { 
  Box, 
  Flex,
  Spacer } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import Seo from "../components/cta/seo"
import Pager from "../components/posts/pager.js"
import ListPosts from "../components/posts/listPosts.js"
import ArchiveTitle from "../components/posts/archiveTitle"
import Crumb from "../components/layout/breadcrumbs"
import BlogMenuItems from "../components/posts/blogMenuItems.js"

export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    countpost: allWpPost
    (filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } })
    {
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
`
 
const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allWpPost.edges
  const postCount = data.countpost.nodes.length
  const hashTag = "#" + pageContext.tag 
  const categoryItems = data?.categories?.nodes
  const tagItems = data?.tags?.nodes
  return (
    <Layout>
      <Seo title={pageContext.tag}/>
      <Crumb pageContext={pageContext} data={data}/>
      <Flex>
        <Box>
          <ArchiveTitle 
            title={hashTag} 
            count={postCount}>
          </ArchiveTitle>
        </Box>
        <Spacer />
        <Box>
        <BlogMenuItems 
            tags={tagItems} 
            categories={categoryItems}
            context={'tag'}
          />
        </Box>
      </Flex>
      <ListPosts context={`blog`} posts={posts}/>
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </Layout>
  )
}

export default TagTemplate
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/cta/seo"
import Pager from "../components/posts/pager.js"
import ListPosts from "../components/posts/listPosts.js"
import ArchiveTitle from "../components/posts/archiveTitle"
import BlogMenuItems from "../components/posts/blogMenuItems.js"
import Crumb from "../components/layout/breadcrumbs.js"
import { 
  Flex,  
  Spacer, 
  Box 
} from "@chakra-ui/react"

export const query = graphql`
query($slug: String!, $skip: Int!, $limit: Int!) {
  countpost: allWpPost( filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } }})
  {
    nodes {
      __typename
    }
  }
  allWpPost (
    skip: $skip
    limit: $limit
    filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } }}
    sort: { fields: date, order: DESC }
  ) {
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
const CategoryTemplate = ({ data, pageContext }) => {
  const posts = data?.allWpPost?.edges
  const postCount = data?.countpost?.nodes?.length
  const categoryItems = data?.categories?.nodes
  const tagItems = data?.tags?.nodes
  return (
    <Layout>
      <Seo title={pageContext.category}/>
      <Crumb pageContext={pageContext} data={data}/>
      <Flex>
        <Box>
          <ArchiveTitle 
            title={pageContext.category} 
            count={postCount}>
          </ArchiveTitle>
        </Box>
        <Spacer />
        <Box>
          <BlogMenuItems 
            tags={tagItems} 
            categories={categoryItems}
            context={'category'}
          />
        </Box>
      </Flex>
      <Seo title="Category" />
      <ListPosts 
        context={`blog`} 
        posts={posts}
      />
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </Layout>
  )
}

export default CategoryTemplate
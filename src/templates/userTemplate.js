import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Pager from "../components/posts/pager.js"
import ListPosts from "../components/posts/listPosts.js"
import Crumb from "../components/layout/breadcrumbs.js"
import { Avatar, Heading, Stack, Text } from "@chakra-ui/react"

export default function UserPage({ data, pageContext }) {
  const user = data?.allWpPost?.edges[0]?.node?.author?.node
  const posts = data?.allWpPost?.edges
  const avatar = user?.avatar?.url
  var theName = ''
  user?.name? 
  theName = user?.name 
  :
  user?.lastName && user?.firstName?
  theName = user?.firstName + " " + user?.lastName
  :
  theName = 'No username.'
  return (
    <Layout>
      <Crumb data={user}/>
      <Heading
        as="h1"
        fontSize={'3xl'}
        mb={2}
      >
        {theName}
      </Heading>
      <Stack marginY="6" direction={'row'} spacing={4} align={'start'}>
        <Avatar 
          size="xl"
          src={avatar}
          alt={'Author'}
        />
        <Stack maxW={{ base: "full", md: "50%"}} direction={'column'} spacing={0} fontSize={'normal'}>
          <Text color={'gray.700'}>{user?.description} </Text>
        </Stack>
      </Stack>
      <Heading 
        as="h2"
        fontSize="xl"
        marginTop="6"
        marginBottom="4"
      >
        {"Latest posts by " + theName + ":"}
      </Heading>
      <ListPosts context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(
      filter: {author: {node: {slug: {eq: $slug }}}}
      limit: 9
      ) {
      edges {
        node {
          ...postFields
          author {
            node {
              firstName
              lastName
              nodeType
              name
              slug
              description
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`
import React from "react"
import { Avatar, Heading, Stack, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { PostGrid, Pager } from "../features/blog"
import { BreadcrumbsNav } from "../features/navigation"

export default function UserPage({ data, pageContext }) {
  const authorData = data?.allWpPost?.edges[0]?.node?.author?.node
  const posts = data?.allWpPost?.edges
  const avatar = authorData?.avatar?.url
  var theName = ''
  authorData?.name? 
  theName = authorData?.name 
  :
  authorData?.lastName && authorData?.firstName?
  theName = authorData?.firstName + " " + authorData?.lastName
  :
  theName = 'No username.'
  return (
    <BaseLayout>
      <BreadcrumbsNav data={authorData}/>
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
          <Text color={'gray.700'}>{authorData?.description} </Text>
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
      <PostGrid context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </BaseLayout>
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
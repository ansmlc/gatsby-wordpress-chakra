import * as React from "react"
import { Link, graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BaseLayout, DocumentHead } from "../features/rootLayout"
import { BreadcrumbsNav } from "../features/navigation"
import { PostMeta, AuthorWidget, NextAndPreviousPost } from "../features/blog"

// components
import BaseBox from "../components/BaseBox"

// assets
import "@wordpress/block-library/build-style/style.css"
import "../.././node_modules/wysiwyg.css/wysiwyg.css"

import {
  Badge, 
  Box, 
  Image,
  AspectRatio,
  Heading,
 } from "@chakra-ui/react"

 export const query = graphql`
 query($slug: String!) {
   allWpPost(filter: { slug: { eq: $slug } }) {
     edges {
       next {
         slug
       }
       previous {
         slug
       }
       node {
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
             description
             avatar {
               url
             }
           }
         }
       }
     } 
     nodes {
       ...singlePostFields
     }
   }
 }
`
export default function BlogPost({ data, pageContext }) {
  const post = data.allWpPost.nodes[0]
  const postDate = post?.date
  const tags = data.allWpPost.edges[0].node.tags
  const authorData = data.allWpPost.edges[0].node.author
  const image = post?.featuredImage?.node?.localFile
  const previousPostSlug = pageContext?.previousPostSlug
  const nextPostSlug = pageContext?.nextPostSlug
  return (
    <BaseLayout>
      <DocumentHead title={post.title}/>
      <BreadcrumbsNav data={post}/>
          <Fade damping={0.5} duration={500} cascade triggerOnce>
            <Box> 
                <Heading
                  as="h1"
                  fontSize={'4xl'}
                  lineHeight="1.1"
                >
                  {post.title}
                </Heading>
            </Box>
          <PostMeta 
            authorData={authorData} 
            date={postDate} 
          />
          </Fade>
      <BaseBox 
        as="article"
      >
        <AspectRatio maxW="1920px" ratio={16 / 9}>
          {image?
            <Image 
              as={GatsbyImage} 
              image={getImage(image)} 
              alt={post.title}
              rounded={'brandRadius.image'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            /> 
            :
            <Image
              src="https://via.placeholder.com/1920x1080" 
              alt={post.title || ""}
              rounded={'brandRadius.image'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            />         
          }
        </AspectRatio>
        <Box 
          className="wysiwyg"
          padding={{ base: 6, md: 12 }}
          paddingY={{ base: 6 }}
        ><div dangerouslySetInnerHTML={{ __html: post.content }}/></Box>
        <Box m={{ base: 6, md: 12 }}>
          {tags?.nodes.map( tag => (
          <Box 
            display="inline" 
            marginRight="3"
            key={tag.slug}
          >
            <Link to={"../../tag/" + tag.slug}>
              <Badge 
                rounded={'brandRadius.badge'}
                colorScheme="cyan">{"# " + tag.name}
              </Badge>
            </Link>
          </Box>
          ))}
        </Box>
      </BaseBox>
      <AuthorWidget authorData={authorData}/>
      <NextAndPreviousPost
        previousPostSlug={previousPostSlug}
        nextPostSlug={nextPostSlug}
      />
    </BaseLayout> 
  )
}

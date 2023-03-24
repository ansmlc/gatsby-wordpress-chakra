import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Crumb from "../components/layout/breadcrumbs.js"
import Seo from "../components/cta/seo"
import "@wordpress/block-library/build-style/style.css"
import { 
  GatsbyImage, 
  getImage 
} from "gatsby-plugin-image"
import { 
  Box, 
  AspectRatio, 
  Image,
  Heading
} from "@chakra-ui/react"
import Card from "../components/layout/card"
import { Fade } from "react-awesome-reveal"


export default function PagePost({ data }) {
  const page = data.allWpPage.nodes[0]
  const image = page?.featuredImage?.node?.localFile
  return (
    <Layout>
      <Seo title={page.title}/>
      <Crumb data={page}/>
      <Fade duration={500} triggerOnce>
        <Heading
          as="h1"
          fontSize={'4xl'}
          lineHeight="1.1"
          marginTop="4"
          marginBottom="6"
        >
            {page.title}
        </Heading>
      </Fade>
      <Card 
        as="article"
      >
        {image?
          <AspectRatio maxW="1920px" ratio={16 / 9}>
            <Image 
              as={GatsbyImage} 
              image={getImage(image)} 
              alt={page.title}
              rounded={'brandRadius.image'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            /> 
          </AspectRatio>
        : null }
        <Box 
          className="wysiwyg"
          color="gray.800"
          padding={{ base: 4, md: 12 }}
          paddingY={{ base: 6 }}
        >
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Box>
      </Card>
    </Layout>
  )
}
export const query = graphql` 
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
      ...singlePageFields
      }
    }
  }
`
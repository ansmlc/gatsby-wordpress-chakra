import * as React from "react"
import {
  useStaticQuery,
  graphql,
  Link 
} from 'gatsby'
import { Center } from "@chakra-ui/layout"
import Layout from "../components/layout/layout"
import ListPosts from "../components/posts/listPosts.js"
import GatsbyPressIntro from "../components/frontpage/intro"
import SectionHeading from "../components/layout/sectionHeading"
import Features from '../components/frontpage/features'
import Seo from "../components/cta/seo"
import MailChimpForm from "../components/cta/newsletter"
import { Fade } from 'react-awesome-reveal'
import SecondaryButton from "../components/buttons/secondaryButton"
 
const HomePage = () => {
  const data = useStaticQuery(graphql`
  query HomePageQuery {
    allSite {
      nodes {
        siteMetadata {
          frontpageIntro {
            description
            firstTagline
            secondTagline
          }
        }
      }
    }
    wp {
      allSettings {
        generalSettingsTitle
      }
    }
    post: allWpPost(
        sort: { fields: [date], order: ASC }
        limit: 6
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
              uri
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
    featured: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 6
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "featured" } } } } }
      ) 
    {
      nodes {
        ...postFields
        categories {
          nodes {
            slug
          }
        }
      }
    }
  }
`)
  const posts = data?.post?.edges  
  const featured = data?.featured?.nodes
  const siteTitle = data?.wp?.allSettings?.generalSettingsTitle
  const introData = data?.allSite?.nodes[0]?.siteMetadata?.frontpageIntro
  return (
    <Layout>
      <Seo title={siteTitle}/>
      <GatsbyPressIntro 
        introData={introData}
      />
      <SectionHeading
          heading={'Featured'}
          subheading={'Latest featured posts'}
      />
      <span id="features"/>
      <Features
        featured={featured}
      />
      <SectionHeading
        heading={'Latest posts'}
        subheading={'Latest posts from our blog'}
      />
      <ListPosts 
        context={`blog`} 
        posts={posts}     
      />
      <Center minW={'100%'} marginY="16">
        <Link to="/blog">
          <SecondaryButton arrowRight>
            Read our Blog
          </SecondaryButton>
        </Link>
      </Center>
      <Fade delay={200} duration={500} triggerOnce>
        <MailChimpForm/>
      </Fade>
    </Layout>
  )
}
 
export default HomePage

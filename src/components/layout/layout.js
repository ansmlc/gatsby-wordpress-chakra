import * as React from "react"
import {
  Box, 
  Container 
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useStaticQuery, graphql } from "gatsby"

  const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
    query MainQuery {
      allSite {
        nodes {
          siteMetadata {
            customLogoComponent
          }
        }
      }
      wp {
        allSettings {
          generalSettingsTitle
          generalSettingsDescription
        }
      }
      allWpCategory {
        nodes {
          name
          count
          uri
          id
        }
      }
      allWpMediaItem(filter: {altText: {eq: "logo"}}) {
        nodes {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allFile(filter: {name: {eq: "gp-logo"}}) {
        edges {
          node {
            publicURL
            name
            extension
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allWpMenu(filter: {name: {eq: "GP-HEADER"}}) {
        nodes {
          id
          menuItems {
            nodes {
              label
              url
              id
            }
          }
        }
      } 
      footer: allWpMenu(filter: {name: {eq: "GP-FOOTER"}}) {
        nodes {
          id
          menuItems {
            nodes {
              label
              url
              id
            }
          }
        }
      }
    }
 `)
   return (
     <>
      <Header data={data}/>
      <Container maxW="container.lg">
          <Box as="main">
              {children}
          </Box>
      </Container>
      <Footer data={data}/>
    </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
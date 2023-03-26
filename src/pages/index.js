import * as React from "react"
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import IndexPage from "../features/indexPage";

export default function Index({ data }) {
  return (
    <IndexPage
      postsData={data?.post?.edges  }
      featuredData={data?.featured?.nodes}
      heroData={data?.allSite?.nodes[0]?.siteMetadata?.frontpageIntro}
      siteTitle={data?.wp?.allSettings?.generalSettingsTitle}
    />
  );
}

Index.propTypes = {
  data: PropTypes.object,
};
 
export const pageQuery = graphql`
  query {
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
`

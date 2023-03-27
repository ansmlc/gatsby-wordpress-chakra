import { graphql } from 'gatsby';

export const postFields = graphql`
  fragment postFields on WpPost {
    id
    title
    slug
    date(formatString: "MMMM DD, YYYY")
    excerpt
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [WEBP, JPG], quality: 82)
          }
        }
      }
    }
  }
`;
export const singlePostFields = graphql`
  fragment singlePostFields on WpPost {
    title
    content
    nodeType
    date(formatString: "MMMM DD, YYYY")
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP, JPG], quality: 82)
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
`;

export const singlePageFields = graphql`
  fragment singlePageFields on WpPage {
    title
    content
    nodeType
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP, JPG], quality: 82)
          }
        }
      }
    }
  }
`;

export const tagGroupFields = graphql`
  fragment tagGroupFields on WpTag {
    slug
    name
    uri
    count
  }
`;

export const categoryGroupFields = graphql`
  fragment categoryGroupFields on WpCategory {
    slug
    name
    uri
    count
  }
`;

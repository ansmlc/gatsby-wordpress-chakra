import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import {
    Circle,
    HStack,
    Icon
} from "@chakra-ui/react"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allSite {
        nodes {
          siteMetadata {
            title
            socialLinks {
              facebook
              instagram
              linkedin
              youtube
              twitter
            }
          }
        }
      }
    }
  `)
  const socialUrls = data?.allSite?.nodes[0]?.siteMetadata?.socialLinks
  
  const socialLinks = [
    { name: 'facebook', url: socialUrls?.facebook },
    { name: 'instagram', url: socialUrls?.instagram },
    { name: 'linkedin', url: socialUrls?.linkedin },
    { name: 'youtube', url: socialUrls?.youtube },
    { name: 'twitter', url: socialUrls?.twitter }
  ]

  function RenderIcon(props) {
    const name = props?.name
    if (name === 'facebook') {
      return <Icon as={FaFacebookF} w="16px" h="16px" />
    } 
    else if (name === 'instagram') {
      return <Icon as={AiFillInstagram} w="16px" h="16px" />
    }
    else if (name === 'linkedin') {
      return <Icon as={FaLinkedinIn} w="16px" h="16px" />
    }
    else if (name === 'youtube') {
      return <Icon as={FaYoutube} w="16px" h="16px" />
    }
    else if (name === 'twitter') {
      return <Icon as={FaTwitter} w="16px" h="16px" />
    }
  }

  const SocialLink = ({ name, url }) => {
    if (url && url.length > 0) {
      return (
        <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
          <Circle
            size="34px"
            bg="gray.100"
            color="gray.700"
            _hover={{ bg: "gray.200" }}
          >
            <RenderIcon name={name}/>
          </Circle>
        </a>
      )
    }
    else {
      return null
    }
  }

  return (
    <HStack spacing="14px">
      {socialLinks.map((link) => 
        <SocialLink 
          key={link.name}
          name={link.name}
          url={link.url} 
        />
      )}
    </HStack>
  )
}

SocialLinks.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  youtube: PropTypes.string,
  twitter: PropTypes.string
}

SocialLinks.defaultProps = {
  facebook:``,
  instagram: ``,
  linkedin: ``,
  youtube: ``,
  twitter: ``,
}
  
export default SocialLinks
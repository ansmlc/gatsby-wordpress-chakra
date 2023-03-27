/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useColorMode } from '@chakra-ui/color-mode';
import SvgLogo from '../../components/logo/SvgLogo';

function Logo({ siteWpTitle, staticLogo, wpLogo, customLogoComponent }) {
  const { colorMode } = useColorMode();
  let theLogo = '';
  // Logo from WP media library (needs to have "gp-logo" as title)
  if (wpLogo) {
    theLogo = (
      <Link to="/" title={siteWpTitle}>
        <Image
          as={GatsbyImage}
          maxWidth="160px"
          height="auto"
          image={wpLogo?.localFile?.childImageSharp?.gatsbyImageData}
          alt={wpLogo?.altText}
          title={siteWpTitle}
        />
      </Link>
    );
  }
  // Local SVG logo from src/static
  else if (!staticLogo?.childImageSharp && staticLogo?.extension === 'svg') {
    theLogo = (
      <Link to="/" title={siteWpTitle}>
        <Image src={staticLogo?.publicURL} alt={siteWpTitle} maxW="160px" height="27.121px" />
      </Link>
    );
  }
  // Local JPG/PNG logo from src/static
  else if (
    staticLogo?.childImageSharp &&
    (staticLogo?.extension === 'png' || staticLogo?.extension === 'jpg')
  ) {
    theLogo = (
      <Link to="/" title={siteWpTitle}>
        <Image
          as={GatsbyImage}
          maxWidth="160px"
          height="auto"
          image={staticLogo?.childImageSharp?.gatsbyImageData}
          alt={siteWpTitle}
          title={siteWpTitle}
        />
      </Link>
    );
  }
  // Custom SVG component
  else if (!staticLogo && customLogoComponent && SvgLogo) {
    theLogo = (
      <Link to="/" title={siteWpTitle}>
        <SvgLogo colorMode={colorMode} w="190px" h="32.21px" y />
      </Link>
    );
  } else {
    theLogo = (
      <Link to="/">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color={colorMode === 'light' ? 'gray.800' : 'gray.50'}
        >
          {siteWpTitle}
        </Text>
      </Link>
    );
  }
  return <Box>{theLogo}</Box>;
}

Logo.propTypes = {
  siteWpTitle: PropTypes.string,
  wpLogo: PropTypes.object,
  staticLogo: PropTypes.object,
  customLogoComponent: PropTypes.bool,
};

Logo.defaultProps = {
  siteWpTitle: `GatsbyPress`,
  staticLogo: null,
  wpLogo: null,
  customLogoComponent: true,
};

export default Logo;

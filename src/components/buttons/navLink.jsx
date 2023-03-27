import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

function NavLink({ to, linkText, minW, fontW, isTrunc }) {
  return (
    <Box min-width={minW}>
      <GatsbyLink activeStyle={{ fontWeight: fontW }} fontSize="sm" partiallyActive to={to}>
        {isTrunc ? (
          <Text fontWeight={fontW} textTransform="uppercase" isTruncated>
            {linkText}
          </Text>
        ) : (
          linkText
        )}
      </GatsbyLink>
    </Box>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  minW: PropTypes.string,
  fontW: PropTypes.string,
  isTrunc: PropTypes.bool,
};

NavLink.defaultProps = {
  minW: `150px`,
  fontW: `bold`,
  isTrunc: false,
};

export default NavLink;

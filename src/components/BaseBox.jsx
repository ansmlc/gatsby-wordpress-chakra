/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, useColorModeValue } from '@chakra-ui/react';

function BaseBox({ children, maxW, maxH, as }) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="brandRadius.card"
      overflow="hidden"
      boxShadow="2xl"
      maxW={maxW}
      maxH={maxH}
      as={as}
    >
      {children}
    </Box>
  );
}

BaseBox.propTypes = {
  children: PropTypes.any.isRequired,
  maxW: PropTypes.string,
  maxH: PropTypes.string,
  as: PropTypes.string,
};

BaseBox.defaultProps = {
  maxW: `unset`,
  maxH: `unset`,
  as: `div`,
};
export default BaseBox;

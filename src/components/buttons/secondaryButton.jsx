/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { BiRightArrowAlt } from '@react-icons/all-files/bi/BiRightArrowAlt';
import { BiLeftArrowAlt } from '@react-icons/all-files/bi/BiLeftArrowAlt';
import PropTypes from 'prop-types';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { LightMode } from '@chakra-ui/color-mode';

function SecondaryButton({ children, arrowLeft, arrowRight }) {
  return (
    <LightMode>
      <Button
        minW={{ base: '100%', sm: '200px' }}
        rounded="brandRadius.button"
        shadow="xl"
        size="lg"
        fontWeight="bold"
        px={6}
        colorScheme="gray"
        backgroundColor={useColorModeValue('white', 'gray.700')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.900'),
        }}
        rightIcon={arrowRight ? <BiRightArrowAlt /> : ''}
        leftIcon={arrowLeft ? <BiLeftArrowAlt /> : ''}
      >
        {children}
      </Button>
    </LightMode>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  arrowLeft: PropTypes.bool,
  arrowRight: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  arrowLeft: false,
  arrowRight: false,
};

export default SecondaryButton;

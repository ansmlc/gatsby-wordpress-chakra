/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Stack, Button, LightMode } from '@chakra-ui/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { filterMenuItems } from '../../utils/arrayHelpers';
import SocialLinksIcons from '../../components/SocialLinkIcons';

function NavMobile({ isOpen, items }) {
  const prefixPage = '../../page'; // outsource to static file r*
  const pageMenuItems = filterMenuItems(items, 'category');

  return (
    <Box
      display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
      opacity={{ base: isOpen ? '100' : '0', md: '0' }}
      alignItems="center"
    >
      <Stack
        spacing={6}
        textAlign="left"
        justify="center"
        direction="column"
        p="8"
        mt="2"
        textTransform="uppercase"
        alignItems="start"
      >
        <Box min-width="150px">
          <Link activeStyle={{ fontWeight: 'bold' }} to="/" key="frontpage">
            Home
          </Link>
        </Box>
        <Box min-width="150px">
          <Link activeStyle={{ fontWeight: 'bold' }} partiallyActive to="/blog" key="blogpage">
            Blog
          </Link>
        </Box>
        {pageMenuItems.map(pageItem => (
          <Box min-width="200px" key={pageItem.id}>
            <Link
              activeStyle={{ fontWeight: 'bold' }}
              partiallyActive
              to={prefixPage + pageItem.url.replace(/\s+/g, '-').toLowerCase()}
            >
              {pageItem.label}
            </Link>
          </Box>
        ))}
        <Box min-width="200px">
          <AnchorLink to="/#newsletter" key="newsletter">
            <LightMode>
              <Button
                borderColor="brand.400"
                color="brand.400"
                variant="outline"
                rounded="brandRadius.button"
                borderWidth="2px"
                _hover={{ bg: 'red.500', color: 'white' }}
              >
                Subscribe
              </Button>
            </LightMode>
          </AnchorLink>
        </Box>
        <Box pt="6" display="flex">
          <SocialLinksIcons />
        </Box>
      </Stack>
    </Box>
  );
}

NavMobile.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

NavMobile.defaultProps = {
  isOpen: false,
};
export default NavMobile;

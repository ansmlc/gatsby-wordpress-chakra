/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../../components/buttons';

function Pager({ pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <Stack marginY="8" direction={{ base: 'column', md: 'row' }} spacing={4}>
      {previousPagePath && (
        <Link to={`/${previousPagePath}`}>
          <PrimaryButton width="100%" d="block" arrowLeft>
            Previous page
          </PrimaryButton>
        </Link>
      )}
      {nextPagePath && (
        <Link to={`/${nextPagePath}`}>
          <PrimaryButton arrowRight>Next page</PrimaryButton>
        </Link>
      )}
    </Stack>
  );
}

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pager;

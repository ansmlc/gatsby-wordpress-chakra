/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { BiHomeAlt } from '@react-icons/all-files/bi/BiHomeAlt';
import { HiChevronRight } from '@react-icons/all-files/hi/HiChevronRight';

import { Text, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function CustomBreadcrumbLink({ path, title, isactiveitem }) {
  return (
    <BreadcrumbItem verticalAlign="top" minHeight="21.05px">
      <BreadcrumbLink as={Link} to={path} aria-current={isactiveitem === 1 ? 'page' : 'false'}>
        {isactiveitem === 1 ? (
          <Text
            color="inherit"
            maxW={{ base: '100px', md: '200px' }}
            fontStyle="italic"
            isTruncated
          >
            {title}
          </Text>
        ) : (
          title
        )}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

function BreadcrumbsNav({ pageContext, data }) {
  const breacrumbsData = [
    {
      isCurrent: !!data?.nodeType?.includes('Page'),
      crumbs: [
        {
          key: 'page-single',
          path: '#',
          title: data?.title,
          isactiveitem: 1,
        },
      ],
    },
    {
      isCurrent: !!data?.nodeType?.includes('Post'),
      crumbs: [
        {
          key: 'page-blog',
          path: '../../blog',
          title: 'Blog',
        },
        {
          key: 'page-category',
          path: `../../category/${data?.categories?.nodes[0]?.slug}`,
          title: data?.categories?.nodes[0]?.name,
        },
        {
          key: 'single-post',
          path: '#',
          title: data?.title,
          isactiveitem: 1,
        },
      ],
    },
    {
      isCurrent: pageContext?.type === 'blog',
      crumbs: [
        {
          key: 'page-blog',
          path: '#',
          title: 'Blog',
          isactiveitem: 1,
        },
      ],
    },
    {
      isCurrent: !!pageContext?.category,
      crumbs: [
        {
          key: 'page-blog',
          path: '../../blog',
          title: 'Blog',
        },
        {
          key: 'page-category',
          path: '#',
          title: pageContext?.category,
          isactiveitem: 1,
        },
      ],
    },
    {
      isCurrent: !!pageContext?.tag,
      crumbs: [
        {
          key: 'page-blog',
          path: '../../blog',
          title: 'Blog',
        },
        {
          key: 'page-tag',
          path: '#',
          title: pageContext?.tag,
          isactiveitem: 1,
        },
      ],
    },
    {
      isCurrent: !!data?.nodeType?.includes('User'),
      crumbs: [
        {
          key: 'page-author',
          path: '#',
          title: data?.name,
          isactiveitem: 1,
        },
      ],
    },
  ];

  return (
    <Box fontSize="0.9rem" textColor="gray.500" marginTop="1" marginBottom="5">
      <Breadcrumb separator={<HiChevronRight color="gray.200" />}>
        <CustomBreadcrumbLink key="page-front" path="/" title={<BiHomeAlt />} />
        {breacrumbsData.map(item =>
          item.isCurrent
            ? item.crumbs.map(crumb => (
                <CustomBreadcrumbLink
                  key={crumb.key}
                  path={crumb.path}
                  title={crumb.title}
                  isactiveitem={crumb.isactiveitem}
                />
              ))
            : null
        )}
      </Breadcrumb>
    </Box>
  );
}

BreadcrumbsNav.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

CustomBreadcrumbLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isactiveitem: PropTypes.bool,
};

CustomBreadcrumbLink.defaultProps = {
  isactiveitem: false,
};

export default BreadcrumbsNav;

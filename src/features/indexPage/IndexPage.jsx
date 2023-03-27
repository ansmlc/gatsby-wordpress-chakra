/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Center } from '@chakra-ui/layout';
import { Fade } from 'react-awesome-reveal';
import { BaseLayout, DocumentHead } from '../rootLayout';
import { PostGrid } from '../blog';
import FeaturedPosts from './featuredPosts';
import HeroSection from './heroSection';
import Newsletter from '../newsletter';
import { SectionHeading } from '../../components/headings';
import { SecondaryButton } from '../../components/buttons';

function IndexPage({ postsData, featuredData, heroData, siteTitle }) {
  return (
    <BaseLayout>
      <DocumentHead title={siteTitle} />
      <HeroSection introData={heroData} />
      <SectionHeading heading="Featured" subheading="Latest featured posts" />
      <span id="features" />
      <FeaturedPosts featured={featuredData} />
      <SectionHeading heading="Latest posts" subheading="Latest posts from our blog" />
      <PostGrid context="blog" posts={postsData} />
      <Center minW="100%" marginY="16">
        <Link to="/blog">
          <SecondaryButton arrowRight>Read our Blog</SecondaryButton>
        </Link>
      </Center>
      <Fade delay={200} duration={500} triggerOnce>
        <Newsletter />
      </Fade>
    </BaseLayout>
  );
}

IndexPage.propTypes = {
  postsData: PropTypes.array.isRequired,
  featuredData: PropTypes.array.isRequired,
  heroData: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default IndexPage;

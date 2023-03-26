import * as React from "react"
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from "gatsby"
import { Logo } from "../navigation"
import SocialLinkIcons from "../../components/SocialLinkIcons";

const Heading = ({ children }) => {
  return (
    <Text color={useColorModeValue('gray.700', 'gray.100')} fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = function ({ data }) {
  const description = data?.wp?.allSettings?.generalSettingsDescription;
  const wpTitle = data?.wp?.allSettings?.generalSettingsTitle
  const staticLogo = data?.allFile?.edges[0]?.node
  const wpLogo = data?.allWpMediaItem?.nodes[0]
  const customLogoComponent = data.allSite.nodes[0].siteMetadata.customLogoComponent
  const prefixPage = '../../page';
  const prefixCat = '../..';
  const allMenuItems = data?.footer?.nodes[0];
  let catMenuItems = [];
  let pageMenuItems = [];
  allMenuItems?.menuItems?.nodes?.map(item => (
    item.url?.includes('category') || item.url?.includes('tag') ?
    false : pageMenuItems.push(item)
  ))
  data?.allWpCategory?.nodes?.map(item => (
    item.uri?.includes('featured') || item.uri?.includes('uncategorized') ?
    false : catMenuItems.push(item)
  ))
  return (
    <Box
      mt={10}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container 
        as={Stack} 
        maxW="container.lg" 
        py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={4}>
            <Logo
              siteWpTitle={wpTitle}
              staticLogo={staticLogo}
              wpLogo={wpLogo}
              customLogoComponent={customLogoComponent}
            />
            <Text fontSize={'normal'}>
              {description}
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Menu</Heading>
            <Link
              activeStyle={{ fontWeight: "bold" }}    
              to="/" 
              key="frontpage">
              Home
            </Link>
            <Link 
              activeStyle={{ fontWeight: "bold" }}    
              partiallyActive={true}             
              to="/blog" 
              key="blogpage">
              Blog
            </Link>
            {pageMenuItems.map(pageItem => (
                <Link 
                    activeStyle={{ fontWeight: "bold" }} 
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url} 
                    key={pageItem.id}
                >
                    {pageItem.label}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Blog</Heading>
            {catMenuItems.map(catItem => (
                <Link 
                    activeStyle={{ fontWeight: "bold" }} 
                    partiallyActive={true}  
                    to={prefixCat + catItem.uri} 
                    key={catItem.id}
                >
                    {catItem.name}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Social</Heading>
            <SocialLinkIcons/>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        as="footer"
        d="flex"
        left="0"
        right="0"
        zIndex="2"
        marginTop="2rem"
        boxShadow="xl"
      >
        <Text mx="auto" my="1rem" align="center" fontSize="xs">
          © {new Date().getFullYear()}. Built with {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://www.wpgraphql.com/">WordPress.</a> 
        </Text>
      </Box>
    </Box>
  );
}

export default Footer
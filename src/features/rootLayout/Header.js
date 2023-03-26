import React from "react"
import { Box, Flex, Spacer, Container, useColorModeValue, Collapse, useDisclosure } from "@chakra-ui/react"
import { NavMobile, NavDesktop, ColorModeToggle, Logo, NavToggle } from "../navigation";

const Header = function ({ data })  {
  const items = data?.allWpMenu?.nodes[0]?.menuItems?.nodes
  const wpTitle = data?.wp?.allSettings?.generalSettingsTitle
  const staticLogo = data?.allFile?.edges[0]?.node
  const wpLogo = data?.allWpMediaItem?.nodes[0]
  const customLogoComponent = data.allSite.nodes[0].siteMetadata.customLogoComponent
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box 
      color={useColorModeValue('gray.700', 'gray.200')}
      as="header" 
      d="flex" 
      left="0" 
      right="0" 
      zIndex="2"
    >
      <Container maxW="container.lg">
        <Flex
          as="nav"
          align="center"
          wrap={"wrap"}
          h="100%"
          w="100%"
          py={4}
        >
          <Box>
            <Logo
              siteWpTitle={wpTitle}
              staticLogo={staticLogo}
              wpLogo={wpLogo}
              customLogoComponent={customLogoComponent}
            />
          </Box>
          <Spacer/>
          <Box>
            <Box mr="4" display={{ base: 'inline-block', md: 'none'}}>
              <ColorModeToggle />   
            </Box>  
            <Box display={{ base: 'inline-block', md: 'none'}}>
              <NavToggle onToggle={onToggle} isOpen={isOpen}/>   
            </Box> 
          </Box>
          <Box width="100%" display={{ base: 'flex', md: 'none'}}>
            <Collapse in={isOpen} animateOpacity unmountOnExit>
              <NavMobile items={items} isOpen={isOpen}></NavMobile>
            </Collapse>
          </Box>
          <Box display={{ base: 'none', md: 'block'}}>
            <NavDesktop items={items}></NavDesktop>
          </Box>
          <Box ml="6" display={{ base: 'none', md: 'block'}}>
            <ColorModeToggle/>
          </Box>  
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

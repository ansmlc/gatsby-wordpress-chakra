import React from "react"
import { Box, IconButton} from "@chakra-ui/react"
import { IoFilter } from "@react-icons/all-files/io5/IoFilter";
import { HiX } from "@react-icons/all-files/hi/HiX"
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, Text } from "@chakra-ui/react"
import { blogPathPrefix } from "../../../utils/slugHelpers";
import NavLink from "../../../components/buttons/navLink";

const BlogFilterMenu = ({ tags, categories, context }) => {

  const { tagPath, categoryPath } = blogPathPrefix(context);

  const AllMenuItems = ({ tags, categories }) => {
    if (tags && tags.length) {
      return tags.filter( tag => (tag.count) ).map(
        (item) => (
          <MenuItem
          borderRadius={'brandRadius.card'}
          key={item.slug}
        >
          <NavLink
            to={tagPath + item.slug.replace(/\s+/g, "-").toLowerCase()}
            fontW="bold"
            partiallyActive={true} 
            linkText={item.name}
            isTrunc
          />
        </MenuItem>
        )
      )
    }
    if (categories && categories.length) {
      return categories.filter( cat => (
        cat.count && !(cat.uri.includes("featured")) 
        )).map( (item) => (
          <MenuItem
            borderRadius={'brandRadius.card'}
            key={item.slug}
          >
            <NavLink
              to={categoryPath + item.slug.replace(/\s+/g, "-").toLowerCase()}
              fontW="bold"
              partiallyActive={true} 
              linkText={item.name}
              isTrunc
            />
          </MenuItem>
        )
      )
    }
  }

  return (
    <Box>
      <Menu boundary="HTMLElement" isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton 
              as={IconButton}
              isRound
              colorScheme={'gray'}
              fontSize="lg"
              transform="scaleX(-1)"
              aria-label="Category Filter Toggle"
              icon={isOpen ? <HiX/> : <IoFilter /> }
            />
            <MenuList
              borderRadius={'brandRadius.card'}
              display="flex"
              flexDirection="row"
              px="2"
            >
              <MenuGroup 
                display="inline-flex" 
                paddingRight={'4'}
                width="100%"
              >
                <Box 
                  textTransform={'uppercase'} 
                  letterSpacing={'wider'}
                  fontSize={'sm'} 
                  px={'4'}
                  my={'4'}
                >
                  Categories:
                </Box>
                  <AllMenuItems categories={categories} />
              </MenuGroup>
              <MenuGroup 
                display="inline-flex" 
                width="100%"
              >
                <Box 
                  textTransform={'uppercase'} 
                  letterSpacing={'wider'}
                  fontSize={'sm'} 
                  px={'4'}
                  my={'4'}
                >
                  Tags:
                </Box>
                  <AllMenuItems tags={tags} />
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}

export default BlogFilterMenu

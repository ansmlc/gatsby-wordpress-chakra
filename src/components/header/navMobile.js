import React from "react"
import { 
    Link
} from "gatsby"
import { 
    Box,
    Stack,
    Button,
    LightMode,
} from "@chakra-ui/react"
import SocialLinks from "../cta/socialLinks"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const NavMobile = ({ isOpen, items }) => {
const prefixPage = '../../page'
const menuItems = items
let pageMenuItems = []
menuItems?.map(item => (
    !item.url.includes('category')?
    pageMenuItems.push(item)
    :
    null
))

return (
<Box
    display={{ base: isOpen ? "flex" : "none", md: 'none' }}
    opacity={{ base: isOpen ? '100' : '0', md: '0' }}
    alignItems="center"
>
    <Stack
        spacing={6}
        textAlign={'left'}
        justify={"center"}
        direction={"column"}
        p={"8"}
        mt={"2"}
        textTransform="uppercase"
        alignItems={"start"}
    >
        <Box min-width="150px">
            <Link
                activeStyle={{ fontWeight: "bold" }}    
                to="/" 
                key="frontpage">Home</Link>
        </Box>
        <Box min-width="150px">
            <Link 
                activeStyle={{ fontWeight: "bold" }}    
                partiallyActive={true}             
                to="/blog" 
                key="blogpage">Blog</Link>
        </Box>
        {pageMenuItems.map(pageItem => (
            <Box 
                min-width="200px"
                key={pageItem.id}
            >
                <Link 
                    activeStyle={{ fontWeight: "bold" }}    
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()}                   
                >
                    {pageItem.label}
                </Link>   
            </Box>
        ))}
        <Box min-width="200px">
            <AnchorLink 
                to="/#newsletter" 
                key="newsletter"
            >
                
                <LightMode>
                    <Button
                        borderColor={'brand.400'}
                        color={'brand.400'}
                        variant={'outline'}
                        rounded={'brandRadius.button'}
                        borderWidth={'2px'}
                        _hover={{ bg: "red.500", color: "white" }}
                    >
                        Subscribe
                    </Button>
                </LightMode>
            </AnchorLink>
        </Box>
        <Box pt="6" display={"flex"}>
            <SocialLinks />
        </Box>
    </Stack>
</Box>
)
}

export default NavMobile
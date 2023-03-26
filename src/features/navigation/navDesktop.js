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
import { AnchorLink } from "gatsby-plugin-anchor-links"

const NavDesktop = ({ items }) => {
    const prefixPage = '../../page'
    const menuItems = items
    let pageMenuItems = []
    menuItems?.map(item => ( // outsource to helper function r*
        !item.url.includes('category')?
        pageMenuItems.push(item)
        :
        null
    ))
    
    return (
    <Box
        display={"flex"}
        alignItems="center"
    >
        <Stack
            fontSize={ "sm"}
            spacing={8}
            textAlign={'left'}
            justify={"flex-end"}
            direction={ "row" }
            p={"0"}
            marginTop={"0"}
            textTransform="uppercase"
            alignItems={'center'}
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
                        <Button // outsource to buttons/navButton r*
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
        </Stack>
    </Box>
    )
}

export default NavDesktop
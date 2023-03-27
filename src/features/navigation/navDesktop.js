import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import { filterMenuItems } from "../../utils/arrayHelpers"
import { NavButton, NavLink } from "../../components/buttons"

const NavDesktop = ({ items }) => {
    const prefixPage = '../../page'
    const pageMenuItems = filterMenuItems(items, "category")
    return (
        <Box
            display={"flex"}
            alignItems="center"
        >
            <Stack
                spacing={8}
                textAlign={'left'}
                justify={"flex-end"}
                direction={ "row" }
                p={"0"}
                mt={"0"}
                alignItems={'center'}
            >
                <NavLink to="/" linkText="Home" />
                <NavLink to="/blog" linkText="Blog" />
                {pageMenuItems.map(pageItem => (
                    <NavLink 
                        to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()}
                        linkText={pageItem.label}
                        key={pageItem.id}
                    />
                ))}
                <NavButton
                    buttonText="Subscribe"
                    buttonUrl="/#newsletter"
                />
            </Stack>
        </Box>
    )
}

export default NavDesktop
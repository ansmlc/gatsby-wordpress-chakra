import React from 'react';
import PropTypes from "prop-types"
import { Button, Box } from '@chakra-ui/react';
import { LightMode } from '@chakra-ui/color-mode';
import { AnchorLink } from "gatsby-plugin-anchor-links"

const NavButton = ({ buttonUrl, buttonText }) =>  (
    <Box min-width="200px">
        <AnchorLink 
            to={buttonUrl}
            key="newsletter"
        >   
            <LightMode>
                <Button 
                    borderColor={'brand.400'}
                    color={'brand.400'}
                    variant={'outline'}
                    rounded={'brandRadius.button'}
                    borderWidth={'2px'}
                    fontSize={"sm"}
                    _hover={{ bg: "red.500", color: "white" }}
                >
                    {buttonText}
                </Button>
            </LightMode>
        </AnchorLink>
    </Box>
)

NavButton.propTypes = {
    buttonUrl: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}
  
export default NavButton
  
  


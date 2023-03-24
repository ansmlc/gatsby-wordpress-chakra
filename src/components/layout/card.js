import React from "react"
import { 
    Box, 
    useColorModeValue 
} from "@chakra-ui/react"

const Card = ({ children, ...props }) => {
    return (
        <Box 
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="brandRadius.card"
            overflow="hidden"
            boxShadow="2xl" 
            {...props}
        >
            {children}
        </Box>
    )
}

export default Card

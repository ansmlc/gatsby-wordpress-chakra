import React from "react"
import { 
  Box, 
  Text,
  Heading } 
from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

const ArchiveTitle = ({ title, count }) => {
    return (
        <Box 
          w="100%" 
          pb={5}
        >
        <Heading 
          as="h3"
          title={title} 
          fontSize="2xl"
          display="inline"
          color={useColorModeValue('gray.800', 'gray.50')}
        >
          {title}
        </Heading>
        <Text 
          as="span"
          ml="2"
          color={useColorModeValue('gray.600', 'gray.200')}
        >
        {"(" + count + " posts)"}
        </Text>
      </Box>
    )
}

export default ArchiveTitle
    
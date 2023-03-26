import * as React from "react"
import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"
import { BiUser } from '@react-icons/all-files/bi/BiUser';
import { BaseLayout, DocumentHead } from "../features/rootLayout";
import { BreadcrumbsNav } from "../features/navigation";
import { PrimaryButton } from "../components/buttons"


export default function Component ()  {
    return (
<BaseLayout>
    <DocumentHead title="Contact"/>
    <BreadcrumbsNav otherContext="contact"/>
    <Text
        as="h1"
        fontWeight="bold"
        fontSize="3xl"
        marginTop="4"
        marginBottom="6"
        lineHeight="1.1"
    >
        Contact us
    </Text>
    <Box 
        bg={useColorModeValue('white', 'gray.700')}
        color={useColorModeValue('gray.800', 'gray.50')}
        borderRadius="2xl" 
        maxW={{base: '100%', md: '50%'}}
        p={{base: "6", md: "8"}}
        boxShadow="2xl"
        // data-sal="slide-up" data-sal-duration={600}
    >
            <VStack spacing={5}>
            <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor={useColorModeValue('gray.200', 'gray.500')}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiUser color="gray.600" />}
                />
                <Input placeholder="Your name" type="text" size="md" />
                </InputGroup>
            </FormControl>
            <FormControl id="name">
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor={useColorModeValue('gray.200', 'gray.500')}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiEnvelope color="gray.600" />}
                />
                <Input placeholder="Your email" type="text" size="md" />
                </InputGroup>
            </FormControl>
            <FormControl id="name">
                <FormLabel>Message</FormLabel>
                <Textarea
                borderColor={useColorModeValue('gray.200', 'gray.500')}
                _hover={{
                    borderColor: useColorModeValue('gray.300', 'gray.400')
                }}
                placeholder="Your message"
                />
            </FormControl>
            <FormControl id="name" float="right">
                <PrimaryButton arrowRight>Send Message</PrimaryButton>
            </FormControl>
            </VStack>
        </Box>
    </BaseLayout>
    );
  }

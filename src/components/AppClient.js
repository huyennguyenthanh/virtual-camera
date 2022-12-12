import React from 'react';
import {
    ChakraProvider,
    GridItem,
    Stack,
    theme,
    Box,
    VStack,
} from '@chakra-ui/react';

import Title from './client/Title';
import Camera from './client/Camera';
import InputName from './client/InputName';



export default function AppClient() {
    function inputName(name) {
        console.log("hello: " + name)

    }
    return (
        <ChakraProvider theme={theme}>

            <Box h='calc(100vh)' >
                <Stack direction={['column', 'row']} p={10} w="100%" h="100%" spacing="20" alignItems="center">
                    <GridItem w='100%'>
                        <VStack alignItems="flex-start" >
                            <Title ></Title>
                            <InputName inputName={inputName}></InputName>
                        </VStack>
                    </GridItem>
                    <GridItem w='100%'>
                        <VStack alignItems="center">
                            <Camera></Camera>
                        </VStack>
                    </GridItem>
                </Stack>
            </Box>
        </ChakraProvider>
    );
}

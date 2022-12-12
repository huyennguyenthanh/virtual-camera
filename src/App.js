import React from 'react';
import {
  ChakraProvider,
  Container,
  Grid, GridItem,
  Stack,
  theme,
  VStack,
} from '@chakra-ui/react';

import Title from './components/Title';
import { Logo } from './Logo';
import Camera from './components/Camera';
import InputName from './components/InputName';


function App() {
  function inputName(name) {
    console.log("hello: " + name)
 
  }
  return (
    <ChakraProvider theme={theme}>
      {/* <Logo h="40vmin" pointerEvents="none" /> */}
     
     
      <Stack direction={['column', 'row']} p={10} w="100%" h="100%" spacing="20">
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
    
    </ChakraProvider>
  );
}

export default App;

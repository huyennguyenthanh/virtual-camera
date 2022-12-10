import React from 'react';
import {
  ChakraProvider,
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
    console.log("hello")
    console.log(name)
  }
  return (
    <ChakraProvider theme={theme}>
      {/* <Logo h="40vmin" pointerEvents="none" /> */}
      <Stack direction={['column', 'row']} p={10}  minHeight="100%" minWidth="100%">
        <VStack pt="100" pb="20" alignItems="inherit">
          <Title ></Title>
          <InputName inputName={inputName}></InputName>
        </VStack>
        <VStack>
          <Camera></Camera>
        </VStack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;

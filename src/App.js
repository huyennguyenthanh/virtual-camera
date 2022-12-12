import React, { useState } from 'react';
import {
  Button,
  HStack,
  ChakraProvider,
  theme,
  Center
} from '@chakra-ui/react';

import AppClient from './components/AppClient';
import AppAdmin from './components/AppAdmin';


function App() {

  const [role, setRole] = useState();

  function handleRole(e) {

    e.preventDefault();
    console.log(e.target.value);
    setRole(e.target.value)

  }

  if (role) {
    if (role === "client") {
      return (
        <AppClient></AppClient>
      )
    } else if (role === "admin") {
      return (
        <AppAdmin></AppAdmin>

      )

    }

  } else {
    return (
      <ChakraProvider theme={theme}>
        <Center height="600">

          <HStack
            margin="0"
            position="absolute"
            top="50%"
            left="50%"
          // msTransform="translateY(-50%)"
          // transform="translateY(-50%)"
          >
            <Button
              type="button"
              colorScheme="twitter"
              value={"admin"}
              onClick={handleRole}
            >Admin</Button>
            <Button
              type="button"
              colorScheme="twitter"
              value={"client"}
              onClick={handleRole}
            >Client</Button>
          </HStack>
        </Center>
      </ChakraProvider>


    )
  }
}
export default App;

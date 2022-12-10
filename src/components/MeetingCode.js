import React from 'react'
import { Input, FormControl, Button, HStack, Stack } from '@chakra-ui/react'


export default function MeetingCode() {
    return (
        <Stack pl="0" alignItems="inherit">
            <Button
                w="60%"
                alignItems="center"
                color="whiteAlpha.900"
                colorScheme="twitter"
               
            >Generate new meeting code</Button>
            <HStack>
                {/* onClick={() =>
                    toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                }
                
 */}

                <Input
                    w="60%"

                    placeholder='Enter code to join room' />
                <Button
                    colorScheme="twitter"
                    variant='solid'
                >Join
                </Button>
            </HStack>
        </Stack>
    )
}

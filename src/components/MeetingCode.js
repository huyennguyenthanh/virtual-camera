import React from 'react'
import { Input, FormControl, Button, HStack, Stack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

export default function MeetingCode() {
    return (
        <Stack p="10" alignItems="inherit">
            <Button alignItems="flex-start">Generate new meeting code</Button>
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

                <Input w="30" placeholder='Enter code to join room' />
                <Button colorScheme='teal' variant='solid'>
                    Join
                </Button>
            </HStack>
        </Stack>
    )
}

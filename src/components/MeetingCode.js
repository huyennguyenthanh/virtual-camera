import React, { useState } from 'react'
import { useRef } from 'react'
import { Input, Button, IconButton, HStack, Stack, Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'
import { MdContentCopy } from 'react-icons/md'

export default function MeetingCode() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const [code, setCode] = useState()
    const { v4: uuidv4 } = require('uuid');

    function handleGenerateCode(e) {
        e.preventDefault();
        // onOpen();
        setCode(uuidv4());
        console.log(uuidv4())

    }
    

    return (
        <Stack pl="0" alignItems="inherit">
            <Button
                w="80%"
                alignItems="center"
                color="whiteAlpha.900"
                colorScheme="twitter"
                onClick={handleGenerateCode}
            >Generate new meeting code</Button>


            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader
                            fontSize='lg'
                            fontWeight='bold'
                            justifyContent="space-between"
                        >
                            <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                                Virtual Stream Video

                            </SimpleGrid>

                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Here is your meeting room ID
                            <Box
                                mt="20px"
                                p="10px"
                                borderRadius="5px"
                                bgColor="gray.300"
                            >
                                <Text>
                                    {code}
                                </Text>


                            </Box>


                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <IconButton
                                mr="10px"
                                icon={<MdContentCopy />}
                                onClick={() => { navigator.clipboard.writeText(code) }}
                            ></IconButton>
                            <Button ref={cancelRef} onClick={onClose}>
                                Close
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            <HStack>
                <Input
                    w="90%"
                    value={code}
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

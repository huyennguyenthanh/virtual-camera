import React from 'react'
import { useRef } from 'react'
import { Input, Button, HStack, Stack } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

export default function MeetingCode() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    function handleGenerateCode(e) {
        e.preventDefault();

    }

    return (
        <Stack pl="0" alignItems="inherit">
            <Button
                w="80%"
                alignItems="center"
                color="whiteAlpha.900"
                colorScheme="twitter"
                onClick={onOpen}
            >Generate new meeting code</Button>



            <HStack>
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

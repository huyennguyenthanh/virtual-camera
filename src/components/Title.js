import { Heading, Stack, Text } from '@chakra-ui/react'
import { defineStyle } from '@chakra-ui/react'
import React from 'react'

export default function Title() {

    const custom = defineStyle({
        fontWeight: 'extrabold',
        fontSize: '500px',
    
        // let's also provide dark mode alternatives
        _dark: {
            color: 'white.300',
        }
    })

   
    return (
        <Stack >
            <Heading
                fontWeight="extrabold"
                bgGradient='linear(to-r, blue.500, blue.300, blue.200, pink.300, blue.500)'
                bgClip='text'
                size="3xl"
                paddingBottom="5"
                >
                Video Stream
            </Heading>
            <Text
                fontStyle="italic"
                paddingBottom="20"
                
            >
                Connect, collabrate, and celebrate from anywhere with Virtual Camera
            </Text>
        </Stack>

    )
}

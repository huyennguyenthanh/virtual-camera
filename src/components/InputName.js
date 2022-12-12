import React from 'react'
import { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react'
import MeetingCode from './MeetingCode';
import { useRef } from 'react';

export default function InputName({ inputName }) {

    const _isSubmitted = useRef(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            console.log("None")
            return;
        }

        console.log(content)
        setContent('');
        inputName(content)
        console.log(_isSubmitted.value)
        _isSubmitted.value = true;
        console.log(_isSubmitted.value)


    }
    const [content, setContent] = useState('');

    if (_isSubmitted.value) {
        return <MeetingCode></MeetingCode>
    }
    else {
        return (
            <form
                onSubmit={handleSubmit}>
                <HStack pl="0" >
                    <Input
                        alignItems="flex-start"
                        placeholder='Enter display name'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                        type='submit'
                        colorScheme='twitter'
                        variant='solid'>
                        Next
                    </Button>
                </HStack>
            </form>
        )
    }

}

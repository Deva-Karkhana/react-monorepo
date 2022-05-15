import React from 'react';
import { ChakraProvider, Input } from '@chakra-ui/react';

const Text = ({ children }) => {
    return (
        <ChakraProvider>        
            <p style={{color: 'red',fontSize: '20px'}}>{children}</p>
            <Input placeholder='Basic usage' size='md'/>
        </ChakraProvider>
    )
};

export { Text };
import React from 'react';
import { NativeBaseProvider, Input, Button } from 'native-base';

const Text = ({ children }) => {
    return (
        <NativeBaseProvider>
            <p style={{color: 'red',fontSize: '20px'}}>{children}</p>
            <Input mx="3" placeholder="Input" w="75%" maxWidth="300px" />
            <Button onPress={() => console.log("hello world")} colorScheme="secondary" variant="solid">Click Me</Button>
        </NativeBaseProvider>
    )
};
export { Text };
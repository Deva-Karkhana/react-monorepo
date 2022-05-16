import React from 'react';
import { NativeBaseProvider, Button } from 'native-base';

const uiButton = ({ children }) => {
 return (
    <NativeBaseProvider>
        <Button onPress={() => console.log("hello world")} colorScheme="secondary" variant="solid">Click Me</Button>
    </NativeBaseProvider>
 )
};

export { uiButton };
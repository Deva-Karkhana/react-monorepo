import React from 'react';
import { NativeBaseProvider, Button} from "native-base";

const uiButton = ({ children }) => {
    return (
        <NativeBaseProvider>
            <Button onPress={() => console.log("hello world")} variant="solid">{children}</Button>
        </NativeBaseProvider>
    )
};

export { uiButton };
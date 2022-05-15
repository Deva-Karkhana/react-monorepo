import React from 'react';
import {Button} from "native-base";

const uiButton = ({ children }) => {
    return (
        <Button onPress={() => console.log("hello world")} variant="solid">{children}</Button>
    )
};

export { uiButton };
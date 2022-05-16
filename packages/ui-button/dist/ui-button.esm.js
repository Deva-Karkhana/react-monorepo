import React from 'react';
import { NativeBaseProvider, Button } from 'native-base';

var uiButton = function uiButton(_ref) {
  _ref.children;
  return /*#__PURE__*/React.createElement(NativeBaseProvider, null, /*#__PURE__*/React.createElement(Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    colorScheme: "secondary",
    variant: "solid"
  }, "Click Me"));
};

export { uiButton };

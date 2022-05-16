import React from 'react';
import { NativeBaseProvider, Input, Button } from 'native-base';

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(NativeBaseProvider, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children), /*#__PURE__*/React.createElement(Input, {
    mx: "3",
    placeholder: "Input",
    w: "75%",
    maxWidth: "300px"
  }), /*#__PURE__*/React.createElement(Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    colorScheme: "secondary",
    variant: "solid"
  }, "Click Me"));
};

export { Text };

import React from 'react';
import { NativeBaseProvider, Button } from 'native-base';

var uiButton = function uiButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(NativeBaseProvider, null, /*#__PURE__*/React.createElement(Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    variant: "solid"
  }, children));
};

export { uiButton };

import React from 'react';
import { Button } from 'native-base';

var uiButton = function uiButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    variant: "solid"
  }, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children);
};

export { Text, uiButton };

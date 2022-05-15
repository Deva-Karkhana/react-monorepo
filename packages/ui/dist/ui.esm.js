import React from 'react';
import { ChakraProvider, Input } from '@chakra-ui/react';

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", null, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Basic usage",
    size: "md"
  }));
};

export { Button, Text };

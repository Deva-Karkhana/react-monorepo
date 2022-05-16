'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@chakra-ui/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(react.ChakraProvider, null, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children), /*#__PURE__*/React__default["default"].createElement(react.Input, {
    placeholder: "Basic input",
    size: "md"
  }));
};

exports.Text = Text;

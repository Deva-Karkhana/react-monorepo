'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var nativeBase = require('native-base');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var uiButton = function uiButton(_ref) {
  _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(nativeBase.NativeBaseProvider, null, /*#__PURE__*/React__default["default"].createElement(nativeBase.Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    colorScheme: "secondary",
    variant: "solid"
  }, "Click Me"));
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(nativeBase.NativeBaseProvider, null, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children), /*#__PURE__*/React__default["default"].createElement(nativeBase.Input, {
    mx: "3",
    placeholder: "Input",
    w: "75%",
    maxWidth: "300px"
  }), /*#__PURE__*/React__default["default"].createElement(nativeBase.Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    colorScheme: "secondary",
    variant: "solid"
  }, "Click Me"));
};

exports.Text = Text;
exports.uiButton = uiButton;

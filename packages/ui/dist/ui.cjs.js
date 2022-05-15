'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var nativeBase = require('native-base');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var uiButton = function uiButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(nativeBase.Button, {
    onPress: function onPress() {
      return console.log("hello world");
    },
    variant: "solid"
  }, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children);
};

exports.Text = Text;
exports.uiButton = uiButton;

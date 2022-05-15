import React from 'react';

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }, children);
};

export { Text };

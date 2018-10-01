"use strict";

var addTwo = function addTwo(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "".concat(x, " + ").concat(y, " = ").concat(x + y);
};

addTwo(5, 10);
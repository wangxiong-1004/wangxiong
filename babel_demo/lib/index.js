"use strict";

[1, 2, 3].map(function (item) {
  return item + 1;
});
var ids = ['id1', 'id2'];
var messages = ids.map(function (value, index, array) {
  return "ID of ".concat(index, " element is ").concat(value);
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileMatches = fileMatches;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fileMatches(filePath, expected) {
  var content = _fs2.default.readFileSync(filePath, 'utf8');
  return content === expected;
}
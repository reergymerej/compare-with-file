'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileMatches = fileMatches;
exports.setLogging = setLogging;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _unfunkDiff = require('unfunk-diff');

var _ministyle = require('ministyle');

var ministyle = _interopRequireWildcard(_ministyle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logDifferences = false;
var formatter = void 0;

function getFormatter() {
  var style = ministyle.ansi();
  return new _unfunkDiff.DiffFormatter(style, 80);
}

function showDiff(expected, actual) {
  formatter = formatter || getFormatter();
  console.log('- expected\n+ actual\n'); // eslint-disable-line
  console.log(formatter.getStyledDiff(expected, actual)); // eslint-disable-line
}

function fileMatches(filePath, expected) {
  var content = _fs2.default.readFileSync(filePath, 'utf8');
  var isMatch = content === expected;

  if (!isMatch && logDifferences) {
    showDiff(expected, content);
  }

  return isMatch;
}

function setLogging(on) {
  logDifferences = !!on;
}
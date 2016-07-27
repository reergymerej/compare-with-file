import fs from 'fs';
import {DiffFormatter} from 'unfunk-diff';
import * as ministyle from 'ministyle';

let logDifferences = false;
let formatter;

function getFormatter() {
  const style = ministyle.ansi();
  return new DiffFormatter(style, 80);
}

function showDiff(expected, actual) {
  formatter = formatter || getFormatter();
  console.log('- expected\n+ actual\n'); // eslint-disable-line
  console.log(formatter.getStyledDiff(expected, actual)); // eslint-disable-line
}

export function fileMatches(filePath, expected) {
  const content = fs.readFileSync(filePath, 'utf8');
  const isMatch = content === expected;

  if (!isMatch && logDifferences) {
    showDiff(expected, content);
  }

  return isMatch;
}

export function setLogging(on) {
  logDifferences = !!on;
}

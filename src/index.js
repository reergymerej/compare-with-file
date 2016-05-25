import fs from 'fs';

export function fileMatches(filePath, expected) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content === expected;
}

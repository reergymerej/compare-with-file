import { will } from 'willy';
import * as app from '../src';
import fs from 'fs';
import path from 'path';

describe('comparing with file content', () => {
  it('should should return true if it matches', () => {
    const filePath = path.join(__dirname, 'input.txt');
    const expected = fs.readFileSync(filePath, 'utf8');
    const result = app.fileMatches(filePath, expected);
    will(result).be(true);
  });

  it('should should return false if it does not match', () => {
    const filePath = path.join(__dirname, 'input.txt');
    const expected = 'whoops';
    const result = app.fileMatches(filePath, expected);
    will(result).be(false);
  });
});

describe('trying to compare a missing file', () => {
  it('should throw', () => {
    const filePath = path.join(__dirname, 'missing.txt');
    will(() => {
      app.fileMatches(filePath, '');
    }).throw();
  });
});

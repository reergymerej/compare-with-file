# compare-with-file
[![Build Status](https://travis-ci.org/reergymerej/compare-with-file.svg?branch=master)](https://travis-ci.org/reergymerej/compare-with-file) [v1.1.0][changelog]

Compare the contents of a file with a string.

```js
import { fileMatches } from 'compare-with-file';

fileMatches(filePath, 'expected contents'); // returns Boolean
```

To view a diff when the files don't match, use `setLogging`.

```js
import { fileMatches, setLogging } from 'compare-with-file';
setLogging(true);
```

*example output*
```sh
- expected
+ actual

-   Th   is is the input file.\n
  "+-|+++-|---------------------"
+  w hoop s
```

[changelog]: CHANGELOG.md

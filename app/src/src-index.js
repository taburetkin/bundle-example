// you can try to change import path to 'some-lib/src/foo-module' or 'some-lib/src/foo-module/foo-alpha'
// rollup bundle will still contain only fooAlpha method while webpack's one will hold all exports from foo-module

import { fooAlpha as method } from 'some-lib/src';
console.log('method: ', method);

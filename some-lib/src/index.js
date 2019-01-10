export * from './bar-module/index.js';
export * from './foo-module/index.js';

import * as bar from './bar-module/index.js';
import * as foo from './foo-module/index.js';

export {
	foo,
	bar
}

const SomeLib = {
	VERSION: "1.0.0",
	foo,
	bar
}

export default SomeLib;

function someHelper() {
	console.log('...');
}

function fooAlpha() {

	someHelper();
	console.log('fooAlpha');
	
}

// you can try to change import path to 'some-lib/src/foo-module'
console.log('method: ', fooAlpha);

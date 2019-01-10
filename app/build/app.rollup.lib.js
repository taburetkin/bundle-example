function barBeta() {
	console.log('barBeta');
	console.log('barAlpha is ', typeof barAlpha);
}

function fooBeta() {
	console.log('fooBeta');
	console.log('barBeta is ', typeof barBeta);
}

function barAlpha() {
	console.log('barAlpha');
	console.log('fooBeta is ', typeof fooBeta);
}



var bar = /*#__PURE__*/Object.freeze({
	barAlpha: barAlpha,
	barBeta: barBeta
});

function someHelper() {
	console.log('...');
}

function fooAlpha() {

	someHelper();
	console.log('fooAlpha');
	
}



var foo = /*#__PURE__*/Object.freeze({
	fooAlpha: fooAlpha,
	fooBeta: fooBeta
});

console.log('method: ', fooAlpha);

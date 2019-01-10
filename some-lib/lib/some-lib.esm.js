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

function fooAlpha() {
	console.log('fooAlpha');
}



var foo = /*#__PURE__*/Object.freeze({
	fooAlpha: fooAlpha,
	fooBeta: fooBeta
});

const SomeLib = {
	VERSION: "1.0.0",
	foo,
	bar
};

export default SomeLib;
export { foo, bar, barAlpha, barBeta, fooAlpha, fooBeta };

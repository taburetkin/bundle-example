/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/src-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/some-lib/src/bar-module/bar-alpha.js":
/*!***********************************************************!*\
  !*** ./node_modules/some-lib/src/bar-module/bar-alpha.js ***!
  \***********************************************************/
/*! exports provided: barAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barAlpha\", function() { return barAlpha; });\n/* harmony import */ var _foo_module_foo_beta_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foo-module/foo-beta.js */ \"./node_modules/some-lib/src/foo-module/foo-beta.js\");\n\r\nfunction barAlpha() {\r\n\tconsole.log('barAlpha');\r\n\tconsole.log('fooBeta is ', typeof _foo_module_foo_beta_js__WEBPACK_IMPORTED_MODULE_0__[\"fooBeta\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/bar-module/bar-alpha.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/bar-module/bar-beta.js":
/*!**********************************************************!*\
  !*** ./node_modules/some-lib/src/bar-module/bar-beta.js ***!
  \**********************************************************/
/*! exports provided: barBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barBeta\", function() { return barBeta; });\n/* harmony import */ var _bar_alpha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-alpha.js */ \"./node_modules/some-lib/src/bar-module/bar-alpha.js\");\n\r\nfunction barBeta() {\r\n\tconsole.log('barBeta');\r\n\tconsole.log('barAlpha is ', typeof _bar_alpha_js__WEBPACK_IMPORTED_MODULE_0__[\"barAlpha\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/bar-module/bar-beta.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/bar-module/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/some-lib/src/bar-module/index.js ***!
  \*******************************************************/
/*! exports provided: barAlpha, barBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bar_alpha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-alpha.js */ \"./node_modules/some-lib/src/bar-module/bar-alpha.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"barAlpha\", function() { return _bar_alpha_js__WEBPACK_IMPORTED_MODULE_0__[\"barAlpha\"]; });\n\n/* harmony import */ var _bar_beta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-beta.js */ \"./node_modules/some-lib/src/bar-module/bar-beta.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"barBeta\", function() { return _bar_beta_js__WEBPACK_IMPORTED_MODULE_1__[\"barBeta\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/bar-module/index.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/foo-module/foo-alpha.js":
/*!***********************************************************!*\
  !*** ./node_modules/some-lib/src/foo-module/foo-alpha.js ***!
  \***********************************************************/
/*! exports provided: fooAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fooAlpha\", function() { return fooAlpha; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./node_modules/some-lib/src/helpers.js\");\n\r\nfunction fooAlpha() {\r\n\r\n\tObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"someHelper\"])();\r\n\tconsole.log('fooAlpha');\r\n\t\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/foo-module/foo-alpha.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/foo-module/foo-beta.js":
/*!**********************************************************!*\
  !*** ./node_modules/some-lib/src/foo-module/foo-beta.js ***!
  \**********************************************************/
/*! exports provided: fooBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fooBeta\", function() { return fooBeta; });\n/* harmony import */ var _bar_module_bar_beta_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bar-module/bar-beta.js */ \"./node_modules/some-lib/src/bar-module/bar-beta.js\");\n\r\nfunction fooBeta() {\r\n\tconsole.log('fooBeta');\r\n\tconsole.log('barBeta is ', typeof _bar_module_bar_beta_js__WEBPACK_IMPORTED_MODULE_0__[\"barBeta\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/foo-module/foo-beta.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/foo-module/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/some-lib/src/foo-module/index.js ***!
  \*******************************************************/
/*! exports provided: fooAlpha, fooBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo_alpha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo-alpha.js */ \"./node_modules/some-lib/src/foo-module/foo-alpha.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fooAlpha\", function() { return _foo_alpha_js__WEBPACK_IMPORTED_MODULE_0__[\"fooAlpha\"]; });\n\n/* harmony import */ var _foo_beta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foo-beta.js */ \"./node_modules/some-lib/src/foo-module/foo-beta.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fooBeta\", function() { return _foo_beta_js__WEBPACK_IMPORTED_MODULE_1__[\"fooBeta\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/foo-module/index.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/helpers.js":
/*!**********************************************!*\
  !*** ./node_modules/some-lib/src/helpers.js ***!
  \**********************************************/
/*! exports provided: someHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"someHelper\", function() { return someHelper; });\nfunction someHelper() {\r\n\tconsole.log('...');\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/helpers.js?");

/***/ }),

/***/ "./node_modules/some-lib/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/some-lib/src/index.js ***!
  \********************************************/
/*! exports provided: foo, bar, default, barAlpha, barBeta, fooAlpha, fooBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bar_module_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-module/index.js */ \"./node_modules/some-lib/src/bar-module/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"barAlpha\", function() { return _bar_module_index_js__WEBPACK_IMPORTED_MODULE_0__[\"barAlpha\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"barBeta\", function() { return _bar_module_index_js__WEBPACK_IMPORTED_MODULE_0__[\"barBeta\"]; });\n\n/* harmony import */ var _foo_module_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foo-module/index.js */ \"./node_modules/some-lib/src/foo-module/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fooAlpha\", function() { return _foo_module_index_js__WEBPACK_IMPORTED_MODULE_1__[\"fooAlpha\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fooBeta\", function() { return _foo_module_index_js__WEBPACK_IMPORTED_MODULE_1__[\"fooBeta\"]; });\n\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"bar\", function() { return _bar_module_index_js__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"foo\", function() { return _foo_module_index_js__WEBPACK_IMPORTED_MODULE_1__; });\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst SomeLib = {\r\n\tVERSION: \"1.0.0\",\r\n\tfoo: _foo_module_index_js__WEBPACK_IMPORTED_MODULE_1__,\r\n\tbar: _bar_module_index_js__WEBPACK_IMPORTED_MODULE_0__\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SomeLib);\r\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/src/index.js?");

/***/ }),

/***/ "./src/src-index.js":
/*!**************************!*\
  !*** ./src/src-index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var some_lib_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! some-lib/src */ \"./node_modules/some-lib/src/index.js\");\n// you can try to change import path to 'some-lib/src/foo-module'\r\n// rollup bundle will still contain only fooAlpha method while webpack's one will hold all exports from foo-module\r\n\r\n\r\nconsole.log('method: ', some_lib_src__WEBPACK_IMPORTED_MODULE_0__[\"fooAlpha\"]);\r\n\n\n//# sourceURL=webpack:///./src/src-index.js?");

/***/ })

/******/ });
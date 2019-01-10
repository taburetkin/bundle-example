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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/some-lib/lib/some-lib.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/some-lib/lib/some-lib.esm.js ***!
  \***************************************************/
/*! exports provided: default, foo, bar, barAlpha, barBeta, fooAlpha, fooBeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foo\", function() { return foo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bar\", function() { return bar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barAlpha\", function() { return barAlpha; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barBeta\", function() { return barBeta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fooAlpha\", function() { return fooAlpha; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fooBeta\", function() { return fooBeta; });\nfunction barBeta() {\r\n\tconsole.log('barBeta');\r\n\tconsole.log('barAlpha is ', typeof barAlpha);\r\n}\n\nfunction fooBeta() {\r\n\tconsole.log('fooBeta');\r\n\tconsole.log('barBeta is ', typeof barBeta);\r\n}\n\nfunction barAlpha() {\r\n\tconsole.log('barAlpha');\r\n\tconsole.log('fooBeta is ', typeof fooBeta);\r\n}\n\n\n\nvar bar = /*#__PURE__*/Object.freeze({\n\tbarAlpha: barAlpha,\n\tbarBeta: barBeta\n});\n\nfunction someHelper() {\r\n\tconsole.log('...');\r\n}\n\nfunction fooAlpha() {\r\n\r\n\tsomeHelper();\r\n\tconsole.log('fooAlpha');\r\n\t\r\n}\n\n\n\nvar foo = /*#__PURE__*/Object.freeze({\n\tfooAlpha: fooAlpha,\n\tfooBeta: fooBeta\n});\n\nconst SomeLib = {\r\n\tVERSION: \"1.0.0\",\r\n\tfoo,\r\n\tbar\r\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SomeLib);\n\n\n\n//# sourceURL=webpack:///./node_modules/some-lib/lib/some-lib.esm.js?");

/***/ }),

/***/ "./src/lib-index.js":
/*!**************************!*\
  !*** ./src/lib-index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var some_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! some-lib */ \"./node_modules/some-lib/lib/some-lib.esm.js\");\n\r\nconsole.log('method: ', some_lib__WEBPACK_IMPORTED_MODULE_0__[\"fooAlpha\"]);\r\n\n\n//# sourceURL=webpack:///./src/lib-index.js?");

/***/ })

/******/ });
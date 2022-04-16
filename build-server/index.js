/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu.js */ \"./src/Menu.js\");\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"./build\"));\nconst PORT = process.env.PORT || 4000;\napp.get(\"/\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_Menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_4___default().readFile(indexFile, \"utf8\", (err, data) => {\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack://react-ssr/./server/index.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Recipe = _ref => {\n  let {\n    name,\n    ingredients,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", {\n    className: \"ingredients\"\n  }, ingredients.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n    key: i\n  }, ingredient.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: \"instruction\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, \"Cooking Instructions\"), steps.map((step, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    key: i\n  }, step))));\n};\n\nconst Menu = _ref2 => {\n  let {\n    title,\n    recipes\n  } = _ref2;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"recipes\"\n  }, recipes.map((recipe, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Recipe, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: i\n  }, recipe)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://react-ssr/./src/Menu.js?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;
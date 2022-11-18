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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/imgs/restroBack.jpg */ \"./src/assests/imgs/restroBack.jpg?1029\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Dancing+Script:wght@400;500;600;700&family=Gugi&family=Henny+Penny&family=Inter&family=Megrim&family=Pacifico&family=Petit+Formal+Script&family=Poor+Story&family=Roboto+Condensed&family=Roboto:wght@300&family=Salsa&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --header-bg-color: #992020;\\n    --body-bg-color: #1B1919;\\n    --active-tab-color: #363636;\\n    --message-text: #1DAC3C;\\n    --number-color: #4161D3;\\n}\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nheader {\\n    background-color: var(--header-bg-color);\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0.25rem;\\n}\\n\\n.title-container {\\n    font-family: 'Henny Penny', cursive;\\n    font-size: 50px;\\n    color: white;\\n}\\n\\nheader nav,\\n.icons-container {\\n    display: flex;\\n    width: 30%;\\n    font-family: 'Pacifico', cursive;\\n    font-size: 22px;\\n    color: white;\\n    align-items: center;\\n    justify-content: space-evenly;\\n}\\n\\nnav > p:hover,\\n.menu-type > p:hover {\\n    color: var(--active-tab-color);\\n    cursor: pointer;\\n}\\n\\n.body-container {\\n    padding: 20px;\\n    background-color: var(--body-bg-color);\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n}\\n\\n.image-container,\\n.image-back-container {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.image-container img {\\n    height: 400px;\\n    width: 90%;\\n}\\n\\n.menu-title-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 15px;\\n}\\n\\n.menu-title-container > p {\\n    font-family: 'Dancing Script', cursive;\\n    font-weight: 700;\\n    font-size: 40px;\\n    color: white;\\n}\\n\\n.menu-type {\\n    display: flex;\\n    width: 100%;\\n    padding: 10px;\\n    gap: 30px;\\n    background-color: var(--header-bg-color);\\n    height: 40px;\\n}\\n\\n.menu-type > p {\\n    font-family: 'Dancing script', cursive;\\n    font-size: 18px;\\n    font-weight: 700;\\n    color: white;\\n}\\n\\n.menu-card-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    padding: 0px 20px;\\n}\\n\\n.menu-card {\\n    background-color: white;\\n    height: 200px;\\n    width: 100%;\\n    border-radius: 8px;\\n    display: flex;\\n    gap: 20px;\\n    align-items: center;\\n}\\n\\n.menu-card img {\\n    height: auto;\\n    width: 140px;\\n    border-radius: 6px;\\n    padding: 0px 10px 0px 10px;\\n}\\n\\n.menu-card-about {\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n    justify-content: center;\\n}\\n\\n.title {\\n    font-family: \\\"Inter\\\", cursive;\\n    font-weight: bold;\\n    font-size: 20px;\\n}\\n\\n.description {\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    font-size: 16px;\\n    color: #3F3B3B;\\n}\\n\\n.image-back-container {\\n    font-family: \\\"Salsa\\\", sans-serif;\\n    position: relative;\\n}\\n\\n.image-back-container >img {\\n    height: 420px;\\n    width: 75%;\\n}\\n\\n.image {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-position: center center;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    height: 400px;\\n    width: 90%;\\n}\\n\\n.contact-us {\\n    position: absolute;\\n    color: #EE3232;\\n    font-size: 90px;\\n    top: 150px;\\n}\\n\\n.message-container,\\n.find-us-container {\\n    display: flex;\\n    width: 100%;\\n    justify-content: center;\\n}\\n\\n.message-container > p,\\n.find-us-container > p{\\n    font-family: \\\"Salsa\\\", sans-serif;\\n    font-size: 22px;\\n    color: var(--message-text);\\n}\\n\\n.contact-details-container {\\n    display: flex;\\n    gap: 30px;\\n    width: 100%;\\n    justify-content: center;\\n}\\n\\n.contact-card {\\n    background-color: white;\\n    height: 250px;\\n    border-radius: 8px;\\n    width: 250px;\\n    padding: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n}\\n\\n.contact-card > p,\\n.contact1-card > p {\\n    display: flex;\\n    justify-content: center;\\n    font-family: \\\"Salsa\\\", sans-serif;\\n}\\n\\n.contact1-card {\\n    background-color: white;\\n    height: 250px;\\n    border-radius: 8px;\\n    width: 250px;\\n    padding: 20px;\\n}\\n\\n.socials {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n    align-items: center;\\n}\\n\\n\\n.grid-container {\\n    display: grid;\\n    height: 150px;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr;\\n    column-gap: 20px;\\n    row-gap: 40px;\\n}\\n\\n.grid {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.number {\\n    color: var(--number-color);\\n}\\n\\n\\nfooter {\\n    height: 50px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: var(--header-bg-color);\\n}\\n\\nfooter > p {\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assests/icons/UberEats.png":
/*!****************************************!*\
  !*** ./src/assests/icons/UberEats.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9a327121f0b8689ff55771944f6411d1.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/UberEats.png?");

/***/ }),

/***/ "./src/assests/icons/facebook.png":
/*!****************************************!*\
  !*** ./src/assests/icons/facebook.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e6c3d620ac915d10583865a7e7ca1a2f.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/facebook.png?");

/***/ }),

/***/ "./src/assests/icons/instagram.png":
/*!*****************************************!*\
  !*** ./src/assests/icons/instagram.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6065601340b2a3a0943655f2020f90d9.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/instagram.png?");

/***/ }),

/***/ "./src/assests/icons/tiktok.png":
/*!**************************************!*\
  !*** ./src/assests/icons/tiktok.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fa46d278f759ea5c008e4689ea2f10ff.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/tiktok.png?");

/***/ }),

/***/ "./src/assests/icons/twitter.png":
/*!***************************************!*\
  !*** ./src/assests/icons/twitter.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bf121d1c8e79fa9cf76328c5ee83ac0d.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/twitter.png?");

/***/ }),

/***/ "./src/assests/icons/whatsapp.png":
/*!****************************************!*\
  !*** ./src/assests/icons/whatsapp.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dfe17f498b1b2780ee0efe7ea6de1116.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/icons/whatsapp.png?");

/***/ }),

/***/ "./src/assests/imgs/bobatea.jpg":
/*!**************************************!*\
  !*** ./src/assests/imgs/bobatea.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9881235a02ee451af4dae86be390a657.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/bobatea.jpg?");

/***/ }),

/***/ "./src/assests/imgs/burger.jpg":
/*!*************************************!*\
  !*** ./src/assests/imgs/burger.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dbb2c72140a7313613853bfa46f361ac.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/burger.jpg?");

/***/ }),

/***/ "./src/assests/imgs/burger2.jpg":
/*!**************************************!*\
  !*** ./src/assests/imgs/burger2.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f9d79d8c1e6021c44892fd7a2c103eca.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/burger2.jpg?");

/***/ }),

/***/ "./src/assests/imgs/cake.jpg":
/*!***********************************!*\
  !*** ./src/assests/imgs/cake.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cf7c6cfd2c54cd21d05aad7389907780.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/cake.jpg?");

/***/ }),

/***/ "./src/assests/imgs/chicken.jpg":
/*!**************************************!*\
  !*** ./src/assests/imgs/chicken.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d58c8cb6d1fbd1464871a2071fb1ff2a.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/chicken.jpg?");

/***/ }),

/***/ "./src/assests/imgs/coffee.jpg":
/*!*************************************!*\
  !*** ./src/assests/imgs/coffee.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"df708c6452995d8e0362aa0ce9d45270.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/coffee.jpg?");

/***/ }),

/***/ "./src/assests/imgs/coke.jpg":
/*!***********************************!*\
  !*** ./src/assests/imgs/coke.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fe9017de26daafbfb53b8159731cfd47.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/coke.jpg?");

/***/ }),

/***/ "./src/assests/imgs/hotlemon.jpg":
/*!***************************************!*\
  !*** ./src/assests/imgs/hotlemon.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"75059bc7806afec2133a21e9090195d5.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/hotlemon.jpg?");

/***/ }),

/***/ "./src/assests/imgs/pizza.jpg":
/*!************************************!*\
  !*** ./src/assests/imgs/pizza.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"12966f5f88126ffd18bab3405109f29a.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/pizza.jpg?");

/***/ }),

/***/ "./src/assests/imgs/pizza3.jpg":
/*!*************************************!*\
  !*** ./src/assests/imgs/pizza3.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1d1dc6ae75ff77439e5bd5186ac418c9.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/pizza3.jpg?");

/***/ }),

/***/ "./src/assests/imgs/restro.jpg":
/*!*************************************!*\
  !*** ./src/assests/imgs/restro.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c22e0ae11f067423af954bb51fa79ef0.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/restro.jpg?");

/***/ }),

/***/ "./src/assests/imgs/restroBack.jpg?a8e6":
/*!*****************************************!*\
  !*** ./src/assests/imgs/restroBack.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"27a72eb75fd6c357ce663d73b54bf5ba.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/restroBack.jpg?");

/***/ }),

/***/ "./src/assests/imgs/sandwich.jpg":
/*!***************************************!*\
  !*** ./src/assests/imgs/sandwich.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1a21759f54ba658f1b73daf7f12753b3.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/sandwich.jpg?");

/***/ }),

/***/ "./src/assests/imgs/tea.jpg":
/*!**********************************!*\
  !*** ./src/assests/imgs/tea.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"26a0d798948b308a7375978a9e0f2b2c.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/tea.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _assests_icons_instagram_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/icons/instagram.png */ \"./src/assests/icons/instagram.png\");\n/* harmony import */ var _assests_icons_facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/icons/facebook.png */ \"./src/assests/icons/facebook.png\");\n/* harmony import */ var _assests_icons_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assests/icons/twitter.png */ \"./src/assests/icons/twitter.png\");\n/* harmony import */ var _assests_icons_tiktok_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assests/icons/tiktok.png */ \"./src/assests/icons/tiktok.png\");\n/* harmony import */ var _assests_icons_UberEats_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/icons/UberEats.png */ \"./src/assests/icons/UberEats.png\");\n/* harmony import */ var _assests_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/icons/whatsapp.png */ \"./src/assests/icons/whatsapp.png\");\n/* harmony import */ var _assests_imgs_restroBack_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assests/imgs/restroBack.jpg */ \"./src/assests/imgs/restroBack.jpg?a8e6\");\n\n\n\n\n\n\n\n\n\n\nfunction contact () {\n    // bigContainer which will have all the content of the page\n    const bigContainer = document.querySelector(\"#content\");\n    bigContainer.innerHTML = \"\";\n\n    // bodyContainer\n    const bodyContainer = document.createElement(\"div\");\n    bodyContainer.classList.add(\"body-container\");\n\n    // first child of the bodyContainer\n    const imageBackContainer = document.createElement(\"div\");\n    imageBackContainer.classList.add(\"image-back-container\");\n\n    // children of imageBackContainer\n    const image = document.createElement(\"img\");\n    image.src = _assests_imgs_restroBack_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n    // image.classList.add(\"image\");\n    const contactUs = document.createElement(\"p\");\n    contactUs.textContent = \"Contact Us\";\n    contactUs.classList.add(\"contact-us\");\n\n    // appending children to imageBackContainer\n    imageBackContainer.append(image, contactUs);\n\n    // second child of the bodyContainer\n    const messageContainer = document.createElement(\"div\");\n    messageContainer.classList.add(\"message-container\");\n    const message = document.createElement(\"p\");\n    message.textContent = \"We provide the best food in the city.Come say hello and enjoy our food.\"\n    messageContainer.append(message);\n\n    // third child of the bodyContainer\n    const contactDetailsContainer = document.createElement(\"div\");\n    contactDetailsContainer.classList.add(\"contact-details-container\");\n    const contactCard = document.createElement(\"div\");\n    contactCard.classList.add(\"contact-card\");\n\n    const email = document.createElement(\"p\");\n    email.textContent = \"example@example.com\";\n    const location = document.createElement(\"p\");\n    location.textContent = \"Location, Location\";\n    const personalNumbers = document.createElement(\"p\");\n    personalNumbers.textContent = \"Personal Numbers\";\n    const number1 = document.createElement(\"p\");\n    number1.textContent = \"+977 98XXXXXXXX\";\n    number1.classList.add(\"number\");\n    const number2 = document.createElement(\"p\");\n    number2.textContent = \"+977 98XXXXXXXX\";\n    number2.classList.add(\"number\");\n    const officeNumber = document.createElement(\"p\");\n    officeNumber.textContent = \"Office Number\"\n    const number3 = document.createElement(\"p\");\n    number3.textContent = \"014-XXXXX\";\n    number3.classList.add(\"number\");\n\n    contactCard.append(email, location, personalNumbers, number1, number2, officeNumber, number3);\n\n\n    const contact1Card = document.createElement(\"div\");\n    contact1Card.classList.add('contact1-card');\n\n    const socialspara = document.createElement(\"p\");\n    socialspara.textContent = \"Our Social Media\";\n    const socials = document.createElement(\"div\");\n    socials.classList.add('socials'); \n    const gridContainer = document.createElement(\"div\");\n    gridContainer.classList.add('grid-container');\n\n    const instaImg = document.createElement(\"img\");\n    instaImg.classList.add(\"grid\");\n    instaImg.src = _assests_icons_instagram_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n    const facebookImg = document.createElement(\"img\");\n    facebookImg.classList.add(\"grid\");\n    facebookImg.src = _assests_icons_facebook_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n    const twitterImg = document.createElement(\"img\");\n    twitterImg.classList.add(\"grid\");\n    twitterImg.src = _assests_icons_twitter_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n    const tiktokImg = document.createElement(\"img\");\n    tiktokImg.classList.add(\"grid\");\n    tiktokImg.src = _assests_icons_tiktok_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n    const whatsappImg = document.createElement(\"img\");\n    whatsappImg.classList.add(\"grid\");\n    whatsappImg.src = _assests_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n    const uberEatsImg = document.createElement(\"img\");\n    uberEatsImg.classList.add(\"grid\");\n    uberEatsImg.src = _assests_icons_UberEats_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    \n\n    gridContainer.append(instaImg, facebookImg, twitterImg, tiktokImg, whatsappImg, uberEatsImg);\n\n    socials.append(gridContainer);\n\n    contact1Card.append(socialspara, socials);\n\n    contactDetailsContainer.append(contactCard, contact1Card);\n\n    // fourth child of the bodyContainer\n    const findUsContainer = document.createElement(\"div\");\n    findUsContainer.classList.add(\"find-us-container\");\n    const findUs = document.createElement(\"p\");\n    findUs.textContent = \"You can also find us at Uber Eats.\";\n    findUsContainer.append(findUs);\n\n    // appending children to bodyContainer\n    bodyContainer.append(imageBackContainer, messageContainer, contactDetailsContainer, findUsContainer);\n\n    // appending child to bigContainer\n    bigContainer.append(bodyContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadFooter () {\n    const body = document.querySelector(\"body\");\n\n    const footer = document.createElement(\"footer\");\n    const para = document.createElement(\"p\");\n    para.textContent = \"Copyright. All rights reserved.\"\n\n    footer.append(para);\n\n    body.append(footer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_restro_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/restro.jpg */ \"./src/assests/imgs/restro.jpg\");\n/* harmony import */ var _loadItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadItems */ \"./src/loadItems.js\");\n/* harmony import */ var _loadHotDrinks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHotDrinks.js */ \"./src/loadHotDrinks.js\");\n/* harmony import */ var _loadBeverages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadBeverages.js */ \"./src/loadBeverages.js\");\n/* harmony import */ var _loadBurger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadBurger.js */ \"./src/loadBurger.js\");\n/* harmony import */ var _loadPizza_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadPizza.js */ \"./src/loadPizza.js\");\n\n\n\n\n\n\n\n\nfunction homePage() {\n    // bigContainer which will have all the content of the page\n    const bigContainer = document.querySelector(\"#content\");\n\n    bigContainer.innerHTML = \"\";\n\n\n    // body part of the content\n    const bodyContainer = document.createElement(\"div\");\n    bodyContainer.classList.add(\"body-container\");\n\n    // first child of the body\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"image-container\");\n    \n    // child of imageContainer\n    const restroImg = document.createElement(\"img\");\n    restroImg.src = _assests_imgs_restro_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    // appending the image\n    imageContainer.append(restroImg);\n\n\n    // second child of the body\n    const menuTitleContainer = document.createElement(\"div\");\n    menuTitleContainer.classList.add(\"menu-title-container\");\n\n    // children of menuTitleContainer\n    const menu = document.createElement(\"p\");\n    menu.textContent = \"Menu\";\n    const menuType = document.createElement(\"div\");\n    menuType.classList.add(\"menu-type\");\n\n    // children of menuType\n    const all = document.createElement(\"p\");\n    all.textContent = \"All\";\n    all.id = \"all\";\n    const drinks = document.createElement(\"p\");\n    drinks.textContent = \"Hot Drinks\";\n    drinks.id = \"drink\";\n    const beverages = document.createElement(\"p\");\n    beverages.textContent = \"Beverages\";\n    beverages.id = \"beverages\";\n    const pizza = document.createElement(\"p\");\n    pizza.textContent = \"Pizza\";\n    pizza.id = \"pizza\";\n    const burger = document.createElement(\"p\");\n    burger.textContent = \"Burger\";\n    burger.id = \"burger\";\n\n    // appending the child to menuType\n    menuType.append(all, drinks, beverages, pizza, burger);\n\n    // appending the child to menuTitleContainer\n    menuTitleContainer.append(menu, menuType);\n\n\n    // third child of the body\n    const menuCardContainer = document.createElement(\"div\");\n    menuCardContainer.classList.add(\"menu-card-container\");\n\n    //appending children to bodyContainer\n    bodyContainer.append(imageContainer, menuTitleContainer,menuCardContainer);\n\n    // appending the header and the body to the bigContainer\n    bigContainer.append(bodyContainer);\n\n    (0,_loadItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    // eventListener for hotDrinks\n    const hotDrinksTab = document.querySelector(\"#drink\");\n    hotDrinksTab.addEventListener(\"click\", function () {\n        (0,_loadHotDrinks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n        // eventListener for Beverages\n    const beveragesTab = document.querySelector(\"#beverages\");\n    beveragesTab.addEventListener(\"click\", function () {\n        (0,_loadBeverages_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n\n\n    // eventListener for Beverages\n    const pizzaTab = document.querySelector(\"#pizza\");\n    pizzaTab.addEventListener(\"click\", function () {\n        (0,_loadPizza_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    });\n\n\n    // eventListener for Beverages\n    const burgerTab = document.querySelector(\"#burger\");\n    burgerTab.addEventListener(\"click\", function () {\n        (0,_loadBurger_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    });\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _loadHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHeader.js */ \"./src/loadHeader.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _loadItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadItems.js */ \"./src/loadItems.js\");\n/* harmony import */ var _loadHotDrinks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadHotDrinks.js */ \"./src/loadHotDrinks.js\");\n/* harmony import */ var _loadBeverages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadBeverages.js */ \"./src/loadBeverages.js\");\n/* harmony import */ var _loadBurger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadBurger.js */ \"./src/loadBurger.js\");\n/* harmony import */ var _loadPizza_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadPizza.js */ \"./src/loadPizza.js\");\n// importing the css file and images\n\n\n// importing the module\n\n\n\n\n\n\n\n\n\n\n// loads Header and homepage as default\n(0,_loadHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// eventListener for homeTab\nconst homeTab = document.querySelector(\"#home\");\nhomeTab.addEventListener(\"click\", function () {\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n// eventListener for contactTab\nconst contactTab = document.querySelector(\"#contacts\");\ncontactTab.addEventListener(\"click\", function () {\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n// eventListener for allItems\nconst allItemsTab = document.querySelector(\"#all\");\nallItemsTab.addEventListener(\"click\", function () {\n    (0,_loadItems_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n});\n\n\n// eventListener for hotDrinks\nconst hotDrinksTab = document.querySelector(\"#drink\");\nhotDrinksTab.addEventListener(\"click\", function () {\n    (0,_loadHotDrinks_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\n\n// eventListener for Beverages\nconst beveragesTab = document.querySelector(\"#beverages\");\nbeveragesTab.addEventListener(\"click\", function () {\n    (0,_loadBeverages_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n});\n\n\n// eventListener for Beverages\nconst pizzaTab = document.querySelector(\"#pizza\");\npizzaTab.addEventListener(\"click\", function () {\n    (0,_loadPizza_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n});\n\n\n// eventListener for Beverages\nconst burgerTab = document.querySelector(\"#burger\");\nburgerTab.addEventListener(\"click\", function () {\n    (0,_loadBurger_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadBeverages.js":
/*!******************************!*\
  !*** ./src/loadBeverages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadBeverages)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_coke_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/coke.jpg */ \"./src/assests/imgs/coke.jpg\");\n/* harmony import */ var _assests_imgs_bobatea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/imgs/bobatea.jpg */ \"./src/assests/imgs/bobatea.jpg\");\n\n\n\n\nconst Beverages = [\n    {\n        title: \"COKE\",\n        image: _assests_imgs_coke_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"BOBA TEA\",\n        image: _assests_imgs_bobatea_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    }\n]\n\nfunction loadBeverages() {\n    const menuCardContainer = document.querySelector(\".menu-card-container\");\n    menuCardContainer.innerHTML = \" \";\n\n\n    for (let i = 0; i < Beverages.length; i++) {\n        // children of menuCardContainer\n        const menuCard = document.createElement(\"div\");\n        menuCard.classList.add(\"menu-card\");\n\n        // children of menuCard\n        const foodImage = document.createElement(\"img\");\n        foodImage.src = Beverages[i].image;\n        const menuCardAbout = document.createElement(\"div\");\n        menuCardAbout.classList.add(\"menu-card-about\");\n\n        // children of menuCardAbout\n        const title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = Beverages[i].title;\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\");\n        description.textContent = Beverages[i].description;\n        \n        // appending children to menuCardAbout\n        menuCardAbout.append(title, description);\n\n        // appending children to menuCard\n        menuCard.append(foodImage, menuCardAbout);\n\n        // appending the child to menuCardContainer\n        menuCardContainer.append(menuCard);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadBeverages.js?");

/***/ }),

/***/ "./src/loadBurger.js":
/*!***************************!*\
  !*** ./src/loadBurger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadBurger)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/burger.jpg */ \"./src/assests/imgs/burger.jpg\");\n/* harmony import */ var _assests_imgs_burger2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/imgs/burger2.jpg */ \"./src/assests/imgs/burger2.jpg\");\n\n\n\n\nconst Burger = [\n    {\n        title: \"DOUBLE SIZED CHICKEN BURGER\",\n        image: _assests_imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"CHEESE BURGER\",\n        image: _assests_imgs_burger2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    }\n]\n\nfunction loadBurger() {\n    const menuCardContainer = document.querySelector(\".menu-card-container\");\n    menuCardContainer.innerHTML = \" \";\n\n\n    for (let i = 0; i < Burger.length; i++) {\n        // children of menuCardContainer\n        const menuCard = document.createElement(\"div\");\n        menuCard.classList.add(\"menu-card\");\n\n        // children of menuCard\n        const foodImage = document.createElement(\"img\");\n        foodImage.src = Burger[i].image;\n        const menuCardAbout = document.createElement(\"div\");\n        menuCardAbout.classList.add(\"menu-card-about\");\n\n        // children of menuCardAbout\n        const title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = Burger[i].title;\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\");\n        description.textContent = Burger[i].description;\n        \n        // appending children to menuCardAbout\n        menuCardAbout.append(title, description);\n\n        // appending children to menuCard\n        menuCard.append(foodImage, menuCardAbout);\n\n        // appending the child to menuCardContainer\n        menuCardContainer.append(menuCard);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadBurger.js?");

/***/ }),

/***/ "./src/loadHeader.js":
/*!***************************!*\
  !*** ./src/loadHeader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\n/* harmony import */ var _assests_icons_instagram_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/icons/instagram.png */ \"./src/assests/icons/instagram.png\");\n/* harmony import */ var _assests_icons_facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/icons/facebook.png */ \"./src/assests/icons/facebook.png\");\n\n\n\n\nfunction loadHeader() {\n    const body = document.querySelector(\"body\");\n\n    // header part \n    const header = document.createElement(\"header\");\n\n    // all the children for header\n    const titleContainer = document.createElement(\"div\");\n    titleContainer.classList.add(\"title-container\");\n    titleContainer.textContent = \"FoodGhar\";\n    const nav = document.createElement(\"nav\"); \n\n    // all the children for nav element\n    const home = document.createElement(\"p\");\n    home.textContent = \"Home\";\n    home.id = \"home\";\n    const contacts = document.createElement(\"p\");\n    contacts.textContent = \"Contacts\";\n    contacts.id = \"contacts\" \n    const iconsContainer = document.createElement(\"div\");\n    iconsContainer.classList.add(\"icons-container\");\n    \n    // all the children for iconsContainer\n    const instaImg = document.createElement(\"img\"); \n    const facebookImg = document.createElement(\"img\"); \n    instaImg.src = _assests_icons_instagram_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    facebookImg.src = _assests_icons_facebook_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n    // appending all the items to iconsContianer\n    iconsContainer.append(instaImg, facebookImg);\n\n    // appending all the children to nav\n    nav.append(home, contacts, iconsContainer);\n\n    // appending the children to head element\n    header.append(titleContainer, nav);\n\n    body.prepend(header);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadHeader.js?");

/***/ }),

/***/ "./src/loadHotDrinks.js":
/*!******************************!*\
  !*** ./src/loadHotDrinks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHotDrinks)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_hotlemon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/hotlemon.jpg */ \"./src/assests/imgs/hotlemon.jpg\");\n/* harmony import */ var _assests_imgs_tea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/imgs/tea.jpg */ \"./src/assests/imgs/tea.jpg\");\n/* harmony import */ var _assests_imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assests/imgs/coffee.jpg */ \"./src/assests/imgs/coffee.jpg\");\n\n\n\n\nconst Drink = [\n    {\n        title: \"HOT LEMON\",\n        image: _assests_imgs_hotlemon_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"TEA\",\n        image: _assests_imgs_tea_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"HOT COFFEE\",\n        image: _assests_imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    }\n]\n\nfunction loadHotDrinks() {\n    const menuCardContainer = document.querySelector(\".menu-card-container\");\n    menuCardContainer.innerHTML = \" \";\n\n\n    for (let i = 0; i < Drink.length; i++) {\n        // children of menuCardContainer\n        const menuCard = document.createElement(\"div\");\n        menuCard.classList.add(\"menu-card\");\n\n        // children of menuCard\n        const foodImage = document.createElement(\"img\");\n        foodImage.src = Drink[i].image;\n        const menuCardAbout = document.createElement(\"div\");\n        menuCardAbout.classList.add(\"menu-card-about\");\n\n        // children of menuCardAbout\n        const title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = Drink[i].title;\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\");\n        description.textContent = Drink[i].description;\n        \n        // appending children to menuCardAbout\n        menuCardAbout.append(title, description);\n\n        // appending children to menuCard\n        menuCard.append(foodImage, menuCardAbout);\n\n        // appending the child to menuCardContainer\n        menuCardContainer.append(menuCard);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadHotDrinks.js?");

/***/ }),

/***/ "./src/loadItems.js":
/*!**************************!*\
  !*** ./src/loadItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAllItems)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/burger.jpg */ \"./src/assests/imgs/burger.jpg\");\n/* harmony import */ var _assests_imgs_cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/imgs/cake.jpg */ \"./src/assests/imgs/cake.jpg\");\n/* harmony import */ var _assests_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assests/imgs/pizza.jpg */ \"./src/assests/imgs/pizza.jpg\");\n/* harmony import */ var _assests_imgs_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assests/imgs/chicken.jpg */ \"./src/assests/imgs/chicken.jpg\");\n/* harmony import */ var _assests_imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/imgs/coffee.jpg */ \"./src/assests/imgs/coffee.jpg\");\n/* harmony import */ var _assests_imgs_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/imgs/sandwich.jpg */ \"./src/assests/imgs/sandwich.jpg\");\n/* harmony import */ var _assests_imgs_tea_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assests/imgs/tea.jpg */ \"./src/assests/imgs/tea.jpg\");\n/* harmony import */ var _assests_imgs_hotlemon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assests/imgs/hotlemon.jpg */ \"./src/assests/imgs/hotlemon.jpg\");\n/* harmony import */ var _assests_imgs_coke_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assests/imgs/coke.jpg */ \"./src/assests/imgs/coke.jpg\");\n/* harmony import */ var _assests_imgs_bobatea_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assests/imgs/bobatea.jpg */ \"./src/assests/imgs/bobatea.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nconst Food = [\n    {\n        title: \"DOUBLE SIZED CHICKEN BURGER\",\n        image: _assests_imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"CHOCOLATE CAKE\",\n        image: _assests_imgs_cake_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"CHEESE PIZZA\",\n        image: _assests_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"CHICKEN TANDOORI WITH MASALA\",\n        image: _assests_imgs_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"HOT COFFEE\",\n        image: _assests_imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"VEG SANDWICH\",\n        image: _assests_imgs_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"HOT TEA\",\n        image: _assests_imgs_tea_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"HOT LEMON\",\n        image: _assests_imgs_hotlemon_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"COKE\",\n        image: _assests_imgs_coke_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"BOBA TEA\",\n        image: _assests_imgs_bobatea_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    }\n]\n\n\nfunction loadAllItems() {\n    const menuCardContainer = document.querySelector(\".menu-card-container\");\n    menuCardContainer.innerHTML = \" \";\n\n\n    for (let i = 0; i < Food.length; i++) {\n        // children of menuCardContainer\n        const menuCard = document.createElement(\"div\");\n        menuCard.classList.add(\"menu-card\");\n\n        // children of menuCard\n        const foodImage = document.createElement(\"img\");\n        foodImage.src = Food[i].image;\n        const menuCardAbout = document.createElement(\"div\");\n        menuCardAbout.classList.add(\"menu-card-about\");\n\n        // children of menuCardAbout\n        const title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = Food[i].title;\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\");\n        description.textContent = Food[i].description;\n        \n        // appending children to menuCardAbout\n        menuCardAbout.append(title, description);\n\n        // appending children to menuCard\n        menuCard.append(foodImage, menuCardAbout);\n\n        // appending the child to menuCardContainer\n        menuCardContainer.append(menuCard);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadItems.js?");

/***/ }),

/***/ "./src/loadPizza.js":
/*!**************************!*\
  !*** ./src/loadPizza.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPizza)\n/* harmony export */ });\n/* harmony import */ var _assests_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/imgs/pizza.jpg */ \"./src/assests/imgs/pizza.jpg\");\n/* harmony import */ var _assests_imgs_pizza3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/imgs/pizza3.jpg */ \"./src/assests/imgs/pizza3.jpg\");\n\n\n\n\nconst Pizza = [\n    {\n        title: \"CHEESE PIZZA\",\n        image: _assests_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    },\n    {\n        title: \"CHICKEN PIZZA\",\n        image: _assests_imgs_pizza3_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: \"Some awesome desciption about the food and also includes the ingredients.\"\n    }\n]\n\nfunction loadPizza() {\n    const menuCardContainer = document.querySelector(\".menu-card-container\");\n    menuCardContainer.innerHTML = \" \";\n\n\n    for (let i = 0; i < Pizza.length; i++) {\n        // children of menuCardContainer\n        const menuCard = document.createElement(\"div\");\n        menuCard.classList.add(\"menu-card\");\n\n        // children of menuCard\n        const foodImage = document.createElement(\"img\");\n        foodImage.src = Pizza[i].image;\n        const menuCardAbout = document.createElement(\"div\");\n        menuCardAbout.classList.add(\"menu-card-about\");\n\n        // children of menuCardAbout\n        const title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = Pizza[i].title;\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\");\n        description.textContent = Pizza[i].description;\n        \n        // appending children to menuCardAbout\n        menuCardAbout.append(title, description);\n\n        // appending children to menuCard\n        menuCard.append(foodImage, menuCardAbout);\n\n        // appending the child to menuCardContainer\n        menuCardContainer.append(menuCard);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadPizza.js?");

/***/ }),

/***/ "./src/assests/imgs/restroBack.jpg?1029":
/*!*****************************************!*\
  !*** ./src/assests/imgs/restroBack.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00115921be80d3dbb432.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assests/imgs/restroBack.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
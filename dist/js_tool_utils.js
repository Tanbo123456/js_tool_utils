/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["js-tools"] = factory();
	else
		root["js-tools"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* reexport safe */ _src_func_call__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _src_func_bind__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _src_func_apply__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _src_func_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _src_func_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle)\n/* harmony export */ });\n/* harmony import */ var _src_func_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/func/call */ \"./src/func/call.js\");\n/* harmony import */ var _src_func_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/func/bind */ \"./src/func/bind.js\");\n/* harmony import */ var _src_func_apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/func/apply */ \"./src/func/apply.js\");\n/* harmony import */ var _src_func_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/func/debounce */ \"./src/func/debounce.js\");\n/* harmony import */ var _src_func_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/func/throttle */ \"./src/func/throttle.js\");\n// 工具类库的入口函数\r\n\r\n// 函数相关\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-tools/./main.js?");

/***/ }),

/***/ "./src/func/apply.js":
/*!***************************!*\
  !*** ./src/func/apply.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ apply)\n/* harmony export */ });\n// 自定义函数的apply方法\r\n// 执行函数，并且改变函数里面的this指向,通过数组的方式传入参数\r\nfunction apply(fn,obj,args){\r\n    if (obj===nul||obj===undefined) { // 传入为null或者undefined赋值为window\r\n        obj=window\r\n    }\r\n    obj.fn = fn //本地fn里面的this\r\n    const result = obj.fn(...args) // 执行函数，返回结果\r\n    delete obj.fn\r\n    return result\r\n}\n\n//# sourceURL=webpack://js-tools/./src/func/apply.js?");

/***/ }),

/***/ "./src/func/bind.js":
/*!**************************!*\
  !*** ./src/func/bind.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/func/call.js\");\n// 自定义函数的bind方法\r\n// 返回新函数，改变this指向，支持分批传参\r\n\r\n\r\nfunction bind(fn,obj,...args1){\r\n\r\n    return function (...args2){\r\n        return (0,_call__WEBPACK_IMPORTED_MODULE_0__.default)(fn,obj,...args1,args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://js-tools/./src/func/bind.js?");

/***/ }),

/***/ "./src/func/call.js":
/*!**************************!*\
  !*** ./src/func/call.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ call)\n/* harmony export */ });\n// 自定义函数的call方法\r\n// 执行函数，并且改变函数里面的this指向\r\nfunction call(fn,obj,...args){\r\n    if (obj===nul||obj===undefined) { // 传入为null或者undefined赋值为window\r\n        obj=window\r\n    }\r\n    obj.fn = fn //本地fn里面的this\r\n    const result = obj.fn(...args) // 执行函数，返回结果\r\n    delete obj.fn\r\n    return result\r\n}\n\n//# sourceURL=webpack://js-tools/./src/func/call.js?");

/***/ }),

/***/ "./src/func/debounce.js":
/*!******************************!*\
  !*** ./src/func/debounce.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n// 定义防抖函数\r\n// 目的：控制函数执行频率\r\n// 特征：间隔事件内触发事件，回调函数只执行一次，以最后一次为准\r\n\r\nfunction debounce(callback,wait){\r\n    let timerId=null\r\n    // 返回防抖函数\r\n    return function(event){\r\n        //间隔内触发事件，则清除其事件，通过清除定时器的方式\r\n        if (timerId) {\r\n            clearTimeout(timerId)\r\n        }\r\n        // 通过定时器来控制间隔时间\r\n        timerId = setTimeout(()=>{ // 必须是箭头函数,函数里面的this是事件触发元素\r\n            callback.call(this,event)\r\n            // 执行完成之后将timerId指定为null\r\n            timerId = null\r\n        },wait)\r\n    }\r\n}\n\n//# sourceURL=webpack://js-tools/./src/func/debounce.js?");

/***/ }),

/***/ "./src/func/throttle.js":
/*!******************************!*\
  !*** ./src/func/throttle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n// 定义节流函数\r\n// 特征：控制函数执行频率，周期内触发事件，执行一次回调函数\r\n\r\nfunction throttle(callback,wait){\r\n    let start = 0\r\n    //返回 节流的回调函数\r\n    return function (event) {\r\n        // 获取当前时间\r\n        const current = Date.now()\r\n        // 如果当前时间-上一次执行时间大于wait ，执行真正的callback函数\r\n        if (current-start>wait) {\r\n            callback.call(this,event)\r\n            // 执行完成之后，把start重新赋值为当前时间\r\n            start = current\r\n        }\r\n     \r\n    }\r\n}\n\n//# sourceURL=webpack://js-tools/./src/func/throttle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
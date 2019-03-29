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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/command/index.js":
/*!**************************************!*\
  !*** ./application/command/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inter */ \"./application/command/inter.js\");\n\n\nconst Command = () => {\n  Object(_inter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Command);\n\n\n//# sourceURL=webpack:///./application/command/index.js?");

/***/ }),

/***/ "./application/command/inter.js":
/*!**************************************!*\
  !*** ./application/command/inter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _undo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./undo */ \"./application/command/undo.js\");\n\r\n\r\nconst inter = () => {\r\n    class RenderInterface {\r\n        constructor() {\r\n            this.calc = new _undo__WEBPACK_IMPORTED_MODULE_0__[\"Calc\"]();\r\n        }\r\n        render() {\r\n            const app = document.getElementById('app');\r\n            const node = document.createElement('div');\r\n            node.className = 'wrap';\r\n            node.innerHTML = ` \r\n        <header class=\"header\">\r\n          <div class=\"input-container\">\r\n            <input type=\"number\" class=\"mainInput\">\r\n            <div class=\"current-value\">\r\n              ${this.calc.currentValue}\r\n            </div>\r\n          </div>\r\n          <div class=\"actions-container\">\r\n            <button class=\"_add\">Add + </button>\r\n            <button class=\"_sub\">Subtract -</button>\r\n            <button class=\"_multi\">Multiply *</button>\r\n            <button class=\"_divide\">Divide /</button>\r\n            <button class=\"_squared\">Squared </button>\r\n            <button class=\"_radical\">Radical </button>\r\n          </div>\r\n        </header>\r\n        <section>\r\n          <header>\r\n            <h2>History</h2>\r\n            <button class=\"_undo\"> Undo Last </button>\r\n          </header>\r\n          <div class=\"history-container\">\r\n            ${this.calc.history.map(history => {\r\n                console.log(history);\r\n                return (`<div class=\"history-item\">\r\n                      Action: <b>${history.constructor.name}</b> : value <b>${history.value}</b>\r\n                    </div> `)\r\n            }).join('')\r\n                }\r\n          </div>\r\n        </section>`;\r\n            const add = node.querySelector('._add');\r\n            add.addEventListener('click', () => {\r\n                const value = Number(node.querySelector('.mainInput').value);\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"AddCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            const sub = node.querySelector('._sub');\r\n            sub.addEventListener('click', () => {\r\n                const value = Number(node.querySelector('.mainInput').value);\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"SubCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            const multi = node.querySelector('._multi');\r\n            multi.addEventListener('click', () => {\r\n                const value = Number(node.querySelector('.mainInput').value);\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            const divide = node.querySelector('._divide');\r\n            divide.addEventListener('click', () => {\r\n                const value = Number(node.querySelector('.mainInput').value);\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"DivideCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            const square = node.querySelector('._squared');\r\n            square.addEventListener('click', () => {\r\n                let value = Number(node.querySelector('.mainInput').value);\r\n                if (!value) value = this.calc.currentValue;\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"SquaredCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n            const radical = node.querySelector('._radical');\r\n            radical.addEventListener('click', () => {\r\n                let value = Number(node.querySelector('.mainInput').value);\r\n                if (!value) value = this.calc.currentValue;\r\n                this.calc.execute(new _undo__WEBPACK_IMPORTED_MODULE_0__[\"RadicalCommand\"](value));\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            const undo = node.querySelector('._undo');\r\n            undo.addEventListener('click', () => {\r\n                this.calc.undo()\r\n                this.render();\r\n                console.log(this);\r\n            })\r\n\r\n            app.innerHTML = null;\r\n            app.appendChild(node);\r\n        }\r\n    }\r\n    const Interface = new RenderInterface();\r\n    Interface.render();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (inter);\r\n\n\n//# sourceURL=webpack:///./application/command/inter.js?");

/***/ }),

/***/ "./application/command/undo.js":
/*!*************************************!*\
  !*** ./application/command/undo.js ***!
  \*************************************/
/*! exports provided: Calc, Command, AddCommand, SubCommand, MultiplyCommand, DivideCommand, SquaredCommand, RadicalCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calc\", function() { return Calc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Command\", function() { return Command; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddCommand\", function() { return AddCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubCommand\", function() { return SubCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultiplyCommand\", function() { return MultiplyCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivideCommand\", function() { return DivideCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SquaredCommand\", function() { return SquaredCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadicalCommand\", function() { return RadicalCommand; });\nclass Calc {\r\n  constructor(){\r\n    this.currentValue = 0;\r\n    this.history = [];\r\n  }\r\n  undo(){\r\n    const cmd = this.history.pop();\r\n    this.currentValue = cmd.undo( this.currentValue );\r\n  }\r\n  execute( command ){\r\n    this.currentValue = command.execute( this.currentValue );\r\n    this.history.push(command);\r\n  }\r\n  getCurrentValue(){\r\n    return( this.currentValue );\r\n  }\r\n}\r\n\r\nfunction Command(fn, undo, value){\r\n    this.execute = fn;\r\n    this.value = value;\r\n    this.undo = undo;\r\n}\r\n\r\nfunction add(value){\r\n  return value + this.value;\r\n}\r\n\r\nfunction sub(value){\r\n  return value - this.value;\r\n}\r\n\r\nfunction multiply(value){\r\n  return value * this.value;\r\n}\r\n\r\nfunction divide(value){\r\n  return value / this.value;\r\n}\r\n\r\nfunction squared(value){\r\n  return  this.value*this.value;\r\n}\r\nfunction radical(value){\r\n  return  Math.sqrt(this.value);\r\n}\r\n\r\nfunction AddCommand(value){\r\n  Command.call( this, add, sub, value);\r\n}\r\nfunction SubCommand(value){\r\n  Command.call( this, sub, add, value);\r\n}\r\nfunction MultiplyCommand(value){\r\n  Command.call( this, multiply, divide, value);\r\n}\r\nfunction DivideCommand(value){\r\n  Command.call( this, divide, multiply, value);\r\n}\r\nfunction SquaredCommand(value){\r\n  Command.call( this, squared, radical, value);\r\n}\r\nfunction RadicalCommand(value){\r\n  Command.call( this, radical, squared, value);\r\n}\r\n\r\n// const undoCalc = () => {\r\n//   const undoCalcExmpl = new Calc();\r\n//   undoCalcExmpl.execute( new AddCommand( 20 ) );\r\n//   undoCalcExmpl.execute( new AddCommand( 30 ) );\r\n//   undoCalcExmpl.execute( new AddCommand( 50 ) );\r\n//   console.log('after add:', undoCalcExmpl.getCurrentValue() );\r\n//   undoCalcExmpl.undo();\r\n//   console.log('first undo:', undoCalcExmpl.getCurrentValue() );\r\n//   undoCalcExmpl.undo();\r\n//   console.log('second undo:', undoCalcExmpl.getCurrentValue() );\r\n//   undoCalcExmpl.undo();\r\n//   console.log('third undo:', undoCalcExmpl.getCurrentValue() );\r\n//   console.log(undoCalcExmpl);\r\n// }\r\n// export default undoCalc;\r\n\n\n//# sourceURL=webpack:///./application/command/undo.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ \"./application/command/index.js\");\n\n\nObject(_command__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });
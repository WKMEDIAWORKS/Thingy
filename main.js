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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n}\n\nbody {\n    background: #f8f9fa;\n}\n\n.header {\n    background: #fff;\n    padding: 20px 30px;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    position: fixed;\n    width: 100%;\n    top: 0;\n    z-index: 100;\n}\n\n.main-container {\n    display: flex;\n    margin-top: 70px;\n}\n\n.sidebar {\n    width: 260px;\n    padding: 20px;\n    position: fixed;\n    height: calc(100vh - 70px);\n    background: #fff;\n    border-right: 1px solid #e9ecef;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projects-list {\n    list-style: none;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.project-item {\n    padding: 12px 16px;\n    cursor: pointer;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    margin: 2px 0;\n}\n\n.project-item:hover {\n    background: #f1f3f5;\n}\n\n.project-item.active {\n    background: #1971c2;\n    color: white;\n}\n\n.task-count {\n    font-size: 12px;\n    background: #f1f3f5;\n    padding: 2px 6px;\n    border-radius: 8px;\n    margin-left: auto;\n}\n\n.content {\n    margin-left: 260px;\n    padding: 30px;\n    flex-grow: 1;\n}\n\n.task-list {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.task-item {\n    background: #fff;\n    padding: 18px;\n    border-radius: 10px;\n    display: flex;\n    align-items: start;\n    gap: 15px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n    border: 1px solid #e9ecef;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    border: 2px solid #868e96;\n    border-radius: 6px;\n    cursor: pointer;\n    flex-shrink: 0;\n    margin-top: 3px;\n}\n\n.checkbox.checked {\n    background: #1971c2;\n    border-color: #1971c2;\n}\n\n.task-details {\n    flex-grow: 1;\n}\n\n.task-title {\n    font-size: 16px;\n    margin-bottom: 4px;\n}\n\n.task-description {\n    color: #868e96;\n    font-size: 14px;\n    margin-bottom: 6px;\n}\n\n.task-due-date {\n    font-size: 14px;\n    color: #e67700;\n    margin-bottom: 6px;\n}\n\n.task-meta {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.priority {\n    font-size: 12px;\n    padding: 4px 8px;\n    border-radius: 4px;\n    text-transform: capitalize;\n}\n\n.priority-low {\n    background: #e6f4ff;\n    color: #1971c2;\n}\n\n.priority-medium {\n    background: #fff3bf;\n    color: #e67700;\n}\n\n.priority-high {\n    background: #ffe3e3;\n    color: #c92a2a;\n}\n\n.add-task-btn {\n    background: #1971c2;\n    color: white;\n    border: none;\n    padding: 12px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 14px;\n    width: 100%;\n}\n\n.add-project-btn {\n    background: transparent;\n    color: #1971c2;\n    border: 2px solid #1971c2;\n    padding: 12px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 14px;\n    width: 100%;\n}\n\n.clear-completed-btn {\n    background: #f1f3f5;\n    color: #212529;\n    border: none;\n    padding: 12px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 14px;\n    width: 100%;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0,0,0,0.3);\n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-content {\n    background: white;\n    padding: 24px;\n    border-radius: 12px;\n    width: 400px;\n}\n\n.modal h3 {\n    margin-bottom: 20px;\n}\n\n.form-group {\n    margin-bottom: 16px;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 6px;\n    font-size: 14px;\n}\n\n.form-group input,\n.form-group select,\n.form-group textarea {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ced4da;\n    border-radius: 6px;\n    font-size: 14px;\n}\n\n.form-actions {\n    margin-top: 20px;\n    display: flex;\n    gap: 10px;\n    justify-content: flex-end;\n}\n\n.btn {\n    padding: 8px 16px;\n    border-radius: 6px;\n    cursor: pointer;\n    border: none;\n}\n\n.btn-primary {\n    background: #1971c2;\n    color: white;\n}\n\n.btn-secondary {\n    background: #f1f3f5;\n    color: #212529;\n}\n.projects-list {\n    gap: 8px;\n}\n\n.project-item {\n    margin: 4px 0;\n}\n.delete-project-btn {\n    background: none;\n    border: none;\n    color: #ff6b6b;\n    cursor: pointer;\n    font-size: 1.1rem;\n    margin-left: auto;\n    padding: 2px 8px;\n    border-radius: 50%;\n    transition: all 0.2s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n}\n\n.delete-project-btn:hover {\n    background: #ffe3e3;\n    color: #ff5252;\n    transform: scale(1.1);\n}\n\n.project-item {\n    padding: 12px 16px;\n    cursor: pointer;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    margin: 2px 0;\n    transition: background 0.2s ease;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\nclass App {\n    constructor() {\n        this.projects = JSON.parse(localStorage.getItem('projects')) || [];\n        this.currentProjectId = null;\n        this.init();\n    }\n    init() {\n        this.createBaseStructure();\n        this.setupEventListeners();\n        if (this.projects.length === 0) {\n            this.createDefaultProjects();\n        }\n        this.renderProjects();\n        this.selectProject(this.projects[0].id);\n    }\n\n\n    deleteProject(projectId) {\n        if (this.projects.length <= 1) return;\n        this.projects = this.projects.filter(p => p.id !== projectId);\n        if (this.currentProjectId === projectId) {\n            this.selectProject(this.projects[0].id);\n        }\n        this.saveToStorage();\n        this.renderProjects();\n    }\n\n    createBaseStructure() {\n        document.body.innerHTML = `\n            <header class=\"header\">\n                <h1>Thingy</h1>\n            </header>\n            <div class=\"main-container\">\n                <nav class=\"sidebar\">\n                    <button class=\"add-task-btn\">+ New Task</button>\n                    <ul class=\"projects-list\"></ul>\n                    <button class=\"add-project-btn\">+ New Project</button>\n                    <button class=\"clear-completed-btn\">Clear Completed Tasks</button>\n                </nav>\n                <main class=\"content\">\n                    <ul class=\"task-list\"></ul>\n                </main>\n                <!-- Add these modals -->\n                <div class=\"modal\">\n                    <div class=\"modal-content\">\n                        <form id=\"task-form\">\n                            <h3>New Task</h3>\n                            <div class=\"form-group\">\n                                <label>Title</label>\n                                <input type=\"text\" name=\"title\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Description</label>\n                                <textarea name=\"description\"></textarea>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Priority</label>\n                                <select name=\"priority\" required>\n                                    <option value=\"low\">Low</option>\n                                    <option value=\"medium\">Medium</option>\n                                    <option value=\"high\">High</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Due Date</label>\n                                <input type=\"date\" name=\"dueDate\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Project</label>\n                                <select name=\"projectId\" required></select>\n                            </div>\n                            <div class=\"form-actions\">\n                                <button type=\"button\" class=\"btn btn-secondary cancel-btn\">Cancel</button>\n                                <button type=\"submit\" class=\"btn btn-primary\">Create Task</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"project-modal modal\">\n                    <div class=\"modal-content\">\n                        <form id=\"project-form\">\n                            <h3>New Project</h3>\n                            <div class=\"form-group\">\n                                <label>Title</label>\n                                <input type=\"text\" name=\"title\" required>\n                            </div>\n                            <div class=\"form-actions\">\n                                <button type=\"button\" class=\"btn btn-secondary cancel-btn\">Cancel</button>\n                                <button type=\"submit\" class=\"btn btn-primary\">Create Project</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        `;\n    }\n\n\n    renderProjects() {\n        const projectsList = document.querySelector('.projects-list');\n        projectsList.innerHTML = '';\n        this.projects.forEach(project => {\n            const element = _dom_js__WEBPACK_IMPORTED_MODULE_2__.DOM.createProjectElement(project);\n            if (project.id === this.currentProjectId) {\n                element.classList.add('active');\n            }\n            element.addEventListener('click', () => this.selectProject(project.id));\n            \n            const deleteBtn = document.createElement('button');\n            deleteBtn.className = 'delete-project-btn';\n            deleteBtn.innerHTML = '✕';\n            deleteBtn.addEventListener('click', (e) => {\n                e.stopPropagation();\n                this.deleteProject(project.id);\n            });\n            \n            element.appendChild(deleteBtn);\n            projectsList.appendChild(element);\n        });\n    }\n\n\n    selectProject(projectId) {\n        this.currentProjectId = projectId;\n        document.querySelectorAll('.project-item').forEach(item => {\n            item.classList.remove('active');\n           if (item.dataset.projectId === projectId) {\n                item.classList.add('active');\n            }\n        });\n        this.renderTasks();\n    }\n\n    renderTasks() {\n        const taskList = document.querySelector('.task-list');\n        taskList.innerHTML = '';\n        const project = this.projects.find(p => p.id === this.currentProjectId);\n        \n        if (!project) return;\n        \n        project.tasks.forEach(task => {\n            const element = _dom_js__WEBPACK_IMPORTED_MODULE_2__.DOM.createTaskElement(task);\n            element.querySelector('.checkbox').addEventListener('click', () => this.toggleTask(task.id));\n            element.addEventListener('contextmenu', e => this.deleteTask(e, task.id));\n            taskList.appendChild(element);\n        });\n    }\n\n    setupEventListeners() {\n        document.querySelector('.add-task-btn').addEventListener('click', () => this.showTaskModal());\n        document.querySelector('.add-project-btn').addEventListener('click', () => this.showProjectModal());\n        document.querySelector('.clear-completed-btn').addEventListener('click', () => this.clearCompletedTasks());\n        document.querySelector('.modal').addEventListener('click', e => {\n            if (e.target.classList.contains('modal')) this.hideModals();\n        });\n        document.querySelectorAll('.cancel-btn').forEach(btn => {\n            btn.addEventListener('click', () => this.hideModals());\n        });\n        document.getElementById('task-form').addEventListener('submit', e => this.handleTaskSubmit(e));\n        document.getElementById('project-form').addEventListener('submit', e => this.handleProjectSubmit(e));\n    }\n\n    showTaskModal() {\n        const modal = document.querySelector('.modal');\n        const projectSelect = modal.querySelector('select[name=\"projectId\"]');\n        projectSelect.innerHTML = this.projects.map(p => \n            `<option value=\"${p.id}\">${p.title}</option>`\n        ).join('');\n        projectSelect.value = this.currentProjectId;\n        modal.style.display = 'flex';\n    }\n\n    showProjectModal() {\n        document.querySelector('.project-modal').style.display = 'flex';\n    }\n\n    hideModals() {\n        document.querySelectorAll('.modal').forEach(modal => {\n            modal.style.display = 'none';\n        });\n    }\n\n    handleTaskSubmit(e) {\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const project = this.projects.find(p => p.id === formData.get('projectId'));\n        \n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\n            formData.get('title'),\n            formData.get('description'),\n            formData.get('priority'),\n            formData.get('projectId'),\n            formData.get('dueDate')\n        );\n        \n        project.addTask(task);\n        this.saveToStorage();\n        this.renderTasks();\n        this.hideModals();\n        e.target.reset();\n    }\n\n    handleProjectSubmit(e) {\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(formData.get('title')); // isDefault will be false by default\n        this.projects.push(project);\n        this.saveToStorage();\n        this.renderProjects();\n        this.hideModals();\n        e.target.reset();\n    }\n\n    deleteProject(projectId) {\n        if (this.projects.length <= 1) return;\n        this.projects = this.projects.filter(p => p.id !== projectId);\n        if (this.currentProjectId === projectId) {\n            this.selectProject(this.projects[0].id);\n        }\n        this.saveToStorage();\n        this.renderProjects();\n    }\n\n    toggleTask(taskId) {\n        const project = this.projects.find(p => p.id === this.currentProjectId);\n        const task = project.tasks.find(t => t.id === taskId);\n        task.completed = !task.completed;\n        this.saveToStorage();\n        this.renderTasks();\n    }\n\n    deleteTask(e, taskId) {\n        e.preventDefault();\n        const project = this.projects.find(p => p.id === this.currentProjectId);\n        project.deleteTask(taskId);\n        this.saveToStorage();\n        this.renderTasks();\n    }\n\n    clearCompletedTasks() {\n        const project = this.projects.find(p => p.id === this.currentProjectId);\n        project.tasks = project.tasks.filter(task => !task.completed);\n        this.saveToStorage();\n        this.renderTasks();\n    }\n\n    saveToStorage() {\n        localStorage.setItem('projects', JSON.stringify(this.projects));\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\n    static createProjectElement(project) {\n        const li = document.createElement('li');\n        li.className = 'project-item';\n        li.dataset.projectId = project.id;\n        li.innerHTML = `\n            <span>${project.title}</span>\n            <span class=\"task-count\">${project.tasks.length}</span>\n        `;\n        return li;  // Remove the delete button creation here\n    }\n\n\n    static createTaskElement(task) {\n        const li = document.createElement('li');\n        li.className = 'task-item';\n        li.dataset.taskId = task.id;\n        li.innerHTML = `\n            <div class=\"checkbox ${task.completed ? 'checked' : ''}\"></div>\n            <div class=\"task-details\">\n                <div class=\"task-title\">${task.title}</div>\n                ${task.description ? `<div class=\"task-description\">${task.description}</div>` : ''}\n                ${task.dueDate ? `<div class=\"task-due-date\">Due: ${task.dueDate}</div>` : ''}\n                <div class=\"task-meta\">\n                    <span class=\"priority priority-${task.priority}\">${task.priority}</span>\n                </div>\n            </div>\n        `;\n        return li;\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const app = new _app_js__WEBPACK_IMPORTED_MODULE_1__.App();\n});\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nclass Project {\n    constructor(title) {\n        this.id = Date.now().toString();\n        this.title = title;\n        this.tasks = [];\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(taskId) {\n        this.tasks = this.tasks.filter(t => t.id !== taskId);\n    }\n}\n\n\n    \n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, priority, projectId, dueDate) {\n        this.id = Date.now().toString();\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.projectId = projectId;\n        this.completed = false;\n        this.dueDate = dueDate;\n        this.createdAt = new Date();\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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
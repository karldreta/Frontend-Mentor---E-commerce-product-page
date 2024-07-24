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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff */ \"./src/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'projectFont';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* Primary colors */\n    --color-orange: hsl(26, 100%, 55%);\n    --color-pale-orange: hsl(25, 100%, 94%);\n\n    /* Neutral colors */\n    --color-very-dark-blue: hsl(220, 13%, 13%);\n    --color-dark-grayish-blue: hsl(219, 9%, 45%);\n    --color-grayish-blue: hsl(220, 14%, 75%);\n    --color-light-grayish-blue: hsl(223, 64%, 98%);\n    --color-white: hsl(0, 0%, 100%);\n    --color-black-75-opacity: hsla(0, 0%, 0%, 0.75);\n}\n  \n\n*, h1, h2, h3, p, button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: none;\n    background-color: transparent;\n    outline: none;\n}\n\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0;\n    font-family: 'projectFont', Arial, Helvetica, sans-serif;\n    user-select: none;  \n}\n\n.imageContainer {\n    padding: 0;\n    margin: 0;\n}\n\nheader {\n    width: 80vw;\n    height: 15%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid var(--color-grayish-blue);\n}\n\n.rightHeader {\n    /* border: 1px solid blue; */\n    height: 100%;\n    display: flex;\n    justify-content: baseline;\n    align-items: center;\n    gap: 50px;\n}\n\n.rightHeader > #navPanel {\n    display: flex;\n    gap: 25px;\n}\n\n.rightHeader > #navPanel > .navBtn {\n    color: var(--color-dark-grayish-blue);\n    position: relative;\n    width: max-content;\n}\n\n.navBtn::after {\n    position: absolute;\n    content: '';\n    background-color: var(--color-orange);\n    width: 100%;\n    height: 3px;\n    bottom: 0;\n    left: 0;\n    transform: translateY(1800%);\n    visibility: hidden;\n    /* border-radius: 2px; */\n}\n\n\n.rightHeader > #navPanel > .navBtn:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.navBtn:hover::after {\n    visibility: visible;\n}\n\n\n.leftHeader {\n    /* border: 1px solid red; */\n    height: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 40px;\n}\n\n.leftHeader > .cart {\n    width: 22px;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n}\n\n.leftHeader > .userProfile {\n    width: 40px;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2px;\n}\n\n.leftHeader > .userProfile > img:hover {\n    border: 2px solid var(--color-orange);\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.leftHeader > .cart > img:hover {\n    cursor: pointer;\n}\n\n.cart {\n    position: relative;\n}\n\n.cart > span {\n    position:absolute;\n    background-color: var(--color-orange);\n    top: 0;\n    right: 0;\n    padding: 0 7px;\n    font-size: 10px;\n    transform: translateY(-50%) translateX(30%);\n    border-radius: 10px;\n    color: var(--color-white);\n}\n\n.leftHeader > .userProfile > img,\n.leftHeader > .cart > img {\n    justify-content: center;\n    margin: 0;\n    width: 100%;\n    height: auto;\n}\n\n/* Begin Main Content */\n\n#content {\n    width: 80vw;\n    height: 90%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 50px;\n}\n\n#content > .productPicture  {\n    width: 395px;\n    margin-left: 80px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#content > .productPicture > .L {\n    width: 395px;\n    height: 395px;\n}\n\n#content .additionalProductPicture {\n    display: flex;\n    justify-content: space-between;\n}\n\n#content .additionalProductPicture img:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#content .productThumbnail {\n    width: 80px;\n    height: 80px;\n}\n\n#content > .productPicture > .L > img,\n#content .productThumbnail > img  {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px;\n}\n\n/* Below: Product Description */\n\n#content > .productDescription {\n    width: 395px;\n    margin-right: 60px;\n}\n\n.productDescription > h2 {\n    font-size: 40px;\n    margin-bottom: 30px;\n    letter-spacing: 2px;\n    font-weight: 600;\n}\n\n.productDescription > h3 {\n    font-size: 13px;\n    color: var(--color-dark-grayish-blue);\n    text-transform: uppercase;\n    margin-top: 50px;\n    margin-bottom: 20px;\n    letter-spacing: 1.5px;\n    font-weight: 600;\n}\n\n.productDescription > p {\n    margin-bottom: 20px;\n    width: 430px;\n    text-align: start;\n    color: var(--color-dark-grayish-blue);\n}\n\n#content > .productDescription > .productPrice {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin-bottom: 10px;\n}\n\n.productPrice > .rackPrice {\n    font-size: 25px;\n    font-weight: 600;\n    letter-spacing: 1.5px;\n}\n\n.productPrice > .discountOffer {\n    color: var(--color-white);\n    background-color: black;\n    border-radius: 5px;\n    font-size: 13px;\n    padding: 4px 7px;\n}\n\n#content > .productDescription > .previousPrice {\n    font-size: 16px;\n    text-decoration: line-through;\n    color: var(--color-dark-grayish-blue);\n    margin: 0;\n    margin-bottom: 25px;\n}\n\n/* Below: Place Order Buttons */\n\n#content > .productDescription .placeOrder {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 100px;\n}\n\n.productQuantity {\n    width: 120px;\n    height: auto;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: var(--color-light-grayish-blue);\n    border-radius: 5px;\n    gap: 5px;\n}\n\n.productQuantity div {\n    width: 40px;\n    height: auto;\n    text-align: center;\n    align-content: center;\n    justify-content: space-evenly;\n    justify-items: center;\n    padding: 10px;\n}\n\n.productQuantity #minus:hover,\n#plus:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#minus > img {\n    margin-bottom: 3px;\n}\n\n#number {\n    font-weight: 900; \n}\n\n#plus > img {\n    margin-top: 3.5px;\n}\n.productQuantity img {\n    /* border: 1px solid red; */\n    align-self: center;\n    margin: 0;\n    padding: 0;\n}\n\n#addToCart {\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    width: 250px;\n    height: auto;\n    background-color: var(--color-orange);\n    color: var(--color-black-75-opacity);\n    border-radius: 5px;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    gap: 15px;\n    font-weight: 600;\n    font-family: 'projectFont';\n    font-size: 12px;\n  }\n\n#addToCart:hover {\n    opacity: 0.5;\n}\n\n.imageContainer {\n    position: relative;\n}\n\n/* Style for the tooltip */\n.tooltip {\n    position: absolute;\n    width: 350px;\n    height: auto;\n    max-height: 300px;\n    overflow-y: auto;\n    background-color: var(--color-white);\n    color: black;\n    box-shadow: 0px 1px 5px black;\n    border-radius: 5px;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%) translateY(5%);\n    white-space: nowrap;\n    display: none;\n    z-index: 1000;\n}\n\n.tooltip.show {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.tooltip h2 {\n    font-size: 16px;\n    border-bottom: 1px solid var(--color-grayish-blue);\n    padding-left: 20px;\n    padding-top: 15px;\n    padding-bottom: 20px;\n}\n\n.tooltip section {\n    height: 100%;\n    padding: 5px 7px;\n}\n\n.tooltip button {\n    font-size: 13px;\n    font-weight: 600;\n    padding: 15px;\n    background-color: var(--color-orange);\n    border-radius: 10px;\n    margin: 10px 10px 20px 10px;\n}\n\n.tooltip button:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n.tooltip ul, .tooltip li {\n    text-decoration: none;\n    list-style: none;\n}\n\n.tooltip li {\n    margin: 5px;\n}\n\n/* Below: View Cart */\n\n.productListItem {\n    /* border: 1px solid red; */\n    display: grid;\n    grid-template-columns: 70px 1fr 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.productListItem .itemImgContainer {\n    width: 50px;\n    height: 50px;\n    border-radius: 5px;\n}\n\n.cartItemImage {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n.productListItem .itemCartDescription {\n    width: max-content;\n    color: var(--color-dark-grayish-blue);\n}\n\n.productListItem strong {\n    color: black;\n}\n\n.productListItem .removeItem:hover {\n    cursor: pointer;\n    opacity: 0.7;\n}\n\n/* Below: Light box */ \n\n.lightbox {\n    /* border: 1px solid red; */\n    position: absolute;\n    flex-direction: column;\n    width: 420px;\n    height: auto;\n    align-self: center;\n    justify-self: center;\n    gap: 20px;\n    overflow: hidden;\n    z-index: 10;\n}\n\n.lightbox > .L {\n    box-sizing: 0px 2px 5px white;\n}\n\n.lightbox > .L > img {\n    width: 420px;\n    height: 420px;\n    align-self: center;\n    box-sizing: 0px 2px 5px white;\n    border-radius: 20px;\n}\n\n.additionalProductPicture.lightboxMode {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.additionalProductPicture.lightboxMode img:hover {\n    border: 3px solid var(--color-orange);\n    cursor: pointer;\n}\n\n.additionalProductPicture.lightboxMode img:active {\n    opacity: .5;\n}\n\n.lightbox .productThumbnail.lightboxMode {\n    width: 80px;\n    height: 80px;\n}\n\n.productThumbnail.lightboxMode > img {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px;\n}\n\n.lightbox::backdrop {\n    background-color: black;\n    opacity: 0.7;\n}\n\n.closeModal {\n    width: max-content;\n    height: max-content;\n    align-self: flex-end;\n    z-index: 100;\n    margin-right: 5px;\n}\n\n.closeModal * {\n    fill: var(--color-white);\n    cursor: pointer;\n}\n\n.closeModal *:hover {\n    fill: var(--color-orange);\n}\n\n\n.attribution { font-size: 11px; text-align: center; margin-bottom: 5px; }\n.attribution a { color: hsl(228, 45%, 44%); }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addToCart.js":
/*!**************************!*\
  !*** ./src/addToCart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   controlQuantity: () => (/* binding */ controlQuantity),\n/* harmony export */   \"default\": () => (/* binding */ addToCart),\n/* harmony export */   removeItem: () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _viewCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewCart.js */ \"./src/viewCart.js\");\n/* harmony import */ var _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/image-product-1.jpg */ \"./images/image-product-1.jpg\");\n\n\n\nconst addToCartBtn = document.querySelector('#addToCart');\naddToCartBtn.addEventListener('click', addToCart);\n\nconst cartCountInfo = document.querySelector('#cartCount');\nlet cartCount = '';\n\nfunction addToCart() {\n    const number = document.querySelector('#number');\n    if (controlQuantity() === 0) {\n        number.style.opacity = '0.5';\n        return\n    } else {\n        number.style.opacity = '1';\n    }\n\n    const productName = document.querySelector('.product-name').textContent;\n    const rackPrice = document.querySelector('.rackPrice').textContent;\n\n    const totalPrice = parseFloat(rackPrice.replace('$', '').trim()) * controlQuantity();\n\n    const productHTML = `\n        <div class=\"itemImgContainer\"><img src=\"${_images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Product Image\" class='cartItemImage'></div>\n        <div class=\"itemCartDescription\">\n            <p class='productName'>${productName}</p>\n            <p class='productPrice'>${rackPrice} x ${controlQuantity()} <strong>$${totalPrice.toFixed(2)}</strong></p>\n        </div>\n        <div class=\"removeItem\">\n            <svg width=\"14\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path d=\"M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z\" id=\"a\"/></defs><use fill=\"#C3CAD9\" fill-rule=\"nonzero\" xlink:href=\"#a\"/></svg>\n        </div>\n    `;\n    \n    (0,_viewCart_js__WEBPACK_IMPORTED_MODULE_0__.addProductToTooltip)(productHTML);\n    cartCount++;\n    cartCountInfo.textContent = cartCount;\n}\n\n// Event delegation for dynamically added items\ndocument.addEventListener('click', (event) => {\n    if (event.target.closest('.removeItem')) {\n        removeItem(event);\n    }\n});\n\nfunction removeItem(event) {\n    const removeButton = event.target.closest('.removeItem');\n    if (removeButton) {\n        const listItem = removeButton.closest('li');\n        if (listItem) {\n            listItem.remove();\n            cartCount--;\n            if (cartCount === 0) {\n                cartCountInfo.textContent = '';\n            } else {\n                cartCountInfo.textContent = cartCount;\n            }\n        }\n    }\n}\n\nfunction controlQuantity() {\n    const minus = document.querySelector('#minus');\n    const number = document.querySelector('#number');\n    const plus = document.querySelector('#plus');\n    \n    let productNum = parseInt(number.textContent);\n    minus.addEventListener('click', () => {\n        if (!(productNum == 0)) {\n            productNum--;\n            number.textContent = productNum;\n        }\n    });\n    \n    plus.addEventListener('click', () => {\n        productNum++;\n        number.textContent = productNum;\n        number.style.opacity = '1';\n    });\n\n    return productNum;\n}\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/addToCart.js?");

/***/ }),

/***/ "./src/createFooter.js":
/*!*****************************!*\
  !*** ./src/createFooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.classList.add('attribution');\n    footer.innerHTML = `\n        Challenge by <a href=\"https://www.frontendmentor.io?ref=challenge\" target=\"_blank\">Frontend Mentor</a>. \n    Coded by <a href=\"https://github.com/karldreta\" target=\"_blank\">karlDreta</a>.\n    `;\n\n    return footer;\n}\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/createFooter.js?");

/***/ }),

/***/ "./src/lightbox.js":
/*!*************************!*\
  !*** ./src/lightbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ expandThumbnail)\n/* harmony export */ });\nconst productThumbnail = document.querySelectorAll('.productThumbnail');\nproductThumbnail.forEach(thumbnail => thumbnail.addEventListener('click', expandThumbnail));\n\nfunction expandThumbnail() {\n    // Add lightbox mode class to thumbnails and container\n    productThumbnail.forEach(thumbnail => thumbnail.classList.add('lightboxMode'));\n    const thumbnailContainer = document.querySelector('.additionalProductPicture');\n    thumbnailContainer.classList.add('lightboxMode');\n\n    // Get product picture HTML content\n    const productPicture = document.querySelector('.productPicture');\n\n    // Create dialog\n    const lightbox = document.createElement('dialog');\n    lightbox.classList.add('lightbox');\n\n    // Create close button\n    const closeBtn = document.createElement('div');\n    closeBtn.classList.add('closeModal');\n    closeBtn.innerHTML = `\n        <svg width=\"14\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z\"/>\n        </svg>\n    `;\n\n    // Append close button and product picture to the dialog\n    lightbox.appendChild(closeBtn);\n    lightbox.innerHTML += productPicture.innerHTML;\n\n    // Append dialog to the body\n    document.body.appendChild(lightbox);\n    lightbox.style.display = 'flex';\n    lightbox.showModal();\n\n\n    function closeModal() {\n        alert('hello')\n        lightbox.close();\n        lightbox.style.display = '';\n    }\n\n    closeBtn.addEventListener('click', closeModal);    \n\n    lightbox.addEventListener(\"click\", e => {\n        const dialogDimensions = lightbox.getBoundingClientRect()\n        if (\n          e.clientX < dialogDimensions.left ||\n          e.clientX > dialogDimensions.right ||\n          e.clientY < dialogDimensions.top ||\n          e.clientY > dialogDimensions.bottom\n        ) {\n            lightbox.style.display = 'none';\n            lightbox.close();\n        }\n      })\n}\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/lightbox.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFooter */ \"./src/createFooter.js\");\n/* harmony import */ var _viewCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewCart */ \"./src/viewCart.js\");\n/* harmony import */ var _addToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addToCart */ \"./src/addToCart.js\");\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lightbox */ \"./src/lightbox.js\");\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    document.body.appendChild((0,_createFooter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    (0,_addToCart__WEBPACK_IMPORTED_MODULE_3__.controlQuantity)();\n});\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/script.js?");

/***/ }),

/***/ "./src/viewCart.js":
/*!*************************!*\
  !*** ./src/viewCart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProductToTooltip: () => (/* binding */ addProductToTooltip),\n/* harmony export */   \"default\": () => (/* binding */ viewCart)\n/* harmony export */ });\nconst cartBtn = document.querySelector('#viewCart');\nconst imageContainer = cartBtn.closest('.imageContainer');\n\ncartBtn.addEventListener('click', viewCart);\n\nfunction viewCart() {\n    let tooltip = imageContainer.querySelector('.tooltip');\n    \n    if (!tooltip) {\n        tooltip = document.createElement('div');\n        tooltip.classList.add('tooltip');\n        tooltip.innerHTML = `\n            <h2>Cart</h2>\n            <section>\n                <ul id=\"productList\"></ul>\n            </section>\n            <button id=\"checkout\">Checkout</button>\n        `;\n        imageContainer.appendChild(tooltip);\n    }\n\n    tooltip.classList.toggle('show');\n}\n\nfunction addProductToTooltip(productHTML) {\n    let tooltip = imageContainer.querySelector('.tooltip');\n    \n    if (!tooltip) {\n        // Create the tooltip if it doesn't exist\n        viewCart();\n        tooltip = imageContainer.querySelector('.tooltip');\n    }\n    \n    const ul = tooltip.querySelector('#productList');\n    const productListItem = document.createElement('li');\n    productListItem.classList.add('productListItem');\n    productListItem.innerHTML = productHTML;\n    ul.appendChild(productListItem);\n}\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/viewCart.js?");

/***/ }),

/***/ "./images/image-product-1.jpg":
/*!************************************!*\
  !*** ./images/image-product-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"520cc50bd13955f55cb2.jpg\";\n\n//# sourceURL=webpack://ecommerce-product-page-main/./images/image-product-1.jpg?");

/***/ }),

/***/ "./src/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff":
/*!********************************************************************!*\
  !*** ./src/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbd73d5bf540b513dcfa.woff\";\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
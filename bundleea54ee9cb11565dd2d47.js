/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/bar-img.webp */ "./src/images/bar-img.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html,
body {
   font-size: 62.5%;
   height: 100vh;
   width: 100vw;
}

body {
   font-family: "Raleway", sans-serif;
   color: #333;
   font-weight: 400;
   line-height: 1;
}

#content {
   width: 100%;
}

/* HEADER & NAV SECTION */
#header {
   display: flex;
   flex-direction: column;

   position: sticky;
   top: 0;
   width: 100vw;
   z-index: 10;
   padding: 3rem 0;

   background-color: #fff;
}

#logo {
   font-size: 4rem;
   letter-spacing: 1rem;
   margin-bottom: 4rem;
   text-align: center;
   font-weight: bold;
   cursor: pointer;
}

#nav {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5rem;
}

#nav > button {
   border: none;
   background-color: transparent;
   font-size: 1.4rem;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 0.4rem;
   color: inherit;
   cursor: pointer;
}

#nav > button:hover {
   color: #ef4b4d;
}

/* HERO SECTION */
.hero-section {
   position: relative;
   height: 100vh;
   width: 100vw;
}

.hero-image-box {
   height: 100%;
   width: 100%;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) !important;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}

.hero-text-box {
   color: #fff;
   position: absolute;
   top: 35%;
   left: 50%;
   transform: translate(-50%, 0);
}

.hero-text {
   font-size: 6rem;
   font-family: "TrendSansW00-Four";
}

.hero-btns {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, 0);

   display: flex;
   gap: 2rem;
   margin-top: 4rem;
}

.hero-btn {
   border: 3px solid #fff;
   font-size: 1.6rem;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 0.6rem;
   padding: 1rem 3rem;
   background-color: transparent;
   color: #fff;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
}

.hero-btn:hover {
   background-color: #fff;
   color: #0a1736;
}

.footer {
   display: flex;
   justify-content: center;
   align-items: center;
   color: #0a1736;
}

/* MENU SECTION */
.menu-section {
   background-color: #ef4b4d;
   color: #fff;
   padding: 4.8rem 9.6rem;
}

.menu {
   display: flex;
   flex-direction: column;
   padding: 4.8rem 9.6rem;
   border: 10px solid #fff;
}

.heading-secondary {
   font-size: 4rem;
   letter-spacing: 1rem;
   margin-bottom: 1.2rem;
}

.heading-text {
   font-size: 1.4rem;
}

.menu-heading-text {
   font-size: 3rem;
   text-transform: uppercase;
   letter-spacing: 1rem;
   margin-bottom: 1rem;
}

.menu-heading {
   margin-bottom: 5rem;
   margin-top: 5rem;
}

.menu-heading-description {
   font-size: 1.4rem;
}

.menu-items {
   display: flex;
   flex-direction: column;
   gap: 3rem;
}

.menu-item {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-bottom: 20px;
}

.menu-item-left {
   flex: 1;
   padding-right: 20px;
}

.menu-price {
   flex-shrink: 0;
   font-weight: bold;
}

.menu-subheading {
   font-size: 1.8rem;
   font-weight: bold;
   letter-spacing: 0.2rem;
   margin-bottom: 1rem;
}

.menu-text {
   font-size: 1.4rem;
}

.menu-price {
   font-size: 1.6rem;
   font-weight: bold;
}

/* CONTACT US SECTION */
.contact-section {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding: 40px;
   background-color: #f4f4f4;
}

/* Contact Form Styles */
.contact-form {
   width: 48%;
   background-color: white;
   padding: 30px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   border-radius: 8px;
}

.contact-heading {
   margin-bottom: 20px;
   font-size: 28px;
}

.contact-form input,
.contact-form textarea,
.send-msg-btn {
   width: 100%;
   padding: 15px;
   margin-bottom: 15px;
   border: 1px solid #ccc;
   border-radius: 5px;
   font-size: 16px;
}

.send-msg-btn {
   background-color: #00c3ad;
   color: white;
   border: none;
   cursor: pointer;
   font-size: 18px;
   transition: background-color 0.3s ease;
}

.send-msg-btn:hover {
   background-color: #00c396;
}

/* Location Map Styles */
.map-container {
   width: 48%;
   height: 400px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   border-radius: 8px;
   overflow: hidden;
}

iframe {
   width: 100%;
   height: 100%;
   border: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n   margin: 0;\n   padding: 0;\n   box-sizing: border-box;\n}\n\nhtml,\nbody {\n   font-size: 62.5%;\n   height: 100vh;\n   width: 100vw;\n}\n\nbody {\n   font-family: \"Raleway\", sans-serif;\n   color: #333;\n   font-weight: 400;\n   line-height: 1;\n}\n\n#content {\n   width: 100%;\n}\n\n/* HEADER & NAV SECTION */\n#header {\n   display: flex;\n   flex-direction: column;\n\n   position: sticky;\n   top: 0;\n   width: 100vw;\n   z-index: 10;\n   padding: 3rem 0;\n\n   background-color: #fff;\n}\n\n#logo {\n   font-size: 4rem;\n   letter-spacing: 1rem;\n   margin-bottom: 4rem;\n   text-align: center;\n   font-weight: bold;\n   cursor: pointer;\n}\n\n#nav {\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   gap: 5rem;\n}\n\n#nav > button {\n   border: none;\n   background-color: transparent;\n   font-size: 1.4rem;\n   font-weight: bold;\n   text-transform: uppercase;\n   letter-spacing: 0.4rem;\n   color: inherit;\n   cursor: pointer;\n}\n\n#nav > button:hover {\n   color: #ef4b4d;\n}\n\n/* HERO SECTION */\n.hero-section {\n   position: relative;\n   height: 100vh;\n   width: 100vw;\n}\n\n.hero-image-box {\n   height: 100%;\n   width: 100%;\n   background-image: url(\"images/bar-img.webp\") !important;\n   background-size: cover;\n   background-position: center;\n   background-repeat: no-repeat;\n}\n\n.hero-text-box {\n   color: #fff;\n   position: absolute;\n   top: 35%;\n   left: 50%;\n   transform: translate(-50%, 0);\n}\n\n.hero-text {\n   font-size: 6rem;\n   font-family: \"TrendSansW00-Four\";\n}\n\n.hero-btns {\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, 0);\n\n   display: flex;\n   gap: 2rem;\n   margin-top: 4rem;\n}\n\n.hero-btn {\n   border: 3px solid #fff;\n   font-size: 1.6rem;\n   font-weight: bold;\n   text-transform: uppercase;\n   letter-spacing: 0.6rem;\n   padding: 1rem 3rem;\n   background-color: transparent;\n   color: #fff;\n   cursor: pointer;\n   transition: all 0.2s ease-in-out;\n}\n\n.hero-btn:hover {\n   background-color: #fff;\n   color: #0a1736;\n}\n\n.footer {\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   color: #0a1736;\n}\n\n/* MENU SECTION */\n.menu-section {\n   background-color: #ef4b4d;\n   color: #fff;\n   padding: 4.8rem 9.6rem;\n}\n\n.menu {\n   display: flex;\n   flex-direction: column;\n   padding: 4.8rem 9.6rem;\n   border: 10px solid #fff;\n}\n\n.heading-secondary {\n   font-size: 4rem;\n   letter-spacing: 1rem;\n   margin-bottom: 1.2rem;\n}\n\n.heading-text {\n   font-size: 1.4rem;\n}\n\n.menu-heading-text {\n   font-size: 3rem;\n   text-transform: uppercase;\n   letter-spacing: 1rem;\n   margin-bottom: 1rem;\n}\n\n.menu-heading {\n   margin-bottom: 5rem;\n   margin-top: 5rem;\n}\n\n.menu-heading-description {\n   font-size: 1.4rem;\n}\n\n.menu-items {\n   display: flex;\n   flex-direction: column;\n   gap: 3rem;\n}\n\n.menu-item {\n   display: flex;\n   justify-content: space-between;\n   align-items: flex-start;\n   margin-bottom: 20px;\n}\n\n.menu-item-left {\n   flex: 1;\n   padding-right: 20px;\n}\n\n.menu-price {\n   flex-shrink: 0;\n   font-weight: bold;\n}\n\n.menu-subheading {\n   font-size: 1.8rem;\n   font-weight: bold;\n   letter-spacing: 0.2rem;\n   margin-bottom: 1rem;\n}\n\n.menu-text {\n   font-size: 1.4rem;\n}\n\n.menu-price {\n   font-size: 1.6rem;\n   font-weight: bold;\n}\n\n/* CONTACT US SECTION */\n.contact-section {\n   display: flex;\n   justify-content: space-between;\n   align-items: flex-start;\n   padding: 40px;\n   background-color: #f4f4f4;\n}\n\n/* Contact Form Styles */\n.contact-form {\n   width: 48%;\n   background-color: white;\n   padding: 30px;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n   border-radius: 8px;\n}\n\n.contact-heading {\n   margin-bottom: 20px;\n   font-size: 28px;\n}\n\n.contact-form input,\n.contact-form textarea,\n.send-msg-btn {\n   width: 100%;\n   padding: 15px;\n   margin-bottom: 15px;\n   border: 1px solid #ccc;\n   border-radius: 5px;\n   font-size: 16px;\n}\n\n.send-msg-btn {\n   background-color: #00c3ad;\n   color: white;\n   border: none;\n   cursor: pointer;\n   font-size: 18px;\n   transition: background-color 0.3s ease;\n}\n\n.send-msg-btn:hover {\n   background-color: #00c396;\n}\n\n/* Location Map Styles */\n.map-container {\n   width: 48%;\n   height: 400px;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n   border-radius: 8px;\n   overflow: hidden;\n}\n\niframe {\n   width: 100%;\n   height: 100%;\n   border: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContactContent: () => (/* binding */ loadContactContent)
/* harmony export */ });
function loadContactContent() {
   const container = document.querySelector("#content");

   const contactSection = document.createElement("div");
   contactSection.classList.add("contact-section");

   const contactFormDiv = document.createElement("div");
   contactFormDiv.classList.add("contact-form");
   contactSection.appendChild(contactFormDiv);

   const contactHeading = document.createElement("h2");
   contactHeading.classList.add("contact-heading");
   contactFormDiv.appendChild(contactHeading);

   const contactForm = document.createElement("form");
   contactForm.setAttribute("action", "#");
   contactForm.setAttribute("method", "#");
   contactFormDiv.appendChild(contactForm);

   // name input
   const nameInput = document.createElement("input");
   nameInput.setAttribute("type", "text");
   nameInput.setAttribute("name", "name");
   nameInput.setAttribute("placeholder", "Your Name");
   contactForm.appendChild(nameInput);

   // email input
   const emailInput = document.createElement("input");
   emailInput.setAttribute("type", "email");
   emailInput.setAttribute("name", "email");
   emailInput.setAttribute("placeholder", "Your Email");
   contactForm.appendChild(emailInput);

   // telephone input
   const telephoneInput = document.createElement("input");
   telephoneInput.setAttribute("type", "tel");
   telephoneInput.setAttribute("name", "phone");
   telephoneInput.setAttribute("placeholder", "Your Phone Number");
   contactForm.appendChild(telephoneInput);

   // text area
   const textArea = document.createElement("textarea");
   textArea.setAttribute("name", "message");
   textArea.setAttribute("rows", "6");
   textArea.setAttribute("placeholder", "Your Message");
   contactForm.appendChild(textArea);

   const submitBtn = document.createElement("button");
   submitBtn.innerHTML = "Send Message";
   submitBtn.classList.add("send-msg-btn");
   contactForm.appendChild(submitBtn);

   const mapContainer = document.createElement("div");
   mapContainer.classList.add("map-container");
   contactSection.appendChild(mapContainer);

   const iFrame = document.createElement("iframe");
   iFrame.setAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2088265166213!2d144.96305851531642!3d-37.81624897975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1634260849314!5m2!1sen!2sin"
   );
   iFrame.setAttribute("allowfullscreen", "");
   iFrame.setAttribute("loading", "eager");
   mapContainer.appendChild(iFrame);

   container.innerHTML = "";

   container.appendChild(contactSection);
}




/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomeContent: () => (/* binding */ loadHomeContent)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/modules/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/modules/contact.js");



function loadHomeContent() {
   const container = document.querySelector("#content");

   const homeSection = document.createElement("div");
   homeSection.classList.add("hero-section");

   const heroImageDiv = document.createElement("div");
   heroImageDiv.classList.add("hero-image-box");

   const heroTextDiv = document.createElement("div");
   heroTextDiv.classList.add("hero-text-box");

   const heroText = document.createElement("p");
   heroText.innerHTML = "TEQUILA & BAR";
   heroText.classList.add("hero-text");

   const heroButtonsDiv = document.createElement("div");
   heroButtonsDiv.classList.add("hero-btns");

   const heroButtonMenu = document.createElement("button");
   heroButtonMenu.innerHTML = "Menu";
   heroButtonMenu.classList.add("hero-btn");

   const heroButtonContact = document.createElement("button");
   heroButtonContact.innerHTML = "Contact";
   heroButtonContact.classList.add("hero-btn");

   heroTextDiv.appendChild(heroText);
   heroButtonsDiv.appendChild(heroButtonMenu);
   heroButtonsDiv.appendChild(heroButtonContact);
   homeSection.appendChild(heroImageDiv);
   homeSection.appendChild(heroTextDiv);
   homeSection.appendChild(heroButtonsDiv);

   container.appendChild(homeSection);

   // Add event listeners after the buttons are added to the DOM
   heroButtonMenu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenuContent);
   heroButtonContact.addEventListener("click", _contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContactContent);

   return container.innerHTML;
}




/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuContent: () => (/* binding */ loadMenuContent)
/* harmony export */ });
function loadMenuContent() {
   const container = document.querySelector("#content");

   const menuSection = document.createElement("div");
   menuSection.classList.add("menu-section");

   const menu = document.createElement("div");
   menu.classList.add("menu");
   menuSection.appendChild(menu);

   const headingSecondary = document.createElement("h2");
   headingSecondary.innerHTML = "DINNER MENU";
   headingSecondary.classList.add("heading-secondary");
   menu.appendChild(headingSecondary);

   const headingText = document.createElement("p");
   headingText.innerHTML =
      "Get people excited about your menu and your food. Give your menu a brief description";
   headingText.classList.add("heading-text");
   menu.appendChild(headingText);

   const menuHeading = document.createElement("div");
   menuHeading.classList.add("menu-heading");

   const menuHeadingText = document.createElement("h3");
   menuHeadingText.innerHTML = "Cocktails";
   menuHeadingText.classList.add("menu-heading-text");
   menuHeading.appendChild(menuHeadingText);

   const menuHeadingDescription = document.createElement("p");
   menuHeadingDescription.innerHTML =
      "This is a section of your menu. Give your section a brief description";
   menuHeadingDescription.classList.add("menu-heading-description");
   menuHeading.appendChild(menuHeadingDescription);

   // Append menuHeading to menu
   menu.appendChild(menuHeading);

   const menuItems = document.createElement("div");
   menuItems.classList.add("menu-items");

   for (let i = 0; i < 3; i++) {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      // Create a container for the left side content
      const leftContent = document.createElement("div");
      leftContent.classList.add("menu-item-left");

      const menuSubheading = document.createElement("p");
      if (i === 0) {
         menuSubheading.innerHTML = "ROSEMARY MARGARITA";
      } else if (i === 1) {
         menuSubheading.innerHTML = "WATERMELON MARGARITA";
      } else if (i === 2) {
         menuSubheading.innerHTML = "TEQUILA SUNRISE";
      }
      menuSubheading.classList.add("menu-subheading");
      leftContent.appendChild(menuSubheading);

      const menuText = document.createElement("p");
      if (i === 0) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      } else if (i === 1) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      } else if (i === 2) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      }
      menuText.classList.add("menu-text");
      leftContent.appendChild(menuText);

      // Add the left content to the menu item
      menuItem.appendChild(leftContent);

      const menuPrice = document.createElement("p");
      if (i === 0) {
         menuPrice.innerHTML = "$9.99";
      } else if (i === 1) {
         menuPrice.innerHTML = "$9.99";
      } else if (i === 2) {
         menuPrice.innerHTML = "$9.99";
      }
      menuPrice.classList.add("menu-price");
      menuItem.appendChild(menuPrice);

      menuItems.appendChild(menuItem);
   }

   // Append menuItems to menu
   menu.appendChild(menuItems);

   container.innerHTML = "";

   container.appendChild(menuSection);
}




/***/ }),

/***/ "./src/images/bar-img.webp":
/*!*********************************!*\
  !*** ./src/images/bar-img.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bar-img.webp";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 			"bundle": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");





document.addEventListener("DOMContentLoaded", () => {
   let container = document.querySelector("#content");

   const homeBtn = document.querySelector("#home-btn");
   const menuBtn = document.querySelector("#menu-btn");
   const contactBtn = document.querySelector("#contact-btn");

   homeBtn.addEventListener("click", () => {
      container.innerHTML = "";
      (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomeContent)();
   });

   menuBtn.addEventListener("click", () => {
      container.innerHTML = "";
      (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuContent)();
   });

   contactBtn.addEventListener("click", () => {
      container.innerHTML = "";
      (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContactContent)();
   });

   (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomeContent)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundleea54ee9cb11565dd2d47.js.map
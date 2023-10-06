/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/main/PlayfairDisplay-VariableFont_wght.ttf */ "./src/fonts/main/PlayfairDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/secondary/Roboto-Regular.ttf */ "./src/fonts/secondary/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"font-main\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"font-secondary\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n:root {\n  --shadow-main: 8px 8px 20px -10px rgba(66, 68, 90, 1);\n  --shadow-text: 4px 4px 6px rgba(66, 68, 90, 1);\n  --color-theme: rgba(9, 142, 174, 255);\n  --color-font-light: white;\n  --color-font-dark: black;\n  --color-font-secondary-dark: rgb(94, 94, 94);\n  --font-size: clamp(20px, 3.5vw, 48px);\n  --font-size-headings: calc(0.8em + 10vw);\n  --padding-content: 10vw;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  color: var(--color-font-dark);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"font-main\";\n  font-weight: lighter;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2rem;\n}\n\np {\n  font-family: \"font-secondary\";\n  color: var(--color-font-secondary-dark);\n  font-size: 1.5rem;\n}\n\nbutton {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: 0.3s;\n}\nbutton:hover {\n  opacity: 0.5;\n}\n\nsvg {\n  fill: black;\n  width: 2rem;\n}\n\nbody {\n  display: grid;\n  justify-content: center;\n}\nbody header {\n  margin: 0 auto;\n  background: linear-gradient(-30deg, rgb(255, 255, 255) 55%, rgb(8, 145, 178) 55%);\n}\nbody header .picture {\n  display: grid;\n  padding: 10% 10% 0 10%;\n  align-items: end;\n}\nbody header .picture h1 {\n  margin: 0.5rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--color-font-light);\n  text-shadow: var(--shadow-text);\n  font-size: 4rem;\n}\nbody header .picture img {\n  max-width: 100%;\n  box-shadow: var(--shadow-main);\n}\nbody header .picture h1,\nbody header .picture img {\n  grid-row: 1/1;\n  grid-column: 1/1;\n}\nbody header .description {\n  display: grid;\n  padding: 1rem var(--padding-content);\n}\nbody header .description p {\n  padding: 5vw 0;\n  letter-spacing: 2px;\n  font-size: 1.5rem;\n}\nbody header .socials {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(3, min-content);\n  gap: 2rem;\n}\nbody header .socials svg {\n  width: 3rem;\n}\n\nmain {\n  padding: var(--padding-content);\n  display: grid;\n  gap: 10vw;\n}\nmain h2 {\n  margin: 0 auto;\n}\nmain .projectBox {\n  box-shadow: var(--shadow-main);\n}\nmain .projectBox .projectImage {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n}\nmain .projectBox .projectImage h2 {\n  width: -moz-min-content;\n  width: min-content;\n  color: white;\n}\nmain .projectBox .projectImage.one {\n  background-color: #7c75ca;\n}\nmain .projectBox .projectImage.two {\n  background-color: #d88f39;\n}\nmain .projectBox .projectImage.three {\n  background-color: #5e8f4d;\n}\nmain .projectBox .projectImage.four {\n  background-color: #ca7599;\n}\nmain .projectBox .projectImage.five {\n  background-color: #4692d9;\n}\nmain .projectBox .projectImage.six {\n  background-color: #5e8f4d;\n}\nmain .projectBox .projectNameBox {\n  display: flex;\n  padding: 2rem 5vw 3rem 10vw;\n  gap: 5vw;\n}\nmain .projectBox .projectNameBox button svg {\n  width: 3rem;\n}\nmain .projectBox .projectNameBox button:first-of-type {\n  margin-left: auto;\n}\nmain .projectBox .projectNameBox button:first-of-type svg {\n  width: 2.7rem;\n}\nmain .projectBox p {\n  aspect-ratio: 3;\n  padding: 2vw 10% 0 10%;\n}\n\nfooter {\n  color: white;\n  background-color: #0891b2;\n}\nfooter .footerContainer {\n  padding: var(--padding-content);\n  display: flex;\n  flex-direction: column;\n  gap: 5vw;\n}\nfooter .footerContainer p {\n  color: white;\n}\nfooter .footerContainer p.bigger {\n  font-size: 2rem;\n}\nfooter .footerContainer .tel,\nfooter .footerContainer .mail {\n  display: flex;\n  gap: 0.5rem;\n}\nfooter .footerContainer .tel svg,\nfooter .footerContainer .mail svg {\n  fill: white;\n  width: 1.5rem;\n}\nfooter .socials {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  padding: 1rem 0 3rem 0;\n}\nfooter .socials svg {\n  width: 3rem;\n}\nfooter .footerImage img {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  body {\n    position: relative;\n  }\n  body header {\n    padding: var(--padding-content);\n  }\n  body header .wrapper {\n    background-color: #fff;\n    margin-top: 5rem;\n    box-shadow: var(--shadow-main);\n    padding: 1rem;\n  }\n  body header .wrapper .picture {\n    float: left;\n    padding: 0;\n    width: 42%;\n    height: 39vw;\n  }\n  body header .wrapper .picture img {\n    left: 6vw;\n    top: 7vw;\n    position: absolute;\n    max-width: 35vw;\n  }\n  body header .wrapper .picture h1 {\n    width: -moz-max-content;\n    width: max-content;\n    position: absolute;\n    top: 5vw;\n    right: 3%;\n  }\n  body header .wrapper .description {\n    display: block;\n    padding: 3rem 1rem 1rem 1rem;\n  }\n  body header .wrapper .description p {\n    text-align: justify;\n    font-size: 1.5rem;\n  }\n  body header .wrapper .socials {\n    padding: 2rem;\n  }\n  body main {\n    grid-template-columns: 1fr 1fr;\n    gap: 10vw 5vw;\n  }\n  body main .mainHeader {\n    grid-column: span 2;\n  }\n  body main .projectBox .projectImage h2 {\n    font-size: 3rem;\n  }\n  body main .projectBox .projectDescription {\n    padding: 1rem 2rem;\n  }\n  body main .projectBox .projectDescription .projectNameBox {\n    gap: 3vw;\n    padding: 0;\n  }\n  body main .projectBox .projectDescription .projectNameBox h3 {\n    font-size: 2rem;\n  }\n  body main .projectBox .projectDescription p {\n    margin-top: 1rem;\n    padding: 0;\n    font-size: 1.5rem;\n  }\n  body footer {\n    display: grid;\n    grid-template-columns: 4fr 3fr;\n    padding: var(--padding-content);\n    background-color: #0891b2;\n  }\n  body footer .footerContainer {\n    padding: 0;\n  }\n  body footer .footerContainer .tel,\n  body footer .footerContainer .mail {\n    align-items: center;\n  }\n  body footer .footerContainer .socials {\n    justify-content: start;\n  }\n  body footer .footerContainer h2 {\n    font-size: 3rem;\n    text-align: start;\n  }\n  body footer .footerContainer p.bigger {\n    font-size: 1.5rem;\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 1000px) {\n  body header {\n    padding: 0 var(--padding-content);\n  }\n  body header .wrapper {\n    padding: 0;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    background-color: initial;\n    box-shadow: none;\n  }\n  body header .wrapper .picture {\n    width: 100%;\n    float: initial;\n  }\n  body header .wrapper .picture img {\n    position: initial;\n    max-width: 100%;\n  }\n  body header .wrapper .picture h1 {\n    position: initial;\n    width: auto;\n  }\n  body header .wrapper .description {\n    padding: 1.5rem;\n    margin-top: 2vw;\n    aspect-ratio: 2;\n    justify-content: space-around;\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    align-self: center;\n    background-color: white;\n    box-shadow: var(--shadow-main);\n  }\n  body header .wrapper .description p {\n    padding: 0;\n    font-size: 1.5rem;\n  }\n  body header .wrapper .description .socials {\n    padding: 0;\n    justify-content: end;\n  }\n  body header .wrapper .description .socials svg {\n    width: 3rem;\n  }\n  body main {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  body main .mainHeader {\n    grid-column: span 3;\n  }\n  body main .projectBox .projectDescription {\n    padding: 1rem 1vw;\n  }\n  body main .projectBox .projectDescription .projectNameBox {\n    gap: 2vw;\n  }\n  body main .projectBox .projectDescription .projectNameBox svg {\n    width: 3rem;\n  }\n  body footer {\n    padding: 5vw var(--padding-content);\n    gap: 5vw;\n    grid-template-columns: 1fr 1fr;\n  }\n  body footer .footerContainer p,\n  body footer .footerContainer p.bigger {\n    font-size: 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/main.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'font-main';\n  src: url('../fonts/main/PlayfairDisplay-VariableFont_wght.ttf');\n}\n\n@font-face {\n  font-family: 'font-secondary';\n  src: url('../fonts/secondary/Roboto-Regular.ttf');\n}\n\n//variables\n\n:root {\n  --shadow-main: 8px 8px 20px -10px rgba(66, 68, 90, 1);\n  --shadow-text: 4px 4px 6px rgba(66, 68, 90, 1);\n\n  --color-theme: rgba(9, 142, 174, 255);\n  --color-font-light: white;\n  --color-font-dark: black;\n  --color-font-secondary-dark: rgb(94, 94, 94);\n\n  --font-size: clamp(20px, 3.5vw, 48px);\n  --font-size-headings: calc(0.8em + 10vw);\n\n  --padding-content: 10vw;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  color: var(--color-font-dark);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-family: 'font-main';\n  font-weight: lighter;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\nh3 {\n  font-size: 2rem;\n}\n\np {\n  font-family: 'font-secondary';\n  color: var(--color-font-secondary-dark);\n  font-size: 1.5rem;\n}\n\nbutton {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: 0.3s;\n  &:hover {\n    opacity: 0.5;\n  }\n}\n\nsvg {\n  fill: black;\n  width: 2rem;\n}\n\nbody {\n  display: grid;\n  justify-content: center;\n\n  header {\n    margin: 0 auto;\n    background: linear-gradient(\n      -30deg,\n      rgba(255, 255, 255, 1) 55%,\n      rgba(8, 145, 178, 1) 55%\n    );\n    .picture {\n      display: grid;\n      padding: 10% 10% 0 10%;\n      align-items: end;\n      h1 {\n        margin: 0.5rem;\n        width: fit-content;\n        color: var(--color-font-light);\n        text-shadow: var(--shadow-text);\n        font-size: 4rem;\n      }\n\n      img {\n        max-width: 100%;\n        box-shadow: var(--shadow-main);\n      }\n\n      h1,\n      img {\n        grid-row: 1/1;\n        grid-column: 1/1;\n      }\n    }\n    .description {\n      display: grid;\n      padding: 1rem var(--padding-content);\n      p {\n        padding: 5vw 0;\n        letter-spacing: 2px;\n        font-size: 1.5rem;\n      }\n    }\n    .socials {\n      display: grid;\n      justify-content: center;\n      grid-template-columns: repeat(3, min-content);\n      gap: 2rem;\n      svg {\n        width: 3rem;\n      }\n    }\n  }\n}\n\nmain {\n  padding: var(--padding-content);\n  display: grid;\n  gap: 10vw;\n  h2 {\n    margin: 0 auto;\n  }\n\n  .projectBox {\n    box-shadow: var(--shadow-main);\n    .projectImage {\n      aspect-ratio: 1;\n      display: flex;\n      align-items: center;\n      h2 {\n        width: min-content;\n        color: white;\n      }\n      &.one {\n        background-color: #7c75ca;\n      }\n      &.two {\n        background-color: #d88f39;\n      }\n      &.three {\n        background-color: #5e8f4d;\n      }\n      &.four {\n        background-color: #ca7599;\n      }\n      &.five {\n        background-color: #4692d9;\n      }\n      &.six {\n        background-color: #5e8f4d;\n      }\n    }\n    .projectNameBox {\n      display: flex;\n      padding: 2rem 5vw 3rem 10vw;\n      gap: 5vw;\n      button {\n        svg {\n          width: 3rem;\n        }\n        &:first-of-type {\n          margin-left: auto;\n          svg {\n            width: 2.7rem;\n          }\n        }\n      }\n    }\n    p {\n      aspect-ratio: 3;\n      padding: 2vw 10% 0 10%;\n    }\n  }\n}\n\nfooter {\n  color: white;\n  background-color: #0891b2;\n  .footerContainer {\n    padding: var(--padding-content);\n    display: flex;\n    flex-direction: column;\n    gap: 5vw;\n    p {\n      color: white;\n      &.bigger {\n        font-size: 2rem;\n      }\n    }\n    .tel,\n    .mail {\n      display: flex;\n      gap: 0.5rem;\n      svg {\n        fill: white;\n        width: 1.5rem;\n      }\n    }\n  }\n  .socials {\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n    padding: 1rem 0 3rem 0;\n    svg {\n      width: 3rem;\n    }\n  }\n  .footerImage {\n    img {\n      width: 100%;\n    }\n  }\n}\n\n@media (min-width: 700px) {\n  body {\n    position: relative;\n    header {\n      padding: var(--padding-content);\n      .wrapper {\n        background-color: #fff;\n        margin-top: 5rem;\n        box-shadow: var(--shadow-main);\n        padding: 1rem;\n        .picture {\n          float: left;\n          padding: 0;\n          width: 42%;\n          height: 39vw;\n          img {\n            left: 6vw;\n            top: 7vw;\n            position: absolute;\n            max-width: 35vw;\n          }\n          h1 {\n            width: max-content;\n            position: absolute;\n            top: 5vw;\n            right: 3%;\n          }\n        }\n        .description {\n          display: block;\n          padding: 3rem 1rem 1rem 1rem;\n          p {\n            text-align: justify;\n            font-size: 1.5rem;\n          }\n        }\n        .socials {\n          padding: 2rem;\n        }\n      }\n    }\n    main {\n      grid-template-columns: 1fr 1fr;\n      gap: 10vw 5vw;\n      .mainHeader {\n        grid-column: span 2;\n      }\n      .projectBox {\n        .projectImage {\n          h2 {\n            font-size: 3rem;\n          }\n        }\n        .projectDescription {\n          padding: 1rem 2rem;\n          .projectNameBox {\n            gap: 3vw;\n            padding: 0;\n            h3 {\n              font-size: 2rem;\n            }\n          }\n          p {\n            margin-top: 1rem;\n            padding: 0;\n            font-size: 1.5rem;\n          }\n        }\n      }\n    }\n\n    footer {\n      display: grid;\n      grid-template-columns: 4fr 3fr;\n      padding: var(--padding-content);\n      background-color: #0891b2;\n      .footerContainer {\n        .tel,\n        .mail {\n          align-items: center;\n        }\n        .socials {\n          justify-content: start;\n        }\n        padding: 0;\n        h2 {\n          font-size: 3rem;\n          text-align: start;\n        }\n        p.bigger {\n          font-size: 1.5rem;\n          padding-right: 1rem;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: 1000px) {\n  body {\n    header {\n      padding: 0 var(--padding-content);\n      .wrapper {\n        padding: 0;\n        display: grid;\n        grid-template-columns: 1fr 2fr;\n        background-color: initial;\n        box-shadow: none;\n        .picture {\n          width: 100%;\n          float: initial;\n          img {\n            position: initial;\n            max-width: 100%;\n          }\n          h1 {\n            position: initial;\n            width: auto;\n          }\n        }\n        .description {\n          padding: 1.5rem;\n          margin-top: 2vw;\n          aspect-ratio: 2;\n          justify-content: space-around;\n          display: flex;\n          gap: 1rem;\n          flex-direction: column;\n          align-self: center;\n          background-color: white;\n          box-shadow: var(--shadow-main);\n          p {\n            padding: 0;\n            font-size: 1.5rem;\n          }\n          .socials {\n            padding: 0;\n            justify-content: end;\n            svg {\n              width: 3rem;\n            }\n          }\n        }\n      }\n    }\n    main {\n      grid-template-columns: 1fr 1fr 1fr;\n      .mainHeader {\n        grid-column: span 3;\n      }\n      .projectBox {\n        .projectDescription {\n          padding: 1rem 1vw;\n          .projectNameBox {\n            gap: 2vw;\n            svg {\n              width: 3rem;\n            }\n          }\n        }\n      }\n    }\n    footer {\n      padding: 5vw var(--padding-content);\n      gap: 5vw;\n      grid-template-columns: 1fr 1fr;\n      .footerContainer {\n        p,\n        p.bigger {\n          font-size: 1.5rem;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/fonts/main/PlayfairDisplay-VariableFont_wght.ttf":
/*!**************************************************************!*\
  !*** ./src/fonts/main/PlayfairDisplay-VariableFont_wght.ttf ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20240034b80f50c3ad00.ttf";

/***/ }),

/***/ "./src/fonts/secondary/Roboto-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/secondary/Roboto-Regular.ttf ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

}();
/******/ })()
;
//# sourceMappingURL=main.js.map
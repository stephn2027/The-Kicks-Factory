/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SINGLE_ITEM_QUERY\": function() { return /* binding */ SINGLE_ITEM_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/The Kicks Factory/frontend/components/SingleProduct.js\";\n\n\n\n\n\nconst ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({\n  displayName: \"SingleProduct__ProductStyles\",\n  componentId: \"sc-1kapz8w-0\"\n})([\"display:grid;grid-auto-columns:1fr;grid-auto-flow:column;max-width:var(--maxWidth);align-items:top;gap:2rem;img{width:100%;object-fit:contain;}\"]);\nconst SINGLE_ITEM_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      price\n      description\n      id\n      photo {\n        altText\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nfunction SingleProduct({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ITEM_QUERY, {\n    variables: {\n      id\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading!...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 21\n  }, this);\n  const {\n    Product\n  } = data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductStyles, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\"The Kicks | \", Product.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: Product.photo.image.publicUrlTransformed,\n      alt: Product.photo.altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"details\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: Product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: Product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanM/ZDkxZCJdLCJuYW1lcyI6WyJQcm9kdWN0U3R5bGVzIiwic3R5bGVkIiwiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJTaW5nbGVQcm9kdWN0IiwiaWQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJQcm9kdWN0IiwibmFtZSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImFsdFRleHQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUpBQW5CO0FBYU8sTUFBTUMsaUJBQWlCLEdBQUdDLG9EQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJRLFNBQVNDLGFBQVQsQ0FBdUI7QUFBRUM7QUFBRixDQUF2QixFQUErQjtBQUM1QyxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsV0FBUjtBQUFpQkM7QUFBakIsTUFBMkJDLHdEQUFRLENBQUNQLGlCQUFELEVBQW9CO0FBQzNEUSxhQUFTLEVBQUU7QUFDVEw7QUFEUztBQURnRCxHQUFwQixDQUF6QztBQUtBLE1BQUlFLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPLDhEQUFDLGtEQUFEO0FBQWMsU0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxRQUFNO0FBQUVHO0FBQUYsTUFBY0wsSUFBcEI7QUFDQSxzQkFDRSw4REFBQyxhQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1DQUFvQkssT0FBTyxDQUFDQyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUNFLFNBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEtBQWQsQ0FBb0JDLG9CQUQzQjtBQUVFLFNBQUcsRUFBRUosT0FBTyxDQUFDRSxLQUFSLENBQWNHO0FBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVFFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFBLGtCQUFLTCxPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUQsT0FBTyxDQUFDTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuXG5jb25zdCBQcm9kdWN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XG4gIGFsaWduLWl0ZW1zOiB0b3A7XG4gIGdhcDogMnJlbTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU0lOR0xFX0lURU1fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9JVEVNX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgaWRcbiAgICAgIHBob3RvIHtcbiAgICAgICAgYWx0VGV4dFxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmchLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IFByb2R1Y3QgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRoZSBLaWNrcyB8IHtQcm9kdWN0Lm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtQcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxuICAgICAgICBhbHQ9e1Byb2R1Y3QucGhvdG8uYWx0VGV4dH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgPGgyPntQcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgPHA+e1Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm9kdWN0U3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ }),

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleProduct */ \"./components/SingleProduct.js\");\n\n\nvar _jsxFileName = \"/Users/kor/React Projects/The Kicks Factory/frontend/pages/product/[id].js\";\n\nfunction SingleProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanM/M2Q5NiJdLCJuYW1lcyI6WyJTaW5nbGVQcm9kdWN0UGFnZSIsInF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw4REFBRDtBQUFlLFFBQUUsRUFBRUEsS0FBSyxDQUFDQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2luZ2xlUHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVByb2R1Y3RQYWdlKHsgcXVlcnkgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2luZ2xlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/product/[id].js"); });
module.exports = __webpack_exports__;

})();
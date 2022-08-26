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
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prettier */ \"prettier\");\n/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prettier__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SingleProduct */ \"./components/SingleProduct.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/The Kicks Factory/frontend/components/UpdateProduct.js\";\n\n\n\n\n\n\n\nconst UPDATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n`;\nfunction UpdateProduct({\n  id\n}) {\n  // 1. we need to get the existing product\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_SingleProduct__WEBPACK_IMPORTED_MODULE_6__.SINGLE_ITEM_QUERY, {\n    variables: {\n      id\n    }\n  });\n  const {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)(data === null || data === void 0 ? void 0 : data.Product); // 2. we need to get the mutation to update the product\n\n  const [updateProduct, {\n    data: updateData,\n    loading: updateLoading,\n    error: updateError\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id,\n      name: inputs.name,\n      price: inputs.price,\n      description: inputs.description\n    }\n  }); // 3. we need a form to handle the updates.\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {\n    onSubmit: async e => {\n      e.preventDefault();\n      const res = await updateProduct();\n      console.log(res); // submit the input fields to the backend\n      // TODO: Handle submit!\n      // const res = await createProduct();\n      // clearForm();\n      // // Go to products page\n      // Router.push({\n      //   pathname: `/products/${res.data.createProduct.id}`,\n      // });\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          id: \"name\",\n          placeholder: \"name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"number\",\n          name: \"price\",\n          id: \"price\",\n          placeholder: \"price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          name: \"description\",\n          id: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanM/OWU4ZSJdLCJuYW1lcyI6WyJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsIlNJTkdMRV9JVEVNX1FVRVJZIiwidmFyaWFibGVzIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUxvYWRpbmciLCJ1cGRhdGVFcnJvciIsInVzZU11dGF0aW9uIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJBO0FBbUJlLFNBQVNDLGFBQVQsQ0FBdUI7QUFBRUM7QUFBRixDQUF2QixFQUErQjtBQUM1QztBQUNBLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsd0RBQVEsQ0FBQ0MsNkRBQUQsRUFBb0I7QUFDM0RDLGFBQVMsRUFBRTtBQUFFTjtBQUFGO0FBRGdELEdBQXBCLENBQXpDO0FBR0EsUUFBTTtBQUFFTyxVQUFGO0FBQVVDLGdCQUFWO0FBQXdCQyxhQUF4QjtBQUFtQ0M7QUFBbkMsTUFBaURDLHFEQUFPLENBQUNWLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFVyxPQUFQLENBQTlELENBTDRDLENBTzVDOztBQUNBLFFBQU0sQ0FDSkMsYUFESSxFQUVKO0FBQUVaLFFBQUksRUFBRWEsVUFBUjtBQUFvQlosV0FBTyxFQUFFYSxhQUE3QjtBQUE0Q1osU0FBSyxFQUFFYTtBQUFuRCxHQUZJLElBR0ZDLDJEQUFXLENBQUNwQix1QkFBRCxFQUEwQjtBQUN2Q1MsYUFBUyxFQUFFO0FBQ1ROLFFBRFM7QUFHVGtCLFVBQUksRUFBRVgsTUFBTSxDQUFDVyxJQUhKO0FBSVRDLFdBQUssRUFBRVosTUFBTSxDQUFDWSxLQUpMO0FBS1RDLGlCQUFXLEVBQUViLE1BQU0sQ0FBQ2E7QUFMWDtBQUQ0QixHQUExQixDQUhmLENBUjRDLENBdUI1Qzs7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVEsRUFBRSxNQUFPQyxDQUFQLElBQWE7QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU1DLEdBQUcsR0FBRyxNQUFNVixhQUFhLEVBQS9CO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBSHFCLENBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQWJIO0FBQUEsNEJBZUUsOERBQUMsa0RBQUQ7QUFBYyxXQUFLLEVBQUVwQixLQUFLLElBQUlhO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWdCRTtBQUFVLGNBQVEsRUFBRUQsYUFBcEI7QUFBbUMsbUJBQVdBLGFBQTlDO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUUsRUFBQyxNQUhMO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFUixNQUFNLENBQUNXLElBTGhCO0FBTUUsa0JBQVEsRUFBRVY7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLFlBQUUsRUFBQyxPQUhMO0FBSUUscUJBQVcsRUFBQyxPQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNZLEtBTGhCO0FBTUUsa0JBQVEsRUFBRVg7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBQSwrQ0FFRTtBQUNFLGNBQUksRUFBQyxhQURQO0FBRUUsWUFBRSxFQUFDLGFBRkw7QUFHRSxxQkFBVyxFQUFDLGFBSGQ7QUFJRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ2EsV0FKaEI7QUFLRSxrQkFBUSxFQUFFWjtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBaUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBjbGVhckNvbmZpZ0NhY2hlIH0gZnJvbSAncHJldHRpZXInO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgeyBTSU5HTEVfSVRFTV9RVUVSWSB9IGZyb20gJy4vU2luZ2xlUHJvZHVjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcblxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICRpZDogSUQhXG4gICAgJG5hbWU6IFN0cmluZ1xuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJHByaWNlOiBJbnRcbiAgKSB7XG4gICAgdXBkYXRlUHJvZHVjdChcbiAgICAgIGlkOiAkaWRcbiAgICAgIGRhdGE6IHsgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcbiAgLy8gMS4gd2UgbmVlZCB0byBnZXQgdGhlIGV4aXN0aW5nIHByb2R1Y3RcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH0gPSB1c2VGb3JtKGRhdGE/LlByb2R1Y3QpO1xuXG4gIC8vIDIuIHdlIG5lZWQgdG8gZ2V0IHRoZSBtdXRhdGlvbiB0byB1cGRhdGUgdGhlIHByb2R1Y3RcbiAgY29uc3QgW1xuICAgIHVwZGF0ZVByb2R1Y3QsXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSxcbiAgXSA9IHVzZU11dGF0aW9uKFVQREFURV9QUk9EVUNUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZCxcblxuICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXG4gICAgICBwcmljZTogaW5wdXRzLnByaWNlLFxuICAgICAgZGVzY3JpcHRpb246IGlucHV0cy5kZXNjcmlwdGlvbixcbiAgICB9LFxuICB9KTtcbiAgXG4gIFxuXG4gIC8vIDMuIHdlIG5lZWQgYSBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlcy5cblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgLy8gc3VibWl0IHRoZSBpbnB1dCBmaWVsZHMgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIHN1Ym1pdCFcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuICAgICAgICAvLyBjbGVhckZvcm0oKTtcbiAgICAgICAgLy8gLy8gR28gdG8gcHJvZHVjdHMgcGFnZVxuICAgICAgICAvLyBSb3V0ZXIucHVzaCh7XG4gICAgICAgIC8vICAgcGF0aG5hbWU6IGAvcHJvZHVjdHMvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXG4gICAgICAgIC8vIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgTmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICBQcmljZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)([\"from{background-position:0 0;}to{background-position:100% 100%;}\"]);\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-1xszr8q-0\"\n})([\"box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:\", \" 0.5s linear infinite;}}\"], loading);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzPzliMzUiXSwibmFtZXMiOlsibG9hZGluZyIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw0REFBSCxzRUFBYjtBQVlBLE1BQU1DLElBQUksR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEsOHRCQXNEU0gsT0F0RFQsQ0FBVjtBQTJEQSwrREFBZUUsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Form.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction useForm(initialState = {}) {\n  const {\n    0: inputs,\n    1: setInputs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);\n  const initialValues = Object.keys(initialState).join('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setInputs(initialState);\n  }, [initialValues]);\n\n  function handleChange(e) {\n    let {\n      name,\n      value,\n      type\n    } = e.target;\n\n    if (type === 'number') {\n      value = Number(value);\n    }\n\n    if (type === 'file') {\n      [value] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n      [name]: value\n    }));\n  }\n\n  function resetForm() {\n    setInputs(initialState);\n  }\n\n  function clearForm() {\n    setInputs(Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ''])));\n  }\n\n  return {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcz9mMGUyIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsU3RhdGUiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiTnVtYmVyIiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsWUFBWSxHQUFHLEVBQWhDLEVBQW9DO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQ0gsWUFBRCxDQUFwQztBQUNBLFFBQU1JLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFlBQVosRUFBMEJPLElBQTFCLENBQStCLEVBQS9CLENBQXRCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkTixhQUFTLENBQUNGLFlBQUQsQ0FBVDtBQUNELEdBRlEsRUFFTixDQUFDSSxhQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QixRQUFJO0FBQUVDLFVBQUY7QUFBUUMsV0FBUjtBQUFlQztBQUFmLFFBQXdCSCxDQUFDLENBQUNJLE1BQTlCOztBQUNBLFFBQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRCxXQUFLLEdBQUdHLE1BQU0sQ0FBQ0gsS0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsUUFBSUMsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsT0FBQ0QsS0FBRCxJQUFVRixDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FBbkI7QUFDRDs7QUFDRGQsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjLE9BQUNVLElBQUQsR0FBUUM7QUFBdEIsT0FBVDtBQUNEOztBQUVELFdBQVNLLFNBQVQsR0FBcUI7QUFDbkJmLGFBQVMsQ0FBQ0YsWUFBRCxDQUFUO0FBQ0Q7O0FBQ0QsV0FBU2tCLFNBQVQsR0FBcUI7QUFDbkJoQixhQUFTLENBQ1BHLE1BQU0sQ0FBQ2MsV0FBUCxDQUNFZCxNQUFNLENBQUNlLE9BQVAsQ0FBZW5CLE1BQWYsRUFBdUJvQixHQUF2QixDQUEyQixDQUFDLENBQUNDLEdBQUQsRUFBTVYsS0FBTixDQUFELEtBQWtCLENBQUNVLEdBQUQsRUFBTSxFQUFOLENBQTdDLENBREYsQ0FETyxDQUFUO0FBS0Q7O0FBRUQsU0FBTztBQUNMckIsVUFESztBQUVMUSxnQkFGSztBQUdMUSxhQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1EIiwiZmlsZSI6Ii4vbGliL3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LmtleXMoaW5pdGlhbFN0YXRlKS5qb2luKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElucHV0cyhpbml0aWFsU3RhdGUpO1xuICB9LCBbaW5pdGlhbFZhbHVlc10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgfVxuICAgIHNldElucHV0cyh7IC4uLmlucHV0cywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgc2V0SW5wdXRzKFxuICAgICAgT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gICAgY2xlYXJGb3JtLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdatePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateProduct */ \"./components/UpdateProduct.js\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/The Kicks Factory/frontend/pages/update.js\";\n\nfunction UpdatePage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanM/YTEwNCJdLCJuYW1lcyI6WyJVcGRhdGVQYWdlIiwicXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULENBQW9CO0FBQUVDO0FBQUYsQ0FBcEIsRUFBK0I7QUFDNUMsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw4REFBRDtBQUFlLFFBQUUsRUFBRUEsS0FBSyxDQUFDQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy91cGRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXBkYXRlUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQYWdlKHsgcXVlcnkgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VXBkYXRlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/update.js\n");

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

/***/ "prettier":
/*!***************************!*\
  !*** external "prettier" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("prettier");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js","components_SingleProduct_js"], function() { return __webpack_exec__("./pages/update.js"); });
module.exports = __webpack_exports__;

})();
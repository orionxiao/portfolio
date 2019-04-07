webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/home/orion/Projects/portfolio/components/Carousel.js";




var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      index: 0,
      projects: [{
        title: "CitiMap",
        path: "../static/citimap.png",
        description: "An app for finding nearby Citibike stations"
      }, {
        title: "Grouped",
        path: "../static/grouped.png",
        description: "A real-time group messaging app"
      }] // prevItem = () => {
      //     const { index, projects } = this.state
      //     this.setState({
      //         index:
      //             index - 1 < 0
      //                 ? projects.length - 1
      //                 : (index - 1) % projects.length
      //     })
      // }
      // nextItem = () => {
      //     const { index, projects } = this.state
      //     this.setState({
      //         index: (index + 1) % projects.length
      //     })
      // }

    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          index = _this$state.index,
          projects = _this$state.projects;
      return (// <div className="carousel">
        //     <h2>{projects[index].title}</h2>
        //     <div className="carousel-main">
        //         <button className="btn" onClick={this.prevItem}>
        //             prev
        //         </button>
        //         <img src={projects[index].path} />
        //         <button className="btn" onClick={this.nextItem}>
        //             next
        //         </button>
        //     </div>
        //     <p>{projects[index].description}</p>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Slide 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Slide 2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Slide 3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Slide 4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Slide 5"))
      );
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.0e639c5ff9857a8eec7c.hot-update.js.map
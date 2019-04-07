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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/orion/Projects/portfolio/components/Carousel.js";




var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel, _Component);

  function Carousel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carousel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, [{
    key: "render",
    // state = {
    //     index: 0,
    //     projects: [
    //         {
    //             title: "CitiMap",
    //             path: "../static/citimap-thumb.png",
    //             description: "An app for finding nearby Citibike stations"
    //         },
    //         {
    //             title: "Grouped",
    //             path: "../static/citimap-thumb.png",
    //             description: "A real-time group messaging app"
    //         }
    //     ]
    // }
    // prevItem = () => {
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
    value: function render() {
      // const { index, projects } = this.state
      var projects = [{
        originalTitle: "CitiMap",
        original: "../static/citimap-thumb.png",
        description: "An app for finding nearby Citibike stations"
      }, {
        originalTitle: "Grouped",
        original: "../static/citimap-thumb.png",
        description: "A real-time group messaging app"
      }];
      return (// <div className="carousel">
        //     <h2>{projects[index].title}</h2>
        //     <span>
        //         <button onClick={this.prevItem}>prev</button>
        //         <img src={projects[index].path} />
        //         <button onClick={this.nextItem}>next</button>
        //     </span>
        //     <p>{projects[index].description}</p>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_6___default.a, {
          items: projects,
          showThumbnails: false,
          showPlayButton: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        })
      );
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.300ce29f898171787037.hot-update.js.map
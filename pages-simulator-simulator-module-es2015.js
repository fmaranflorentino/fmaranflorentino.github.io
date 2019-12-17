(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-simulator-simulator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simulator/simulator.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simulator/simulator.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>simulator works!</p>\n");

/***/ }),

/***/ "./src/app/pages/simulator/simulator-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/simulator/simulator-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SimulatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorRoutingModule", function() { return SimulatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _simulator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulator.component */ "./src/app/pages/simulator/simulator.component.ts");




const routes = [{ path: '', component: _simulator_component__WEBPACK_IMPORTED_MODULE_3__["SimulatorComponent"] }];
let SimulatorRoutingModule = class SimulatorRoutingModule {
};
SimulatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SimulatorRoutingModule);



/***/ }),

/***/ "./src/app/pages/simulator/simulator.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/simulator/simulator.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbXVsYXRvci9zaW11bGF0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/simulator/simulator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/simulator/simulator.component.ts ***!
  \********************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimulatorComponent = class SimulatorComponent {
    constructor() { }
    ngOnInit() {
    }
};
SimulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-simulator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simulator/simulator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulator.component.scss */ "./src/app/pages/simulator/simulator.component.scss")).default]
    })
], SimulatorComponent);



/***/ }),

/***/ "./src/app/pages/simulator/simulator.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/simulator/simulator.module.ts ***!
  \*****************************************************/
/*! exports provided: SimulatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorModule", function() { return SimulatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _simulator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulator-routing.module */ "./src/app/pages/simulator/simulator-routing.module.ts");
/* harmony import */ var _simulator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simulator.component */ "./src/app/pages/simulator/simulator.component.ts");





let SimulatorModule = class SimulatorModule {
};
SimulatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_simulator_component__WEBPACK_IMPORTED_MODULE_4__["SimulatorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _simulator_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimulatorRoutingModule"]
        ]
    })
], SimulatorModule);



/***/ })

}]);
//# sourceMappingURL=pages-simulator-simulator-module-es2015.js.map
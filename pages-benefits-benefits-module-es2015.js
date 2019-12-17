(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-benefits-benefits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benefits/benefits.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benefits/benefits.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-lead-banner [bannerItems]=\"leadBannerItems\" [opts]=\"bannerOptions\"></app-lead-banner>\n\n<app-indicator-box [indicators]=\"indicators\"></app-indicator-box>");

/***/ }),

/***/ "./src/app/pages/benefits/benefits-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/benefits/benefits-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BenefitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsRoutingModule", function() { return BenefitsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _benefits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefits.component */ "./src/app/pages/benefits/benefits.component.ts");




const routes = [{ path: '', component: _benefits_component__WEBPACK_IMPORTED_MODULE_3__["BenefitsComponent"] }];
let BenefitsRoutingModule = class BenefitsRoutingModule {
};
BenefitsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BenefitsRoutingModule);



/***/ }),

/***/ "./src/app/pages/benefits/benefits.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/benefits/benefits.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide-differential__item h1 {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 48px;\n}\n\n.slide-differential__item p {\n  font-size: 16px;\n  line-height: 24px;\n}\n\nowl-carousel-o.slide-differential {\n  width: 80%;\n  margin-top: -50px;\n}\n\n.slide-differential .slide-differential__item img {\n  width: 62px;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.slide-differential .slide-differential__item h1 {\n  font-size: 32px;\n  line-height: 48px;\n  font-weight: 600;\n  display: block;\n  color: #013e43;\n  margin: 0;\n}\n\n/* .slide-differential .slide-differential__item p {\n\n} */\n\n/* .slide-differential {\n    margin-top: 70px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuZWZpdHMvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xcYmVuZWZpdHNcXGJlbmVmaXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9iZW5lZml0cy9iZW5lZml0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDSjs7QURDRTs7R0FBQTs7QUFHQTs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmVmaXRzL2JlbmVmaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zbGlkZS1kaWZmZXJlbnRpYWxfX2l0ZW0gaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGUtZGlmZmVyZW50aWFsX19pdGVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG93bC1jYXJvdXNlbC1vLnNsaWRlLWRpZmZlcmVudGlhbCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS1kaWZmZXJlbnRpYWwgLnNsaWRlLWRpZmZlcmVudGlhbF9faXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5zbGlkZS1kaWZmZXJlbnRpYWwgLnNsaWRlLWRpZmZlcmVudGlhbF9faXRlbSBoMSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMDEzZTQzO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAvKiAuc2xpZGUtZGlmZmVyZW50aWFsIC5zbGlkZS1kaWZmZXJlbnRpYWxfX2l0ZW0gcCB7XHJcbiAgICAgIFxyXG4gIH0gKi9cclxuICAvKiAuc2xpZGUtZGlmZmVyZW50aWFsIHtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9ICovIiwiLnNsaWRlLWRpZmZlcmVudGlhbF9faXRlbSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5zbGlkZS1kaWZmZXJlbnRpYWxfX2l0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbm93bC1jYXJvdXNlbC1vLnNsaWRlLWRpZmZlcmVudGlhbCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4uc2xpZGUtZGlmZmVyZW50aWFsIC5zbGlkZS1kaWZmZXJlbnRpYWxfX2l0ZW0gaW1nIHtcbiAgd2lkdGg6IDYycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2xpZGUtZGlmZmVyZW50aWFsIC5zbGlkZS1kaWZmZXJlbnRpYWxfX2l0ZW0gaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMTNlNDM7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogLnNsaWRlLWRpZmZlcmVudGlhbCAuc2xpZGUtZGlmZmVyZW50aWFsX19pdGVtIHAge1xuXG59ICovXG4vKiAuc2xpZGUtZGlmZmVyZW50aWFsIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/benefits/benefits.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/benefits/benefits.component.ts ***!
  \******************************************************/
/*! exports provided: BenefitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsComponent", function() { return BenefitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BenefitsComponent = class BenefitsComponent {
    constructor() {
        this.bannerOptions = {
            autoWidth: true,
            loop: true,
            items: 1,
            dotsSpeed: 500,
            dots: true,
            smartSpeed: 400,
            dragEndSpeed: 350,
            nav: false
        };
        this.indicators = [
            { icon: 'assets/img/icon1.png', title: 'Descontos', desc: 'Tenha acesso aos melhores descontos' },
            { icon: 'assets/img/icon1.png', title: 'Bolsas de estudos', desc: 'Em cursos de graduação, pós e muito mais!' }
        ];
        this.leadBannerItems = [
            {
                title: 'Financiamento rápido para você comprar agora',
                desc: ' Compre pelo nosso site o Market Club financia suas compras com menor taxa de juros do mercado.'
            },
            {
                title: 'Beneficios rápidos para você comprar agora',
                desc: ' Compre pelo nosso site o Market Club financia suas compras com menor taxa de juros do mercado.'
            }
        ];
    }
    ngOnInit() {
    }
};
BenefitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benefits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benefits/benefits.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benefits.component.scss */ "./src/app/pages/benefits/benefits.component.scss")).default]
    })
], BenefitsComponent);



/***/ }),

/***/ "./src/app/pages/benefits/benefits.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/benefits/benefits.module.ts ***!
  \***************************************************/
/*! exports provided: BenefitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsModule", function() { return BenefitsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _benefits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefits-routing.module */ "./src/app/pages/benefits/benefits-routing.module.ts");
/* harmony import */ var _benefits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benefits.component */ "./src/app/pages/benefits/benefits.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let BenefitsModule = class BenefitsModule {
};
BenefitsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_benefits_component__WEBPACK_IMPORTED_MODULE_4__["BenefitsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _benefits_routing_module__WEBPACK_IMPORTED_MODULE_3__["BenefitsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], BenefitsModule);



/***/ })

}]);
//# sourceMappingURL=pages-benefits-benefits-module-es2015.js.map
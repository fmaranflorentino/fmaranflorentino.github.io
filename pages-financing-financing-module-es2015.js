(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-financing-financing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financing/financing/financing.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financing/financing/financing.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top back-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 credit-title\">\n          <h1 class=\"title\">Cadastre-se e compre sua BMW Série 3 em até 24 horas</h1>\n          <p>Você não está assumindo nenhum compromisso, precisamos apenas conhecer você um pouco mais.</p>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row justify-content-between credit-form\">\n      <div class=\"col-6\">\n        <p>Todos os campos são obrigatórios</p>\n  \n        <!-- <app-text></app-text>\n        <app-text></app-text>\n        <app-text></app-text>\n        <app-upload></app-upload>\n        <app-upload></app-upload>\n        <app-checkbox></app-checkbox>\n        <app-checkbox></app-checkbox> -->\n  \n        <div class=\"btns-end\">\n          <a href=\"#\" class=\"link-purple btn-small\">CANCELAR</a><a href=\"#\" class=\"btn btn-primary\">CADASTRAR</a>\n        </div>\n  \n      </div>\n      <div class=\"col-5\">\n        <div class=\"box-cart\">\n          <div class=\"box-cart__header\">\n            <h2>Minhas compras <a routerLink=\"#\"><img src=\"../../../../assets/img/icons/edit.png\"/></a></h2>\n            <ul class=\"box-cart__list\">\n              <li><strong>Produto</strong><span>BMW Série 3</span></li>\n              <li><strong>Valor do produto</strong><span>R$ 230.900,00</span></li>\n              <li><strong>Valor do financiamento</strong><span>R$ 230.900,00</span></li>\n              <li><strong>Parcelas</strong><span>24X R$ 10.000,00</span></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./src/app/pages/financing/financing-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/financing/financing-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FinancingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancingRoutingModule", function() { return FinancingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _financing_financing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./financing/financing.component */ "./src/app/pages/financing/financing/financing.component.ts");




const routes = [{ path: '', component: _financing_financing_component__WEBPACK_IMPORTED_MODULE_3__["FinancingComponent"] }];
let FinancingRoutingModule = class FinancingRoutingModule {
};
FinancingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FinancingRoutingModule);



/***/ }),

/***/ "./src/app/pages/financing/financing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/financing/financing.module.ts ***!
  \*****************************************************/
/*! exports provided: FinancingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancingModule", function() { return FinancingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _financing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./financing-routing.module */ "./src/app/pages/financing/financing-routing.module.ts");
/* harmony import */ var _financing_financing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./financing/financing.component */ "./src/app/pages/financing/financing/financing.component.ts");





let FinancingModule = class FinancingModule {
};
FinancingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_financing_financing_component__WEBPACK_IMPORTED_MODULE_4__["FinancingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _financing_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinancingRoutingModule"],
        ]
    })
], FinancingModule);



/***/ }),

/***/ "./src/app/pages/financing/financing/financing.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/financing/financing/financing.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-top {\n  padding-bottom: 80px;\n}\n\n.credit-title {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.credit-form {\n  margin-top: 100px;\n}\n\n.box-cart {\n  background: #FFFFFF;\n  border: 1px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 30px;\n}\n\n.box-cart__header h2 {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #013E43;\n  border-bottom: 2px solid #F2F2F2;\n  padding-bottom: 10px;\n  position: relative;\n}\n\n.box-cart__header h2 a {\n  right: 0;\n  position: absolute;\n}\n\n.box-cart__list {\n  padding: 0;\n  margin: 0;\n}\n\n.box-cart__list li {\n  list-style: none;\n  position: relative;\n  padding: 5px;\n}\n\n.box-cart__list li span {\n  right: 0;\n  position: absolute;\n}\n\n.box-cart p {\n  margin-bottom: 50px;\n}\n\n.link-purple {\n  border: none;\n}\n\n.btn {\n  padding: 10px 50px;\n}\n\n.btns-end {\n  margin-bottom: 100px;\n}\n\n.back-top {\n  background-image: url('back-categories.png');\n  background-repeat: no-repeat;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-bottom: 130px;\n}\n\n.back-curves {\n  background-image: url('curves.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-bottom: 80px;\n}\n\n@media (max-width: 768px) {\n  .back-top {\n    background-image: none;\n    padding-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmluYW5jaW5nL2ZpbmFuY2luZy9DOlxcVXNlcnNcXGZsb3JlXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcYnVpbGRlcnNcXG1hcmtldGNsdWItdWkvc3JjXFxhcHBcXHBhZ2VzXFxmaW5hbmNpbmdcXGZpbmFuY2luZ1xcZmluYW5jaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9maW5hbmNpbmcvZmluYW5jaW5nL2ZpbmFuY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtBQ0VKOztBREVBO0VBQ0ksNENBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxvQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maW5hbmNpbmcvZmluYW5jaW5nL2ZpbmFuY2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmFjay10b3Age1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuLmNyZWRpdC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNyZWRpdC1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5ib3gtY2FydCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uYm94LWNhcnRfX2hlYWRlciBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAxM0U0MztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRjJGMkYyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib3gtY2FydF9faGVhZGVyIGgyIGEge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJveC1jYXJ0X19saXN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ib3gtY2FydF9fbGlzdCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYm94LWNhcnRfX2xpc3QgbGkgc3BhbiB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJveC1jYXJ0IHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuXHJcbi5saW5rLXB1cnBsZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG59XHJcblxyXG4uYnRucy1lbmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4uYmFjay10b3Age1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLWNhdGVnb3JpZXMucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcclxufVxyXG5cclxuLmJhY2stY3VydmVzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY3VydmVzLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhY2stdG9wIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn0iLCIuYmFjay10b3Age1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmNyZWRpdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5jcmVkaXQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uYm94LWNhcnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmJveC1jYXJ0X19oZWFkZXIgaDIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzAxM0U0MztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGMkYyRjI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3gtY2FydF9faGVhZGVyIGgyIGEge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYm94LWNhcnRfX2xpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5ib3gtY2FydF9fbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm94LWNhcnRfX2xpc3QgbGkgc3BhbiB7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ib3gtY2FydCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxpbmstcHVycGxlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuXG4uYnRucy1lbmQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmJhY2stdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLWNhdGVnb3JpZXMucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xufVxuXG4uYmFjay1jdXJ2ZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2N1cnZlcy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJhY2stdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/financing/financing/financing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/financing/financing/financing.component.ts ***!
  \******************************************************************/
/*! exports provided: FinancingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancingComponent", function() { return FinancingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinancingComponent = class FinancingComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinancingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./financing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financing/financing/financing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./financing.component.scss */ "./src/app/pages/financing/financing/financing.component.scss")).default]
    })
], FinancingComponent);



/***/ })

}]);
//# sourceMappingURL=pages-financing-financing-module-es2015.js.map
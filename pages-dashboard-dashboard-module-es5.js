(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/financing-processes/financing-processes.component.html": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/financing-processes/financing-processes.component.html ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table w-100\">\n    <div class=\"table--header row m-0\">\n      <div class=\"col-3\">\n        <span>\n          Código\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span>\n          Produto\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span>Status</span>\n      </div>\n    </div>\n    <div\n      class=\"table--body row m-0\"\n      @listOpacity\n      *ngIf=\"products.length > 0\"\n    >\n      <ul class=\"w-100 d-flex\" *ngFor=\"let product of products\">\n        <li class=\"col-3\">\n          {{ product.id }}\n        </li>\n        <li class=\"col-3\">\n          <span\n            [matTooltipDisabled]=\"product.name.length < 16\"\n            [matTooltip]=\"product.name\"\n          >\n            {{ product.name | slice: 0:16 }}\n            {{ product.name.length > 16 ? \"...\" : \"\" }}\n          </span>\n        </li>\n        <li\n          class=\"col-3\"\n          [ngClass]=\"{\n            active: product.status === 'active',\n            pending: product.status === 'pending'\n          }\"\n        >\n          <fa-icon\n            [icon]=\"\n              product.status === 'pending' ? faExclamation : faCheck\n            \"\n            class=\"mr-2\"\n          ></fa-icon>\n          <span>{{\n            product.status === \"pending\" ? \"Pendente\" : \"Ativo\"\n          }}</span>\n        </li>\n        <li class=\"col-3 d-flex justify-content-between\">\n          <button mat-button class=\"link-purple p-0\">Visualizar</button>\n          <button mat-button class=\"link-purple p-0\">Baixar</button>\n        </li>\n      </ul>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-information/my-information.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-information/my-information.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <div class=\"row pl-3\">\n      <div class=\"col-12 form-group\">\n        <label for=\"name\">Nome completo</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          value=\"Maria da Silva Costa\"\n          placeholder=\"Nome completo\"\n        />\n      </div>\n      <div class=\"col-12 form-group\">\n        <label for=\"cpf\">CPF</label>\n        <input\n          type=\"text\"\n          id=\"cpf\"\n          value=\"111.111.111-11\"\n          placeholder=\"111.111.111.-11\"\n        />\n      </div>\n      <div class=\"col-12 form-group\">\n        <label for=\"email\">E-mail</label>\n        <input\n          type=\"text\"\n          id=\"email\"\n          value=\"mariadacostasilva@email.com.br\"\n          placeholder=\"seuemail@email.com\"\n        />\n      </div>\n      <div class=\"col-12 form-group\">\n        <label for=\"cel\">Celular</label>\n        <input\n          type=\"text\"\n          id=\"cel\"\n          value=\"(11) 91234-5658\"\n          placeholder=\"(11) 99999-9999\"\n        />\n      </div>\n      <div class=\"col-12\">\n        <button mat-ripple type=\"button\" class=\"btn btn-round\">\n          Atualizar dados\n        </button>\n      </div>\n    </div>\n  </form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.html": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.html ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table w-100\">\n    <div class=\"table--header row m-0\">\n      <div class=\"col-3\">\n        <span>\n          Código\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span>\n          Produto\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span>Status</span>\n      </div>\n      <div class=\"col-3 pl-0\">\n        <button mat-button class=\"link-purple p-0\" [routerLink]=\"['novo']\">\n          <fa-icon [icon]=\"faPlus\" class=\"mr-2\"></fa-icon>\n          <span>Adicionar Produto</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"table--body row m-0\" @listOpacity *ngIf=\"products.length > 0\">\n      <ul class=\"w-100 d-flex\" *ngFor=\"let product of products\">\n        <li class=\"col-3\">\n          {{ product.id }}\n        </li>\n        <li class=\"col-3\">\n          <span\n            [matTooltipDisabled]=\"product.name.length < 16\"\n            [matTooltip]=\"product.name\"\n          >\n            {{ product.name | slice: 0:16 }}\n            {{ product.name.length > 16 ? \"...\" : \"\" }}\n          </span>\n        </li>\n        <li\n          class=\"col-3\"\n          [ngClass]=\"{\n            active: product.status === 'active',\n            pending: product.status === 'pending'\n          }\"\n        >\n          <fa-icon\n            [icon]=\"product.status === 'pending' ? faExclamation : faCheck\"\n            class=\"mr-2\"\n          ></fa-icon>\n          <span>{{ product.status === \"pending\" ? \"Pendente\" : \"Ativo\" }}</span>\n        </li>\n        <li class=\"col-3\">\n          <button mat-button class=\"link-purple p-0\">Visualizar</button>\n        </li>\n      </ul>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/my-products.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/my-products.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [@slideSide]=\"o.isActivated ? o.activatedRoute : ''\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/new-product/new-product.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/new-product/new-product.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pl-3 content\">\n  <div class=\"col-12\">\n    <h6>Novo Produto</h6>\n  </div>\n\n  <form [formGroup]=\"newProductForm\" class=\"col-12 row\">\n    <div class=\"col-12 form-group\">\n      <label for=\"name\">Nome do produto e/ou serviço</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"Maria da Silva Costa\"\n        placeholder=\"\"\n        formControlName=\"productName\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('productName')\">\n        Campo nome do produto/serviço é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-12 col-md-6 form-group\">\n      <label for=\"name\">Valor Total</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"240000\"\n        placeholder=\"\"\n        currencyMask\n        [options]=\"currencyOptions\"\n        formControlName=\"totalPrice\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('totalPrice')\">\n        Campo valor total é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-12 col-md-6 form-group\">\n      <label for=\"name\">Valor com Desconto</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"403000\"\n        placeholder=\"\"\n        currencyMask\n        [options]=\"currencyOptions\"\n        formControlName=\"discountPrice\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('discountPrice')\">\n        Campo valor com desconto é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-12 col-md-6 form-group\">\n      <label for=\"name\">Data Limite</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"Maria da Silva Costa\"\n        placeholder=\"\"\n        formControlName=\"limitDate\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('limitDate')\">\n        Campo data limite é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-12 col-md-6 form-group\">\n      <label for=\"name\">Hora Limite</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"\"\n        placeholder=\"\"\n        formControlName=\"limitTime\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('limitTime')\">\n        Campo hora limite é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-auto form-group\">\n      <label for=\"name\">Estoque</label>\n      <input\n        type=\"text\"\n        id=\"name\"\n        value=\"\"\n        placeholder=\"\"\n        formControlName=\"stock\"\n      />\n      <mat-error @fadeIn *ngIf=\"errorsHandler('stock')\">\n        Campo estoque é <strong>obrigatório</strong>\n      </mat-error>\n    </div>\n    <div class=\"col-12\">\n      <button\n        type=\"button\"\n        mat-button\n        class=\"btn btn-round btn-primary mr-4\"\n        [disabled]=\"!formValidation\"\n      >\n        Salvar produto\n      </button>\n      <button\n        type=\"button\"\n        mat-button\n        class=\"btn btn-round btn-transparent-full\"\n        [routerLink]=\"['/minha-conta/produtos']\"\n      >\n        Voltar\n      </button>\n    </div>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/salles-history/salles-history.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/salles-history/salles-history.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table w-100\">\n  <div class=\"table--header row m-0\">\n    <div class=\"col-3\">\n      <span>\n        Produto\n      </span>\n    </div>\n    <div class=\"col-3\">\n      <span>\n        Valor do produto\n      </span>\n    </div>\n    <div class=\"col-3\">\n      <span>Financiamento</span>\n    </div>\n    <div class=\"col-3\">\n      <span>Parcelas</span>\n    </div>\n  </div>\n  <div class=\"table--body row m-0\" @listOpacity *ngIf=\"products.length > 0\">\n    <ul class=\"w-100 d-flex\" *ngFor=\"let product of products\">\n      <li class=\"col-3\">\n        <span\n          [matTooltipDisabled]=\"product.name.length < 16\"\n          [matTooltip]=\"product.name\"\n        >\n          {{ product.name | slice: 0:16 }}\n          {{ product.name.length > 16 ? \"...\" : \"\" }}\n        </span>\n      </li>\n      <li class=\"col-3\">\n        {{ product.financing }}\n      </li>\n      <li class=\"col-3\">\n        {{ product.parcelas }}\n      </li>\n    </ul>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard/dashboard.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard/dashboard.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-base>\n  <section class=\"my-account\">\n    <div class=\"container dash\">\n      <div class=\"row\" @fadeIn *ngIf=\"showEffects\">\n        <div class=\"col-12 d-flex justify-content-between header-menu\">\n          <div>\n            <h1 @fadeIn class=\"title\">\n              Minha conta\n            </h1>\n          </div>\n          <div>\n            <button mat-icon-button>\n              <fa-icon\n                [matMenuTriggerFor]=\"menuNav\"\n                [icon]=\"faEllipsisV\"\n                size=\"1x\"\n                [styles]=\"{ color: '#9053a1' }\"\n              ></fa-icon>\n            </button>\n            <mat-menu #menuNav=\"matMenu\">\n              <ng-template matMenuContent>\n                <button\n                  mat-menu-item\n                  *ngFor=\"let item of menuItems\"\n                  [routerLink]=\"[item.routerLink]\"\n                >\n                  {{ item.title }}\n                </button>\n              </ng-template>\n            </mat-menu>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-3 col-lg-4 navMenu\">\n          <ul\n            class=\"my-account--menu-items\"\n            @listState\n            *ngIf=\"menuItems?.length > 0\"\n          >\n            <li\n              mat-ripple\n              *ngFor=\"let item of menuItems; let l = last\"\n              [routerLink]=\"[item.routerLink]\"\n              [routerLinkActive]=\"['active']\"\n            >\n              <span>{{ item.title }}</span>\n              <small>{{ item.text }}</small>\n              <fa-icon [icon]=\"faChevronRight\"></fa-icon>\n            </li>\n          </ul>\n        </div>\n\n        <div\n          class=\"col-12 col-md-9 col-lg-8 container-route\"\n          [@slideSide]=\"o.isActivated ? o.activatedRoute : ''\"\n          *ngIf=\"showEffects && selectedItem\"\n        >\n          <router-outlet #o=\"outlet\"></router-outlet>\n\n          <!-- <ng-container *ngIf=\"selectedItem === menuItems[0]\">\n            <app-my-products\n              @fadeIn\n              *ngIf=\"!isNewProduct\"\n              (toggleIsnewProduct)=\"toggleNewProduct()\"\n            ></app-my-products>\n\n            <app-new-product\n              @fadeIn\n              *ngIf=\"isNewProduct\"\n              (back)=\"toggleNewProduct()\"\n            ></app-new-product>\n          </ng-container>\n          <ng-container *ngIf=\"selectedItem === menuItems[1]\">\n            <app-my-information @fadeIn></app-my-information>\n          </ng-container>\n\n          <ng-container *ngIf=\"selectedItem === menuItems[3]\">\n            <app-financing-processes @fadeIn></app-financing-processes>\n          </ng-container>\n          <ng-container *ngIf=\"selectedItem === menuItems[4]\">\n            <app-salles-history @fadeIn></app-salles-history>\n          </ng-container> -->\n        </div>\n      </div>\n    </div>\n  </section>\n</app-base>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/financing-processes/financing-processes.component.scss": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/financing-processes/financing-processes.component.scss ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZmluYW5jaW5nLXByb2Nlc3Nlcy9DOlxcVXNlcnNcXGZsb3JlXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcYnVpbGRlcnNcXG1hcmtldGNsdWItdWkvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGZpbmFuY2luZy1wcm9jZXNzZXNcXGZpbmFuY2luZy1wcm9jZXNzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL2ZpbmFuY2luZy1wcm9jZXNzZXMvZmluYW5jaW5nLXByb2Nlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL2ZpbmFuY2luZy1wcm9jZXNzZXMvZmluYW5jaW5nLXByb2Nlc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/financing-processes/financing-processes.component.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/financing-processes/financing-processes.component.ts ***!
          \*************************************************************************************************/
        /*! exports provided: FinancingProcessesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancingProcessesComponent", function () { return FinancingProcessesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            var FinancingProcessesComponent = /** @class */ (function () {
                function FinancingProcessesComponent() {
                    this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamation"];
                    this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
                    this.products = [
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                    ];
                }
                FinancingProcessesComponent.prototype.ngOnInit = function () {
                };
                return FinancingProcessesComponent;
            }());
            FinancingProcessesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-financing-processes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./financing-processes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/financing-processes/financing-processes.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listOpacity"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./financing-processes.component.scss */ "./src/app/pages/dashboard/components/financing-processes/financing-processes.component.scss")).default]
                })
            ], FinancingProcessesComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-information/my-information.component.scss": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-information/my-information.component.scss ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.form-group {\n  margin-bottom: 35px;\n}\n\n.form-group label,\n.form-group input {\n  display: block;\n}\n\n.form-group label {\n  font-weight: bold;\n  color: #231f20;\n}\n\n.form-group input {\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n  color: #828282;\n  height: 46px;\n  width: 469px;\n  padding: 5px 15px;\n}\n\n@media screen and (max-width: 676px) {\n  .form-group input {\n    width: 100%;\n  }\n}\n\n.btn-round {\n  background-color: #e0e0e0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media screen and (max-width: 676px) {\n  form .row {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbXktaW5mb3JtYXRpb24vQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxteS1pbmZvcm1hdGlvblxcbXktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL215LWluZm9ybWF0aW9uL215LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDRTs7RUFFRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElJO0VBVEY7SUFVSSxXQUFBO0VDREo7QUFDRjs7QURLQTtFQUNFLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE9FO0VBQ0U7SUFDRSxxQkFBQTtFQ0pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9teS1pbmZvcm1hdGlvbi9teS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblxyXG4gIGxhYmVsLFxyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIzMWYyMDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuXHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB3aWR0aDogNDY5cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tcm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcblxyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCxcbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIzMWYyMDtcbn1cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBjb2xvcjogIzgyODI4MjtcbiAgaGVpZ2h0OiA0NnB4O1xuICB3aWR0aDogNDY5cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5idG4tcm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XG4gIGZvcm0gLnJvdyB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-information/my-information.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-information/my-information.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: MyInformationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInformationComponent", function () { return MyInformationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MyInformationComponent = /** @class */ (function () {
                function MyInformationComponent() {
                }
                MyInformationComponent.prototype.ngOnInit = function () {
                };
                return MyInformationComponent;
            }());
            MyInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-information',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-information/my-information.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-information.component.scss */ "./src/app/pages/dashboard/components/my-information/my-information.component.scss")).default]
                })
            ], MyInformationComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.scss": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.scss ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL215LXByb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: ProductsTableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function () { return ProductsTableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            var ProductsTableComponent = /** @class */ (function () {
                function ProductsTableComponent() {
                    this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamation"];
                    this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
                    this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
                    this.products = [
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                    ];
                }
                ProductsTableComponent.prototype.ngOnInit = function () {
                };
                return ProductsTableComponent;
            }());
            ProductsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-products-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listOpacity"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-table.component.scss */ "./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.scss")).default]
                })
            ], ProductsTableComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-products/my-products.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-products/my-products.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL215LXByb2R1Y3RzL215LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/my-products/my-products.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/my-products/my-products.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: MyProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsComponent", function () { return MyProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            var MyProductsComponent = /** @class */ (function () {
                function MyProductsComponent() {
                    this.toggleIsnewProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamation"];
                    this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
                    this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
                    this.products = [
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active' },
                    ];
                }
                MyProductsComponent.prototype.ngOnInit = function () {
                };
                MyProductsComponent.prototype.toggleNewProduct = function () {
                    this.toggleIsnewProduct.emit(true);
                };
                return MyProductsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MyProductsComponent.prototype, "toggleIsnewProduct", void 0);
            MyProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/my-products/my-products.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listOpacity"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["routeSlideSide"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-products.component.scss */ "./src/app/pages/dashboard/components/my-products/my-products.component.scss")).default]
                })
            ], MyProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/new-product/new-product.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/new-product/new-product.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  position: relative;\n}\n\n@media screen and (max-width: 676px) {\n  .content {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbmV3LXByb2R1Y3QvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxuZXctcHJvZHVjdFxcbmV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURHRTtFQURGO0lBRU0scUJBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/new-product/new-product.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/new-product/new-product.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: NewProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function () { return NewProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            var NewProductComponent = /** @class */ (function () {
                function NewProductComponent() {
                    this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.currencyOptions = {
                        prefix: 'R$ ',
                        thousands: '.',
                        decimal: ',',
                        align: 'left',
                        allowNegative: false
                    };
                }
                NewProductComponent.prototype.ngOnInit = function () {
                    this.createNewProductForm();
                };
                NewProductComponent.prototype.createNewProductForm = function () {
                    this.newProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                        totalPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                        discountPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                        limitDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                        limitTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                        stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
                    });
                };
                NewProductComponent.prototype.errorsHandler = function (control) {
                    return (this.controls[control].errors &&
                        this.controls[control].errors.required) &&
                        this.controls[control].touched;
                };
                NewProductComponent.prototype.toggleIsNewProduct = function () {
                    this.back.emit(true);
                };
                Object.defineProperty(NewProductComponent.prototype, "controls", {
                    get: function () {
                        return this.newProductForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NewProductComponent.prototype, "formValidation", {
                    get: function () {
                        return this.newProductForm.valid;
                    },
                    enumerable: true,
                    configurable: true
                });
                return NewProductComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], NewProductComponent.prototype, "back", void 0);
            NewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/new-product/new-product.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-product.component.scss */ "./src/app/pages/dashboard/components/new-product/new-product.component.scss")).default]
                })
            ], NewProductComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/salles-history/salles-history.component.scss": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/salles-history/salles-history.component.scss ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2FsbGVzLWhpc3RvcnkvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxzYWxsZXMtaGlzdG9yeVxcc2FsbGVzLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL3NhbGxlcy1oaXN0b3J5L3NhbGxlcy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2FsbGVzLWhpc3Rvcnkvc2FsbGVzLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/components/salles-history/salles-history.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/pages/dashboard/components/salles-history/salles-history.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: SallesHistoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SallesHistoryComponent", function () { return SallesHistoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            var SallesHistoryComponent = /** @class */ (function () {
                function SallesHistoryComponent() {
                    this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamation"];
                    this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
                    this.products = [
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                        { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
                    ];
                }
                SallesHistoryComponent.prototype.ngOnInit = function () {
                };
                return SallesHistoryComponent;
            }());
            SallesHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-salles-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salles-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/salles-history/salles-history.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listOpacity"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salles-history.component.scss */ "./src/app/pages/dashboard/components/salles-history/salles-history.component.scss")).default]
                })
            ], SallesHistoryComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/dashboard-routing.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () { return DashboardRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_salles_history_salles_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/salles-history/salles-history.component */ "./src/app/pages/dashboard/components/salles-history/salles-history.component.ts");
            /* harmony import */ var _components_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-information/my-information.component */ "./src/app/pages/dashboard/components/my-information/my-information.component.ts");
            /* harmony import */ var _components_my_products_my_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-products/my-products.component */ "./src/app/pages/dashboard/components/my-products/my-products.component.ts");
            /* harmony import */ var _components_financing_processes_financing_processes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/financing-processes/financing-processes.component */ "./src/app/pages/dashboard/components/financing-processes/financing-processes.component.ts");
            /* harmony import */ var _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/new-product/new-product.component */ "./src/app/pages/dashboard/components/new-product/new-product.component.ts");
            /* harmony import */ var _components_my_products_components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-products/components/products-table/products-table.component */ "./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.ts");
            var routes = [
                {
                    path: '',
                    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    children: [
                        { path: 'vendas', component: _components_salles_history_salles_history_component__WEBPACK_IMPORTED_MODULE_4__["SallesHistoryComponent"] },
                        {
                            path: 'produtos',
                            component: _components_my_products_my_products_component__WEBPACK_IMPORTED_MODULE_6__["MyProductsComponent"],
                            children: [
                                { path: '', component: _components_my_products_components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_9__["ProductsTableComponent"] },
                                { path: 'novo', component: _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__["NewProductComponent"] },
                            ]
                        },
                        { path: 'financiamentos', component: _components_financing_processes_financing_processes_component__WEBPACK_IMPORTED_MODULE_7__["FinancingProcessesComponent"] },
                        { path: 'favoritos', component: _components_salles_history_salles_history_component__WEBPACK_IMPORTED_MODULE_4__["SallesHistoryComponent"] },
                        { path: 'dados', component: _components_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_5__["MyInformationComponent"] },
                    ]
                },
            ];
            var DashboardRoutingModule = /** @class */ (function () {
                function DashboardRoutingModule() {
                }
                return DashboardRoutingModule;
            }());
            DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DashboardRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/dashboard.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
          \*****************************************************/
        /*! exports provided: DashboardModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function () { return DashboardModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard/dashboard.component.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _components_my_products_my_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-products/my-products.component */ "./src/app/pages/dashboard/components/my-products/my-products.component.ts");
            /* harmony import */ var _components_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-information/my-information.component */ "./src/app/pages/dashboard/components/my-information/my-information.component.ts");
            /* harmony import */ var _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/new-product/new-product.component */ "./src/app/pages/dashboard/components/new-product/new-product.component.ts");
            /* harmony import */ var _components_financing_processes_financing_processes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/financing-processes/financing-processes.component */ "./src/app/pages/dashboard/components/financing-processes/financing-processes.component.ts");
            /* harmony import */ var _components_salles_history_salles_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/salles-history/salles-history.component */ "./src/app/pages/dashboard/components/salles-history/salles-history.component.ts");
            /* harmony import */ var _components_my_products_components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/my-products/components/products-table/products-table.component */ "./src/app/pages/dashboard/components/my-products/components/products-table/products-table.component.ts");
            var DashboardModule = /** @class */ (function () {
                function DashboardModule() {
                }
                return DashboardModule;
            }());
            DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_my_products_my_products_component__WEBPACK_IMPORTED_MODULE_6__["MyProductsComponent"], _components_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_7__["MyInformationComponent"], _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__["NewProductComponent"], _components_financing_processes_financing_processes_component__WEBPACK_IMPORTED_MODULE_9__["FinancingProcessesComponent"], _components_salles_history_salles_history_component__WEBPACK_IMPORTED_MODULE_10__["SallesHistoryComponent"], _components_my_products_components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_11__["ProductsTableComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                    ]
                })
            ], DashboardModule);
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/dashboard/dashboard.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/dashboard/dashboard/dashboard.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dash {\n  display: block;\n  min-height: 500px;\n}\n\n.container-route {\n  overflow: hidden;\n}\n\n.header-menu fa-icon {\n  display: none;\n}\n\n@media screen and (max-width: 676px) {\n  .header-menu fa-icon {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .navMenu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC9DOlxcVXNlcnNcXGZsb3JlXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcYnVpbGRlcnNcXG1hcmtldGNsdWItdWkvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHRTtFQUNFLGFBQUE7QUNBSjs7QURHRTtFQUNFO0lBQ0UsY0FBQTtFQ0RKO0FBQ0Y7O0FETUU7RUFERjtJQUVJLGFBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItcm91dGUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXItbWVudSB7XHJcbiAgZmEtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcclxuICAgIGZhLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXZNZW51IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59IiwiLmRhc2gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi5jb250YWluZXItcm91dGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyLW1lbnUgZmEtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xuICAuaGVhZGVyLW1lbnUgZmEtaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXZNZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/dashboard/dashboard/dashboard.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/pages/dashboard/dashboard/dashboard.component.ts ***!
          \******************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            /* harmony import */ var src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/ui.helper */ "./src/app/shared/helpers/ui.helper.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent() {
                    this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"];
                    this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisV"];
                    this.menuItems = [
                        { routerLink: 'produtos', title: 'Meus produtos', text: 'Veja todos os seus produtos cadastrados' },
                        { routerLink: 'dados', title: 'Meus dados', text: 'Veja e edite suas informações' },
                        { routerLink: 'senha', title: 'Alterar senha', text: 'Altera a senha da sua conta' },
                        { routerLink: 'financiamentos', title: 'Financiamentos em processo', text: 'Confira informações de financiamento' },
                        { routerLink: 'vendas', title: 'Minhas vendas', text: 'Visualize seu histórico de vendas' },
                        { routerLink: 'favoritos', title: 'Meus favoritos', text: 'Veja todos os itens favoritados' },
                    ];
                    this.selectedItem = this.menuItems[0];
                    this.isNewProduct = false;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Object(src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_4__["wait"])(500)
                        .then(function () {
                        _this.showEffects = true;
                    });
                };
                DashboardComponent.prototype.toggleActiveItem = function (item) {
                    this.selectedItem = item;
                };
                DashboardComponent.prototype.toggleNewProduct = function () {
                    this.isNewProduct = !this.isNewProduct;
                };
                DashboardComponent.prototype.getUserInformation = function () {
                    return new Promise(function (resolve, reject) {
                        resolve();
                    });
                };
                DashboardComponent.prototype.getUserProducts = function () {
                    return new Promise(function (resolve, reject) {
                        resolve();
                    });
                };
                DashboardComponent.prototype.getUserFinancing = function () {
                    return new Promise(function (resolve, reject) {
                        resolve();
                    });
                };
                return DashboardComponent;
            }());
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard/dashboard.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listStateTrigger"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listOpacity"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["routeSlideSide"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map
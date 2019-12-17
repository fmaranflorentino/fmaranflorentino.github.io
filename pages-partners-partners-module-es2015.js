(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-partners-partners-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/components/partner-detail/partner-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/components/partner-detail/partner-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n    <div class=\"container\">\n      <div class=\"breadcrumb\">\n        <ul>\n          <li><a routerLink=\"\">Página inicial</a></li>\n          <li><i class=\"fa fa-angle-right\"></i></li>\n          <li><a routerLink=\"/parceiros\">Parceiros</a></li>\n          <li><i class=\"fa fa-angle-right\"></i></li>\n          <li class=\"active\">Tok & Stok</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  \n  \n  <div class=\"container partners-info\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"partners-info__img\">\n          <img src=\".././../../../../assets/img/parceiro.jpg\" class=\"img-fluid\"/>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"partners-info__logo\">\n          <img src=\".././../../../../assets/img/parceiro-logo.png\" class=\"img-fluid\"/>\n        </div>\n        <div class=\"partners-info__rating\">\n          <i class=\"fa fa-star\"></i>\n          <i class=\"fa fa-star\"></i>\n          <i class=\"fa fa-star\"></i>\n          <i class=\"fa fa-star\"></i>\n          <i class=\"fa fa-star-half-empty\"></i>\n          <span>4.5 of 5</span>\n        </div>\n        <div class=\"partners-info__desc\">\n          <p>\n            A Tok&Stok surgiu em 1978, fruto do empreendedorismo do casal, Régis e Ghislaine Dubrule, recém-chegado da França ao Brasil. O nome resume bem o conceito inovador que seus fundadores desejavam implantar no país: a palavra “Tok” refere-se ao design arrojado de seus produtos e “Stok” menciona a disponibilidade desses móveis para retirada imediata.\n          </p>\n        </div>\n        <div class=\"partners-info__contact\">\n            <div class=\"partners-info__contact__phone\">\n              <img src=\"../../../../../assets/img/icons/phone.png\"/>\n              <span>(11) 1234-5678</span>\n            </div>\n            <div class=\"partners-address\">\n              <img src=\"../../../../../assets/img/icons/place.png\"/>\n              <span> Av. Marginal Tietê, 1250 - Vila Guilherme <br/>\n                  São Paulo - SP, 02050-010\n                  <br/>\n                  <a routerLink=\"\" class=\"link-purple\">Como Chegar</a>\n              </span> \n            </div>\n            <div class=\"partners-info__contact__phone\">\n              <img src=\"../../../../../assets/img/icons/clock.png\"/>\n              <span>Todos os dias das 10h às 22h</span>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  <!-- PRODUCTS -->\n  <div class=\"slide-products back-curves\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h1 class=\"title\">Produtos oferecidos por essa empresa</h1>\n        </div>\n        <owl-carousel-o [options]=\"productsOptions\" class=\"col-12\">\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>  \n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>  \n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n          <ng-template carouselSlide class=\"col-md-auto\">\n            <app-product></app-product>\n          </ng-template>\n        </owl-carousel-o>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners/partners.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners/partners.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-base>\n  <div class=\"top back-top bgs\">\n    <img\n      class=\"yellow-curve\"\n      src=\"./../../../../assets/img/icons/prod-bg-center.svg\"\n      alt=\"\"\n    />\n\n    <div class=\"container\">\n      <div class=\"breadcrumb\">\n        <ul>\n          <li><a routerLink=\"\">Página inicial</a></li>\n          <li><i class=\"fa fa-angle-right\"></i></li>\n          <li class=\"active\">Parceiros</li>\n        </ul>\n      </div>\n      <app-filters-mobile></app-filters-mobile>\n      <app-categories *ngIf=\"showEffects\"></app-categories>\n    </div>\n  </div>\n\n  <div class=\"container mt-4\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h1 class=\"title\">Todos <span>10.000 resultados</span></h1>\n\n        <div class=\"dropdown dropdown-local-mobile\">\n          <button\n            class=\"btn btn-dropdown dropdown-toggle\"\n            type=\"button\"\n            id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Localização Bebedouro, SP\n          </button>\n          <div\n            class=\"dropdown-menu modal-body\"\n            aria-labelledby=\"dropdownMenuButton\"\n          >\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2>Encontre as lojas mais próximas à você</h2>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Digite seu CEP\"\n                />\n                <a href=\"#\" class=\"link-purple btn-small cep\"\n                  >Não sabe o cep?</a\n                >\n              </div>\n              <div class=\"col-12 btns-end\">\n                <a href=\"#\" class=\"link-purple btn-small\">CANCELAR</a\n                ><a href=\"#\" class=\"btn btn-primary\">LOCALIZAR</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-6 products-config\">\n        <button mat-icon-button aria-label=\"\">\n          <mat-icon>\n            <fa-icon [icon]=\"faTh\" [styles]=\"{ color: '#9053A1' }\"></fa-icon>\n          </mat-icon>\n        </button>\n        <button mat-icon-button aria-label=\"\">\n          <mat-icon>\n            <fa-icon [icon]=\"faBars\" [styles]=\"{ color: '#9053A1' }\"></fa-icon>\n          </mat-icon>\n        </button>\n        <div class=\"dropdown dropdown-order\">\n          <button class=\"btn\" mat-button [matMenuTriggerFor]=\"maisVendidos\">\n            <span class=\"mr-3\">\n              Mais vendidos\n            </span>\n            <fa-icon\n              [icon]=\"faChevronDown\"\n              [styles]=\"{ color: '#9053a1' }\"\n            ></fa-icon>\n          </button>\n          <mat-menu #maisVendidos=\"matMenu\">\n            <ng-template matMenuContent>\n              <button mat-menu-item>Mais Recentes</button>\n              <button mat-menu-item>Menos Valor</button>\n              <button mat-menu-item>Maior Valor</button>\n            </ng-template>\n          </mat-menu>\n        </div>\n      </div>\n\n      <aside class=\"filters col-3\">\n        <div class=\"dropdown dropdown-local\">\n          <button\n            class=\"btn btn-dropdown dropdown-toggle\"\n            type=\"button\"\n            id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Localização Bebedouro, SP\n          </button>\n          <div\n            class=\"dropdown-menu modal-body\"\n            aria-labelledby=\"dropdownMenuButton\"\n          >\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2>Encontre as lojas mais próximas à você</h2>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Digite seu CEP\"\n                />\n                <a href=\"#\" class=\"link-purple btn-small cep\"\n                  >Não sabe o cep?</a\n                >\n              </div>\n              <div class=\"col-12 btns-end\">\n                <a href=\"#\" class=\"link-purple btn-small\">CANCELAR</a\n                ><a href=\"#\" class=\"btn btn-primary\">LOCALIZAR</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <app-filters></app-filters>\n\n        <h2 class=\"titulo\">Faça a simulação</h2>\n        <app-range-simulator></app-range-simulator>\n      </aside>\n\n      <div class=\"col-9 loading-skeleton\" @fadeIn *ngIf=\"loadingPartners\">\n        <div class=\"row\">\n          <div class=\"col-4\" *ngFor=\"let item of generateArray(9)\">\n            <app-skeleton-box></app-skeleton-box>\n          </div>\n        </div>\n      </div>\n\n      <section class=\"col-9 products-list\" @fadeIn *ngIf=\"!loadingPartners\">\n        <div class=\"row\" @listState *ngIf=\"collection?.length > 0\">\n          <app-partner\n            *ngFor=\"\n              let item of collection\n                | paginate: { itemsPerPage: 9, currentPage: 1 }\n            \"\n            class=\"col-md-4 col-6\"\n          ></app-partner>\n          <!-- <app-partner *ngFor=\"let item of collection | paginate: { itemsPerPage: 9, currentPage: p }\" class=\"col-md-4 col-6\"></app-partner> -->\n        </div>\n        <pagination-controls></pagination-controls>\n        <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n      </section>\n    </div>\n  </div>\n</app-base>\n");

/***/ }),

/***/ "./src/app/pages/partners/components/partner-detail/partner-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/partners/components/partner-detail/partner-detail.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".partners-info {\n  padding-bottom: 80px;\n}\n\n.partners-info__img {\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 50px;\n}\n\n.partners-info__logo,\n.partners-info__rating,\n.partners-info__desc,\n.partners-info__contact {\n  margin-bottom: 10px;\n}\n\n.partners-info__rating i {\n  color: #25806b;\n  margin: 0 3px;\n}\n\n.partners-info__rating span {\n  margin-left: 10px;\n}\n\n.partners-info__contact > div {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.partners-info__contact img {\n  margin-right: 10px;\n}\n\n.partners-info__contact .link-purple {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFydG5lcnMvY29tcG9uZW50cy9wYXJ0bmVyLWRldGFpbC9DOlxcVXNlcnNcXGZsb3JlXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcYnVpbGRlcnNcXG1hcmtldGNsdWItdWkvc3JjXFxhcHBcXHBhZ2VzXFxwYXJ0bmVyc1xcY29tcG9uZW50c1xccGFydG5lci1kZXRhaWxcXHBhcnRuZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXJ0bmVycy9jb21wb25lbnRzL3BhcnRuZXItZGV0YWlsL3BhcnRuZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBOzs7O0VBSUksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFHQSxhQUFBO0VBR0EsbUJBQUE7RUFHQSxpQkFBQTtFQUdBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFydG5lcnMvY29tcG9uZW50cy9wYXJ0bmVyLWRldGFpbC9wYXJ0bmVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFydG5lcnMtaW5mbyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG4ucGFydG5lcnMtaW5mb19faW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucGFydG5lcnMtaW5mb19fbG9nbyxcclxuLnBhcnRuZXJzLWluZm9fX3JhdGluZyxcclxuLnBhcnRuZXJzLWluZm9fX2Rlc2MsXHJcbi5wYXJ0bmVycy1pbmZvX19jb250YWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wYXJ0bmVycy1pbmZvX19yYXRpbmcgaSB7XHJcbiAgICBjb2xvcjogIzI1ODA2YjtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbn1cclxuXHJcbi5wYXJ0bmVycy1pbmZvX19yYXRpbmcgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBhcnRuZXJzLWluZm9fX2NvbnRhY3QgPiBkaXYgIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcnRuZXJzLWluZm9fX2NvbnRhY3QgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBhcnRuZXJzLWluZm9fX2NvbnRhY3QgLmxpbmstcHVycGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iLCIucGFydG5lcnMtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ucGFydG5lcnMtaW5mb19faW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucGFydG5lcnMtaW5mb19fbG9nbyxcbi5wYXJ0bmVycy1pbmZvX19yYXRpbmcsXG4ucGFydG5lcnMtaW5mb19fZGVzYyxcbi5wYXJ0bmVycy1pbmZvX19jb250YWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBhcnRuZXJzLWluZm9fX3JhdGluZyBpIHtcbiAgY29sb3I6ICMyNTgwNmI7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi5wYXJ0bmVycy1pbmZvX19yYXRpbmcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucGFydG5lcnMtaW5mb19fY29udGFjdCA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcnRuZXJzLWluZm9fX2NvbnRhY3QgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFydG5lcnMtaW5mb19fY29udGFjdCAubGluay1wdXJwbGUge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/partners/components/partner-detail/partner-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/partners/components/partner-detail/partner-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PartnerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerDetailComponent", function() { return PartnerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnerDetailComponent = class PartnerDetailComponent {
    constructor() {
        this.productsOptions = {
            autoWidth: true,
            loop: true,
            items: 4,
            dotsSpeed: 500,
            dots: false,
            smartSpeed: 400,
            dragEndSpeed: 350,
            nav: true,
            navText: ["<img src='./../../../../assets/img/icons/arrow-back.png'>", "<img src='./../../../../assets/img/icons/arrow-next.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 4
                }
            }
        };
    }
    ngOnInit() {
    }
};
PartnerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partner-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/components/partner-detail/partner-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partner-detail.component.scss */ "./src/app/pages/partners/components/partner-detail/partner-detail.component.scss")).default]
    })
], PartnerDetailComponent);



/***/ }),

/***/ "./src/app/pages/partners/partners-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/partners/partners-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PartnersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersRoutingModule", function() { return PartnersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/pages/partners/partners/partners.component.ts");
/* harmony import */ var _components_partner_detail_partner_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/partner-detail/partner-detail.component */ "./src/app/pages/partners/components/partner-detail/partner-detail.component.ts");





const routes = [
    { path: '', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__["PartnersComponent"] },
    { path: ':id/detalhe', component: _components_partner_detail_partner_detail_component__WEBPACK_IMPORTED_MODULE_4__["PartnerDetailComponent"] },
];
let PartnersRoutingModule = class PartnersRoutingModule {
};
PartnersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PartnersRoutingModule);



/***/ }),

/***/ "./src/app/pages/partners/partners.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/partners/partners.module.ts ***!
  \***************************************************/
/*! exports provided: PartnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersModule", function() { return PartnersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _partners_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners-routing.module */ "./src/app/pages/partners/partners-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/pages/partners/partners/partners.component.ts");
/* harmony import */ var _components_partner_detail_partner_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/partner-detail/partner-detail.component */ "./src/app/pages/partners/components/partner-detail/partner-detail.component.ts");







let PartnersModule = class PartnersModule {
};
PartnersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_partners_partners_component__WEBPACK_IMPORTED_MODULE_5__["PartnersComponent"], _components_partner_detail_partner_detail_component__WEBPACK_IMPORTED_MODULE_6__["PartnerDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _partners_routing_module__WEBPACK_IMPORTED_MODULE_3__["PartnersRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], PartnersModule);



/***/ }),

/***/ "./src/app/pages/partners/partners/partners.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/partners/partners/partners.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".partner-box {\n  max-width: 260px;\n  margin-bottom: 50px;\n  display: block;\n}\n\n.partner-box__img {\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  box-sizing: border-box;\n  border-radius: 8px;\n  height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.partner-box__title h1 {\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: 600;\n}\n\n.partner-box__title span {\n  font-size: 14px;\n  line-height: 21px;\n  text-transform: uppercase;\n}\n\n.partner-box__desc p {\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.products-config {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.products-config a {\n  padding: 10px;\n}\n\n.products-config a i {\n  color: #9053a1;\n  font-size: 25px;\n}\n\n.products-config .dropdown {\n  margin-left: 10px;\n}\n\n.products-config .dropdown a {\n  font-size: 14px;\n}\n\nh2.titulo {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 48px;\n  color: #0D363C;\n  margin-top: 80px;\n}\n\n::ng-deep .mat-expanded {\n  border: 0 !important;\n}\n\n.bgs {\n  position: relative;\n}\n\n.bgs:before {\n  content: url('prod-bg-right.svg');\n  position: absolute;\n  top: -162px;\n  right: 90px;\n  z-index: -1;\n  width: 158px;\n  height: 158px;\n}\n\n.bgs .yellow-curve {\n  position: absolute;\n  z-index: -2;\n  top: -80px;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFydG5lcnMvcGFydG5lcnMvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xccGFydG5lcnNcXHBhcnRuZXJzXFxwYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFydG5lcnMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDT0Y7O0FESkE7RUFDRSxvQkFBQTtBQ09GOztBREpBO0VBQ0Usa0JBQUE7QUNPRjs7QURMRTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQ01KOztBREhFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcnRuZXJzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItYm94IHtcclxuICBtYXgtd2lkdGg6IDI2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhcnRuZXItYm94X19pbWcge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYXJ0bmVyLWJveF9fdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYXJ0bmVyLWJveF9fdGl0bGUgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wYXJ0bmVyLWJveF9fZGVzYyBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5wcm9kdWN0cy1jb25maWcgYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucHJvZHVjdHMtY29uZmlnIGEgaSB7XHJcbiAgY29sb3I6ICM5MDUzYTE7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ucHJvZHVjdHMtY29uZmlnIC5kcm9wZG93biBhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5oMi50aXR1bG8ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjMEQzNjNDO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWV4cGFuZGVkIHtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJncyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvcHJvZC1iZy1yaWdodC5zdmdcIik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNjJweDtcclxuICAgIHJpZ2h0OiA5MHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgaGVpZ2h0OiAxNThweDtcclxuICB9XHJcblxyXG4gIC55ZWxsb3ctY3VydmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IC0yO1xyXG4gICAgICB0b3A6IC04MHB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gIH1cclxufSIsIi5wYXJ0bmVyLWJveCB7XG4gIG1heC13aWR0aDogMjYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFydG5lci1ib3hfX2ltZyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wYXJ0bmVyLWJveF9fdGl0bGUgaDEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGFydG5lci1ib3hfX3RpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucGFydG5lci1ib3hfX2Rlc2MgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5wcm9kdWN0cy1jb25maWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucHJvZHVjdHMtY29uZmlnIGEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZHVjdHMtY29uZmlnIGEgaSB7XG4gIGNvbG9yOiAjOTA1M2ExO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmgyLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjMEQzNjNDO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbmRlZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uYmdzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJnczpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvcHJvZC1iZy1yaWdodC5zdmdcIik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTYycHg7XG4gIHJpZ2h0OiA5MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDE1OHB4O1xuICBoZWlnaHQ6IDE1OHB4O1xufVxuLmJncyAueWVsbG93LWN1cnZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMjtcbiAgdG9wOiAtODBweDtcbiAgbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/partners/partners/partners.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/partners/partners/partners.component.ts ***!
  \***************************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/ui.helper */ "./src/app/shared/helpers/ui.helper.ts");





let PartnersComponent = class PartnersComponent {
    constructor() {
        this.collection = [];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"];
        this.faTh = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTh"];
        this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDown"];
        this.loadingPartners = false;
        for (let i = 1; i <= 50; i++) {
            this.collection.push('item ${i}');
        }
    }
    ngOnInit() {
        this.loadingPartners = true;
        Object(src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_4__["wait"])(500)
            .then(() => {
            this.showEffects = true;
        });
        Object(src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_4__["wait"])(3000)
            .then(() => {
            this.loadingPartners = false;
        });
    }
    generateArray(count) {
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }
};
PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partners',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners/partners.component.html")).default,
        animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_2__["listStateTrigger"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partners.component.scss */ "./src/app/pages/partners/partners/partners.component.scss")).default]
    })
], PartnersComponent);



/***/ })

}]);
//# sourceMappingURL=pages-partners-partners-module-es2015.js.map
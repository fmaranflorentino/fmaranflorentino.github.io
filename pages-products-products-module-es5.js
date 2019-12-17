var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.html": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.html ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n  <mat-tab label=\"Descrição\">\n    <div class=\"container\">\n      <p>\n        Donec sit amet hendrerit ipsum. Etiam in diam eget quam lacinia\n        scelerisque. In condimentum vehicula tellus vitae cursus. Donec vitae\n        arcu sed mi vulputate vehicula. Sed mattis lorem felis, a bibendum nunc\n        laoreet quis. Cras facilisis nisi sit amet quam ultrices, in pharetra\n        turpis porttitor.\n      </p>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Mais Informações\">\n    <div class=\"container\">\n      <p>\n        Donec sit amet hendrerit ipsum. Etiam in diam eget quam lacinia\n        scelerisque. In condimentum vehicula tellus vitae cursus. Donec vitae\n        arcu sed mi vulputate vehicula. Sed mattis lorem felis, a bibendum nunc\n        laoreet quis. Cras facilisis nisi sit amet quam ultrices, in pharetra\n        turpis porttitor.\n      </p>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Avaliações\">\n    <div class=\"container\">\n      <p>\n        Donec sit amet hendrerit ipsum. Etiam in diam eget quam lacinia\n        scelerisque. In condimentum vehicula tellus vitae cursus. Donec vitae\n        arcu sed mi vulputate vehicula. Sed mattis lorem felis, a bibendum nunc\n        laoreet quis. Cras facilisis nisi sit amet quam ultrices, in pharetra\n        turpis porttitor.\n      </p>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/product-detail.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/product-detail.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-base>\r\n  <div class=\"top\">\r\n    <div class=\"container\">\r\n      <div class=\"breadcrumb\">\r\n        <ul>\r\n          <li><a routerLink=\"\">Página inicial</a></li>\r\n          <li><i class=\"fa fa-angle-right\"></i></li>\r\n          <li><a routerLink=\"/produtos\">Produtos/Serviços</a></li>\r\n          <li><i class=\"fa fa-angle-right\"></i></li>\r\n          <li><a routerLink=\"/produtos/categorias/veiculos\">Veículos</a></li>\r\n          <li><i class=\"fa fa-angle-right\"></i></li>\r\n          <li class=\"active\">BMW Série 3 Sedã</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container product-info\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"product-info__img\">\r\n          <ngx-gallery\r\n            [options]=\"galleryOptions\"\r\n            [images]=\"galleryImages\"\r\n          ></ngx-gallery>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"product-info__logo\">\r\n          <h1>BMW Série 3 Sedã 2.0 16V Turbo Active Automático</h1>\r\n        </div>\r\n        <div class=\"product-info__rating\">\r\n          <fa-icon [icon]=\"faStar\"></fa-icon>\r\n          <fa-icon [icon]=\"faStar\"></fa-icon>\r\n          <fa-icon [icon]=\"faStar\"></fa-icon>\r\n          <fa-icon [icon]=\"faStar\"></fa-icon>\r\n\r\n          <!-- <i class=\"fa fa-star-half-empty\"></i> -->\r\n          <span>4 of 5</span>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"!isProductTypeService\">\r\n          <perfect-scrollbar style=\"max-width: 600px; max-height: 250px;\">\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-info__prices\" for=\"radio1\">\r\n              <div class=\"product-info__prices__select\">\r\n                <input type=\"radio\" id=\"radio1\" />\r\n              </div>\r\n              <div class=\"product-info__prices__offers\">\r\n                <h3>R$ 230.900</h3>\r\n                <span>Loja São Paulo</span>\r\n              </div>\r\n              <div class=\"product-info__prices__label\">\r\n                <label>Melhor preço</label>\r\n              </div>\r\n              <div class=\"product-info__prices__economy\">\r\n                <span>Preço na loja: R$ 255.000,00</span>\r\n                <span>Econômetro: 24.100,00</span>\r\n              </div>\r\n            </div>\r\n          </perfect-scrollbar>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"isProductTypeService\">\r\n          <div class=\"product-service-box\">\r\n            <header class=\"mb-3\">\r\n              Solicite um orçamento sem compromisso\r\n            </header>\r\n            <div>\r\n              <div class=\"form-group mb-4\">\r\n                <input\r\n                  type=\"text\"\r\n                  placeholder=\"Nome\"\r\n                  class=\"form-control pl-0\"\r\n                  autocomplete=\"off\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <input\r\n                  type=\"text\"\r\n                  placeholder=\"E-mail\"\r\n                  class=\"form-control pl-0\"\r\n                  autocomplete=\"off\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  placeholder=\"Telefone\"\r\n                  class=\"form-control pl-0\"\r\n                  autocomplete=\"off\"\r\n                />\r\n              </div>\r\n\r\n              <button class=\"btn btn-round btn-grey mt-5\">Solicitar orçamento</button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"product-info__buttons btns-prod\" *ngIf=\"!isProductTypeService\">\r\n          <button class=\"btn btn-round btn-primary mr-3\">\r\n            <fa-icon\r\n              class=\"pr-2\"\r\n              [icon]=\"faShoppingCart\"\r\n              [styles]=\"{ color: '#fff' }\"\r\n            ></fa-icon>\r\n            Quero Comprar\r\n          </button>\r\n          <button\r\n            (click)=\"insertOnCache()\"\r\n            class=\"btn btn-round btn-transparent-full btn-fav\"\r\n          >\r\n            <fa-icon\r\n              class=\"pr-2\"\r\n              [icon]=\"faHeart\"\r\n              [styles]=\"{ color: '#9053a1' }\"\r\n            ></fa-icon>\r\n\r\n            Adicionar aos favoritos\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"product-desc\">\r\n    <app-product-tabs></app-product-tabs>\r\n  </div>\r\n\r\n  <app-products-carousel class=\"d-block mt-5\"></app-products-carousel>\r\n\r\n  <!-- PRODUCTS -->\r\n  <div class=\"slide-products back-green\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h1 class=\"title\">Mais vendidos do mês</h1>\r\n        </div>\r\n        <owl-carousel-o [options]=\"productsOptions\" class=\"col-12\">\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n          <ng-template carouselSlide class=\"col-md-auto\">\r\n            <app-product></app-product>\r\n          </ng-template>\r\n        </owl-carousel-o>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-base>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-base>\n  <div class=\"top back-top bgs\">\n    <img\n      class=\"yellow-curve\"\n      src=\"./../../../../assets/img/icons/prod-bg-center.svg\"\n      alt=\"\"\n    />\n\n    <div class=\"container\">\n      <div class=\"breadcrumb\">\n        <ul>\n          <li><a routerLink=\"\">Página inicial</a></li>\n          <li><i class=\"fa fa-angle-right\"></i></li>\n          <li class=\"active\">Produtos/Serviços</li>\n        </ul>\n      </div>\n      <app-filters-mobile></app-filters-mobile>\n      <app-categories *ngIf=\"showEffects\"></app-categories>\n    </div>\n  </div>\n\n  <div class=\"container mt-4\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h1 class=\"title\">Todos <span>10.000 resultados</span></h1>\n\n        <div class=\"dropdown dropdown-local-mobile\">\n          <button\n            class=\"btn btn-dropdown dropdown-toggle\"\n            type=\"button\"\n            id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Localização Bebedouro, SP\n          </button>\n          <div\n            class=\"dropdown-menu modal-body\"\n            aria-labelledby=\"dropdownMenuButton\"\n          >\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2>Encontre as lojas mais próximas à você</h2>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Digite seu CEP\"\n                />\n                <a href=\"#\" class=\"link-purple btn-small cep\"\n                  >Não sabe o cep?</a\n                >\n              </div>\n              <div class=\"col-12 btns-end\">\n                <a href=\"#\" class=\"link-purple btn-small\">CANCELAR</a\n                ><a href=\"#\" class=\"btn btn-primary\">LOCALIZAR</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-6 products-config\">\n        <button mat-icon-button aria-label=\"\">\n          <mat-icon>\n            <fa-icon [icon]=\"faTh\" [styles]=\"{ color: '#9053A1' }\"></fa-icon>\n          </mat-icon>\n        </button>\n        <button mat-icon-button aria-label=\"\">\n          <mat-icon>\n            <fa-icon [icon]=\"faBars\" [styles]=\"{ color: '#9053A1' }\"></fa-icon>\n          </mat-icon>\n        </button>\n        <div class=\"dropdown dropdown-order\">\n          <button class=\"btn\" mat-button [matMenuTriggerFor]=\"maisVendidos\">\n            <span class=\"mr-3\">\n              Mais vendidos\n            </span>\n            <fa-icon\n              [icon]=\"faChevronDown\"\n              [styles]=\"{ color: '#9053a1' }\"\n            ></fa-icon>\n          </button>\n          <mat-menu #maisVendidos=\"matMenu\">\n            <ng-template matMenuContent>\n              <button mat-menu-item>Mais Recentes</button>\n              <button mat-menu-item>Menos Valor</button>\n              <button mat-menu-item>Maior Valor</button>\n            </ng-template>\n          </mat-menu>\n        </div>\n      </div>\n\n      <aside class=\"filters col-3\">\n        <!-- <div class=\"dropdown dropdown-local\">\n          <button\n            class=\"btn btn-dropdown dropdown-toggle\"\n            type=\"button\"\n            id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Localização Bebedouro, SP\n          </button>\n          <div\n            class=\"dropdown-menu modal-body\"\n            aria-labelledby=\"dropdownMenuButton\"\n          >\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2>Encontre as lojas mais próximas à você</h2>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Digite seu CEP\"\n                />\n                <a href=\"#\" class=\"link-purple btn-small cep\"\n                  >Não sabe o cep?</a\n                >\n              </div>\n              <div class=\"col-12 btns-end\">\n                <a href=\"#\" class=\"link-purple btn-small\">CANCELAR</a\n                ><a href=\"#\" class=\"btn btn-primary\">LOCALIZAR</a>\n              </div>\n            </div>\n          </div>\n        </div> -->\n        <app-filters></app-filters>\n\n        <h2>Faça a simulação</h2>\n        <app-range-simulator></app-range-simulator>\n      </aside>\n\n      <div class=\"col-9 loading-skeleton\" @fadeIn *ngIf=\"loadingProducts\">\n        <div class=\"row\">\n          <div class=\"col-4\" *ngFor=\"let item of generateArray(9)\">\n            <app-skeleton-box></app-skeleton-box>\n          </div>\n        </div>\n      </div>\n      <section class=\"col-9 products-list\" @fadeIn *ngIf=\"!loadingProducts\">\n        <div class=\"row\" @listState *ngIf=\"collection?.length > 0\">\n          <app-product\n            *ngFor=\"\n              let item of collection\n                | paginate: { itemsPerPage: 9, currentPage: 1 }\n            \"\n            class=\"col-md-4 col-6\"\n          ></app-product>\n        </div>\n        <pagination-controls></pagination-controls>\n        <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n      </section>\n    </div>\n  </div>\n</app-base>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.scss": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.scss ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvY29tcG9uZW50cy9wcm9kdWN0LXRhYnMvcHJvZHVjdC10YWJzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.ts": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.ts ***!
          \************************************************************************************************************/
        /*! exports provided: ProductTabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function () { return ProductTabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductTabsComponent = /** @class */ (function () {
                function ProductTabsComponent() {
                }
                ProductTabsComponent.prototype.ngOnInit = function () {
                };
                return ProductTabsComponent;
            }());
            ProductTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product-tabs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-tabs.component.scss */ "./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.scss")).default]
                })
            ], ProductTabsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/products/components/product-detail/product-detail.component.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/products/components/product-detail/product-detail.component.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".product-info {\n  padding-bottom: 10px;\n}\n\n.product-info__img {\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 50px;\n}\n\n.product-info__logo,\n.product-info__rating {\n  margin-bottom: 10px;\n}\n\n.product-info__logo h1 {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 36px;\n  color: #231f20;\n}\n\n.product-info__rating i {\n  color: #25806b;\n  margin: 0 3px;\n}\n\n.product-info__rating span {\n  margin-left: 10px;\n}\n\n.product-info__prices {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  border-bottom: 0.3px solid #dedede;\n  padding: 20px 10px 20px 0;\n}\n\n.product-info__prices__offers h3 {\n  font-size: 24px;\n  line-height: 23px;\n  margin: 0;\n}\n\n.product-info__prices__offers span {\n  font-size: 14px;\n  line-height: 30px;\n}\n\n.product-info__prices__economy span {\n  display: block;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: right;\n}\n\n.product-info__prices__economy span:last-child {\n  color: #26806b;\n  font-weight: 600;\n}\n\n.product-info__prices__label label {\n  background: #26806b;\n  border-radius: 50px;\n  font-size: 12px;\n  padding: 5px 20px;\n  color: #fff;\n}\n\n.product-info__prices__select input {\n  margin-left: 5px;\n}\n\n.product-info__buttons {\n  margin-top: 40px;\n}\n\n.product-info__buttons a:first-child {\n  margin-right: 40px;\n}\n\n.btn-round {\n  height: 50px;\n}\n\n.back-green {\n  background-color: #f1fafa;\n}\n\n::ng-deep .product-service-box {\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  padding: 30px;\n  margin: 30px 0 0 0;\n}\n\n::ng-deep .product-service-box header {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n::ng-deep .product-service-box input {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #9053a1;\n  background-color: #fff;\n  height: 45px;\n  box-shadow: none !important;\n}\n\n::ng-deep .product-service-box input::-webkit-input-placeholder {\n  font-weight: bold !important;\n}\n\n::ng-deep .product-service-box input::-moz-placeholder {\n  font-weight: bold !important;\n}\n\n::ng-deep .product-service-box input::-ms-input-placeholder {\n  font-weight: bold !important;\n}\n\n::ng-deep .product-service-box input::placeholder {\n  font-weight: bold !important;\n}\n\n@media screen and (max-width: 676px) {\n  ::ng-deep .btns-prod {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media screen and (max-width: 676px) {\n  .btn-fav {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9DOlxcVXNlcnNcXGZsb3JlXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcYnVpbGRlcnNcXG1hcmtldGNsdWItdWkvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xcY29tcG9uZW50c1xccHJvZHVjdC1kZXRhaWxcXHByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBOztFQUVFLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBRERBO0VBR0UsYUFBQTtFQUdBLG1CQUFBO0VBR0EsZUFBQTtFQUdBLDhCQUFBO0VBR0EscUJBQUE7RUFHQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDUUY7O0FETEE7RUFDRSxnQkFBQTtBQ1FGOztBRExBO0VBQ0UsZ0JBQUE7QUNRRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETEE7RUFDRSxZQUFBO0FDUUY7O0FETEE7RUFDRSx5QkFBQTtBQ1FGOztBRExBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURKRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNNSjs7QURIRTtFQUNFLDRCQUFBO0FDS0o7O0FETkU7RUFDRSw0QkFBQTtBQ0tKOztBRE5FO0VBQ0UsNEJBQUE7QUNLSjs7QURORTtFQUNFLDRCQUFBO0FDS0o7O0FEQ0k7RUFERjtJQUVJLGFBQUE7SUFDQSxzQkFBQTtFQ0dKO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGdCQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbmZvIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZHVjdC1pbmZvX19pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm9fX2xvZ28sXHJcbi5wcm9kdWN0LWluZm9fX3JhdGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZHVjdC1pbmZvX19sb2dvIGgxIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICBjb2xvcjogIzIzMWYyMDtcclxufVxyXG4ucHJvZHVjdC1pbmZvX19yYXRpbmcgaSB7XHJcbiAgY29sb3I6ICMyNTgwNmI7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fcmF0aW5nIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvX19wcmljZXMge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkICNkZWRlZGU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fcHJpY2VzX19vZmZlcnMgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnByb2R1Y3QtaW5mb19fcHJpY2VzX19vZmZlcnMgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5wcm9kdWN0LWluZm9fX3ByaWNlc19fZWNvbm9teSBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnByb2R1Y3QtaW5mb19fcHJpY2VzX19lY29ub215IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6ICMyNjgwNmI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvZHVjdC1pbmZvX19wcmljZXNfX2xhYmVsIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMjY4MDZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvX19wcmljZXNfX3NlbGVjdCBpbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fYnV0dG9ucyBhOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4tcm91bmQge1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJhY2stZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWZhZmE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucHJvZHVjdC1zZXJ2aWNlLWJveCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTA1M2ExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuYnRucy1wcm9kIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XHJcbiAgLmJ0bi1mYXYge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuIiwiLnByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pbmZvX19pbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5wcm9kdWN0LWluZm9fX2xvZ28sXG4ucHJvZHVjdC1pbmZvX19yYXRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pbmZvX19sb2dvIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMyMzFmMjA7XG59XG5cbi5wcm9kdWN0LWluZm9fX3JhdGluZyBpIHtcbiAgY29sb3I6ICMyNTgwNmI7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi5wcm9kdWN0LWluZm9fX3JhdGluZyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wcm9kdWN0LWluZm9fX3ByaWNlcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkICNkZWRlZGU7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDA7XG59XG5cbi5wcm9kdWN0LWluZm9fX3ByaWNlc19fb2ZmZXJzIGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvZHVjdC1pbmZvX19wcmljZXNfX29mZmVycyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnByb2R1Y3QtaW5mb19fcHJpY2VzX19lY29ub215IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9kdWN0LWluZm9fX3ByaWNlc19fZWNvbm9teSBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzI2ODA2YjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2R1Y3QtaW5mb19fcHJpY2VzX19sYWJlbCBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICMyNjgwNmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1pbmZvX19wcmljZXNfX3NlbGVjdCBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wcm9kdWN0LWluZm9fX2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ucHJvZHVjdC1pbmZvX19idXR0b25zIGE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5idG4tcm91bmQge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5iYWNrLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZmFmYTtcbn1cblxuOjpuZy1kZWVwIC5wcm9kdWN0LXNlcnZpY2UtYm94IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuOjpuZy1kZWVwIC5wcm9kdWN0LXNlcnZpY2UtYm94IGhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAucHJvZHVjdC1zZXJ2aWNlLWJveCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MDUzYTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDVweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5wcm9kdWN0LXNlcnZpY2UtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XG4gIDo6bmctZGVlcCAuYnRucy1wcm9kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgLmJ0bi1mYXYge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/products/components/product-detail/product-detail.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/pages/products/components/product-detail/product-detail.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ProductDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () { return ProductDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
            /* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/cache/cache.service */ "./src/app/shared/services/cache/cache.service.ts");
            var ProductDetailComponent = /** @class */ (function () {
                function ProductDetailComponent(cacheService) {
                    this.cacheService = cacheService;
                    this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStar"];
                    this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faShoppingCart"];
                    this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHeart"];
                    this.productsOptions = {
                        autoWidth: true,
                        loop: true,
                        items: 4,
                        dotsSpeed: 500,
                        dots: false,
                        smartSpeed: 400,
                        dragEndSpeed: 350,
                        nav: true,
                        navText: ["<img src='./../../../../../assets/img/icons/arrow-back.png'>", "<img src='./../../../../../assets/img/icons/arrow-next.png'>"],
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
                    this.productType = 'product';
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    this.galleryOptions = [
                        {
                            width: '100%',
                            height: '450px',
                            thumbnailsColumns: 4,
                            imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
                        },
                        // max-width 800
                        {
                            breakpoint: 800,
                            width: '100%',
                            height: '600px',
                            imagePercent: 80,
                            thumbnailsPercent: 20,
                            thumbnailsMargin: 20,
                            thumbnailMargin: 20
                        },
                        // max-width 400
                        {
                            breakpoint: 400,
                            preview: false
                        }
                    ];
                    this.galleryImages = [
                        {
                            small: './../../../../../assets/img/parceiro.jpg',
                            medium: './../../../../../assets/img/parceiro.jpg',
                            big: './../../../../../assets/img/parceiro.jpg'
                        },
                        {
                            small: './../../../../../assets/img/parceiro.jpg',
                            medium: './../../../../../assets/img/parceiro.jpg',
                            big: './../../../../../assets/img/parceiro.jpg'
                        },
                        {
                            small: './../../../../../assets/img/parceiro.jpg',
                            medium: './../../../../../assets/img/parceiro.jpg',
                            big: './../../../../../assets/img/parceiro.jpg'
                        }
                    ];
                };
                ProductDetailComponent.prototype.insertOnCache = function () {
                    var arr = [
                        { title: 'um' },
                        { title: 'dois' },
                        { title: 'dois' },
                    ];
                    this.cacheService.setStorage('favoritos', JSON.stringify(arr));
                };
                Object.defineProperty(ProductDetailComponent.prototype, "isProductTypeService", {
                    get: function () {
                        return this.productType === 'service' ? true : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProductDetailComponent;
            }());
            ProductDetailComponent.ctorParameters = function () { return [
                { type: src_app_shared_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] }
            ]; };
            ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/components/product-detail/product-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/pages/products/components/product-detail/product-detail.component.scss")).default]
                })
            ], ProductDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/products/products-routing.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/products/products-routing.module.ts ***!
          \***********************************************************/
        /*! exports provided: ProductsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () { return ProductsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
            /* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/pages/products/components/product-detail/product-detail.component.ts");
            var routes = [
                { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
                { path: ':id/detalhe', component: _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] }
            ];
            var ProductsRoutingModule = /** @class */ (function () {
                function ProductsRoutingModule() {
                }
                return ProductsRoutingModule;
            }());
            ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ProductsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/products/products.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/pages/products/products.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-product {\n  /* display: inline-block;\n    margin: 7px; */\n}\n\n.products-config {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.products-config a {\n  padding: 10px;\n}\n\n.products-config a i {\n  color: #9053a1;\n  font-size: 25px;\n}\n\n.products-config .dropdown {\n  margin-left: 10px;\n}\n\n.products-config .dropdown a {\n  font-size: 14px;\n}\n\nh2 {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 48px;\n  color: #0d363c;\n  margin-top: 80px;\n}\n\n.dropdown-local {\n  margin-bottom: 30px;\n}\n\n.dropdown-local button {\n  width: 100%;\n}\n\n.dropdown-local .dropdown-menu {\n  width: 550px;\n}\n\n.dropdown-local-mobile .dropdown-menu {\n  width: 350px;\n}\n\n.dropdown-local .dropdown-menu h2,\n.dropdown-local-mobile .dropdown-menu h2 {\n  margin-top: 0px;\n}\n\n.dropdown-local-mobile {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .filters,\n.breadcrumb,\n.products-config {\n    display: none;\n  }\n\n  .products-list {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n.link-purple {\n  border: none;\n}\n\n.cep {\n  right: 17px;\n  position: absolute;\n  bottom: 8px;\n}\n\n.loading-skeleton .col-4 {\n  max-height: 300px !important;\n  margin-bottom: 30px;\n}\n\n::ng-deep .mat-expanded {\n  border: 0 !important;\n}\n\n.bgs {\n  position: relative;\n}\n\n.bgs:before {\n  content: url('prod-bg-right.svg');\n  position: absolute;\n  top: -162px;\n  right: 90px;\n  z-index: -1;\n  width: 158px;\n  height: 158px;\n}\n\n.bgs .yellow-curve {\n  position: absolute;\n  z-index: -2;\n  top: -80px;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXERvY3VtZW50b3NcXGJ1aWxkZXJzXFxtYXJrZXRjbHViLXVpL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO2tCQUFBO0FDRUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7QUNRRjs7QUROQTs7RUFFRSxlQUFBO0FDU0Y7O0FETkE7RUFDRSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0U7OztJQUdFLGFBQUE7RUNVRjs7RURSQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDV0Y7QUFDRjs7QURSQTtFQUNFLFlBQUE7QUNVRjs7QURSQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNXRjs7QURQRTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QUROQTtFQUNFLG9CQUFBO0FDU0Y7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRFBFO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FDUUo7O0FETEU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtBQ09OIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcHJvZHVjdCB7XHJcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA3cHg7ICovXHJcbn1cclxuXHJcbi5wcm9kdWN0cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5wcm9kdWN0cy1jb25maWcgYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucHJvZHVjdHMtY29uZmlnIGEgaSB7XHJcbiAgY29sb3I6ICM5MDUzYTE7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ucHJvZHVjdHMtY29uZmlnIC5kcm9wZG93biBhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICBjb2xvcjogIzBkMzYzYztcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5kcm9wZG93bi1sb2NhbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZHJvcGRvd24tbG9jYWwgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWxvY2FsIC5kcm9wZG93bi1tZW51IHtcclxuICB3aWR0aDogNTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWxvY2FsLW1vYmlsZSAuZHJvcGRvd24tbWVudSB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbi5kcm9wZG93bi1sb2NhbCAuZHJvcGRvd24tbWVudSBoMixcclxuLmRyb3Bkb3duLWxvY2FsLW1vYmlsZSAuZHJvcGRvd24tbWVudSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbG9jYWwtbW9iaWxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maWx0ZXJzLFxyXG4gIC5icmVhZGNydW1iLFxyXG4gIC5wcm9kdWN0cy1jb25maWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnByb2R1Y3RzLWxpc3Qge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluay1wdXJwbGUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY2VwIHtcclxuICByaWdodDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNrZWxldG9uIHtcclxuICAuY29sLTQge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbmRlZCB7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZ3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL3Byb2QtYmctcmlnaHQuc3ZnXCIpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTYycHg7XHJcbiAgICByaWdodDogOTBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgIHdpZHRoOiAxNThweDtcclxuICAgIGhlaWdodDogMTU4cHg7XHJcbiAgfVxyXG5cclxuICAueWVsbG93LWN1cnZlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgdG9wOiAtODBweDtcclxuICAgICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuIiwiYXBwLXByb2R1Y3Qge1xuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA3cHg7ICovXG59XG5cbi5wcm9kdWN0cy1jb25maWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucHJvZHVjdHMtY29uZmlnIGEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZHVjdHMtY29uZmlnIGEgaSB7XG4gIGNvbG9yOiAjOTA1M2ExO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wcm9kdWN0cy1jb25maWcgLmRyb3Bkb3duIGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgY29sb3I6ICMwZDM2M2M7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5kcm9wZG93bi1sb2NhbCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5kcm9wZG93bi1sb2NhbCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb3Bkb3duLWxvY2FsIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDU1MHB4O1xufVxuXG4uZHJvcGRvd24tbG9jYWwtbW9iaWxlIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4uZHJvcGRvd24tbG9jYWwgLmRyb3Bkb3duLW1lbnUgaDIsXG4uZHJvcGRvd24tbG9jYWwtbW9iaWxlIC5kcm9wZG93bi1tZW51IGgyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZHJvcGRvd24tbG9jYWwtbW9iaWxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWx0ZXJzLFxuLmJyZWFkY3J1bWIsXG4ucHJvZHVjdHMtY29uZmlnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnByb2R1Y3RzLWxpc3Qge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuLmxpbmstcHVycGxlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2VwIHtcbiAgcmlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG59XG5cbi5sb2FkaW5nLXNrZWxldG9uIC5jb2wtNCB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuZGVkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZ3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9wcm9kLWJnLXJpZ2h0LnN2Z1wiKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNjJweDtcbiAgcmlnaHQ6IDkwcHg7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTU4cHg7XG4gIGhlaWdodDogMTU4cHg7XG59XG4uYmdzIC55ZWxsb3ctY3VydmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0yO1xuICB0b3A6IC04MHB4O1xuICBsZWZ0OiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/products/products.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/pages/products/products.component.ts ***!
          \******************************************************/
        /*! exports provided: ProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () { return ProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/products/products.service */ "./src/app/shared/services/products/products.service.ts");
            /* harmony import */ var src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/animations */ "./src/app/shared/helpers/animations.ts");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/ui.helper */ "./src/app/shared/helpers/ui.helper.ts");
            var ProductsComponent = /** @class */ (function () {
                function ProductsComponent(productsService) {
                    this.productsService = productsService;
                    this.collection = [];
                    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"];
                    this.faTh = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTh"];
                    this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"];
                    this.loadingProducts = false;
                    for (var i = 1; i <= 50; i++) {
                        this.collection.push(i);
                    }
                }
                ProductsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loadingProducts = true;
                    Object(src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_5__["wait"])(500)
                        .then(function () {
                        _this.showEffects = true;
                    });
                    this.getProducts()
                        .then(function (products) {
                    })
                        .catch(function (error) {
                    });
                    Object(src_app_shared_helpers_ui_helper__WEBPACK_IMPORTED_MODULE_5__["wait"])(3000)
                        .then(function () {
                        _this.loadingProducts = false;
                    });
                };
                ProductsComponent.prototype.generateArray = function (count) {
                    var indexes = [];
                    for (var i = 0; i < count; i++) {
                        indexes.push(i);
                    }
                    return indexes;
                };
                ProductsComponent.prototype.getProducts = function (filters) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.productsService.getProducts(filters)
                            .subscribe(function (response) {
                            resolve(response);
                        }, function (error) {
                            reject();
                        });
                    });
                };
                return ProductsComponent;
            }());
            ProductsComponent.ctorParameters = function () { return [
                { type: src_app_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
            ]; };
            ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
                    animations: [src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["listStateTrigger"], src_app_shared_helpers_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")).default]
                })
            ], ProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/products/products.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/products/products.module.ts ***!
          \***************************************************/
        /*! exports provided: ProductsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function () { return ProductsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
            /* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/pages/products/components/product-detail/product-detail.component.ts");
            /* harmony import */ var _components_product_detail_components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-detail/components/product-tabs/product-tabs.component */ "./src/app/pages/products/components/product-detail/components/product-tabs/product-tabs.component.ts");
            var ProductsModule = /** @class */ (function () {
                function ProductsModule() {
                }
                return ProductsModule;
            }());
            ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"], _components_product_detail_components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_7__["ProductTabsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"]
                    ]
                })
            ], ProductsModule);
            /***/ 
        }),
        /***/ "./src/app/shared/services/products/products-interface.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/services/products/products-interface.ts ***!
          \****************************************************************/
        /*! exports provided: ProductsInterface */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsInterface", function () { return ProductsInterface; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ProductsInterface = /** @class */ (function () {
                function ProductsInterface() {
                }
                return ProductsInterface;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/services/products/products.service.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/services/products/products.service.ts ***!
          \**************************************************************/
        /*! exports provided: ProductsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function () { return ProductsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _products_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-interface */ "./src/app/shared/services/products/products-interface.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ProductsService = /** @class */ (function (_super) {
                __extends(ProductsService, _super);
                function ProductsService() {
                    return _super.call(this) || this;
                }
                ProductsService.prototype.getProducts = function (filters) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('');
                };
                ProductsService.prototype.createProduct = function () { };
                ProductsService.prototype.updateProduct = function () { };
                return ProductsService;
            }(_products_interface__WEBPACK_IMPORTED_MODULE_2__["ProductsInterface"]));
            ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProductsService);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map
//# sourceMappingURL=pages-products-products-module-es5.js.map
//# sourceMappingURL=pages-products-products-module-es5.js.map
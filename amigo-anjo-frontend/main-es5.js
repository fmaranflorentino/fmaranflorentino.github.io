(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./my-friends/my-friends.module": [
		"./src/app/my-friends/my-friends.module.ts",
		"my-friends-my-friends-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav\r\n  [ngClass]=\"{ bigger: directionShow }\"\r\n  [directionShow]=\"gestureBehavior\"\r\n  (swipeup)=\"swipe($event.type)\"\r\n  (swipedown)=\"swipe($event.type)\"\r\n></app-sidenav>\r\n\r\n<div class=\"app-container\" [ngClass]=\"{ opened: sidenavState }\">\r\n  <app-header></app-header>\r\n\r\n  <div class=\"page-content\" [@routeAnimations]=\"o && o.activatedRouteData \r\n  && o.activatedRouteData['animation']\">\r\n<router-outlet #o=\"outlet\"></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <button\n    (click)=\"toggleSideNav()\"\n    mat-icon-button\n    color=\"primary\"\n    aria-label=\"Retrair menu\"\n    title=\"Retrair menu\"\n  >\n    <mat-icon>menu</mat-icon>\n  </button>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidenav/sidenav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidenav/sidenav.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container desk\" [ngClass]=\"{ opened: sidenavState }\">\n  <div class=\"logo\"></div>\n\n  <div class=\"menu-items-content\">\n    <ul>\n      <li *ngFor=\"let item of menuItems; let i = index; trackBy: trackByMenu\">\n        <a href=\"javascript:void(0)\" [routerLink]=\"item.routerlink\">\n          <mat-icon>\n            {{\n              item.id === 1\n                ? \"home\"\n                : item.id === 2\n                ? \"aspect_ratio\"\n                : item.id === 3\n                ? \"search\"\n                : \"accessibility_new\"\n            }}\n          </mat-icon>\n          <span @slideState *ngIf=\"sidenavState\">\n            {{ item.label }}\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container mob\" [ngClass]=\"{ bigger: directionShow }\"></div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { animation: 'DashPage' }
    },
    {
        path: 'user',
        loadChildren: './my-friends/my-friends.module#MyFriendsModule',
        data: { animation: 'MyFriendsPage' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/sidenav/sidenav.service */ "./src/app/shared/services/sidenav/sidenav.service.ts");
/* harmony import */ var _shared_animations_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/animations/general */ "./src/app/shared/animations/general.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(sidenav$) {
        this.sidenav$ = sidenav$;
        this.swipeAction = { UP: 'swipeup', DOWN: 'swipedown' };
        this.gestureBehavior = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSidenavState()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getSidenavState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sidenav$
                                .getState()
                                .subscribe(function (resp) {
                                _this.sidenavState = resp;
                                resolve();
                            })];
                    case 1:
                        _a.getState = _b.sent(),
                            function (error) { reject(error); };
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.swipeAction.UP; }
        if (action === this.swipeAction.UP) {
            this.gestureBehavior = true;
        }
        else if (action === this.swipeAction.DOWN) {
            this.gestureBehavior = false;
        }
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [
                _shared_animations_general__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);









var AppModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppModule, _super);
    function AppModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_8__["DIRECTION_ALL"] }
        };
        return _this;
    }
    AppModule_1 = AppModule;
    var AppModule_1;
    AppModule = AppModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot()
            ],
            providers: [
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                    useClass: AppModule_1
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));



/***/ }),

/***/ "./src/app/shared/animations/general.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/animations/general.ts ***!
  \**********************************************/
/*! exports provided: itemStateTrigger, slideStateTrigger, listStateTrigger, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemStateTrigger", function() { return itemStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideStateTrigger", function() { return slideStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listStateTrigger", function() { return listStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var itemStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('itemState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                display: 'block',
                opacity: 1,
                transform: 'translateX(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-15%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateX(100%)'
            })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('slidUp => slidDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'block',
            transform: 'translateY(-100%)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('slidDown => slidUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(-100%)'
        }))
    ])
]);
var slideStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(100%)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms .3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
            opacity: 1
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(100%)'
        }))
    ])
]);
var listStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(300, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        transform: 'translateX(15%)',
                        offset: 0.4
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    })
                ]))
            ])
        ], { optional: true })
    ])
]);
// export const slideInAnimation =
// trigger('routeAnimations', [
//   transition('DashPage <=> MyFriendsPage', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//        opacity: 0
//       })
//     ], { optional: true }),
//     query(':enter', [
//       style({ opacity: 0 })
//     ], { optional: true }),
//     query(':leave', animateChild(),{ optional: true }),
//     group([
//       query(':leave', [
//         animate('300ms ease-out', style({ opacity: '0'}))
//       ],{ optional: true }),
//       query(':enter', [
//         animate('300ms ease-out', style({ opacity: 1}))
//       ],{ optional: true })
//     ]),
//     query(':enter', animateChild(),{ optional: true }),
//   ])
// ]);
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('MyFriendsPage => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('DashPage => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Contact', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sidenav/sidenav.service */ "./src/app/shared/services/sidenav/sidenav.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidenav$) {
        this.sidenav$ = sidenav$;
    }
    HeaderComponent.prototype.toggleSideNav = function () {
        this.sidenav$.toggleSideNav();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/components/header/index.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: SidenavComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidenav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav */ "./src/app/shared/components/sidenav/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return _sidenav__WEBPACK_IMPORTED_MODULE_0__["SidenavComponent"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/app/shared/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

// start:ng42.barrel


// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/components/sidenav/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/components/sidenav/index.ts ***!
  \****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return _sidenav_component__WEBPACK_IMPORTED_MODULE_0__["SidenavComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sidenav/sidenav.service */ "./src/app/shared/services/sidenav/sidenav.service.ts");
/* harmony import */ var _animations_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/general */ "./src/app/shared/animations/general.ts");




var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(sidenav$) {
        this.sidenav$ = sidenav$;
        this.sidenavState = false;
        this.menuItems = [
            { id: 1, label: 'Home', routerlink: '/' },
            { id: 2, label: 'Meus Anúncios', routerlink: 'user' },
            { id: 3, label: 'Procurar', routerLink: '' },
            { id: 4, label: 'FAQ', routerLink: '' }
        ];
    }
    SidenavComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSidenavState()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SidenavComponent.prototype.getSidenavState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sidenav$.getState()
                                .subscribe(function (resp) {
                                _this.sidenavState = resp;
                                resolve();
                            })];
                    case 1:
                        _a.getState = _b.sent(),
                            function (error) { reject(error); };
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SidenavComponent.prototype.trackByMenu = function (index, item) {
        return item.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "directionShow", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidenav/sidenav.component.html"),
            animations: [_animations_general__WEBPACK_IMPORTED_MODULE_3__["slideStateTrigger"]],
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/shared/components/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/api/api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/api/api.service.ts ***!
  \****************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var _a = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, protocol = _a.protocol, domain = _a.domain;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.basePath = "" + protocol + domain;
    }
    ApiService.prototype.get = function (url, option) {
        var request = this.http
            .get("" + this.basePath + url, option);
        return request;
    };
    ApiService.prototype.post = function (url, body, options) {
        var request = this.http
            .post("" + this.basePath + url, body, options);
        return request;
    };
    ApiService.prototype.put = function (url, body, options) {
        var request = this.http
            .put("" + this.basePath + url, body, options);
        return request;
    };
    ApiService.prototype.delete = function (url, options) {
        var request = this.http
            .delete("" + this.basePath + url, options);
        return request;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/api/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/services/api/index.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/services/dom/dom.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/dom/dom.service.ts ***!
  \****************************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component) {
        var componentRef = this.createComponent(component);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        return componentRef;
    };
    DomService.prototype.createComponent = function (component) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        return componentRef;
    };
    DomService.prototype.destroyComponent = function (componentRef) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    };
    DomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/shared/services/dom/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/services/dom/index.ts ***!
  \**********************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.service */ "./src/app/shared/services/dom/dom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return _dom_service__WEBPACK_IMPORTED_MODULE_0__["DomService"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ApiService, SidenavService, DomService, MiscellaneousService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/app/shared/services/api/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/app/shared/services/dom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["DomService"]; });

/* harmony import */ var _sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav */ "./src/app/shared/services/sidenav/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return _sidenav__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]; });

/* harmony import */ var _miscellaneous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscellaneous */ "./src/app/shared/services/miscellaneous/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function() { return _miscellaneous__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"]; });

// start:ng42.barrel




// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/services/miscellaneous/index.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/miscellaneous/index.ts ***!
  \********************************************************/
/*! exports provided: MiscellaneousService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _miscellaneous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miscellaneous.service */ "./src/app/shared/services/miscellaneous/miscellaneous.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function() { return _miscellaneous_service__WEBPACK_IMPORTED_MODULE_0__["MiscellaneousService"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/services/miscellaneous/miscellaneous.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/miscellaneous/miscellaneous.service.ts ***!
  \************************************************************************/
/*! exports provided: MiscellaneousService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function() { return MiscellaneousService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/app/shared/services/api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var MiscellaneousService = /** @class */ (function () {
    function MiscellaneousService(api$) {
        this.api$ = api$;
    }
    MiscellaneousService.prototype.getMiscellaneousAnnounces = function () {
        // this.api$
        //   .get<any>('');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new Array(10));
    };
    MiscellaneousService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], MiscellaneousService);
    return MiscellaneousService;
}());



/***/ }),

/***/ "./src/app/shared/services/sidenav/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/sidenav/index.ts ***!
  \**************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.service */ "./src/app/shared/services/sidenav/sidenav.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return _sidenav_service__WEBPACK_IMPORTED_MODULE_0__["SidenavService"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/services/sidenav/sidenav.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/sidenav/sidenav.service.ts ***!
  \************************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SidenavService = /** @class */ (function () {
    function SidenavService() {
        this.sideNavState = false;
        this.getSideNavStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.setInitialState(false);
    }
    SidenavService.prototype.setInitialState = function (state) {
        var _this = this;
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSideNavStatus.next(state)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SidenavService.prototype.toggleSideNav = function () {
        this.sideNavState = !this.sideNavState;
        this.getSideNavStatus.next(this.sideNavState);
    };
    SidenavService.prototype.getState = function () {
        return this.getSideNavStatus.asObservable();
    };
    SidenavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["DomService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["SidenavService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["MiscellaneousService"]
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: {
        domain: 'localhost:4200',
        protocol: 'http://'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\flore\OneDrive\Área de Trabalho\projetos\amigo-anjo\front-end\amigo-anjo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
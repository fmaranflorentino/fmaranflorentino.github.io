(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-friends-my-friends-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-friends/components/my-friends/my-friends.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-friends/components/my-friends/my-friends.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-friends works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-friends/components/my-friends/my-friends.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/my-friends/components/my-friends/my-friends.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWZyaWVuZHMvY29tcG9uZW50cy9teS1mcmllbmRzL215LWZyaWVuZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-friends/components/my-friends/my-friends.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/my-friends/components/my-friends/my-friends.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFriendsComponent", function() { return MyFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyFriendsComponent = class MyFriendsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-friends',
        template: __webpack_require__(/*! raw-loader!./my-friends.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-friends/components/my-friends/my-friends.component.html"),
        styles: [__webpack_require__(/*! ./my-friends.component.scss */ "./src/app/my-friends/components/my-friends/my-friends.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyFriendsComponent);



/***/ }),

/***/ "./src/app/my-friends/my-friends-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-friends/my-friends-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyFriendsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFriendsRoutingModule", function() { return MyFriendsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-friends/my-friends.component */ "./src/app/my-friends/components/my-friends/my-friends.component.ts");




const routes = [
    { path: 'my-friends', component: _components_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_3__["MyFriendsComponent"] },
    { path: '', redirectTo: 'my-friends', pathMatch: 'full' }
];
let MyFriendsRoutingModule = class MyFriendsRoutingModule {
};
MyFriendsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MyFriendsRoutingModule);



/***/ }),

/***/ "./src/app/my-friends/my-friends.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-friends/my-friends.module.ts ***!
  \*************************************************/
/*! exports provided: MyFriendsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFriendsModule", function() { return MyFriendsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _my_friends_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-friends-routing.module */ "./src/app/my-friends/my-friends-routing.module.ts");
/* harmony import */ var _components_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-friends/my-friends.component */ "./src/app/my-friends/components/my-friends/my-friends.component.ts");





let MyFriendsModule = class MyFriendsModule {
};
MyFriendsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_4__["MyFriendsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _my_friends_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyFriendsRoutingModule"]
        ]
    })
], MyFriendsModule);



/***/ })

}]);
//# sourceMappingURL=my-friends-my-friends-module-es2015.js.map
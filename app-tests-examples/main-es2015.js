(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users-adm/componets/user-card/user-card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users-adm/componets/user-card/user-card.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <div\r\n      mat-card-avatar\r\n      class=\"example-header-image\"\r\n      [ngStyle]=\"{ 'background-image': 'url(' + userData.imagePath + ')' }\"\r\n    ></div>\r\n    <mat-card-title>\r\n      <input\r\n        type=\"text\"\r\n        #userNameInput\r\n        [value]=\"userData.username\"\r\n        [disabled]=\"!isEditionMode\"\r\n      />\r\n    </mat-card-title>\r\n    <mat-card-subtitle>\r\n      <input\r\n        type=\"text\"\r\n        #userRoleInput\r\n        [value]=\"userData.role\"\r\n        [disabled]=\"!isEditionMode\"\r\n      />\r\n    </mat-card-subtitle>\r\n    <button mat-button *ngIf=\"isEditionMode\" (click)=\"handleEdition(userData)\">\r\n      <mat-icon>check_box</mat-icon>\r\n    </button>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{ userData.lastEdition }}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button (click)=\"enterEdtionMode()\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n    <button mat-button (click)=\"handleDelete(userData)\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users-adm/users-adm.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users-adm/users-adm.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">User Management</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n\r\n  <ng-container *ngIf=\"(usersList$ | async) as usersList\">\r\n    <div class=\"user-list\">\r\n      <div class=\"user-card\" *ngFor=\"let user of usersList; trackBy: trackByUsers\">\r\n        <app-user-card\r\n         [userData]=\"user\"\r\n         (deleteUser)=\"handleDeleterUser($event)\"\r\n         (editedUser)=\"handleEditUser($event)\"></app-user-card>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n\r\n  <div class=\"action-box\"></div>\r\n\r\n  <button\r\n    mat-fab\r\n    color=\"primary\"\r\n    class=\"main-settings\"\r\n    aria-label=\"Settings Buttons\"\r\n  >\r\n    <mat-icon>settings</mat-icon>\r\n  </button>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_adm_users_adm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-adm/users-adm.component */ "./src/app/users-adm/users-adm.component.ts");




const routes = [
    { path: 'main', component: _users_adm_users_adm_component__WEBPACK_IMPORTED_MODULE_3__["UsersAdmComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'testing-hands-on';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _users_adm_users_adm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-adm/users-adm.component */ "./src/app/users-adm/users-adm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _users_adm_componets_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-adm/componets/user-card/user-card.component */ "./src/app/users-adm/componets/user-card/user-card.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _users_adm_users_adm_component__WEBPACK_IMPORTED_MODULE_7__["UsersAdmComponent"],
            _users_adm_componets_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__["UserCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http
            .get('https://node-testing-examples-fmf.herokuapp.com/api/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.payload));
    }
    getUserById(userId) {
        return this.http
            .get(`https://node-testing-examples-fmf.herokuapp.com/api/users/${userId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.payload));
    }
    editUser(user) {
        return this.http
            .put(`https://node-testing-examples-fmf.herokuapp.com/api/users`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.payload));
    }
    deleterUser(userId) {
        return this.http
            .delete(`https://node-testing-examples-fmf.herokuapp.com/api/users/delete/${userId}`);
    }
};
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsersService);



/***/ }),

/***/ "./src/app/users-adm/componets/user-card/user-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/users-adm/componets/user-card/user-card.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  display: block;\n}\ninput[disabled] {\n  background: transparent;\n  border-color: transparent;\n  color: #212020;\n}\nmat-card-title input {\n  letter-spacing: 1.2px;\n}\nmat-card-subtitle input {\n  letter-spacing: 0.7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtYWRtL2NvbXBvbmV0cy91c2VyLWNhcmQvQzpcXFVzZXJzXFxmbG9yZVxcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxwcm9qZXRvc1xcYW5ndWxhci1zdHVkeVxcdGVzdGluZ1xcdGVzdGluZy1leGFtcGxlc1xcdGVzdGluZy1oYW5kcy1vbi9zcmNcXGFwcFxcdXNlcnMtYWRtXFxjb21wb25ldHNcXHVzZXItY2FyZFxcdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy1hZG0vY29tcG9uZXRzL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FESUU7RUFDRSxxQkFBQTtBQ0RKO0FETUU7RUFDRSxxQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMtYWRtL2NvbXBvbmV0cy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIFxyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMjEyMDIwO1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGlucHV0IHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBpbnB1dCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW5wdXRbZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMjEyMDIwO1xufVxuXG5tYXQtY2FyZC10aXRsZSBpbnB1dCB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbn1cblxubWF0LWNhcmQtc3VidGl0bGUgaW5wdXQge1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/users-adm/componets/user-card/user-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/users-adm/componets/user-card/user-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserCardComponent = class UserCardComponent {
    constructor() {
        this.editedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditionMode = false;
    }
    ngOnInit() {
    }
    enterEdtionMode() {
        this.isEditionMode = !this.isEditionMode;
        if (this.isEditionMode) {
            setTimeout(() => {
                this.userNameInput.nativeElement.focus();
            }, 10);
        }
    }
    handleDelete(user) {
        this.deleteUser.emit(user);
    }
    handleEdition(user) {
        this.editedUser.emit(user);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserCardComponent.prototype, "userData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], UserCardComponent.prototype, "editedUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], UserCardComponent.prototype, "deleteUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userNameInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UserCardComponent.prototype, "userNameInput", void 0);
UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-card',
        template: __webpack_require__(/*! raw-loader!./user-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/users-adm/componets/user-card/user-card.component.html"),
        styles: [__webpack_require__(/*! ./user-card.component.scss */ "./src/app/users-adm/componets/user-card/user-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserCardComponent);



/***/ }),

/***/ "./src/app/users-adm/users-adm.component.scss":
/*!****************************************************!*\
  !*** ./src/app/users-adm/users-adm.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  background-color: #1f920b;\n}\n\n.container {\n  width: 100%;\n  display: block;\n}\n\n.container .user-list,\n.container .action-box {\n  display: block;\n  padding: 20px;\n}\n\n.container .user-list {\n  width: 60%;\n}\n\n.container .user-list .user-card {\n  width: 50%;\n  display: inline-block;\n  padding: 20px;\n}\n\n.container .user-list .user-card .example-header-image {\n  background-size: cover;\n}\n\n.container .action-box {\n  width: 40%;\n}\n\n.container .main-settings {\n  position: absolute;\n  bottom: 30px;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtYWRtL0M6XFxVc2Vyc1xcZmxvcmVcXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xccHJvamV0b3NcXGFuZ3VsYXItc3R1ZHlcXHRlc3RpbmdcXHRlc3RpbmctZXhhbXBsZXNcXHRlc3RpbmctaGFuZHMtb24vc3JjXFxhcHBcXHVzZXJzLWFkbVxcdXNlcnMtYWRtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy1hZG0vdXNlcnMtYWRtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFFQSxjQUFBO0FDQUY7O0FERUU7O0VBRUUsY0FBQTtFQUNBLGFBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7QUNESjs7QURHSTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNETjs7QURHTTtFQUNFLHNCQUFBO0FDRFI7O0FETUU7RUFDRSxVQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC91c2Vycy1hZG0vdXNlcnMtYWRtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY5MjBiO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIC51c2VyLWxpc3QsXHJcbiAgLmFjdGlvbi1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItbGlzdCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgIC51c2VyLWNhcmQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYm94IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAubWFpbi1zZXR0aW5ncyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuIiwiLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmOTIwYjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250YWluZXIgLnVzZXItbGlzdCxcbi5jb250YWluZXIgLmFjdGlvbi1ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWluZXIgLnVzZXItbGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC51c2VyLWxpc3QgLnVzZXItY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWluZXIgLnVzZXItbGlzdCAudXNlci1jYXJkIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGFpbmVyIC5hY3Rpb24tYm94IHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jb250YWluZXIgLm1haW4tc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/users-adm/users-adm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users-adm/users-adm.component.ts ***!
  \**************************************************/
/*! exports provided: UsersAdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAdmComponent", function() { return UsersAdmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");



let UsersAdmComponent = class UsersAdmComponent {
    constructor(usersService) {
        this.usersService = usersService;
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.usersList$ = this.usersService.getAllUsers();
    }
    trackByUsers(index, item) {
        return item.id;
    }
    handleDeleterUser(user) {
        console.log('delete user', user);
    }
    handleEditUser(user) {
        console.log('edit user', user);
    }
};
UsersAdmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-adm',
        template: __webpack_require__(/*! raw-loader!./users-adm.component.html */ "./node_modules/raw-loader/index.js!./src/app/users-adm/users-adm.component.html"),
        styles: [__webpack_require__(/*! ./users-adm.component.scss */ "./src/app/users-adm/users-adm.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
], UsersAdmComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\flore\OneDrive\Área de Trabalho\projetos\angular-study\testing\testing-examples\testing-hands-on\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
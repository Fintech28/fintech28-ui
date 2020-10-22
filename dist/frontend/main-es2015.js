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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/deposit/deposit.component */ "./src/app/components/deposit/deposit.component.ts");
/* harmony import */ var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loan-repayment/loan-repayment.component */ "./src/app/components/loan-repayment/loan-repayment.component.ts");









const routes = [
    {
        path: 'home',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'deposit',
        component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__["DepositComponent"]
    },
    {
        path: 'repay-loan/:loanId',
        component: _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_6__["LoanRepaymentComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footernav/footernav.component */ "./src/app/components/footernav/footernav.component.ts");
/* harmony import */ var _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loan-application/loan-application.component */ "./src/app/components/loan-application/loan-application.component.ts");
/* harmony import */ var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loan-repayment/loan-repayment.component */ "./src/app/components/loan-repayment/loan-repayment.component.ts");
/* harmony import */ var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/deposit/deposit.component */ "./src/app/components/deposit/deposit.component.ts");
/* harmony import */ var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/withdraw/withdraw.component */ "./src/app/components/withdraw/withdraw.component.ts");
/* harmony import */ var _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/view-loans/view-loans.component */ "./src/app/components/view-loans/view-loans.component.ts");
/* harmony import */ var _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view-transactions/view-transactions.component */ "./src/app/components/view-transactions/view-transactions.component.ts");
/* harmony import */ var _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin-verifyuser/admin-verifyuser.component */ "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts");
/* harmony import */ var _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin-approveloan/admin-approveloan.component */ "./src/app/components/admin-approveloan/admin-approveloan.component.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"],
        _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"],
        _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"],
        _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"],
        _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"],
        _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"],
        _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"],
        _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"],
        _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"],
                    _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"],
                    _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"],
                    _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"],
                    _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"],
                    _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"],
                    _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"],
                    _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"],
                    _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/admin-approveloan/admin-approveloan.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin-approveloan/admin-approveloan.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminApproveloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminApproveloanComponent", function() { return AdminApproveloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdminApproveloanComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AdminApproveloanComponent.ɵfac = function AdminApproveloanComponent_Factory(t) { return new (t || AdminApproveloanComponent)(); };
AdminApproveloanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminApproveloanComponent, selectors: [["app-admin-approveloan"]], decls: 2, vars: 0, template: function AdminApproveloanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-approveloan works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tYXBwcm92ZWxvYW4vYWRtaW4tYXBwcm92ZWxvYW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminApproveloanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-approveloan',
                templateUrl: './admin-approveloan.component.html',
                styleUrls: ['./admin-approveloan.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-verifyuser/admin-verifyuser.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminVerifyuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminVerifyuserComponent", function() { return AdminVerifyuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdminVerifyuserComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AdminVerifyuserComponent.ɵfac = function AdminVerifyuserComponent_Factory(t) { return new (t || AdminVerifyuserComponent)(); };
AdminVerifyuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminVerifyuserComponent, selectors: [["app-admin-verifyuser"]], decls: 2, vars: 0, template: function AdminVerifyuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-verifyuser works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tdmVyaWZ5dXNlci9hZG1pbi12ZXJpZnl1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminVerifyuserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-verifyuser',
                templateUrl: './admin-verifyuser.component.html',
                styleUrls: ['./admin-verifyuser.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/deposit/deposit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.ts ***!
  \*********************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");



class DepositComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DepositComponent.ɵfac = function DepositComponent_Factory(t) { return new (t || DepositComponent)(); };
DepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepositComponent, selectors: [["app-deposit"]], decls: 1, vars: 0, template: function DepositComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deposit',
                templateUrl: './deposit.component.html',
                styleUrls: ['./deposit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footernav/footernav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/footernav/footernav.component.ts ***!
  \*************************************************************/
/*! exports provided: FooternavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooternavComponent", function() { return FooternavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooternavComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooternavComponent.ɵfac = function FooternavComponent_Factory(t) { return new (t || FooternavComponent)(); };
FooternavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooternavComponent, selectors: [["app-footernav"]], decls: 2, vars: 0, template: function FooternavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footernav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVybmF2L2Zvb3Rlcm5hdi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooternavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footernav',
                templateUrl: './footernav.component.html',
                styleUrls: ['./footernav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function (a1) { return ["/repay-loan/", a1]; };
class HeaderComponent {
    constructor() {
        this.loanId = 2;
        this.loggedUser = 'Claud Watari';
        this.loggedUserPhone = '0700000000';
        this.loggedUserEmail = 'claud@mail.com';
        this.displayUserMenu = () => { };
        this.displayUserOptions = () => { };
    }
    ngOnInit() {
        this.loggedUser = 'Claud Kamau Watari';
        this.loanId = 3;
        this.loggedUserPhone = '+254705724562';
        this.loggedUserEmail = 'claudwatari95@gmail.com';
        this.displayUserMenu = () => {
            const toToggle = document.querySelector('.user-actionable');
            const toggleButton = document.querySelector('.usrnm');
            const displayOurMenu = () => {
                toToggle.classList.contains('d-none') ?
                    toToggle.classList.remove('d-none') :
                    toToggle.classList.add('d-none');
            };
            toggleButton.addEventListener('click', displayOurMenu);
        };
        this.displayUserOptions = () => {
            const toToggle = document.querySelector('.header-container');
            const toggleButton = document.querySelector('#togglebtn');
            const displayOurOptions = () => {
                toggleButton.classList.contains('h') ?
                    (toToggle.style.display = 'flex',
                        toggleButton.classList.remove('h')) :
                    (toToggle.style.display = 'none',
                        toggleButton.classList.add('h'));
            };
            toggleButton.addEventListener('click', displayOurOptions);
        };
        this.displayUserMenu();
        this.displayUserOptions();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 48, vars: 6, consts: [["id", "togglebtn", 1, "h"], [1, "fa", "fa-bars", "fa-2x"], [1, "header-container"], [1, "header-content"], ["id", "user_section"], [1, "usrnm"], [1, "fa", "fa-user"], [1, "user_"], [1, "user-actionable", "d-none"], [1, "ltltxt"], [1, "fa", "fa-cog", "fa-cog-2x"], [1, "user_act"], [1, "fa", "fa-sign-out", "fa-sign-out-2x"], [1, "ltltxt", "grnltlttxt"], [1, "fa", "fa-check", "fa-check-2x"], [1, "acc_mthd"], ["routerLink", "/deposit"], ["routerLink", "/withdraw"], ["routerLink", "/get-loan"], [3, "routerLink"], ["routerLink", "/transactions"], ["routerLink", "/lons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u2002Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u2002Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u2002Verified Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Deposit to my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Withdraw from my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Apply for loan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Repay current loan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "View transactions log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View loan history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2002", ctx.loggedUser, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.loanId));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".d-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.d-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n#togglebtn[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    margin: 13px 17px;\r\n    color: rgb(102, 102, 102);\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n.header-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 0 10px;\r\n    height: 100vh;\r\n    width: 25%;\r\n    min-width: 250px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-left: 1px solid rgba(102, 102, 102, 0.25);\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-bottom: 2rem;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.acc_mthd[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n#user_section[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 4rem 2rem;\r\n    text-align: center;\r\n}\r\n.usrnm[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    border-bottom: 1px solid rgb(102, 102, 102);\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n.user-actionable[_ngcontent-%COMP%] {\r\n    border: 1px solid rgba(102, 102, 102, 0.377);\r\n    border-radius: 7px;\r\n    background: rgb(255, 255, 255);\r\n    padding: 9px 7px;\r\n    margin-top: 9px;\r\n    width:  180px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 2rem 0;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-top: 7px;\r\n    margin-bottom: 3px;\r\n    background :rgba(102, 102, 102, 0.048);\r\n    border: 1px solid rgba(102, 102, 102, 0.048);\r\n    color: rgba(102, 102, 102, 0.720);\r\n    padding: 3px 13px;\r\n    cursor: pointer;\r\n    text-align: left;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background :rgba(102, 102, 102, 0.25);\r\n    border: 1px solid rgba(102, 102, 102, 0.25);\r\n    color: rgb(150, 136, 16);\r\n}\r\n.ltltxt[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    color: rgb(102, 102, 102);\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #togglebtn[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .header-container[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixNQUFNO0lBQ04sY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyw0Q0FBNEM7SUFDNUMsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsMkNBQTJDO0lBQzNDLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBR0Esb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jdG9nZ2xlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMTNweCAxN3B4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4yNSk7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyLWNvbnRlbnQgbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5oZWFkZXItY29udGVudCBuYXYgdWwgbGkuYWNjX210aGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4jdXNlcl9zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiA0cmVtIDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnVzcm5tIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IG5hdiB1bCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaGVhZGVyLWNvbnRlbnQgbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnVzZXItYWN0aW9uYWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMzc3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDlweCA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICB3aWR0aDogIDE4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxufVxyXG4udXNlci1hY3Rpb25hYmxlIGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGJhY2tncm91bmQgOnJnYmEoMTAyLCAxMDIsIDEwMiwgMC4wNDgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjA0OCk7XHJcbiAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjcyMCk7XHJcbiAgICBwYWRkaW5nOiAzcHggMTNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnVzZXItYWN0aW9uYWJsZSBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMjUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjI1KTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxMzYsIDE2KTtcclxufVxyXG4ubHRsdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG4uZ3JubHRsdHR4dCB7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbn1cclxuXHJcblxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjdG9nZ2xlYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class HomepageComponent {
    constructor() {
        this.isThisYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 118, vars: 1, consts: [["id", "intro", 1, "top-container"], ["src", "assets/images/f28-logo.png", "alt", "logo-img", 1, "logo-img"], [1, "top-nav", 2, "flex-grow", "7"], ["href", "/home#intro"], ["href", "/home#about"], ["href", "/home#services"], ["href", "/home#contacts"], [1, "top-nav"], [1, "extnav"], ["routerLink", "/signup"], ["routerLink", "/login", 1, "brdrd"], [1, "main-container"], [1, "data-description"], [1, "spanned_"], [1, "_spanned_"], ["src", "assets/images/mobile-money-transfer.png", "alt", "mobile-money", 1, "content-img"], ["id", "to-about"], [1, "h-c"], ["id", "about", 1, "data-description", "dd_"], ["src", "assets/images/gads-logo.png", "alt", "gads", 1, "content-img", "c-img"], ["id", "services", 1, "data-description", "dd_"], ["src", "assets/images/e-money.jpg", "alt", "gads", 1, "content-img", "c-img"], ["id", "contacts", 1, "data-description", "dd_"], [1, "form-section"], ["action", "", "method", "post"], [1, "input-content"], ["for", "email"], [1, "d-req"], ["type", "email", "name", "email", "id", "email", 1, "inputfield"], ["for", "name"], ["type", "text", "name", "name", "id", "name", 1, "inputfield"], ["for", "comment"], ["name", "comment", "id", "comment"], ["type", "submit", 1, "btn_p"], [1, "social"], ["href", "https://github.com/claudwatari95", "target", "_blank"], [1, "fa", "fa-github", "fa-2x"], ["href", "https://linkedin.com/in/watari-claud-kamau", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-2x"], ["href", "https://facebook.com/in/claudkamau.watari", "target", "_blank"], [1, "fa", "fa-facebook", "fa-2x"], ["href", "https://instagram.com/in/claudwatari", "target", "_blank"], [1, "fa", "fa-instagram", "fa-2x"], [1, "copyright_"], [1, "date-content"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Seamless, Reliable Financial Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fintech28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " was created as a product in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "GADS2020 community project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Our aim is to help users access money transfer options, as well as instant loans. We ensure the best delivery, so you can always count on us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Our purpose is to provide you with a platform to manage how your cash flows without the hassle of tracking. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " With our wholesome logging system, keep automated track of all your transactions and loan requests and payments It is as simple as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "creating an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " and have access to our intuitive navigation. Every step is a sure step with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fintech28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Deposit & Withdraw money from the convenience of your phone or laptop, whenever, wherever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Short on cash? Apply for an instant loan of up to Ksh. 100,000, and get approved within 3 hours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " We offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " that enable you to easily save and withdraw money to and from your account. We provide a platform to enable cashless transactions. This also includes loan applications that are credited to your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Fintech28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " account, just like your normal deposit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Also enjoy our friendly loan repayment options. You don't have to worry that you have a pending loan - we understand financial struggles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Have any more questions? Reach out to us via the form below, or follow our social media. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Your message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["#intro[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    width: 100vw;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n}\r\n.logo-img[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    max-width: 450px;\r\n    min-width: 78px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding-left: 11rem;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    width: calc(100% / 4.5);\r\n    min-width: 107px;\r\n    margin-bottom: 10px;\r\n    margin-right: 7px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.brdrd[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n    background :rgb(150, 136, 16);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.brdrd[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(102, 102, 102);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 83%;\r\n    margin: 5rem auto;\r\n}\r\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    width: 60%;\r\n    min-width: 250px;\r\n}\r\n.content-img[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    max-width: 650px;\r\n    min-width: 230px;\r\n    float: right;\r\n}\r\n.c-img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-top: 4rem;\r\n}\r\n.data-description[_ngcontent-%COMP%] {\r\n    margin-top: 6rem;\r\n}\r\n.spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n    font-weight: 800;\r\n}\r\n._spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 103, 16);\r\n    font-weight: 800;\r\n}\r\n#to-about[_ngcontent-%COMP%], .btn_p[_ngcontent-%COMP%] {\r\n    padding: 1rem 1.7rem;\r\n    background-color: rgb(150, 136, 16);\r\n    color :rgb(238, 238, 238);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    margin-top: 7rem;\r\n    cursor: pointer;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(103, 150, 16);\r\n}\r\n#to-about[_ngcontent-%COMP%]   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 1.3rem;\r\n    transition: 0.5s all;\r\n}\r\n#to-about[_ngcontent-%COMP%]:hover   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 2.3rem\r\n}\r\n.dd_[_ngcontent-%COMP%] {\r\n    padding-top: 4rem;\r\n}\r\n.form-section[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    padding: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%], .input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.1rem;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 10px;\r\n    width: 43%;\r\n    min-width: 200px;\r\n    color: rgb(102, 102, 102);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n    margin-top: 11px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 50%;\r\n    min-width: 200px;\r\n    min-height: 130px;\r\n}\r\n.d-req[_ngcontent-%COMP%] {\r\n    color: rgb(255, 0, 0);\r\n}\r\n.social[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    margin-bottom: -5rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 3rem;\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n}\r\n\r\n@media screen and (max-width: 1155px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 7rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 5);\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 56%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\r\n@media screen and (max-width: 1015px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 5rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 7);\r\n    }\r\n}\r\n@media screen and (max-width: 950px) {\r\n    \r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.extnav[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 2rem;\r\n    }\r\n    .data-description[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .dd_[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content-img[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        float: none;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n}\r\n@media screen and (max-width: 400px) {.content-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n    .form-section[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 85%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 96%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLDBEQUEwRDtJQUMxRCxrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjtBQUVBO0lBQ0k7O09BRUc7SUFDSDtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0Esc0NBQXNDO0lBQ2xDLFdBQVc7QUFDZjtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbnRybyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA3OHB4O1xyXG59XHJcbi50b3AtbmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXJlbTtcclxufVxyXG4udG9wLW5hdiB1bCBsaSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQuNSk7XHJcbiAgICBtaW4td2lkdGg6IDEwN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi50b3AtbmF2IHVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5icmRyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZCA6cmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbi5icmRyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbn1cclxuLm1haW4tY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG59XHJcbi5jb250ZW50LWltZyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIG1pbi13aWR0aDogMjMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmMtaW1nIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uZGF0YS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcbi5zcGFubmVkXyB7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5fc3Bhbm5lZF8ge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDEwMywgMTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4jdG8tYWJvdXQsIC5idG5fcCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuN3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3IgOnJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bl9wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmJ0bl9wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE1MCwgMTYpO1xyXG59XHJcbiN0by1hYm91dCAuaC1jIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjNyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG4jdG8tYWJvdXQ6aG92ZXIgLmgtYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi4zcmVtXHJcbn1cclxuLmRkXyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxufVxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50LCAuaW5wdXQtY29udGVudCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5wdXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxufVxyXG4uaW5wdXRmaWVsZDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxufVxyXG4uZC1yZXEge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG59XHJcbi5zb2NpYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNvY2lhbCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1lZGlhIGNzcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1NXB4KSB7XHJcbiAgICAudG9wLW5hdiB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcclxuICAgIH1cclxuICAgICN0by1hYm91dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIH1cclxuICAgIC5pbnB1dGZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xyXG4gICAgLnRvcC1uYXYgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAvKiAudG9wLW5hdiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfSAqL1xyXG4gICAgLnRvcC1uYXYgdWwgbGkuZXh0bmF2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgI3RvLWFib3V0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmRhdGEtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuZGRfIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRmaWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7LmNvbnRlbnQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgICAuZm9ybS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5pbnB1dGZpZWxkIHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/loan-application/loan-application.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/loan-application/loan-application.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoanApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationComponent", function() { return LoanApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoanApplicationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoanApplicationComponent.ɵfac = function LoanApplicationComponent_Factory(t) { return new (t || LoanApplicationComponent)(); };
LoanApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanApplicationComponent, selectors: [["app-loan-application"]], decls: 2, vars: 0, template: function LoanApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-application works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hbi1hcHBsaWNhdGlvbi9sb2FuLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-application',
                templateUrl: './loan-application.component.html',
                styleUrls: ['./loan-application.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/loan-repayment/loan-repayment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/loan-repayment/loan-repayment.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoanRepaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanRepaymentComponent", function() { return LoanRepaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoanRepaymentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoanRepaymentComponent.ɵfac = function LoanRepaymentComponent_Factory(t) { return new (t || LoanRepaymentComponent)(); };
LoanRepaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanRepaymentComponent, selectors: [["app-loan-repayment"]], decls: 2, vars: 0, template: function LoanRepaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-repayment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hbi1yZXBheW1lbnQvbG9hbi1yZXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanRepaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-repayment',
                templateUrl: './loan-repayment.component.html',
                styleUrls: ['./loan-repayment.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(loginService, Route, router) {
        this.loginService = loginService;
        this.Route = Route;
        this.router = router;
        this.userModel = {
            email: '',
            password: ''
        };
        this.isThisYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
    createUser() {
        const checkerbtn = document.querySelector('.btn_p');
        const alert_ = document.querySelector('#alert_');
        checkerbtn.textContent = 'Checking. Please wait...';
        this.loginService.loginUser(this.userModel).subscribe((res) => {
            this.someData = res;
            if (res !== undefined && typeof res === 'object') {
                localStorage.setItem('f28authkey', this.someData.data.token);
                checkerbtn.textContent = 'Redirecting...';
                console.log(this.someData);
            }
            else {
                checkerbtn.textContent = 'Encountered an error!';
                const errMsg = localStorage.getItem('f28err');
                alert_.textContent = errMsg;
                alert_.style.display = 'block';
                const revertBtnText = () => {
                    checkerbtn.textContent = 'Create my account';
                    alert_.style.display = 'none';
                    localStorage.removeItem('f28err');
                };
                setTimeout(revertBtnText, 3000);
            }
        });
    }
    ;
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { userModel: "userModel" }, decls: 34, vars: 3, consts: [["id", "alert_"], [1, "umbrella-container"], [1, "logo-content"], ["src", "assets/images/f28-logo.png", "alt", "logo-image"], [1, "umbrella"], [1, "top-nav"], ["routerLink", "/home", 1, "a_cov"], ["routerLink", "/signup", 1, "a_cov"], [1, "form-container"], [1, "form-content"], ["action", "", 1, "form_"], [1, "input-content"], ["for", "email"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn_p"], [1, "copyright_"], [1, "date-content"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go back to main page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Don't have an account?\u2002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click here to create one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 2rem;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media screen and (max-width: 1150px) {\r\n    .form-container[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUF5RTtJQUN6RSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0ZBQWdGO0FBQ3BGO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QywwREFBMEQ7SUFDMUQsa0VBQWtFO0FBQ3RFO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0Esa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVtYnJlbGxhLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi51bWJyZWxsYS1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLW1vbmV5LXRyYW5zZmVyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcbi5sb2dvLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiA3cmVtIDEwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG4ubG9nby1jb250ZW50IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udG9wLW5hdiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi50b3AtbmF2IHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxMDIsMTAyLCAxMDIpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcbi5hX2NvdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIG1hcmdpbjogOXJlbSBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1MCwgMTM2LCAxNiksIHJnYig4NywgMTUwLCAxNikpO1xyXG59XHJcbi5pbnB1dC1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xyXG59XHJcbmxhYmVsLCAuaW5wdXRmaWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uaW5wdXRmaWVsZDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYnRuX3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1laWRhIGNzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudG9wLW5hdiB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAuYV9jb3Yge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250ZW50IHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcbn1cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { userModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SignupComponent {
    constructor(signUpService, Route, router) {
        this.signUpService = signUpService;
        this.Route = Route;
        this.router = router;
        this.isThisYear = new Date().getFullYear();
        this.userModel = {
            name: '',
            email: '',
            phone: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    createUser() {
        const checkerbtn = document.querySelector('.btn_p');
        const alert_ = document.querySelector('#alert_');
        checkerbtn.textContent = 'Checking. Please wait...';
        this.signUpService.createUser(this.userModel).subscribe((res) => {
            this.someData = res;
            if (res !== undefined && typeof res === 'object') {
                localStorage.setItem('f28authkey', this.someData.data.token);
                checkerbtn.textContent = 'Redirecting...';
                console.log(this.someData);
            }
            else {
                checkerbtn.textContent = 'Encountered an error!';
                const errMsg = localStorage.getItem('f28err');
                alert_.textContent = errMsg;
                alert_.style.display = 'block';
                const revertBtnText = () => {
                    checkerbtn.textContent = 'Create my account';
                    alert_.style.display = 'none';
                    localStorage.removeItem('f28err');
                };
                setTimeout(revertBtnText, 3000);
            }
        });
    }
    ;
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], inputs: { userModel: "userModel" }, decls: 43, vars: 5, consts: [["id", "alert_"], [1, "umbrella-container"], [1, "logo-content"], ["src", "assets/images/f28-logo.png", "alt", "logo-image"], [1, "umbrella"], [1, "top-nav"], ["routerLink", "/home", 1, "a_cov"], ["routerLink", "/login", 1, "a_cov"], [1, "form-container"], [1, "form-content"], [1, "form_"], [1, "input-content"], ["for", "name"], ["type", "text", "name", "name", "id", "name", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "phone", "name", "phone", "id", "phone", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "autocomplete", "off", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn_p", 3, "click"], [1, "copyright_"], [1, "date-content"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid name syntax. No special characters allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go back to main page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Already have an exisitng account?\u2002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click here to log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) { return ctx.userModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_27_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_31_listener($event) { return ctx.userModel.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_35_listener($event) { return ctx.userModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_37_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Create my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 20% 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 2rem auto;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUF5RTtJQUN6RSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnRkFBZ0Y7QUFDcEY7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLDBEQUEwRDtJQUMxRCxrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGVydF8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDIwJSAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJhY2tncm91bmQgOnJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udW1icmVsbGEtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1tb25leS10cmFuc2Zlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ubG9nby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogN3JlbSAxMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuLmxvZ28tY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvcC1uYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4udG9wLW5hdiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTAyLDEwMiwgMTAyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4uYV9jb3Yge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogMjMwcHg7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1MCwgMTM2LCAxNiksIHJnYig4NywgMTUwLCAxNikpO1xyXG59XHJcbi5pbnB1dC1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xyXG59XHJcbmxhYmVsLCAuaW5wdXRmaWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uaW5wdXRmaWVsZDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYnRuX3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1laWRhIGNzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudG9wLW5hdiB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAuYV9jb3Yge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250ZW50IHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _services_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { userModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/view-loans/view-loans.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/view-loans/view-loans.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewLoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLoansComponent", function() { return ViewLoansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ViewLoansComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ViewLoansComponent.ɵfac = function ViewLoansComponent_Factory(t) { return new (t || ViewLoansComponent)(); };
ViewLoansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewLoansComponent, selectors: [["app-view-loans"]], decls: 2, vars: 0, template: function ViewLoansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-loans works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1sb2Fucy92aWV3LWxvYW5zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLoansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-loans',
                templateUrl: './view-loans.component.html',
                styleUrls: ['./view-loans.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/view-transactions/view-transactions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/view-transactions/view-transactions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTransactionsComponent", function() { return ViewTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ViewTransactionsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ViewTransactionsComponent.ɵfac = function ViewTransactionsComponent_Factory(t) { return new (t || ViewTransactionsComponent)(); };
ViewTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewTransactionsComponent, selectors: [["app-view-transactions"]], decls: 2, vars: 0, template: function ViewTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-transactions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy10cmFuc2FjdGlvbnMvdmlldy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-transactions',
                templateUrl: './view-transactions.component.html',
                styleUrls: ['./view-transactions.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.ts ***!
  \***********************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WithdrawComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) { return new (t || WithdrawComponent)(); };
WithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WithdrawComponent, selectors: [["app-withdraw"]], decls: 2, vars: 0, template: function WithdrawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "withdraw works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-withdraw',
                templateUrl: './withdraw.component.html',
                styleUrls: ['./withdraw.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/env/env.ts":
/*!****************************!*\
  !*** ./src/app/env/env.ts ***!
  \****************************/
/*! exports provided: globalUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUri", function() { return globalUri; });
const globalUri = {
    apiGlobal: 'https://fintech28.herokuapp.com/api/v1'
};


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");







const endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
const HttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
class LoginService {
    constructor(http) {
        this.http = http;
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    ;
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error.error);
            console.log(`${operation} failed: ${error.message}`);
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    ;
    loginUser(user) {
        return this.http.post(`${endpoint}/auth/login-user`, JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_user) => {
            _user.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Log in')));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
;


/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");







const endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
const HttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
class SignupService {
    constructor(http) {
        this.http = http;
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    ;
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error.error);
            console.log(`${operation} failed: ${error.message}`);
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    ;
    createUser(user) {
        return this.http.post(`${endpoint}/auth/create-user`, JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_user) => {
            _user.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign up')));
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\basic\Documents\fintech28\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
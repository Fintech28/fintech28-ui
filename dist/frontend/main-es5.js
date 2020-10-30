function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/deposit/deposit.component */
    "./src/app/components/deposit/deposit.component.ts");
    /* harmony import */


    var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/withdraw/withdraw.component */
    "./src/app/components/withdraw/withdraw.component.ts");
    /* harmony import */


    var _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/loan-application/loan-application.component */
    "./src/app/components/loan-application/loan-application.component.ts");
    /* harmony import */


    var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/loan-repayment/loan-repayment.component */
    "./src/app/components/loan-repayment/loan-repayment.component.ts");
    /* harmony import */


    var _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/view-transactions/view-transactions.component */
    "./src/app/components/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/view-loans/view-loans.component */
    "./src/app/components/view-loans/view-loans.component.ts");

    var routes = [{
      path: 'home',
      component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }, {
      path: 'deposit',
      component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"]
    }, {
      path: 'withdraw',
      component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawComponent"]
    }, {
      path: 'apply-for-loan',
      component: _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_8__["LoanApplicationComponent"]
    }, {
      path: 'repay-loan/:loanId',
      component: _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_9__["LoanRepaymentComponent"]
    }, {
      path: 'view-transactions',
      component: _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_10__["ViewTransactionsComponent"]
    }, {
      path: 'view-loans',
      component: _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_11__["ViewLoansComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/footernav/footernav.component */
    "./src/app/components/footernav/footernav.component.ts");
    /* harmony import */


    var _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/loan-application/loan-application.component */
    "./src/app/components/loan-application/loan-application.component.ts");
    /* harmony import */


    var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/loan-repayment/loan-repayment.component */
    "./src/app/components/loan-repayment/loan-repayment.component.ts");
    /* harmony import */


    var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/deposit/deposit.component */
    "./src/app/components/deposit/deposit.component.ts");
    /* harmony import */


    var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/withdraw/withdraw.component */
    "./src/app/components/withdraw/withdraw.component.ts");
    /* harmony import */


    var _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/view-loans/view-loans.component */
    "./src/app/components/view-loans/view-loans.component.ts");
    /* harmony import */


    var _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/view-transactions/view-transactions.component */
    "./src/app/components/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/admin-verifyuser/admin-verifyuser.component */
    "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts");
    /* harmony import */


    var _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/admin-approveloan/admin-approveloan.component */
    "./src/app/components/admin-approveloan/admin-approveloan.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin-approveloan/admin-approveloan.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/admin-approveloan/admin-approveloan.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdminApproveloanComponent */

  /***/
  function srcAppComponentsAdminApproveloanAdminApproveloanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminApproveloanComponent", function () {
      return AdminApproveloanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminApproveloanComponent =
    /*#__PURE__*/
    function () {
      function AdminApproveloanComponent() {
        _classCallCheck(this, AdminApproveloanComponent);
      }

      _createClass(AdminApproveloanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminApproveloanComponent;
    }();

    AdminApproveloanComponent.ɵfac = function AdminApproveloanComponent_Factory(t) {
      return new (t || AdminApproveloanComponent)();
    };

    AdminApproveloanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminApproveloanComponent,
      selectors: [["app-admin-approveloan"]],
      decls: 2,
      vars: 0,
      template: function AdminApproveloanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-approveloan works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tYXBwcm92ZWxvYW4vYWRtaW4tYXBwcm92ZWxvYW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminApproveloanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-approveloan',
          templateUrl: './admin-approveloan.component.html',
          styleUrls: ['./admin-approveloan.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin-verifyuser/admin-verifyuser.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AdminVerifyuserComponent */

  /***/
  function srcAppComponentsAdminVerifyuserAdminVerifyuserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminVerifyuserComponent", function () {
      return AdminVerifyuserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminVerifyuserComponent =
    /*#__PURE__*/
    function () {
      function AdminVerifyuserComponent() {
        _classCallCheck(this, AdminVerifyuserComponent);
      }

      _createClass(AdminVerifyuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminVerifyuserComponent;
    }();

    AdminVerifyuserComponent.ɵfac = function AdminVerifyuserComponent_Factory(t) {
      return new (t || AdminVerifyuserComponent)();
    };

    AdminVerifyuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminVerifyuserComponent,
      selectors: [["app-admin-verifyuser"]],
      decls: 2,
      vars: 0,
      template: function AdminVerifyuserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-verifyuser works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tdmVyaWZ5dXNlci9hZG1pbi12ZXJpZnl1c2VyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminVerifyuserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-verifyuser',
          templateUrl: './admin-verifyuser.component.html',
          styleUrls: ['./admin-verifyuser.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_h3_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Account is still unverified:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wait for an admin to verify your account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_h3_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this.userBalance = res.data.balance;
            _this.userStatus = res.data.status;
            _this.pageTitle = 'Fintech28 | Dashboard';
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 41,
      vars: 4,
      consts: [["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "stat-container"], ["class", "unv-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], ["class", "v-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], [1, "data-container", "d-c"], [1, "menu-container"], [1, "menu-content"], [1, "menu-lister"], ["routerLink", "/deposit"], ["routerLink", "/withdraw"], ["routerLink", "/apply-for-loan"], ["routerLink", "/repay-loan/1"], ["routerLink", "/view-transactions"], ["routerLink", "/view-loans"], [1, "unv-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "v-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "i-spanned"], [1, "fa", "fa-checkmark"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_h3_11_Template, 4, 0, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_h3_12_Template, 5, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Make deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Apply for loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Repay Loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Loan history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx.userBalance, "");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(199, 199, 199);\r\n    border: 1px solid rgb(122, 121, 121);\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGVudC11bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZGF0YS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uc3RhdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZC1jIHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuLmQtYyBoMywgLmQtYyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uZC1jIHAge1xyXG4gICAgY29sb3I6IHJnYig4OSwgMTU2LCAxKTtcclxufVxyXG4udW52LXN0YXQsIC52LXN0YXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi51bnYtc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU2LCAxLCAxKTtcclxufVxyXG4udi1zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4OSwgMTU2LCAxKTtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCB1bCB7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMiwgMTIxLCAxMjEpO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/deposit/deposit.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/deposit/deposit.component.ts ***!
    \*********************************************************/

  /*! exports provided: DepositComponent */

  /***/
  function srcAppComponentsDepositDepositComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositComponent", function () {
      return DepositComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_deposit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/deposit.service */
    "./src/app/services/deposit.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DepositComponent =
    /*#__PURE__*/
    function () {
      function DepositComponent(dashboardService, depositService) {
        _classCallCheck(this, DepositComponent);

        this.dashboardService = dashboardService;
        this.depositService = depositService;
        this.depositRequestBody = {
          amount: ''
        };
      }

      _createClass(DepositComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this2.userBalance = res.data.balance;
            _this2.userStatus = res.data.status;
            _this2.userPhone = res.data.phone;
            _this2.pageTitle = 'Fintech28 | Deposit';
          });
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit() {
          var _this3 = this;

          var errMsg = localStorage.getItem('f28err');
          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';

          var revertBtnText = function revertBtnText() {
            btn.textContent = 'Send Request';
            alertbox.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          this.subscription = this.depositService.makeDeposit(this.depositRequestBody).subscribe(function (res) {
            _this3.someData = res;

            if (_this3.someData === undefined) {
              _this3.someData = "An error occured";
              alertbox.style.display = 'block';
              alertbox.textContent = errMsg;
              setTimeout(revertBtnText, 3000);
            }

            console.log(_this3.someData);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return DepositComponent;
    }();

    DepositComponent.ɵfac = function DepositComponent_Factory(t) {
      return new (t || DepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__["DepositService"]));
    };

    DepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepositComponent,
      selectors: [["app-deposit"]],
      inputs: {
        depositRequestBody: "depositRequestBody"
      },
      decls: 24,
      vars: 3,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "amount", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button_", 3, "click"]],
      template: function DepositComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DepositComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DepositComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.depositRequestBody.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepositComponent_Template_button_click_22_listener() {
            return ctx.makeDeposit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Send Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.depositRequestBody.amount);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 130px 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 70%;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(199, 199, 199);\r\n    border: 1px solid rgb(122, 121, 121);\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRfIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDEzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYmFja2dyb3VuZCA6cmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI21haW4tY29udGVudC11bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuLmRhdGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnN0YXQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmQtYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG59XHJcbi5kLWMgaDMsIC5kLWMgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLmQtYyBwIHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnVudi1zdGF0LCAudi1zdGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4udW52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NiwgMSwgMSk7XHJcbn1cclxuLnYtc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgd2lkdGg6IDY2JTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMSwgMTIxKTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwcHg7XHJcbn1cclxuLmZvcm1fIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiA5cmVtIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIyLCAxMjEsIDEyMSk7XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXRmaWVsZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb3JtXyBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTU2LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4OSwgMTU2LCAxKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1lZGlhIGNzcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgIH1cclxuICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IHVsIHtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgIH1cclxuICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deposit',
          templateUrl: './deposit.component.html',
          styleUrls: ['./deposit.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_deposit_service__WEBPACK_IMPORTED_MODULE_2__["DepositService"]
        }];
      }, {
        depositRequestBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    ;
    /***/
  },

  /***/
  "./src/app/components/footernav/footernav.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/footernav/footernav.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooternavComponent */

  /***/
  function srcAppComponentsFooternavFooternavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooternavComponent", function () {
      return FooternavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooternavComponent =
    /*#__PURE__*/
    function () {
      function FooternavComponent() {
        _classCallCheck(this, FooternavComponent);
      }

      _createClass(FooternavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooternavComponent;
    }();

    FooternavComponent.ɵfac = function FooternavComponent_Factory(t) {
      return new (t || FooternavComponent)();
    };

    FooternavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooternavComponent,
      selectors: [["app-footernav"]],
      decls: 2,
      vars: 0,
      template: function FooternavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footernav works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVybmF2L2Zvb3Rlcm5hdi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooternavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footernav',
          templateUrl: './footernav.component.html',
          styleUrls: ['./footernav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2002Verified Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2002Not verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/repay-loan/", a1];
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(dashboardService) {
        _classCallCheck(this, HeaderComponent);

        this.dashboardService = dashboardService;
        this.loanId = 2;

        this.displayUserMenu = function () {};

        this.displayUserOptions = function () {};
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loanId = 3;

          this.displayUserMenu = function () {
            var toToggle = document.querySelector('.user-actionable');
            var toggleButton = document.querySelector('.usrnm');

            var displayOurMenu = function displayOurMenu() {
              toToggle.classList.contains('d-none') ? toToggle.classList.remove('d-none') : toToggle.classList.add('d-none');
            };

            toggleButton.addEventListener('click', displayOurMenu);
          };

          this.displayUserOptions = function () {
            var toToggle = document.querySelector('.header-container');
            var toggleButton = document.querySelector('#togglebtn');

            var displayOurOptions = function displayOurOptions() {
              toggleButton.classList.contains('h') ? (toToggle.style.display = 'flex', toggleButton.classList.remove('h')) : (toToggle.style.display = 'none', toggleButton.classList.add('h'));
            };

            toggleButton.addEventListener('click', displayOurOptions);
          };

          this.displayUserMenu();
          this.displayUserOptions();
          this.getUserData();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this4 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this4.loggedUserEmail = res.data.email;
            _this4.loggedUserPhone = res.data.phone;
            _this4.loggedUser = res.data.name;
            _this4.loggedUserStatus = res.data.status;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 46,
      vars: 8,
      consts: [["id", "togglebtn", 1, "h"], [1, "fa", "fa-bars", "fa-2x"], [1, "header-container"], [1, "header-content"], ["id", "user_section"], [1, "usrnm"], [1, "fa", "fa-user"], [1, "user_"], [1, "user-actionable", "d-none"], [1, "ltltxt"], [1, "fa", "fa-cog", "fa-cog-2x"], [1, "user_act"], [1, "fa", "fa-sign-out", "fa-sign-out-2x"], ["class", "ltltxt grnltlttxt", 4, "ngIf"], ["class", "ltltxt redltlttxt", 4, "ngIf"], [1, "acc_mthd"], ["routerLink", "/deposit"], ["routerLink", "/withdraw"], ["routerLink", "/get-loan"], [3, "routerLink"], ["routerLink", "/transactions"], ["routerLink", "/lons"], [1, "ltltxt", "grnltlttxt"], [1, "fa", "fa-check", "fa-check-2x"], [1, "ltltxt", "redltlttxt"], [1, "fa", "fa-times", "fa-times-2x"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_span_26_Template, 4, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_span_27_Template, 4, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deposit to my account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Withdraw from my account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Apply for loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Repay current loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View transactions log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "View loan history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2002", ctx.loggedUser, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUserStatus === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUserStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.loanId));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".d-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.d-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n#togglebtn[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    margin: 13px 17px;\r\n    color: rgb(102, 102, 102);\r\n    cursor: pointer;\r\n    display: none;\r\n    z-index: 2;\r\n}\r\n.header-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n    width: 25%;\r\n    min-width: 250px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-left: 1px solid rgba(102, 102, 102, 0.25);\r\n    background-color: rgb(255, 255, 255);\r\n    z-index: 1;\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-bottom: 2rem;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.acc_mthd[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n#user_section[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 4rem 2rem;\r\n    text-align: center;\r\n}\r\n.usrnm[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    border-bottom: 1px solid rgb(102, 102, 102);\r\n    text-transform: capitalize;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n.user-actionable[_ngcontent-%COMP%] {\r\n    border: 1px solid rgba(102, 102, 102, 0.377);\r\n    border-radius: 7px;\r\n    background: rgb(255, 255, 255);\r\n    padding: 9px 7px;\r\n    margin-top: 9px;\r\n    width:  180px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 2rem 0;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-top: 7px;\r\n    margin-bottom: 3px;\r\n    background :rgba(102, 102, 102, 0.048);\r\n    border: 1px solid rgba(102, 102, 102, 0.048);\r\n    color: rgba(102, 102, 102, 0.720);\r\n    padding: 3px 13px;\r\n    cursor: pointer;\r\n    text-align: left;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background :rgba(102, 102, 102, 0.25);\r\n    border: 1px solid rgba(102, 102, 102, 0.25);\r\n    color: rgb(150, 136, 16);\r\n}\r\n.ltltxt[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    color: rgb(102, 102, 102);\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #togglebtn[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .header-container[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztJQUMzQywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyw0Q0FBNEM7SUFDNUMsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsMkNBQTJDO0lBQzNDLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFHQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiN0b2dnbGVidG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAxM3B4IDE3cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXItY29udGVudCBuYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmhlYWRlci1jb250ZW50IG5hdiB1bCBsaS5hY2NfbXRoZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiN1c2VyX3NlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDRyZW0gMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXNybm0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5oZWFkZXItY29udGVudCBuYXYgdWwgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IG5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi51c2VyLWFjdGlvbmFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjM3Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiA5cHggN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgd2lkdGg6ICAxODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuLnVzZXItYWN0aW9uYWJsZSBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMDQ4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4wNDgpO1xyXG4gICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC43MjApO1xyXG4gICAgcGFkZGluZzogM3B4IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi51c2VyLWFjdGlvbmFibGUgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZCA6cmdiYSgxMDIsIDEwMiwgMTAyLCAwLjI1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4yNSk7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbn1cclxuLmx0bHR4dCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuLmdybmx0bHR0eHQge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG59XHJcbi5yZWRsdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNiwgMTYpO1xyXG59XHJcblxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3RvZ2dsZWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/components/homepage/homepage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppComponentsHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);

        this.isThisYear = new Date().getFullYear();
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 118,
      vars: 1,
      consts: [["id", "intro", 1, "top-container"], ["src", "assets/images/f28-logo.png", "alt", "logo-img", 1, "logo-img"], [1, "top-nav", 2, "flex-grow", "7"], ["href", "/home#intro"], ["href", "/home#about"], ["href", "/home#services"], ["href", "/home#contacts"], [1, "top-nav"], [1, "extnav"], ["routerLink", "/signup"], ["routerLink", "/login", 1, "brdrd"], [1, "main-container"], [1, "data-description"], [1, "spanned_"], [1, "_spanned_"], ["src", "assets/images/mobile-money-transfer.png", "alt", "mobile-money", 1, "content-img"], ["id", "to-about"], [1, "h-c"], ["id", "about", 1, "data-description", "dd_"], ["src", "assets/images/gads-logo.png", "alt", "gads", 1, "content-img", "c-img"], ["id", "services", 1, "data-description", "dd_"], ["src", "assets/images/e-money.jpg", "alt", "gads", 1, "content-img", "c-img"], ["id", "contacts", 1, "data-description", "dd_"], [1, "form-section"], ["action", "", "method", "post"], [1, "input-content"], ["for", "email"], [1, "d-req"], ["type", "email", "name", "email", "id", "email", 1, "inputfield"], ["for", "name"], ["type", "text", "name", "name", "id", "name", 1, "inputfield"], ["for", "comment"], ["name", "comment", "id", "comment"], ["type", "submit", 1, "btn_p"], [1, "social"], ["href", "https://github.com/claudwatari95", "target", "_blank"], [1, "fa", "fa-github", "fa-2x"], ["href", "https://linkedin.com/in/watari-claud-kamau", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-2x"], ["href", "https://facebook.com/in/claudkamau.watari", "target", "_blank"], [1, "fa", "fa-facebook", "fa-2x"], ["href", "https://instagram.com/in/claudwatari", "target", "_blank"], [1, "fa", "fa-instagram", "fa-2x"], [1, "copyright_"], [1, "date-content"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["#intro[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    width: 100vw;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n}\r\n.logo-img[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    max-width: 450px;\r\n    min-width: 78px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding-left: 11rem;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    width: calc(100% / 4.5);\r\n    min-width: 107px;\r\n    margin-bottom: 10px;\r\n    margin-right: 7px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.brdrd[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n    background :rgb(150, 136, 16);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.brdrd[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(102, 102, 102);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 83%;\r\n    margin: 5rem auto;\r\n}\r\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    width: 60%;\r\n    min-width: 250px;\r\n}\r\n.content-img[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    max-width: 650px;\r\n    min-width: 230px;\r\n    float: right;\r\n}\r\n.c-img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-top: 4rem;\r\n}\r\n.data-description[_ngcontent-%COMP%] {\r\n    margin-top: 6rem;\r\n}\r\n.spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n    font-weight: 800;\r\n}\r\n._spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 103, 16);\r\n    font-weight: 800;\r\n}\r\n#to-about[_ngcontent-%COMP%], .btn_p[_ngcontent-%COMP%] {\r\n    padding: 1rem 1.7rem;\r\n    background-color: rgb(150, 136, 16);\r\n    color :rgb(238, 238, 238);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    margin-top: 7rem;\r\n    cursor: pointer;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(103, 150, 16);\r\n}\r\n#to-about[_ngcontent-%COMP%]   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 1.3rem;\r\n    transition: 0.5s all;\r\n}\r\n#to-about[_ngcontent-%COMP%]:hover   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 2.3rem\r\n}\r\n.dd_[_ngcontent-%COMP%] {\r\n    padding-top: 4rem;\r\n}\r\n.form-section[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    padding: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%], .input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.1rem;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 10px;\r\n    width: 43%;\r\n    min-width: 200px;\r\n    color: rgb(102, 102, 102);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n    margin-top: 11px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 50%;\r\n    min-width: 200px;\r\n    min-height: 130px;\r\n}\r\n.d-req[_ngcontent-%COMP%] {\r\n    color: rgb(255, 0, 0);\r\n}\r\n.social[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    margin-bottom: -5rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 3rem;\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n}\r\n\r\n@media screen and (max-width: 1155px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 7rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 5);\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 56%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\r\n@media screen and (max-width: 1015px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 5rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 7);\r\n    }\r\n}\r\n@media screen and (max-width: 950px) {\r\n    \r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.extnav[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 2rem;\r\n    }\r\n    .data-description[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .dd_[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content-img[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        float: none;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n}\r\n@media screen and (max-width: 400px) {.content-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n    .form-section[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 85%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 96%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLDBEQUEwRDtJQUMxRCxrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjtBQUVBO0lBQ0k7O09BRUc7SUFDSDtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0Esc0NBQXNDO0lBQ2xDLFdBQVc7QUFDZjtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbnRybyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA3OHB4O1xyXG59XHJcbi50b3AtbmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXJlbTtcclxufVxyXG4udG9wLW5hdiB1bCBsaSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQuNSk7XHJcbiAgICBtaW4td2lkdGg6IDEwN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi50b3AtbmF2IHVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5icmRyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZCA6cmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbi5icmRyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbn1cclxuLm1haW4tY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG59XHJcbi5jb250ZW50LWltZyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIG1pbi13aWR0aDogMjMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmMtaW1nIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uZGF0YS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcbi5zcGFubmVkXyB7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5fc3Bhbm5lZF8ge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDEwMywgMTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4jdG8tYWJvdXQsIC5idG5fcCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuN3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3IgOnJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bl9wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmJ0bl9wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE1MCwgMTYpO1xyXG59XHJcbiN0by1hYm91dCAuaC1jIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjNyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG4jdG8tYWJvdXQ6aG92ZXIgLmgtYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi4zcmVtXHJcbn1cclxuLmRkXyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxufVxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50LCAuaW5wdXQtY29udGVudCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5wdXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxufVxyXG4uaW5wdXRmaWVsZDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxufVxyXG4uZC1yZXEge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG59XHJcbi5zb2NpYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNvY2lhbCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1lZGlhIGNzcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1NXB4KSB7XHJcbiAgICAudG9wLW5hdiB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcclxuICAgIH1cclxuICAgICN0by1hYm91dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIH1cclxuICAgIC5pbnB1dGZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xyXG4gICAgLnRvcC1uYXYgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAvKiAudG9wLW5hdiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfSAqL1xyXG4gICAgLnRvcC1uYXYgdWwgbGkuZXh0bmF2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgI3RvLWFib3V0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmRhdGEtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuZGRfIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRmaWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7LmNvbnRlbnQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgICAuZm9ybS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5pbnB1dGZpZWxkIHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loan-application/loan-application.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/loan-application/loan-application.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LoanApplicationComponent */

  /***/
  function srcAppComponentsLoanApplicationLoanApplicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanApplicationComponent", function () {
      return LoanApplicationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoanApplicationComponent =
    /*#__PURE__*/
    function () {
      function LoanApplicationComponent(dashboardService) {
        _classCallCheck(this, LoanApplicationComponent);

        this.dashboardService = dashboardService;
      }

      _createClass(LoanApplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this5.userBalance = res.data.balance;
            _this5.userStatus = res.data.status;
            _this5.userPhone = res.data.phone;
            _this5.pageTitle = 'Fintech28 | Apply for loan';
          });
        }
      }, {
        key: "processRequest",
        value: function processRequest() {
          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';
          alertbox.style.display = 'block';
          alertbox.textContent = 'Some feedback from API to display here';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return LoanApplicationComponent;
    }();

    LoanApplicationComponent.ɵfac = function LoanApplicationComponent_Factory(t) {
      return new (t || LoanApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]));
    };

    LoanApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanApplicationComponent,
      selectors: [["app-loan-application"]],
      decls: 24,
      vars: 2,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "amount", 1, "inputfield"], ["type", "button", "id", "button_", 3, "click"]],
      template: function LoanApplicationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Apply for loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoanApplicationComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanApplicationComponent_Template_button_click_22_listener() {
            return ctx.processRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Send Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 130px 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 70%;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(199, 199, 199);\r\n    border: 1px solid rgb(122, 121, 121);\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FuLWFwcGxpY2F0aW9uL2xvYW4tYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hbi1hcHBsaWNhdGlvbi9sb2FuLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRfIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDEzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYmFja2dyb3VuZCA6cmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI21haW4tY29udGVudC11bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuLmRhdGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnN0YXQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmQtYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG59XHJcbi5kLWMgaDMsIC5kLWMgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLmQtYyBwIHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnVudi1zdGF0LCAudi1zdGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4udW52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NiwgMSwgMSk7XHJcbn1cclxuLnYtc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgd2lkdGg6IDY2JTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMSwgMTIxKTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwcHg7XHJcbn1cclxuLmZvcm1fIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiA5cmVtIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIyLCAxMjEsIDEyMSk7XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXRmaWVsZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb3JtXyBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTU2LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4OSwgMTU2LCAxKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1lZGlhIGNzcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgIH1cclxuICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IHVsIHtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgIH1cclxuICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loan-application',
          templateUrl: './loan-application.component.html',
          styleUrls: ['./loan-application.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/components/loan-repayment/loan-repayment.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/loan-repayment/loan-repayment.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LoanRepaymentComponent */

  /***/
  function srcAppComponentsLoanRepaymentLoanRepaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanRepaymentComponent", function () {
      return LoanRepaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoanRepaymentComponent =
    /*#__PURE__*/
    function () {
      function LoanRepaymentComponent(dashboardService) {
        _classCallCheck(this, LoanRepaymentComponent);

        this.dashboardService = dashboardService;
      }

      _createClass(LoanRepaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this6.userBalance = res.data.balance;
            _this6.userStatus = res.data.status;
            _this6.userPhone = res.data.phone;
            _this6.pageTitle = 'Fintech28 | Repay loan';
          });
          this.loanId = 543210;
        }
      }, {
        key: "processRequest",
        value: function processRequest() {
          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';
          alertbox.style.display = 'block';
          alertbox.textContent = 'Some feedback from API to display here';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return LoanRepaymentComponent;
    }();

    LoanRepaymentComponent.ɵfac = function LoanRepaymentComponent_Factory(t) {
      return new (t || LoanRepaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]));
    };

    LoanRepaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanRepaymentComponent,
      selectors: [["app-loan-repayment"]],
      decls: 29,
      vars: 3,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "sp_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "amount", 1, "inputfield"], ["type", "button", "id", "button_", 3, "click"]],
      template: function LoanRepaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Repay loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Loan Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoanRepaymentComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanRepaymentComponent_Template_button_click_27_listener() {
            return ctx.processRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Send Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loanId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 130px 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 70%;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(199, 199, 199);\r\n    border: 1px solid rgb(122, 121, 121);\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin: 7rem auto;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.form_[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin-top: -3rem;\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FuLXJlcGF5bWVudC9sb2FuLXJlcGF5bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYW4tcmVwYXltZW50L2xvYW4tcmVwYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRfIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDEzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYmFja2dyb3VuZCA6cmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI21haW4tY29udGVudC11bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuLmRhdGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnN0YXQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmQtYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG59XHJcbi5kLWMgaDMsIC5kLWMgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLmQtYyBwIHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnVudi1zdGF0LCAudi1zdGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4udW52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NiwgMSwgMSk7XHJcbn1cclxuLnYtc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgd2lkdGg6IDY2JTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMSwgMTIxKTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwcHg7XHJcbn1cclxuLmZvcm1fIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiA3cmVtIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIyLCAxMjEsIDEyMSk7XHJcbn1cclxuLmZvcm1fIHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3JlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dGZpZWxkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmZvcm1fIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanRepaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loan-repayment',
          templateUrl: './loan-repayment.component.html',
          styleUrls: ['./loan-repayment.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginService, Route, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.Route = Route;
        this.router = router;
        this.userModel = {
          email: '',
          password: ''
        };
        this.isThisYear = new Date().getFullYear();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this7 = this;

          var checkerbtn = document.querySelector('.btn_p');
          var alert_ = document.querySelector('#alert_');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.loginService.loginUser(this.userModel).subscribe(function (res) {
            _this7.someData = res;

            var revertBtnText = function revertBtnText() {
              checkerbtn.textContent = 'Log in';
              alert_.style.display = 'none';
              localStorage.removeItem('f28err');
            };

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this7.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              alert_.textContent = _this7.someData.message;
              alert_.style.display = 'block';
              console.log(_this7.someData);
              setTimeout(revertBtnText, 3000);
            } else {
              checkerbtn.textContent = 'Encountered an error!';
              var errMsg = localStorage.getItem('f28err');
              alert_.textContent = errMsg;
              alert_.style.display = 'block';
              console.log(_this7.someData);
              setTimeout(revertBtnText, 3000);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      inputs: {
        userModel: "userModel"
      },
      decls: 34,
      vars: 3,
      consts: [["id", "alert_"], [1, "umbrella-container"], [1, "logo-content"], ["src", "assets/images/f28-logo.png", "alt", "logo-image"], [1, "umbrella"], [1, "top-nav"], ["routerLink", "/home", 1, "a_cov"], ["routerLink", "/signup", 1, "a_cov"], [1, "form-container"], [1, "form-content"], ["action", "", 1, "form_"], [1, "input-content"], ["for", "email"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn_p", 3, "click"], [1, "copyright_"], [1, "date-content"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.userModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
            return ctx.loginUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 20% 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 2rem;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media screen and (max-width: 1150px) {\r\n    .form-container[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixNQUFNO0lBQ04sYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixrREFBeUU7SUFDekUsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdGQUFnRjtBQUNwRjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsMERBQTBEO0lBQzFELGtFQUFrRTtBQUN0RTtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFFBQVE7UUFDUixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGVydF8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDIwJSAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJhY2tncm91bmQgOnJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udW1icmVsbGEtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1tb25leS10cmFuc2Zlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ubG9nby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogN3JlbSAxMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuLmxvZ28tY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvcC1uYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4udG9wLW5hdiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTAyLDEwMiwgMTAyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4uYV9jb3Yge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogMjMwcHg7XHJcbiAgICBtYXJnaW46IDlyZW0gYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNTAsIDEzNiwgMTYpLCByZ2IoODcsIDE1MCwgMTYpKTtcclxufVxyXG4uaW5wdXQtY29udGVudCBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uaW5wdXQtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcclxufVxyXG5sYWJlbCwgLmlucHV0ZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmlucHV0ZmllbGQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ0bl9wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uY29weXJpZ2h0XyB7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWlkYSBjc3MgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAudW1icmVsbGEtY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgLmFfY292IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHN0cm9uZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGVudCB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgfVxyXG59XHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        userModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/signup.service */
    "./src/app/services/signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(signUpService, Route, router) {
        _classCallCheck(this, SignupComponent);

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

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createUser",
        value: function createUser() {
          var _this8 = this;

          var revertBtnText = function revertBtnText() {
            checkerbtn.textContent = 'Create my account';
            alert_.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          var checkerbtn = document.querySelector('.btn_p');
          var alert_ = document.querySelector('#alert_');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.subscription = this.signUpService.createUser(this.userModel).subscribe(function (res) {
            _this8.someData = res;

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this8.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              console.log(_this8.someData);
            } else {
              checkerbtn.textContent = 'Encountered an error!';
              var errMsg = localStorage.getItem('f28err');
              alert_.textContent = errMsg;
              alert_.style.display = 'block';
              console.log('component is unsuccessful...');
              setTimeout(revertBtnText, 3000);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      inputs: {
        userModel: "userModel"
      },
      decls: 42,
      vars: 5,
      consts: [["id", "alert_"], [1, "umbrella-container"], [1, "logo-content"], ["src", "assets/images/f28-logo.png", "alt", "logo-image"], [1, "umbrella"], [1, "top-nav"], ["routerLink", "/home", 1, "a_cov"], ["routerLink", "/login", 1, "a_cov"], [1, "form-container"], [1, "form-content"], [1, "form_"], [1, "input-content"], ["for", "name"], ["type", "text", "name", "name", "id", "name", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "phone", "name", "phone", "id", "phone", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "autocomplete", "off", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn_p", 3, "click"], [1, "copyright_"], [1, "date-content"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Already have an exisitng account?\u2002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click here to log in");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userModel.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.userModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.userModel.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.userModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_36_listener() {
            return ctx.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Create my account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 20% 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 2rem auto;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUF5RTtJQUN6RSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnRkFBZ0Y7QUFDcEY7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLDBEQUEwRDtJQUMxRCxrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGVydF8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDIwJSAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJhY2tncm91bmQgOnJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udW1icmVsbGEtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1tb25leS10cmFuc2Zlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ubG9nby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogN3JlbSAxMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuLmxvZ28tY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvcC1uYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4udG9wLW5hdiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTAyLDEwMiwgMTAyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4uYV9jb3Yge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogMjMwcHg7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1MCwgMTM2LCAxNiksIHJnYig4NywgMTUwLCAxNikpO1xyXG59XHJcbi5pbnB1dC1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xyXG59XHJcbmxhYmVsLCAuaW5wdXRmaWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uaW5wdXRmaWVsZDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYnRuX3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjIxLCAxOTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1laWRhIGNzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC51bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudG9wLW5hdiB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAuYV9jb3Yge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250ZW50IHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _services_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        userModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/view-loans/view-loans.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/view-loans/view-loans.component.ts ***!
    \***************************************************************/

  /*! exports provided: ViewLoansComponent */

  /***/
  function srcAppComponentsViewLoansViewLoansComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLoansComponent", function () {
      return ViewLoansComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_view_loans_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/view-loans.service */
    "./src/app/services/view-loans.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ViewLoansComponent_h3_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Account is still unverified:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wait for an admin to verify your account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewLoansComponent_h3_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ViewLoansComponent =
    /*#__PURE__*/
    function () {
      function ViewLoansComponent(dashboardService, ViewLoansService) {
        _classCallCheck(this, ViewLoansComponent);

        this.dashboardService = dashboardService;
        this.ViewLoansService = ViewLoansService;
      }

      _createClass(ViewLoansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
          this.viewLoans();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this9 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this9.userBalanceUnverified = res.data.balance;
            _this9.userStatus = res.data.status;
            _this9.userPhone = res.data.phone;
            _this9.pageTitle = 'Fintech28 | See Transactions';
          });
        }
      }, {
        key: "viewLoans",
        value: function viewLoans() {
          var _this10 = this;

          this.subscription = this.ViewLoansService.getLoans().subscribe(function (res) {
            _this10.userBalanceUnverified = res.data.balance;
            _this10.userStatus = res.data.status;
            _this10.userPhone = res.data.phone;
            _this10.pageTitle = 'Fintech28 | See Transactions';
            _this10.userLoanData = res;
          });
          if (this.userLoanData === undefined || this.userLoanData.length < 1) this.userLoanData = "No loan data";
          console.log(this.userLoanData);
        }
      }, {
        key: "processRequest",
        value: function processRequest() {
          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';
          alertbox.style.display = 'block';
          alertbox.textContent = 'Some feedback from API to display here';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe;
        }
      }]);

      return ViewLoansComponent;
    }();

    ViewLoansComponent.ɵfac = function ViewLoansComponent_Factory(t) {
      return new (t || ViewLoansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_view_loans_service__WEBPACK_IMPORTED_MODULE_2__["ViewLoansService"]));
    };

    ViewLoansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewLoansComponent,
      selectors: [["app-view-loans"]],
      decls: 64,
      vars: 6,
      consts: [["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "stat-container"], ["class", "unv-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], ["class", "v-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], [1, "data-container", "d-c"], [1, "contact-container"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "value", "Account verification\u2026", 1, "inputfield"], ["type", "button", "id", "button_", 3, "click"], [1, "menu-container"], [1, "menu-content"], [1, "v-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "i-spanned"], [1, "fa", "fa-check", "fa-check-2x"], [1, "menu-lister"], [1, "unv-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "fa", "fa-checkmark"]],
      template: function ViewLoansComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Loan history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewLoansComponent_h3_11_Template, 4, 0, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewLoansComponent_h3_12_Template, 5, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Want to contact us to confirm your account verification?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Send a message by filling the form below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewLoansComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sunject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewLoansComponent_Template_button_click_34_listener() {
            return ctx.processRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Send Inquiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Display this if valid loan log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Will add conditional when implementing service subscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "My loan history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Verified\u2002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Your Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx.userBalanceUnverified, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx.userBalanceUnverified, "");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(230, 230, 230);\r\n    border: 1px solid rgb(189, 189, 189);\r\n    border-radius: 7px;\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n.contact-container[_ngcontent-%COMP%] {\r\n    margin: 5rem 0;\r\n    margin-top: 0;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin-left: 2rem;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWxvYW5zL3ZpZXctbG9hbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1sb2Fucy92aWV3LWxvYW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250ZW50LXVtYnJlbGxhLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5zdGF0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kLWMge1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxufVxyXG4uZC1jIGgzLCAuZC1jIHAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5kLWMgcCB7XHJcbiAgICBjb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi51bnYtc3RhdCwgLnYtc3RhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnVudi1zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTYsIDEsIDEpO1xyXG59XHJcbi52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IHVsIHtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMHB4O1xyXG59XHJcbi5ncm5sdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnJlZGx0bHR0eHQge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDE2LCAxNik7XHJcbn1cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uZm9ybV8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMSwgMTIxKTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dGZpZWxkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmZvcm1fIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3JubHRsdHR4dCB7XHJcbiAgICBjb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5yZWRsdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNiwgMTYpO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCB1bCB7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLoansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-loans',
          templateUrl: './view-loans.component.html',
          styleUrls: ['./view-loans.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_view_loans_service__WEBPACK_IMPORTED_MODULE_2__["ViewLoansService"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/components/view-transactions/view-transactions.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/view-transactions/view-transactions.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ViewTransactionsComponent */

  /***/
  function srcAppComponentsViewTransactionsViewTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTransactionsComponent", function () {
      return ViewTransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_view_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/view-transactions.service */
    "./src/app/services/view-transactions.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ViewTransactionsComponent_h3_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Account is still unverified:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wait for an admin to verify your account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewTransactionsComponent_h3_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewTransactionsComponent_p_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have no logged transactions.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deposit into your account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to start your log information here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewTransactionsComponent_ul_64_li_1_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ksh. ", transaction_r7.amount, " ");
      }
    }

    function ViewTransactionsComponent_ul_64_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewTransactionsComponent_ul_64_li_1_p_1_Template, 2, 1, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r7.transactionType === "Deposit");
      }
    }

    function ViewTransactionsComponent_ul_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewTransactionsComponent_ul_64_li_1_Template, 2, 1, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.userTransactions);
      }
    }

    var ViewTransactionsComponent =
    /*#__PURE__*/
    function () {
      function ViewTransactionsComponent(dashboardService, viewTransactionsService) {
        _classCallCheck(this, ViewTransactionsComponent);

        this.dashboardService = dashboardService;
        this.viewTransactionsService = viewTransactionsService;
      }

      _createClass(ViewTransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
          this.viewTransactions();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this11 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this11.userBalanceUnverified = res.data.balance;
            _this11.userStatus = res.data.status;
            _this11.userPhone = res.data.phone;
            _this11.pageTitle = 'Fintech28 | See Transactions';
          });
        }
      }, {
        key: "viewTransactions",
        value: function viewTransactions() {
          var _this12 = this;

          this.subscription = this.viewTransactionsService.getTransactions().subscribe(function (res) {
            _this12.userTransactions = res.transactions;
            _this12.userStatus = res.data.status;
            _this12.userPhone = res.data.phone;
            _this12.pageTitle = 'Fintech28 | See Transactions';
          });
          if (this.userTransactions === undefined || this.userTransactions.length < 1) this.userTransactions = "No transactions found";
          console.log(this.userTransactions);
        }
      }, {
        key: "processRequest",
        value: function processRequest() {
          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';
          alertbox.style.display = 'block';
          alertbox.textContent = 'Some feedback from API to display here';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe;
        }
      }]);

      return ViewTransactionsComponent;
    }();

    ViewTransactionsComponent.ɵfac = function ViewTransactionsComponent_Factory(t) {
      return new (t || ViewTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_view_transactions_service__WEBPACK_IMPORTED_MODULE_2__["ViewTransactionsService"]));
    };

    ViewTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewTransactionsComponent,
      selectors: [["app-view-transactions"]],
      decls: 65,
      vars: 8,
      consts: [["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "stat-container"], ["class", "unv-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], ["class", "v-stat", "style", "color: rgb(216, 215, 215); font-size: 13px;", 4, "ngIf"], [1, "data-container", "d-c"], [1, "contact-container"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "value", "Account verification\u2026", 1, "inputfield"], ["type", "button", "id", "button_", 3, "click"], [1, "menu-container"], [1, "menu-content"], [1, "v-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "i-spanned"], [1, "fa", "fa-check", "fa-check-2x"], [4, "ngIf"], ["class", "menu-lister", 4, "ngIf"], [1, "unv-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "fa", "fa-checkmark"], ["routerLink", "/deposit"], [1, "menu-lister"], [4, "ngFor", "ngForOf"], ["class", "grnltlttxt", 4, "ngIf"], [1, "grnltlttxt"]],
      template: function ViewTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewTransactionsComponent_h3_11_Template, 4, 0, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewTransactionsComponent_h3_12_Template, 5, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Want to contact us to confirm your account verification?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Send a message by filling the form below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewTransactionsComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sunject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewTransactionsComponent_Template_button_click_34_listener() {
            return ctx.processRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Send Inquiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Display this if valid transactions log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Will add conditional when implementing service subscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "My Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Verified\u2002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Your Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ViewTransactionsComponent_p_63_Template, 6, 0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ViewTransactionsComponent_ul_64_Template, 2, 1, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx.userBalanceUnverified, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx.userBalanceUnverified, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTransactions === "No transactions found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTransactions !== "No transactions found");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(230, 230, 230);\r\n    border: 1px solid rgb(189, 189, 189);\r\n    border-radius: 7px;\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n.contact-container[_ngcontent-%COMP%] {\r\n    margin: 5rem 0;\r\n    margin-top: 0;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin-left: 2rem;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXRyYW5zYWN0aW9ucy92aWV3LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0Esb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctdHJhbnNhY3Rpb25zL3ZpZXctdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250ZW50LXVtYnJlbGxhLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5zdGF0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kLWMge1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxufVxyXG4uZC1jIGgzLCAuZC1jIHAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5kLWMgcCB7XHJcbiAgICBjb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi51bnYtc3RhdCwgLnYtc3RhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnVudi1zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTYsIDEsIDEpO1xyXG59XHJcbi52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IHVsIHtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMHB4O1xyXG59XHJcbi5ncm5sdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnJlZGx0bHR0eHQge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDE2LCAxNik7XHJcbn1cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uZm9ybV8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMSwgMTIxKTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dGZpZWxkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmZvcm1fIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg5LCAxNTYsIDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCB1bCB7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-transactions',
          templateUrl: './view-transactions.component.html',
          styleUrls: ['./view-transactions.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_view_transactions_service__WEBPACK_IMPORTED_MODULE_2__["ViewTransactionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/withdraw/withdraw.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/withdraw/withdraw.component.ts ***!
    \***********************************************************/

  /*! exports provided: WithdrawComponent */

  /***/
  function srcAppComponentsWithdrawWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return WithdrawComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_withdraw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/withdraw.service */
    "./src/app/services/withdraw.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var WithdrawComponent =
    /*#__PURE__*/
    function () {
      function WithdrawComponent(dashboardService, WithdrawService) {
        _classCallCheck(this, WithdrawComponent);

        this.dashboardService = dashboardService;
        this.WithdrawService = WithdrawService;
        this.withdrawalRequestBody = {
          amount: ''
        };
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this13.userBalance = res.data.balance;
            _this13.userStatus = res.data.status;
            _this13.userPhone = res.data.phone;
            _this13.pageTitle = 'Fintech28 | Withdraw';
          });
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit() {
          var _this14 = this;

          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';

          var revertBtnText = function revertBtnText() {
            btn.textContent = 'Send Request';
            alertbox.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          this.subscription = this.WithdrawService.withdrawAmount(this.withdrawalRequestBody).subscribe(function (res) {
            var errMsg = localStorage.getItem('f28err');
            _this14.someData = res;

            if (_this14.someData === undefined) {
              _this14.someData = "An error occured";
              alertbox.style.display = 'block';
              alertbox.textContent = errMsg;
              setTimeout(revertBtnText, 3000);
            }

            console.log(_this14.someData);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return WithdrawComponent;
    }();

    WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) {
      return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_withdraw_service__WEBPACK_IMPORTED_MODULE_2__["WithdrawService"]));
    };

    WithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WithdrawComponent,
      selectors: [["app-withdraw"]],
      inputs: {
        withdrawalRequestBody: "withdrawalRequestBody"
      },
      decls: 24,
      vars: 3,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "amount", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button_", 3, "click"]],
      template: function WithdrawComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.withdrawalRequestBody.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithdrawComponent_Template_button_click_22_listener() {
            return ctx.makeDeposit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Send Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.withdrawalRequestBody.amount);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]],
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 130px 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 70%;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(199, 199, 199);\r\n    border: 1px solid rgb(122, 121, 121);\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBLG9CQUFvQjtBQUVwQjtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FsZXJ0XyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAxMzBweCAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJhY2tncm91bmQgOnJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNtYWluLWNvbnRlbnQtdW1icmVsbGEtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5zdGF0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kLWMge1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxufVxyXG4uZC1jIGgzLCAuZC1jIHAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5kLWMgcCB7XHJcbiAgICBjb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi51bnYtc3RhdCwgLnYtc3RhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnVudi1zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTYsIDEsIDEpO1xyXG59XHJcbi52LXN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IHVsIHtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIyLCAxMjEsIDEyMSk7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciAubWVudS1jb250ZW50IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMHB4O1xyXG59XHJcbi5mb3JtXyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogOXJlbSBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMiwgMTIxLCAxMjEpO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgLmlucHV0ZmllbGQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm9ybV8gYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODksIDE1NiwgMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCB1bCB7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICB9XHJcbiAgICAubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-withdraw',
          templateUrl: './withdraw.component.html',
          styleUrls: ['./withdraw.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_withdraw_service__WEBPACK_IMPORTED_MODULE_2__["WithdrawService"]
        }];
      }, {
        withdrawalRequestBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/env/env.ts":
  /*!****************************!*\
    !*** ./src/app/env/env.ts ***!
    \****************************/

  /*! exports provided: globalUri */

  /***/
  function srcAppEnvEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "globalUri", function () {
      return globalUri;
    });

    var globalUri = {
      apiGlobal: 'https://fintech28.herokuapp.com/api/v1',
      token: localStorage.getItem('f28authkey')
    };
    /***/
  },

  /***/
  "./src/app/services/dashboard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/dashboard.service.ts ***!
    \***********************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_2__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_2__["globalUri"].token;
    var HttpOptions;

    if (!token) {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    } else {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    }

    var DashboardService =
    /*#__PURE__*/
    function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
      }

      _createClass(DashboardService, [{
        key: "getAuthData",
        value: function getAuthData() {
          return this.http.get("".concat(endpoint, "/logged-data"), HttpOptions);
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/deposit.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/deposit.service.ts ***!
    \*********************************************/

  /*! exports provided: DepositService */

  /***/
  function srcAppServicesDepositServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositService", function () {
      return DepositService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].token;
    var HttpOptions;

    if (!token) {
      console.log('No token found');
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    } else {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    }

    var DepositService =
    /*#__PURE__*/
    function () {
      function DepositService(http) {
        _classCallCheck(this, DepositService);

        this.http = http;
      }

      _createClass(DepositService, [{
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error.error);
            console.log("".concat(operation, " failed: ").concat(error.message));
            console.log(error.error);
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit(amount) {
          return this.http.post("".concat(endpoint, "/deposit-to-account"), JSON.stringify(amount), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_amount) {
            console.log(_amount);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Deposit')));
        }
      }]);

      return DepositService;
    }();

    DepositService.ɵfac = function DepositService_Factory(t) {
      return new (t || DepositService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DepositService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DepositService,
      factory: DepositService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var HttpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error.error);
            console.log("".concat(operation, " failed: ").concat(error.message));
            console.log(error.error);
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "loginUser",
        value: function loginUser(user) {
          return this.http.post("".concat(endpoint, "/auth/login-user"), JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_user) {
            console.log(_user);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Log in')));
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/signup.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/signup.service.ts ***!
    \********************************************/

  /*! exports provided: SignupService */

  /***/
  function srcAppServicesSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupService", function () {
      return SignupService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var HttpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    var SignupService =
    /*#__PURE__*/
    function () {
      function SignupService(http) {
        _classCallCheck(this, SignupService);

        this.http = http;
      }

      _createClass(SignupService, [{
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error.error);
            console.log("".concat(operation, " failed: ").concat(error.message));
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.http.post("".concat(endpoint, "/auth/create-user"), JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_user) {
            console.log(_user);
            console.log('service success.....');
            localStorage.setItem('f28authkey-test', _user.data.token);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign up')));
        }
      }]);

      return SignupService;
    }();

    SignupService.ɵfac = function SignupService_Factory(t) {
      return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignupService,
      factory: SignupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/view-loans.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/view-loans.service.ts ***!
    \************************************************/

  /*! exports provided: ViewLoansService */

  /***/
  function srcAppServicesViewLoansServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLoansService", function () {
      return ViewLoansService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = 'https://fintech28.herokuapp.com/api/v1';
    var token = _env_env__WEBPACK_IMPORTED_MODULE_2__["globalUri"].token;
    var HttpOptions;

    if (!token) {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    } else {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    }

    var ViewLoansService =
    /*#__PURE__*/
    function () {
      function ViewLoansService(http) {
        _classCallCheck(this, ViewLoansService);

        this.http = http;
      }

      _createClass(ViewLoansService, [{
        key: "getLoans",
        value: function getLoans() {
          return this.http.get("".concat(endpoint, "/see-loans"), HttpOptions);
        }
      }]);

      return ViewLoansService;
    }();

    ViewLoansService.ɵfac = function ViewLoansService_Factory(t) {
      return new (t || ViewLoansService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ViewLoansService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViewLoansService,
      factory: ViewLoansService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLoansService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/view-transactions.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/view-transactions.service.ts ***!
    \*******************************************************/

  /*! exports provided: ViewTransactionsService */

  /***/
  function srcAppServicesViewTransactionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTransactionsService", function () {
      return ViewTransactionsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_2__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_2__["globalUri"].token;
    var HttpOptions;

    if (!token) {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    } else {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    }

    var ViewTransactionsService =
    /*#__PURE__*/
    function () {
      function ViewTransactionsService(http) {
        _classCallCheck(this, ViewTransactionsService);

        this.http = http;
      }

      _createClass(ViewTransactionsService, [{
        key: "getTransactions",
        value: function getTransactions() {
          return this.http.get("".concat(endpoint, "/check-transaction-logs"), HttpOptions);
        }
      }]);

      return ViewTransactionsService;
    }();

    ViewTransactionsService.ɵfac = function ViewTransactionsService_Factory(t) {
      return new (t || ViewTransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ViewTransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViewTransactionsService,
      factory: ViewTransactionsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewTransactionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/services/withdraw.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/withdraw.service.ts ***!
    \**********************************************/

  /*! exports provided: WithdrawService */

  /***/
  function srcAppServicesWithdrawServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawService", function () {
      return WithdrawService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../env/env */
    "./src/app/env/env.ts");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].token;
    var HttpOptions;

    if (!token) {
      console.log('No token found');
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    } else {
      HttpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
    }

    var WithdrawService =
    /*#__PURE__*/
    function () {
      function WithdrawService(http) {
        _classCallCheck(this, WithdrawService);

        this.http = http;
      }

      _createClass(WithdrawService, [{
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error.error);
            console.log("".concat(operation, " failed: ").concat(error.message));
            console.log(error.error);
            localStorage.setItem('f28err', error.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "withdrawAmount",
        value: function withdrawAmount(amount) {
          return this.http.post("".concat(endpoint, "/withdraw-from-account"), JSON.stringify(amount), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_amount) {
            console.log(_amount);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Withdraw')));
        }
      }]);

      return WithdrawService;
    }();

    WithdrawService.ɵfac = function WithdrawService_Factory(t) {
      return new (t || WithdrawService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WithdrawService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WithdrawService,
      factory: WithdrawService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\basic\Documents\fintech28\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
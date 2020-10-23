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


    var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/deposit/deposit.component */
    "./src/app/components/deposit/deposit.component.ts");
    /* harmony import */


    var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/loan-repayment/loan-repayment.component */
    "./src/app/components/loan-repayment/loan-repayment.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");

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
      path: 'deposit',
      component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__["DepositComponent"]
    }, {
      path: 'repay-loan/:loanId',
      component: _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_6__["LoanRepaymentComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1hcHByb3ZlbG9hbi9hZG1pbi1hcHByb3ZlbG9hbi5jb21wb25lbnQuY3NzIn0= */"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi12ZXJpZnl1c2VyL2FkbWluLXZlcmlmeXVzZXIuY29tcG9uZW50LmNzcyJ9 */"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");

    function DashboardComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome Claud Test User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = 1;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 6,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_p_0_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId === 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"]
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
        return [];
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");

    var DepositComponent =
    /*#__PURE__*/
    function () {
      function DepositComponent() {
        _classCallCheck(this, DepositComponent);
      }

      _createClass(DepositComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DepositComponent;
    }();

    DepositComponent.ɵfac = function DepositComponent_Factory(t) {
      return new (t || DepositComponent)();
    };

    DepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepositComponent,
      selectors: [["app-deposit"]],
      decls: 1,
      vars: 0,
      template: function DepositComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LmNzcyJ9 */"]
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
        return [];
      }, null);
    })();
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXJuYXYvZm9vdGVybmF2LmNvbXBvbmVudC5jc3MifQ== */"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/repay-loan/", a1];
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.loanId = 2;
        this.loggedUser = 'Claud Watari';
        this.loggedUserPhone = '0700000000';
        this.loggedUserEmail = 'claud@mail.com';

        this.displayUserMenu = function () {};

        this.displayUserOptions = function () {};
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedUser = 'Claud Kamau Watari';
          this.loanId = 3;
          this.loggedUserPhone = '+254705724562';
          this.loggedUserEmail = 'claudwatari95@gmail.com';

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
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 48,
      vars: 6,
      consts: [["id", "togglebtn", 1, "h"], [1, "fa", "fa-bars", "fa-2x"], [1, "header-container"], [1, "header-content"], ["id", "user_section"], [1, "usrnm"], [1, "fa", "fa-user"], [1, "user_"], [1, "user-actionable", "d-none"], [1, "ltltxt"], [1, "fa", "fa-cog", "fa-cog-2x"], [1, "user_act"], [1, "fa", "fa-sign-out", "fa-sign-out-2x"], [1, "ltltxt", "grnltlttxt"], [1, "fa", "fa-check", "fa-check-2x"], [1, "acc_mthd"], ["routerLink", "/deposit"], ["routerLink", "/withdraw"], ["routerLink", "/get-loan"], [3, "routerLink"], ["routerLink", "/transactions"], ["routerLink", "/lons"]],
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2002", ctx.loggedUser, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUserEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.loanId));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".d-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.d-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n#togglebtn[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    margin: 13px 17px;\r\n    color: rgb(102, 102, 102);\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n.header-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 0 10px;\r\n    height: 100vh;\r\n    width: 25%;\r\n    min-width: 250px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-left: 1px solid rgba(102, 102, 102, 0.25);\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-bottom: 2rem;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.acc_mthd[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n#user_section[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 4rem 2rem;\r\n    text-align: center;\r\n}\r\n.usrnm[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    border-bottom: 1px solid rgb(102, 102, 102);\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.header-content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n.user-actionable[_ngcontent-%COMP%] {\r\n    border: 1px solid rgba(102, 102, 102, 0.377);\r\n    border-radius: 7px;\r\n    background: rgb(255, 255, 255);\r\n    padding: 9px 7px;\r\n    margin-top: 9px;\r\n    width:  180px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 2rem 0;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-top: 7px;\r\n    margin-bottom: 3px;\r\n    background :rgba(102, 102, 102, 0.048);\r\n    border: 1px solid rgba(102, 102, 102, 0.048);\r\n    color: rgba(102, 102, 102, 0.720);\r\n    padding: 3px 13px;\r\n    cursor: pointer;\r\n    text-align: left;\r\n}\r\n.user-actionable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background :rgba(102, 102, 102, 0.25);\r\n    border: 1px solid rgba(102, 102, 102, 0.25);\r\n    color: rgb(150, 136, 16);\r\n}\r\n.ltltxt[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    color: rgb(102, 102, 102);\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #togglebtn[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .header-container[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztBQUMvQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDRDQUE0QztJQUM1QyxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0Msd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFHQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI3RvZ2dsZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDEzcHggMTdweDtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMjUpO1xyXG59XHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IG5hdiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4uaGVhZGVyLWNvbnRlbnQgbmF2IHVsIGxpLmFjY19tdGhkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuI3VzZXJfc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogNHJlbSAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51c3JubSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcbi5oZWFkZXItY29udGVudCBuYXYgdWwgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IG5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi51c2VyLWFjdGlvbmFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjM3Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiA5cHggN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgd2lkdGg6ICAxODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuLnVzZXItYWN0aW9uYWJsZSBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMDQ4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4wNDgpO1xyXG4gICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC43MjApO1xyXG4gICAgcGFkZGluZzogM3B4IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi51c2VyLWFjdGlvbmFibGUgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZCA6cmdiYSgxMDIsIDEwMiwgMTAyLCAwLjI1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4yNSk7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTM2LCAxNik7XHJcbn1cclxuLmx0bHR4dCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuLmdybmx0bHR0eHQge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG59XHJcblxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3RvZ2dsZWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
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
        return [];
      }, null);
    })();
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
      styles: ["#intro[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    width: 100vw;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n}\r\n.logo-img[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    max-width: 450px;\r\n    min-width: 78px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding-left: 11rem;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    width: calc(100% / 4.5);\r\n    min-width: 107px;\r\n    margin-bottom: 10px;\r\n    margin-right: 7px;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.brdrd[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n    background :rgb(150, 136, 16);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.brdrd[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(102, 102, 102);\r\n    color: rgb(238, 238, 238);\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 83%;\r\n    margin: 5rem auto;\r\n}\r\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    width: 60%;\r\n    min-width: 250px;\r\n}\r\n.content-img[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    max-width: 650px;\r\n    min-width: 230px;\r\n    float: right;\r\n}\r\n.c-img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-top: 4rem;\r\n}\r\n.data-description[_ngcontent-%COMP%] {\r\n    margin-top: 6rem;\r\n}\r\n.spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 136, 16);\r\n    font-weight: 800;\r\n}\r\n._spanned_[_ngcontent-%COMP%] {\r\n    color: rgb(150, 103, 16);\r\n    font-weight: 800;\r\n}\r\n#to-about[_ngcontent-%COMP%], .btn_p[_ngcontent-%COMP%] {\r\n    padding: 1rem 1.7rem;\r\n    background-color: rgb(150, 136, 16);\r\n    color :rgb(238, 238, 238);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 7px;\r\n    margin-top: 7rem;\r\n    cursor: pointer;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(103, 150, 16);\r\n}\r\n#to-about[_ngcontent-%COMP%]   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 1.3rem;\r\n    transition: 0.5s all;\r\n}\r\n#to-about[_ngcontent-%COMP%]:hover   .h-c[_ngcontent-%COMP%] {\r\n    margin-left: 2.3rem\r\n}\r\n.dd_[_ngcontent-%COMP%] {\r\n    padding-top: 4rem;\r\n}\r\n.form-section[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    padding: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%], .input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.1rem;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 10px;\r\n    width: 43%;\r\n    min-width: 200px;\r\n    color: rgb(102, 102, 102);\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n    margin-top: 11px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 50%;\r\n    min-width: 200px;\r\n    min-height: 130px;\r\n}\r\n.d-req[_ngcontent-%COMP%] {\r\n    color: rgb(255, 0, 0);\r\n}\r\n.social[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    margin-bottom: -5rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 3rem;\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n}\r\n\r\n@media screen and (max-width: 1155px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 7rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 5);\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 56%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\r\n@media screen and (max-width: 1015px) {\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-left: 5rem;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: calc(100% / 7);\r\n    }\r\n}\r\n@media screen and (max-width: 950px) {\r\n    \r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.extnav[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n    #to-about[_ngcontent-%COMP%] {\r\n        margin-top: 2rem;\r\n    }\r\n    .data-description[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n    .dd_[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content-img[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        float: none;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n}\r\n@media screen and (max-width: 400px) {.content-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n    .form-section[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .inputfield[_ngcontent-%COMP%] {\r\n        width: 85%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        width: 96%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsMERBQTBEO0lBQzFELGtFQUFrRTtBQUN0RTtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLG9CQUFvQjtBQUVwQjtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKO0FBRUE7SUFDSTs7T0FFRztJQUNIO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQSxzQ0FBc0M7SUFDbEMsV0FBVztBQUNmO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoiaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaW50cm8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1pbi13aWR0aDogNzhweDtcclxufVxyXG4udG9wLW5hdiB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTFyZW07XHJcbn1cclxuLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0LjUpO1xyXG4gICAgbWluLXdpZHRoOiAxMDdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG4udG9wLW5hdiB1bCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYnJkcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQgOnJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG4uYnJkcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxufVxyXG4uY29udGVudC1pbWcge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1heC13aWR0aDogNjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5jLWltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbn1cclxuLmRhdGEtZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG4uc3Bhbm5lZF8ge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uX3NwYW5uZWRfIHtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxMDMsIDE2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuI3RvLWFib3V0LCAuYnRuX3Age1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIGNvbG9yIDpyZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idG5fcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5idG5fcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxNTAsIDE2KTtcclxufVxyXG4jdG8tYWJvdXQgLmgtYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS4zcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuI3RvLWFib3V0OmhvdmVyIC5oLWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuM3JlbVxyXG59XHJcbi5kZF8ge1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbn1cclxuLmZvcm0tc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxufVxyXG4uaW5wdXQtY29udGVudCwgLmlucHV0LWNvbnRlbnQgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4xcmVtO1xyXG59XHJcbi5pbnB1dGZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbn1cclxuLmlucHV0ZmllbGQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbn1cclxuLmQtcmVxIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxufVxyXG4uc29jaWFsIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zb2NpYWwgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc29jaWFsIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG4uY29weXJpZ2h0XyB7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTVweCkge1xyXG4gICAgLnRvcC1uYXYgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogN3JlbTtcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XHJcbiAgICB9XHJcbiAgICAjdG8tYWJvdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuaW5wdXRmaWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDU2JTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE1cHgpIHtcclxuICAgIC50b3AtbmF2IHVsIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICB9XHJcbiAgICAudG9wLW5hdiB1bCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgLyogLnRvcC1uYXYgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH0gKi9cclxuICAgIC50b3AtbmF2IHVsIGxpLmV4dG5hdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuICAgICN0by1hYm91dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIC5kYXRhLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLmRkXyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRlbnQtaW1nIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmlucHV0ZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkgey5jb250ZW50LWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gICAgLmZvcm0tc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRmaWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
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

    var LoanApplicationComponent =
    /*#__PURE__*/
    function () {
      function LoanApplicationComponent() {
        _classCallCheck(this, LoanApplicationComponent);
      }

      _createClass(LoanApplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanApplicationComponent;
    }();

    LoanApplicationComponent.ɵfac = function LoanApplicationComponent_Factory(t) {
      return new (t || LoanApplicationComponent)();
    };

    LoanApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanApplicationComponent,
      selectors: [["app-loan-application"]],
      decls: 2,
      vars: 0,
      template: function LoanApplicationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-application works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWFwcGxpY2F0aW9uL2xvYW4tYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
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
        return [];
      }, null);
    })();
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

    var LoanRepaymentComponent =
    /*#__PURE__*/
    function () {
      function LoanRepaymentComponent() {
        _classCallCheck(this, LoanRepaymentComponent);
      }

      _createClass(LoanRepaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanRepaymentComponent;
    }();

    LoanRepaymentComponent.ɵfac = function LoanRepaymentComponent_Factory(t) {
      return new (t || LoanRepaymentComponent)();
    };

    LoanRepaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanRepaymentComponent,
      selectors: [["app-loan-repayment"]],
      decls: 2,
      vars: 0,
      template: function LoanRepaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-repayment works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXJlcGF5bWVudC9sb2FuLXJlcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"]
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
        return [];
      }, null);
    })();
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
          var _this = this;

          var checkerbtn = document.querySelector('.btn_p');
          var alert_ = document.querySelector('#alert_');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.loginService.loginUser(this.userModel).subscribe(function (res) {
            _this.someData = res;

            var revertBtnText = function revertBtnText() {
              checkerbtn.textContent = 'Log in';
              alert_.style.display = 'none';
              localStorage.removeItem('f28err');
            };

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              alert_.textContent = _this.someData.message;
              alert_.style.display = 'block';
              console.log(_this.someData);
              setTimeout(revertBtnText, 3000);
            } else {
              checkerbtn.textContent = 'Encountered an error!';
              var errMsg = localStorage.getItem('f28err');
              alert_.textContent = errMsg;
              alert_.style.display = 'block';
              console.log(_this.someData);
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
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 20% 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 9rem auto;\r\n    margin-bottom: 2rem;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media screen and (max-width: 1150px) {\r\n    .form-container[_ngcontent-%COMP%] {\r\n        margin-top: 4rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUF5RTtJQUN6RSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0ZBQWdGO0FBQ3BGO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QywwREFBMEQ7SUFDMUQsa0VBQWtFO0FBQ3RFO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0Esa0JBQWtCIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRfIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAyMCUgMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMjEsIDE5NSk7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udW1icmVsbGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnVtYnJlbGxhLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tb2JpbGUtbW9uZXktdHJhbnNmZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuLmxvZ28tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDdyZW0gMTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcbi5sb2dvLWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50b3AtbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDEwMiwxMDIsIDEwMik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmFfY292IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgbWFyZ2luOiA5cmVtIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTUwLCAxMzYsIDE2KSwgcmdiKDg3LCAxNTAsIDE2KSk7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbn1cclxubGFiZWwsIC5pbnB1dGZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5pbnB1dGZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5pbnB1dGZpZWxkOi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSBpbnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5fcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5idG5fcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMjEsIDE5NSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmNvcHlyaWdodF8ge1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogc3RhcnQgbWVpZGEgY3NzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLnVtYnJlbGxhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC5hX2NvdiB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudG9wLW5hdiB1bCBsaSBzdHJvbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRlbnQge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIH1cclxufVxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
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
          var _this2 = this;

          var revertBtnText = function revertBtnText() {
            checkerbtn.textContent = 'Create my account';
            alert_.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          var checkerbtn = document.querySelector('.btn_p');
          var alert_ = document.querySelector('#alert_');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.subscription = this.signUpService.createUser(this.userModel).subscribe(function (res) {
            _this2.someData = res;

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this2.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              console.log(_this2.someData);
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
      styles: ["#alert_[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 20% 0;\r\n    padding: 15px;\r\n    padding-right: 7px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    background :rgb(150, 136, 16);\r\n    width: 130px;\r\n    z-index: 2;\r\n    font-weight: 800;\r\n    display: none;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    overflow: hidden;\r\n}\r\n.umbrella-container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('mobile-money-transfer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50%;\r\n    opacity: 0.2;\r\n}\r\n.logo-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: 7rem 10px;\r\n    width: 90px;\r\n}\r\n.logo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-left: 1px solid rgb(102,102, 102);\r\n    padding-left: 1rem;\r\n}\r\n.a_cov[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    border-radius: 7px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 40%;\r\n    min-width: 230px;\r\n    margin: 2rem auto;\r\n    padding: 0.5rem;\r\n    background-image: linear-gradient(to right, rgb(150, 136, 16), rgb(87, 150, 16));\r\n}\r\n.input-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n}\r\n.input-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem 2rem;\r\n}\r\nlabel[_ngcontent-%COMP%], .inputfield[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 100%;\r\n    border: 1px solid rgb(102, 102, 102);\r\n    border-radius: 3px;\r\n}\r\n.inputfield[_ngcontent-%COMP%]:-webkit-autofill {\r\n    -webkit-text-fill-color:  rgb(102, 102, 102);\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n}\r\n.btn_p[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: rgb(255, 255, 255);\r\n    padding: 10px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    font-weight: 800;\r\n}\r\n.btn_p[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(150, 136, 16);\r\n    color: rgb(214, 221, 195);\r\n    border: 1px solid rgb(255, 255, 255);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    color: rgb(102, 102, 102);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1150px) {\r\n    .umbrella-container[_ngcontent-%COMP%] {\r\n        overflow-y: auto;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n    }\r\n    .a_cov[_ngcontent-%COMP%] {\r\n        padding: 5px 10px;\r\n    }\r\n    .top-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin-bottom: 7px;\r\n    }\r\n    .logo-content[_ngcontent-%COMP%] {\r\n        right: 0;\r\n        margin: 1rem;\r\n    }\r\n    .form-container[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsTUFBTTtJQUNOLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0RBQXlFO0lBQ3pFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdGQUFnRjtBQUNwRjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsMERBQTBEO0lBQzFELGtFQUFrRTtBQUN0RTtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFFBQVE7UUFDUixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLGtCQUFrQiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRfIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAyMCUgMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMjEsIDE5NSk7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2IoMTUwLCAxMzYsIDE2KTtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udW1icmVsbGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnVtYnJlbGxhLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tb2JpbGUtbW9uZXktdHJhbnNmZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuLmxvZ28tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDdyZW0gMTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcbi5sb2dvLWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50b3AtbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDEwMiwxMDIsIDEwMik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmFfY292IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNTAsIDEzNiwgMTYpLCByZ2IoODcsIDE1MCwgMTYpKTtcclxufVxyXG4uaW5wdXQtY29udGVudCBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uaW5wdXQtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcclxufVxyXG5sYWJlbCwgLmlucHV0ZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmlucHV0ZmllbGQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ0bl9wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDEzNiwgMTYpO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIyMSwgMTk1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uY29weXJpZ2h0XyB7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWlkYSBjc3MgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAudW1icmVsbGEtY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXYgdWwgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgLmFfY292IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxuICAgIC50b3AtbmF2IHVsIGxpIHN0cm9uZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGVudCB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
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

    var ViewLoansComponent =
    /*#__PURE__*/
    function () {
      function ViewLoansComponent() {
        _classCallCheck(this, ViewLoansComponent);
      }

      _createClass(ViewLoansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewLoansComponent;
    }();

    ViewLoansComponent.ɵfac = function ViewLoansComponent_Factory(t) {
      return new (t || ViewLoansComponent)();
    };

    ViewLoansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewLoansComponent,
      selectors: [["app-view-loans"]],
      decls: 2,
      vars: 0,
      template: function ViewLoansComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-loans works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWxvYW5zL3ZpZXctbG9hbnMuY29tcG9uZW50LmNzcyJ9 */"]
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
        return [];
      }, null);
    })();
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

    var ViewTransactionsComponent =
    /*#__PURE__*/
    function () {
      function ViewTransactionsComponent() {
        _classCallCheck(this, ViewTransactionsComponent);
      }

      _createClass(ViewTransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewTransactionsComponent;
    }();

    ViewTransactionsComponent.ɵfac = function ViewTransactionsComponent_Factory(t) {
      return new (t || ViewTransactionsComponent)();
    };

    ViewTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewTransactionsComponent,
      selectors: [["app-view-transactions"]],
      decls: 2,
      vars: 0,
      template: function ViewTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-transactions works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXRyYW5zYWN0aW9ucy92aWV3LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"]
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
        return [];
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

    var WithdrawComponent =
    /*#__PURE__*/
    function () {
      function WithdrawComponent() {
        _classCallCheck(this, WithdrawComponent);
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WithdrawComponent;
    }();

    WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) {
      return new (t || WithdrawComponent)();
    };

    WithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WithdrawComponent,
      selectors: [["app-withdraw"]],
      decls: 2,
      vars: 0,
      template: function WithdrawComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "withdraw works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuY3NzIn0= */"]
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
        return [];
      }, null);
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
      apiGlobal: 'https://fintech28.herokuapp.com/api/v1'
    };
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
            ;
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
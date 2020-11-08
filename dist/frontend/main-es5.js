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


    var _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/admin-approveloan/admin-approveloan.component */
    "./src/app/components/admin-approveloan/admin-approveloan.component.ts");
    /* harmony import */


    var _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/admin-verifyuser/admin-verifyuser.component */
    "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts");
    /* harmony import */


    var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/admin-dashboard/admin-dashboard.component */
    "./src/app/components/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/deposit/deposit.component */
    "./src/app/components/deposit/deposit.component.ts");
    /* harmony import */


    var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/withdraw/withdraw.component */
    "./src/app/components/withdraw/withdraw.component.ts");
    /* harmony import */


    var _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/loan-application/loan-application.component */
    "./src/app/components/loan-application/loan-application.component.ts");
    /* harmony import */


    var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/loan-repayment/loan-repayment.component */
    "./src/app/components/loan-repayment/loan-repayment.component.ts");
    /* harmony import */


    var _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/view-transactions/view-transactions.component */
    "./src/app/components/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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
      path: 'admin',
      component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdminDashboardComponent"]
    }, {
      path: 'admin/dashboard',
      component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdminDashboardComponent"]
    }, {
      path: 'admin/users',
      component: _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_6__["AdminVerifyuserComponent"]
    }, {
      path: 'admin/loans',
      component: _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_5__["AdminApproveloanComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
    }, {
      path: 'deposit',
      component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_9__["DepositComponent"]
    }, {
      path: 'withdraw',
      component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_10__["WithdrawComponent"]
    }, {
      path: 'apply-for-loan',
      component: _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_11__["LoanApplicationComponent"]
    }, {
      path: 'repay-loan/:loanId',
      component: _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_12__["LoanRepaymentComponent"]
    }, {
      path: 'view-transactions',
      component: _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_13__["ViewTransactionsComponent"]
    }, {
      path: 'view-loans',
      component: _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_14__["ViewLoansComponent"]
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
    /* harmony import */


    var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/admin-dashboard/admin-dashboard.component */
    "./src/app/components/admin-dashboard/admin-dashboard.component.ts");

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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["AdminDashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_11__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_13__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_14__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_15__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_16__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_17__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_18__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_19__["AdminApproveloanComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["AdminDashboardComponent"]],
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
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_admin_approveloan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/admin-approveloan.service */
    "./src/app/services/admin-approveloan.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminApproveloanComponent_div_8_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Requested by user ID:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amount:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Requested date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Is Approved ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", loan_r1.byuserid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loan_r1.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loan_r1.senton.split("T")[0]);
      }
    }

    function AdminApproveloanComponent_div_8_table_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Requested by user ID:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amount:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Requested date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminApproveloanComponent_div_8_table_2_Template_button_click_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.approveLoan($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Approve this loan ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", loan_r1.byuserid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loan_r1.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loan_r1.senton.split("T")[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "btn-", loan_r1.id, "");
      }
    }

    function AdminApproveloanComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminApproveloanComponent_div_8_table_1_Template, 32, 3, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminApproveloanComponent_div_8_table_2_Template, 31, 4, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loan_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loan_r1.isconfirmed === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loan_r1.isconfirmed === false);
      }
    }

    var AdminApproveloanComponent =
    /*#__PURE__*/
    function () {
      function AdminApproveloanComponent(dashboardService, adminApproveloanService, router) {
        _classCallCheck(this, AdminApproveloanComponent);

        this.dashboardService = dashboardService;
        this.adminApproveloanService = adminApproveloanService;
        this.router = router;
      }

      _createClass(AdminApproveloanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.adminApproveloanService.seeAllLoans().subscribe(function (res) {
            _this.loans = res.data;
            console.log(_this.loans);
          });
          this.pageTitle = 'Fintech28 -Admin | Approve Loans';
        }
      }, {
        key: "approveLoan",
        value: function approveLoan(event) {
          var _this2 = this;

          var target = event.target || event.srcElement || event.currentTarget;
          var idAttr = target.attributes.id;
          this.loanId = idAttr.nodeValue.split('-')[1];
          console.log(this.loanId);
          this.adminApproveloanService.approveLoan(this.loanId).subscribe(function (res) {
            _this2.ngOnInit();
          });
        }
      }]);

      return AdminApproveloanComponent;
    }();

    AdminApproveloanComponent.ɵfac = function AdminApproveloanComponent_Factory(t) {
      return new (t || AdminApproveloanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_approveloan_service__WEBPACK_IMPORTED_MODULE_2__["AdminApproveloanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AdminApproveloanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminApproveloanComponent,
      selectors: [["app-admin-approveloan"]],
      decls: 9,
      vars: 2,
      consts: [["id", "alert_"], [1, "content-container"], [1, "content"], [1, "data-container"], ["class", "data-content", 4, "ngFor", "ngForOf"], [1, "data-content"], ["class", "grn", 4, "ngIf"], ["class", "rd", 4, "ngIf"], [1, "grn"], [1, "c_"], [1, "rd"], [1, "fa", "fa-check", "fa-check-2x"], [1, "grn", 3, "id", "click"]],
      template: function AdminApproveloanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Fintech28 loans (Recent to Oldest) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminApproveloanComponent_div_8_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loans);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".content-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(163, 163, 163);\r\n    padding: 10px;\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin: 0 20px 20px 0;\r\n}\r\n.c_[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n}\r\n.grn[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(0, 129, 0);\r\n    background: rgb(0, 129, 0);\r\n}\r\n.rd[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(110, 1, 1);\r\n    background: rgb(110, 1, 1);\r\n}\r\n.grn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .grn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    color: rgb(221, 221, 221);\r\n}\r\n.grn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin-top: 13px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hcHByb3ZlbG9hbi9hZG1pbi1hcHByb3ZlbG9hbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hcHByb3ZlbG9hbi9hZG1pbi1hcHByb3ZlbG9hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxudGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MywgMTYzLCAxNjMpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbn1cclxuLmNfIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5ncm4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDEyOSwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTI5LCAwKTtcclxufVxyXG4ucmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMCwgMSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEwLCAxLCAxKTtcclxufVxyXG4uZ3JuIHAsIC5yZCBwLCAuZ3JuIGJ1dHRvbiwgLnJkIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG59XHJcbi5ncm4gYnV0dG9uLCAucmQgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59Il19 */"]
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
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_admin_approveloan_service__WEBPACK_IMPORTED_MODULE_2__["AdminApproveloanService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin-dashboard/admin-dashboard.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/admin-dashboard/admin-dashboard.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppComponentsAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent() {
        _classCallCheck(this, AdminDashboardComponent);
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageTitle = 'Fintech28 - Admin | Dashboard';
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)();
    };

    AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 18,
      vars: 1,
      consts: [["id", "alert_"], [1, "container"], [1, "top-content"], [1, "nav-menu"], ["routerLink", "/admin/users"], ["routerLink", "/admin/loans"], [1, "data"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Fintech28 Admin Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fintech28 users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fintech28 Loan requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We imply, hypothetically, that a Fintech28 Admin is a default user, hence there is no method to authorize the admin. This will be added later. We assume that the admin url is known only to the admin, and not to the general user. This is to hasten development. Admin authorization is to be added in later features.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 4rem;\r\n    margin-left: -2rem;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    border: 1px solid rgb(158, 185, 4);\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgb(158, 185, 4);\r\n    color: rgb(233, 233, 233);\r\n}\r\n.data[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5uYXYtbWVudSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiA0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG59XHJcbi5uYXYtbWVudSB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5uYXYtbWVudSB1bCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTgsIDE4NSwgNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5uYXYtbWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTgsIDE4NSwgNCk7XHJcbiAgICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG59XHJcbi5kYXRhIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-dashboard',
          templateUrl: './admin-dashboard.component.html',
          styleUrls: ['./admin-dashboard.component.css']
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
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");
    /* harmony import */


    var _services_admin_verifyuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/admin-verifyuser.service */
    "./src/app/services/admin-verifyuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminVerifyuserComponent_div_8_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Is Verified ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.phone);
      }
    }

    function AdminVerifyuserComponent_div_8_table_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminVerifyuserComponent_div_8_table_2_Template_button_click_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.verifyUser($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Verify Account ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "btn-", user_r9.id, "");
      }
    }

    function AdminVerifyuserComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminVerifyuserComponent_div_8_table_1_Template, 32, 3, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminVerifyuserComponent_div_8_table_2_Template, 31, 4, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r9.isverified === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r9.isverified === false);
      }
    }

    var AdminVerifyuserComponent =
    /*#__PURE__*/
    function () {
      function AdminVerifyuserComponent(dashboardService, AdminVerifyuserService, router) {
        _classCallCheck(this, AdminVerifyuserComponent);

        this.dashboardService = dashboardService;
        this.AdminVerifyuserService = AdminVerifyuserService;
        this.router = router;
      }

      _createClass(AdminVerifyuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.subscription = this.AdminVerifyuserService.seeAllUsers().subscribe(function (res) {
            _this3.users = res.data;
          });
          this.pageTitle = 'Fintech28 -Admin | Verify User Account';
        }
      }, {
        key: "verifyUser",
        value: function verifyUser(event) {
          var _this4 = this;

          var target = event.target || event.srcElement || event.currentTarget;
          var idAttr = target.attributes.id;
          this.userId = idAttr.nodeValue.split('-')[1];
          console.log(this.userId);
          this.AdminVerifyuserService.verifyUser(this.userId).subscribe(function (res) {
            _this4.ngOnInit();
          });
        }
      }]);

      return AdminVerifyuserComponent;
    }();

    AdminVerifyuserComponent.ɵfac = function AdminVerifyuserComponent_Factory(t) {
      return new (t || AdminVerifyuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_verifyuser_service__WEBPACK_IMPORTED_MODULE_2__["AdminVerifyuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AdminVerifyuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminVerifyuserComponent,
      selectors: [["app-admin-verifyuser"]],
      decls: 9,
      vars: 2,
      consts: [["id", "alert_"], [1, "content-container"], [1, "content"], [1, "data-container"], ["class", "data-content", 4, "ngFor", "ngForOf"], [1, "data-content"], ["class", "grn", 4, "ngIf"], ["class", "rd", 4, "ngIf"], [1, "grn"], [1, "c_"], [1, "rd"], [1, "fa", "fa-check", "fa-check-2x"], [1, "grn", 3, "id", "click"]],
      template: function AdminVerifyuserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " List of Fintech28 Users (Recent to Oldest) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminVerifyuserComponent_div_8_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".content-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(163, 163, 163);\r\n    padding: 10px;\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin: 0 20px 20px 0;\r\n}\r\n.c_[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n}\r\n.grn[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(0, 129, 0);\r\n    background: rgb(0, 129, 0);\r\n}\r\n.rd[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(110, 1, 1);\r\n    background: rgb(110, 1, 1);\r\n}\r\n.grn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .grn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    color: rgb(221, 221, 221);\r\n}\r\n.grn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin-top: 13px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi12ZXJpZnl1c2VyL2FkbWluLXZlcmlmeXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tdmVyaWZ5dXNlci9hZG1pbi12ZXJpZnl1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG50YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxufVxyXG4uY18ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmdybiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTI5LCAwKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxMjksIDApO1xyXG59XHJcbi5yZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEwLCAxLCAxKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMTAsIDEsIDEpO1xyXG59XHJcbi5ncm4gcCwgLnJkIHAsIC5ncm4gYnV0dG9uLCAucmQgYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuLmdybiBidXR0b24sIC5yZCBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbn0iXX0= */"]
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
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
        }, {
          type: _services_admin_verifyuser_service__WEBPACK_IMPORTED_MODULE_2__["AdminVerifyuserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();

    ;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dashboardService, router) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.router = router;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.getUserData();
          this.pageTitle = 'Fintech28 | Dashboard';
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this5 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this5.userBalance = res.data.balance;
            _this5.userStatus = res.data.status;
            _this5.pageTitle = 'Fintech28 | Dashboard';
            if (res || res !== undefined) _this5.router.navigate(['/dashboard']);

            _this5.ngOnInit();
          }, function (err) {
            console.log(err);

            _this5.router.navigate(['/login']);
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
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 27,
      vars: 1,
      consts: [[1, "dash-container"], [1, "top-nav-content"], [1, "nav-content-"], [1, "search-section-top"], [1, "fa", "fa-search", "fa-search-2x"], ["type", "search", "name", "searchstring", "id", "searchbar", 1, "s-bar"], [1, "user-pic-asbutton"], [1, "fa", "fa-user", "fa-user-2x"], [1, "u_", 2, "margin-left", "7px"], [1, "mc"], [1, "main-content"], ["routerLink", "/deposit"], ["routerLink", "/withdraw"], ["routerLink", "/apply-for-loan"], ["routerLink", "/repay-loan/1"], ["routerLink", "/view-transactions"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "claud watari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Deposit to my account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Withdraw from my account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Request for an instant loan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Repay active loan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " See transactions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active  {\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    color: rgb(148, 148, 148);\r\n}\r\n.wrapper-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n.form-content[_ngcontent-%COMP%] {\r\n    \r\n    position: relative;\r\n    width: 45%;\r\n    height: 320px;\r\n    min-width: 240px;\r\n    margin: 3rem auto;\r\n    padding: 1rem;\r\n    box-shadow: 0px 0px 15px rgb(117, 117, 117);\r\n}\r\n.-fc[_ngcontent-%COMP%] {\r\n    margin: 1rem auto;\r\n    height: 500px;\r\n}\r\n.msg-box[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 200px;\r\n    padding: 2rem 1.3rem 1rem 1rem;\r\n    background: rgb(238, 238, 238);\r\n    color: rgb(100, 100, 100);\r\n    box-shadow: 0px 0px 7px rgb(80, 0, 0);\r\n    border-radius: 7px;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -1rem 0 0 80%;\r\n    z-index: 1;\r\n}\r\n.h[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.close-btn[_ngcontent-%COMP%] {\r\n    color: rgb(80, 0, 0);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 7px;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n.input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 1rem 0;\r\n    padding: 10px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    color: rgb(148, 148, 148);\r\n    border-radius: 7px;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n    color: rgb(148, 148, 148);\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n    color: rgb(95, 90, 14);\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgb(100, 100, 100);\r\n    color: rgb(197, 197, 197);\r\n    padding: 1rem;\r\n    font-size: 1.4rem;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background: rgb(95, 90, 14);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .form-content[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n        margin: 7rem auto;\r\n        margin-bottom: 0;\r\n    }\r\n    .-fc[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n    }\r\n    .msg-box[_ngcontent-%COMP%] {\r\n        margin: -9rem 0 0 -1rem;\r\n        width: 100%;\r\n        padding-top: 3rem;\r\n        -webkit-animation: slideDown .5s;\r\n                animation: slideDown .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }  \r\n    @-webkit-keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }  \r\n    @keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }\r\n    .h[_ngcontent-%COMP%] {\r\n        -webkit-animation: slideUp .5s;\r\n                animation: slideUp .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }\r\n    @-webkit-keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    @keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    .-mb[_ngcontent-%COMP%] {\r\n        margin-top: -7rem;\r\n    }\r\n    .close-btn[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n        font-size: 1.7rem;\r\n    }\r\n}\r\n\r\n\r\n.wc[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n.nav-container[_ngcontent-%COMP%] {\r\n    background: rgb(0, 68, 80);\r\n    color: rgb(238, 238, 238);\r\n    width: 22%;\r\n    min-width: 200px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n.nav-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n    margin-left: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n.menu-section[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n}\r\n.searchbox[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n    margin-top: 3rem;\r\n    text-align: left;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 4rem;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: rgb(238, 238, 238);\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(197, 197, 197);\r\n}\r\n.s-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 26px 2.4rem;\r\n    color: rgb(100, 100, 100);\r\n}\r\n.u-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 2px 2rem;\r\n}\r\n.if[_ngcontent-%COMP%] {\r\n    padding-left: 2.5rem;\r\n}\r\n.false-notify[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin-right: 1.4rem;\r\n    margin-top: -2px;\r\n    background: rgb(129, 3, 24);\r\n    border-radius: 50%;\r\n    padding: 3px 8px 0 8px;\r\n}\r\n.notif-peeker[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    margin: 25px auto;\r\n    box-shadow: 0 0 5px rgb(1, 150, 88);\r\n    background: rgba(1, 150, 88, 0.158);\r\n    padding: 13px 19px;\r\n    cursor: pointer;\r\n    transition: .5s all;\r\n}\r\n.notif-peeker[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 5px rgb(80, 150, 1);\r\n    background: rgba(80, 150, 1, 0.158);\r\n    width: 71%;\r\n}\r\n.notif-peeker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin-left: 0;\r\n    margin-top: 5px;\r\n}\r\n.bp-[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    background: rgb(80, 0, 0);\r\n    transition: .5s all;\r\n    border-radius: 7px;\r\n}\r\n.dash-container[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n    margin-top: 2.9rem;\r\n    padding: 0 10px;\r\n}\r\n.nav-content-[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.search-section-top[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 43%;\r\n    max-height: 30px;\r\n    margin-top: 17px;\r\n    margin-left: 11rem;\r\n}\r\n.search-section-top[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 7.2px 0 0 13px;\r\n    color: rgb(100, 100, 100);\r\n}\r\n.s-bar[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    padding-left: 2rem;\r\n    color: rgb(100, 100, 100);\r\n    border: 1px solid rgba(100, 100, 100, 0.39);\r\n    border-radius: 20px;\r\n    width: 100%;\r\n}\r\n.user-pic-asbutton[_ngcontent-%COMP%] {\r\n    margin-top: 22px;\r\n    margin-left: 2.5rem;\r\n    text-transform: capitalize;\r\n    color: rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.u_[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\n.mc[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n}\r\n.main-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -3rem;\r\n}\r\n.main-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin: 0 2rem 2rem 0;\r\n    display: inline-flex;\r\n    width: 250px;\r\n    height: 150px;\r\n    box-shadow: 0px 0px 5px rgb(117, 117, 117);\r\n    color: rgb(100, 100, 100);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    padding-top: 100px;\r\n    font-weight: 800;\r\n    font-size: 2rem;\r\n    transition: .5s all;\r\n    cursor: pointer;\r\n}\r\n.main-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background :rgba(0, 59, 73, 0.274);\r\n    color: rgb(238, 238, 238);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFLSSwwREFBMEQ7SUFDMUQseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBR2IsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUd6QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdDQUF3QjtnQkFBeEIsd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Qyw4Q0FBOEM7UUFDOUMsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxNQUFNLGtCQUFrQixDQUFDO1FBQ3pCLElBQUksaUJBQWlCLENBQUM7SUFDMUI7SUFIQTtRQUNJLE1BQU0sa0JBQWtCLENBQUM7UUFDekIsSUFBSSxpQkFBaUIsQ0FBQztJQUMxQjtJQUNBO1FBQ0ksOEJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsc0NBQXNDO1FBQ3RDLDhDQUE4QztRQUM5Qyx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLE1BQU0saUJBQWlCLENBQUM7UUFDeEIsSUFBSSxrQkFBa0IsQ0FBQztJQUMzQjtJQUhBO1FBQ0ksTUFBTSxpQkFBaUIsQ0FBQztRQUN4QixJQUFJLGtCQUFrQixDQUFDO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBLGtCQUFrQjtBQU9sQixrQkFBa0I7QUFDbEI7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7QUFFQSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xyXG59XHJcbi53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5mb3JtLWNvbnRlbnQge1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDE5NywgMTk3LCAxOTcpOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDExNywgMTE3LCAxMTcpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDExNywgMTE3LCAxMTcpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTcsIDExNywgMTE3KTtcclxufVxyXG4uLWZjIHtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4ubXNnLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuM3JlbSAxcmVtIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoODAsIDAsIDApO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoODAsIDAsIDApO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDgwLCAwLCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IC0xcmVtIDAgMCA4MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5oIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNsb3NlLWJ0biB7XHJcbiAgICBjb2xvcjogcmdiKDgwLCAwLCAwKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5wdXQtY29udGVudCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4ubGluayB7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xyXG59XHJcbi5saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoOTUsIDkwLCAxNCk7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig5NSwgOTAsIDE0KTtcclxufVxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZvcm0tY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBtYXJnaW46IDdyZW0gYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLi1mYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIH1cclxuICAgIC5tc2ctYm94IHtcclxuICAgICAgICBtYXJnaW46IC05cmVtIDAgMCAtMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlRG93biAuNXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIH0gIFxyXG4gICAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgICAgIGZyb20ge21hcmdpbi10b3A6IC0xM3JlbTt9XHJcbiAgICAgICAgdG8ge21hcmdpbi10b3A6IC03cmVtO31cclxuICAgIH1cclxuICAgIC5oIHtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlVXAgLjVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gICAgICAgIGZyb20ge21hcmdpbi10b3A6IC03cmVtO31cclxuICAgICAgICB0byB7bWFyZ2luLXRvcDogLTEzcmVtO31cclxuICAgIH1cclxuICAgIC4tbWIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC03cmVtO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBEQVNIQk9BUkQgQ1NTICovXHJcbi53YyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5uYXYtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCA2OCwgODApO1xyXG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ubmF2LWNvbnRlbnQgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcbi5tZW51LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uc2VhcmNoYm94LCAubmF2LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubmF2LWl0ZW0gcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcclxufVxyXG4ubmF2LWl0ZW0gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbi5uYXYtaXRlbSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XHJcbn1cclxuLnMtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAyNnB4IDIuNHJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbn1cclxuLnUtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAycHggMnJlbTtcclxufVxyXG4uaWYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbn1cclxuLmZhbHNlLW5vdGlmeSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMS40cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjksIDMsIDI0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDNweCA4cHggMCA4cHg7XHJcbn1cclxuLm5vdGlmLXBlZWtlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYigxLCAxNTAsIDg4KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMTUwLCA4OCwgMC4xNTgpO1xyXG4gICAgcGFkZGluZzogMTNweCAxOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcclxufVxyXG4ubm90aWYtcGVla2VyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDgwLCAxNTAsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MCwgMTUwLCAxLCAwLjE1OCk7XHJcbiAgICB3aWR0aDogNzElO1xyXG59XHJcbi5ub3RpZi1wZWVrZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uYnAtIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmRhc2gtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjlyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLm5hdi1jb250ZW50LSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zZWFyY2gtc2VjdGlvbi10b3Age1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExcmVtO1xyXG59XHJcbi5zZWFyY2gtc2VjdGlvbi10b3AgLmZhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDcuMnB4IDAgMCAxM3B4O1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxufVxyXG4ucy1iYXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4zOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVzZXItcGljLWFzYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi51XyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubWMge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4ubWFpbi1jb250ZW50IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3JlbTtcclxufVxyXG4ubWFpbi1jb250ZW50IGEge1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gMnJlbSAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDExNywgMTE3LCAxMTcpO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYWluLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZ2JhKDAsIDU5LCA3MywgMC4yNzQpO1xyXG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG5cclxuLyogZW5kIERBU0hCT0FSRCBDU1MgKi8iXX0= */"]
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DepositComponent =
    /*#__PURE__*/
    function () {
      function DepositComponent(dashboardService, depositService, router) {
        _classCallCheck(this, DepositComponent);

        this.dashboardService = dashboardService;
        this.depositService = depositService;
        this.router = router;
        this.depositRequestBody = {
          amount: ''
        };
      }

      _createClass(DepositComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this6.userBalance = res.data.balance;
            _this6.userStatus = res.data.status;
            _this6.userPhone = res.data.phone;
            _this6.pageTitle = 'Fintech28 | Deposit';
          });
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit() {
          var _this7 = this;

          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          var msg;
          if (localStorage.getItem('f28successmessage')) msg = localStorage.getItem('f28successmessage');
          btn.textContent = 'Processing...';

          var revertBtnText = function revertBtnText() {
            btn.textContent = 'Send Request';
            alertbox.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          this.subscription = this.depositService.makeDeposit(this.depositRequestBody).subscribe(function (res) {
            _this7.someData = res;
            var errMsg = localStorage.getItem('f28err');

            if (_this7.someData === undefined) {
              _this7.someData = "An error occured";
              alertbox.style.display = 'block';
              alertbox.textContent = errMsg;
              setTimeout(revertBtnText, 3000);
            }

            alertbox.textContent = msg;

            _this7.router.navigate(['view-transactions']);

            console.log(_this7.someData);
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
      return new (t || DepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__["DepositService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepositComponent,
      selectors: [["app-deposit"]],
      inputs: {
        depositRequestBody: "depositRequestBody"
      },
      decls: 24,
      vars: 3,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "value"], ["type", "number", "name", "amount", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button_", 3, "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.depositRequestBody.amount);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your account has been verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your account is not yet verified");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(dashboardService, router) {
        _classCallCheck(this, HeaderComponent);

        this.dashboardService = dashboardService;
        this.router = router;

        this.displayUserMenu = function () {};

        this.displayUserOptions = function () {};
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
          }; // this.displayUserMenu();
          // this.displayUserOptions();


          this.getUserData();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this8 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this8.loggedUserEmail = res.data.email;
            _this8.loggedUserPhone = res.data.phone;
            _this8.loggedUser = res.data.name;
            _this8.loggedUserStatus = res.data.status;
            if (!res || res === undefined) _this8.router.navigate(['/login']);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem('f28authkey');
          this.router.navigate(['/login']);
          window.location.reload();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 27,
      vars: 2,
      consts: [[1, "wrapper-container", "wc"], [1, "wrapper-content"], [1, "nav-container"], [1, "nav-content"], [1, "menu-section"], [1, "searchbox"], [1, "fa", "fa-search", "fa-search-2x", "s-icon"], ["type", "search", "name", "querystring", "id", "searchparam", "placeholder", "Enter search\u2026", 1, "inputfield", "if"], [1, "nav-item"], ["href", "./user.profile.html"], [1, "fa", "fa-user", "fa-user-2x", "u-icon"], ["href", "./user.notifications.html"], [1, "fa", "fa-bell", "fa-bell-2x", "u-icon"], [1, "false-notify"], ["class", "notif-peeker", 4, "ngIf"], ["class", "notif-peeker np_f", 4, "ngIf"], [1, "misc-section"], ["id", "log-out", 1, "btn-primary", "bp-", 3, "click"], [1, "notif-peeker"], [1, "fa", "fa-check", "fa-check-2x"], [1, "notif-peeker", "np_f"], [1, "fa", "fa-times", "fa-times-2x"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Fintech28 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_div_22_Template, 4, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_div_23_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUserStatus === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUserStatus === false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active  {\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    color: rgb(148, 148, 148);\r\n}\r\n.wrapper-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n.form-content[_ngcontent-%COMP%] {\r\n    \r\n    position: relative;\r\n    width: 45%;\r\n    height: 320px;\r\n    min-width: 240px;\r\n    margin: 3rem auto;\r\n    padding: 1rem;\r\n    box-shadow: 0px 0px 15px rgb(117, 117, 117);\r\n}\r\n.-fc[_ngcontent-%COMP%] {\r\n    margin: 1rem auto;\r\n    height: 500px;\r\n}\r\n.msg-box[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 200px;\r\n    padding: 2rem 1.3rem 1rem 1rem;\r\n    background: rgb(238, 238, 238);\r\n    color: rgb(100, 100, 100);\r\n    box-shadow: 0px 0px 7px rgb(80, 0, 0);\r\n    border-radius: 7px;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -1rem 0 0 80%;\r\n    z-index: 1;\r\n}\r\n.h[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.close-btn[_ngcontent-%COMP%] {\r\n    color: rgb(80, 0, 0);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 7px;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n.input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 1rem 0;\r\n    padding: 10px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    color: rgb(148, 148, 148);\r\n    border-radius: 7px;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n    color: rgb(148, 148, 148);\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n    color: rgb(95, 90, 14);\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgb(100, 100, 100);\r\n    color: rgb(197, 197, 197);\r\n    padding: 1rem;\r\n    font-size: 1.4rem;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background: rgb(95, 90, 14);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .form-content[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n        margin: 7rem auto;\r\n        margin-bottom: 0;\r\n    }\r\n    .-fc[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n    }\r\n    .msg-box[_ngcontent-%COMP%] {\r\n        margin: -9rem 0 0 -1rem;\r\n        width: 100%;\r\n        padding-top: 3rem;\r\n        -webkit-animation: slideDown .5s;\r\n                animation: slideDown .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }  \r\n    @-webkit-keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }  \r\n    @keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }\r\n    .h[_ngcontent-%COMP%] {\r\n        -webkit-animation: slideUp .5s;\r\n                animation: slideUp .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }\r\n    @-webkit-keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    @keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    .-mb[_ngcontent-%COMP%] {\r\n        margin-top: -7rem;\r\n    }\r\n    .close-btn[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n        font-size: 1.7rem;\r\n    }\r\n}\r\n\r\n\r\n.wc[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n.nav-container[_ngcontent-%COMP%] {\r\n    background: rgb(0, 68, 80);\r\n    color: rgb(238, 238, 238);\r\n    width: 22%;\r\n    min-width: 200px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n.nav-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n    margin-left: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n.menu-section[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n}\r\n.searchbox[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n    margin-top: 3rem;\r\n    text-align: left;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 4rem;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: rgb(238, 238, 238);\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(197, 197, 197);\r\n}\r\n.s-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 26px 2.4rem;\r\n    color: rgb(100, 100, 100);\r\n}\r\n.u-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 2px 2rem;\r\n}\r\n.if[_ngcontent-%COMP%] {\r\n    padding-left: 2.5rem;\r\n}\r\n.false-notify[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin-right: 1.4rem;\r\n    margin-top: -2px;\r\n    background: rgb(129, 3, 24);\r\n    border-radius: 50%;\r\n    padding: 3px 8px 0 8px;\r\n}\r\n.notif-peeker[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70%;\r\n    margin: 25px auto;\r\n    box-shadow: 0 0 5px rgb(1, 150, 88);\r\n    background: rgba(1, 150, 88, 0.158);\r\n    padding: 13px 19px;\r\n    cursor: pointer;\r\n    transition: .5s all;\r\n}\r\n.np_f[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 5px rgb(179, 0, 30);\r\n    background: rgba(150, 61, 1, 0.199);\r\n}\r\n.notif-peeker[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 5px rgb(80, 150, 1);\r\n    background: rgba(80, 150, 1, 0.158);\r\n    width: 71%;\r\n}\r\n.np_f[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 5px rgb(150, 1, 21);\r\n    background: rgba(150, 1, 21, 0.158);\r\n}\r\n.notif-peeker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin-left: 0;\r\n    margin-top: 5px;\r\n}\r\n.bp-[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    background: rgb(80, 0, 0);\r\n    transition: .5s all;\r\n    border-radius: 7px;\r\n}\r\n.dash-container[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n    margin-top: 2.9rem;\r\n    padding: 0 10px;\r\n}\r\n.nav-content-[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.search-section-top[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 43%;\r\n    max-height: 30px;\r\n    margin-top: 17px;\r\n    margin-left: 11rem;\r\n}\r\n.search-section-top[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 7.2px 0 0 13px;\r\n    color: rgb(100, 100, 100);\r\n}\r\n.s-bar[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    padding-left: 2rem;\r\n    color: rgb(100, 100, 100);\r\n    border: 1px solid rgba(100, 100, 100, 0.39);\r\n    border-radius: 20px;\r\n    width: 100%;\r\n}\r\n.user-pic-asbutton[_ngcontent-%COMP%] {\r\n    margin-top: 22px;\r\n    margin-left: 2.5rem;\r\n    text-transform: capitalize;\r\n    color: rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.u_[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\n.mc[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n}\r\n.main-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -3rem;\r\n}\r\n.main-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin: 0 2rem 2rem 0;\r\n    display: inline-flex;\r\n    width: 250px;\r\n    height: 150px;\r\n    box-shadow: 0px 0px 5px rgb(117, 117, 117);\r\n    color: rgb(100, 100, 100);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    padding-top: 100px;\r\n    font-weight: 800;\r\n    font-size: 2rem;\r\n    transition: .5s all;\r\n}\r\n.main-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background :rgba(0, 59, 73, 0.274);\r\n    color: rgb(238, 238, 238);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFLSSwwREFBMEQ7SUFDMUQseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBR2IsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUd6QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdDQUF3QjtnQkFBeEIsd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Qyw4Q0FBOEM7UUFDOUMsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxNQUFNLGtCQUFrQixDQUFDO1FBQ3pCLElBQUksaUJBQWlCLENBQUM7SUFDMUI7SUFIQTtRQUNJLE1BQU0sa0JBQWtCLENBQUM7UUFDekIsSUFBSSxpQkFBaUIsQ0FBQztJQUMxQjtJQUNBO1FBQ0ksOEJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsc0NBQXNDO1FBQ3RDLDhDQUE4QztRQUM5Qyx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLE1BQU0saUJBQWlCLENBQUM7UUFDeEIsSUFBSSxrQkFBa0IsQ0FBQztJQUMzQjtJQUhBO1FBQ0ksTUFBTSxpQkFBaUIsQ0FBQztRQUN4QixJQUFJLGtCQUFrQixDQUFDO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBLGtCQUFrQjtBQU9sQixrQkFBa0I7QUFDbEI7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCO0FBRUEsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cywgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlICB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxufVxyXG4ud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uZm9ybS1jb250ZW50IHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxOTcsIDE5NywgMTk3KTsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbn1cclxuLi1mYyB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuLm1zZy1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjNyZW0gMXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDgwLCAwLCAwKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDgwLCAwLCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig4MCwgMCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAtMXJlbSAwIDAgODAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jbG9zZS1idG4ge1xyXG4gICAgY29sb3I6IHJnYig4MCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmxpbmsge1xyXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxufVxyXG4ubGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDk1LCA5MCwgMTQpO1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTUsIDkwLCAxNCk7XHJcbn1cclxuXHJcbi8qIHN0YXJ0IG1lZGlhIGNzcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb3JtLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgbWFyZ2luOiA3cmVtIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC4tZmMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICB9XHJcbiAgICAubXNnLWJveCB7XHJcbiAgICAgICAgbWFyZ2luOiAtOXJlbSAwIDAgLTFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZURvd24gLjVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcclxuICAgICAgICBmcm9tIHttYXJnaW4tdG9wOiAtMTNyZW07fVxyXG4gICAgICAgIHRvIHttYXJnaW4tdG9wOiAtN3JlbTt9XHJcbiAgICB9XHJcbiAgICAuaCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZVVwIC41cztcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZVVwIHtcclxuICAgICAgICBmcm9tIHttYXJnaW4tdG9wOiAtN3JlbTt9XHJcbiAgICAgICAgdG8ge21hcmdpbi10b3A6IC0xM3JlbTt9XHJcbiAgICB9XHJcbiAgICAuLW1iIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3JlbTtcclxuICAgIH1cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogREFTSEJPQVJEIENTUyAqL1xyXG4ud2Mge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ubmF2LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgNjgsIDgwKTtcclxuICAgIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLm5hdi1jb250ZW50IGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4ubWVudS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbn1cclxuLnNlYXJjaGJveCwgLm5hdi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm5hdi1pdGVtIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbn1cclxuLm5hdi1pdGVtIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG4ubmF2LWl0ZW0gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG59XHJcbi5zLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMjZweCAyLjRyZW07XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG59XHJcbi51LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMnB4IDJyZW07XHJcbn1cclxuLmlmIHtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG59XHJcbi5mYWxzZS1ub3RpZnkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI5LCAzLCAyNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4IDAgOHB4O1xyXG59XHJcbi5ub3RpZi1wZWVrZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoMSwgMTUwLCA4OCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDE1MCwgODgsIDAuMTU4KTtcclxuICAgIHBhZGRpbmc6IDEzcHggMTlweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuLm5wX2Yge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoMTc5LCAwLCAzMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1MCwgNjEsIDEsIDAuMTk5KTtcclxufVxyXG4ubm90aWYtcGVla2VyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDgwLCAxNTAsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MCwgMTUwLCAxLCAwLjE1OCk7XHJcbiAgICB3aWR0aDogNzElO1xyXG59XHJcbi5ucF9mOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDE1MCwgMSwgMjEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTAsIDEsIDIxLCAwLjE1OCk7XHJcbn1cclxuLm5vdGlmLXBlZWtlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5icC0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uZGFzaC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDIuOXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ubmF2LWNvbnRlbnQtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNlYXJjaC1zZWN0aW9uLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTFyZW07XHJcbn1cclxuLnNlYXJjaC1zZWN0aW9uLXRvcCAuZmEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogNy4ycHggMCAwIDEzcHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG59XHJcbi5zLWJhciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjM5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlci1waWMtYXNidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnVfIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5tYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcbi5tYWluLWNvbnRlbnQgdWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG59XHJcbi5tYWluLWNvbnRlbnQgYSB7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAycmVtIDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuLm1haW4tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQgOnJnYmEoMCwgNTksIDczLCAwLjI3NCk7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcblxyXG4vKiBlbmQgREFTSEJPQVJEIENTUyAqLyJdfQ== */"]
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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


    var _services_loan_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loan-application.service */
    "./src/app/services/loan-application.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoanApplicationComponent =
    /*#__PURE__*/
    function () {
      function LoanApplicationComponent(dashboardService, loanApplicationService) {
        _classCallCheck(this, LoanApplicationComponent);

        this.dashboardService = dashboardService;
        this.loanApplicationService = loanApplicationService;
        this.depositRequestBody = {
          amount: ''
        };
      }

      _createClass(LoanApplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this9.userBalance = res.data.balance;
            _this9.userStatus = res.data.status;
            _this9.userPhone = res.data.phone;
            _this9.pageTitle = 'Fintech28 | Apply for loan';
          });
        }
      }, {
        key: "applyForLoan",
        value: function applyForLoan() {
          var _this10 = this;

          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          btn.textContent = 'Processing...';

          var revertBtnText = function revertBtnText() {
            btn.textContent = 'Send Request';
            alertbox.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          this.subscription = this.loanApplicationService.applyForLoan(this.depositRequestBody).subscribe(function (res) {
            _this10.someData = res;
            var errMsg = localStorage.getItem('f28err');

            if (_this10.someData === undefined) {
              _this10.someData = "An error occured";
              alertbox.style.display = 'block';
              alertbox.textContent = errMsg;
              setTimeout(revertBtnText, 3000);
            }

            console.log(_this10.someData);
          });
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
      return new (t || LoanApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loan_application_service__WEBPACK_IMPORTED_MODULE_2__["LoanApplicationService"]));
    };

    LoanApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanApplicationComponent,
      selectors: [["app-loan-application"]],
      inputs: {
        depositRequestBody: "depositRequestBody"
      },
      decls: 24,
      vars: 3,
      consts: [["id", "alert_"], ["id", "main-content-umbrella-container"], [1, "top-content"], [1, "data-container"], [1, "menu-container"], [1, "menu-content"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "amount", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button_", 3, "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoanApplicationComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.depositRequestBody.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanApplicationComponent_Template_button_click_22_listener() {
            return ctx.applyForLoan();
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
        }, {
          type: _services_loan_application_service__WEBPACK_IMPORTED_MODULE_2__["LoanApplicationService"]
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
          var _this11 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this11.userBalance = res.data.balance;
            _this11.userStatus = res.data.status;
            _this11.userPhone = res.data.phone;
            _this11.pageTitle = 'Fintech28 | Repay loan';
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
      decls: 31,
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* Still working on this component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Loan Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Your phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoanRepaymentComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.userPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanRepaymentComponent_Template_button_click_29_listener() {
            return ctx.processRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

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
        value: function ngOnInit() {
          var _this12 = this;

          this.pageTitle = 'Fintech28 | Log In';
          this.loginService.getAuthData().subscribe(function (res) {
            if (res || res !== undefined) _this12.router.navigate(['/dashboard']);

            _this12.ngOnInit();
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this13 = this;

          var checkerbtn = document.querySelector('#submit-btn');
          var alert_ = document.querySelector('.msg-box');
          var alertmsg_ = document.querySelector('#alerter');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.loginService.loginUser(this.userModel).subscribe(function (res) {
            _this13.someData = res;

            var revertBtnText = function revertBtnText() {
              checkerbtn.textContent = 'Log in';
              alert_.classList.add('h');
              localStorage.removeItem('f28err');
            };

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this13.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              alert_.textContent = _this13.someData.message;
              alert_.classList.remove('h');
              console.log(_this13.someData);
              setTimeout(revertBtnText, 3000);
            } else {
              checkerbtn.textContent = 'Encountered an error!';
              var errMsg = localStorage.getItem('f28err');
              alertmsg_.textContent = errMsg;
              alert_.classList.remove('h');
              console.log(_this13.someData);
              setTimeout(revertBtnText, 3000);
            }
          });
        }
      }, {
        key: "exitBox",
        value: function exitBox() {
          document.querySelector('.close-btn').addEventListener('click', function () {
            document.querySelector('.msg-box').classList.add('h');
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
      decls: 31,
      vars: 4,
      consts: [[1, "wrapper-container"], [1, "wrapper-content"], [1, "form-content"], [1, "form_"], [1, "msg-box", "-mb", "h"], [1, "close-btn", 3, "click"], ["id", "alerter"], [1, "input-content"], ["for", "email"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["routerLink", "/signup", 1, "link"], ["id", "submit-btn", 1, "btn-primary", 3, "click"], [1, "copyright_"], [1, "date-content"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_7_listener() {
            return ctx.exitBox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.userModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.userModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Don't have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create one here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() {
            return ctx.loginUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active  {\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-text-fill-color: rgb(148, 148, 148);\r\n}\r\n.wrapper-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n.form-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 45%;\r\n    height: 320px;\r\n    min-width: 240px;\r\n    margin: 3rem auto;\r\n    padding: 1rem;\r\n    box-shadow: 0px 0px 15px rgb(117, 117, 117);\r\n}\r\n.-fc[_ngcontent-%COMP%] {\r\n    margin: 1rem auto;\r\n    height: 500px;\r\n}\r\n.msg-box[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 200px;\r\n    padding: 2rem 1.3rem 1rem 1rem;\r\n    background: rgb(238, 238, 238);\r\n    color: rgb(100, 100, 100);\r\n    box-shadow: 0px 0px 7px rgb(80, 0, 0);\r\n    border-radius: 7px;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -1rem 0 0 80%;\r\n    z-index: 1;\r\n}\r\n.h[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.close-btn[_ngcontent-%COMP%] {\r\n    color: rgb(80, 0, 0);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 7px;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n.input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 1rem 0;\r\n    padding: 10px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    color: rgb(148, 148, 148);\r\n    border-radius: 7px;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n    color: rgb(148, 148, 148);\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n    color: rgb(95, 90, 14);\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgb(100, 100, 100);\r\n    color: rgb(197, 197, 197);\r\n    padding: 1rem;\r\n    font-size: 1.4rem;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background: rgb(95, 90, 14);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .form-content[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n        margin: 7rem auto;\r\n        margin-bottom: 0;\r\n    }\r\n    .-fc[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n    }\r\n    .msg-box[_ngcontent-%COMP%] {\r\n        margin: -9rem 0 0 -1rem;\r\n        width: 100%;\r\n        padding-top: 3rem;\r\n        -webkit-animation: slideDown .5s;\r\n                animation: slideDown .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }  \r\n    @-webkit-keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }  \r\n    @keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }\r\n    .h[_ngcontent-%COMP%] {\r\n        -webkit-animation: slideUp .5s;\r\n                animation: slideUp .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }\r\n    @-webkit-keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    @keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    .-mb[_ngcontent-%COMP%] {\r\n        margin-top: -7rem;\r\n    }\r\n    .close-btn[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n        font-size: 1.7rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7OztJQUtJLDBEQUEwRDtJQUMxRCwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUdiLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFHekIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtRQUN4QixzQ0FBc0M7UUFDdEMsOENBQThDO1FBQzlDLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksTUFBTSxrQkFBa0IsQ0FBQztRQUN6QixJQUFJLGlCQUFpQixDQUFDO0lBQzFCO0lBSEE7UUFDSSxNQUFNLGtCQUFrQixDQUFDO1FBQ3pCLElBQUksaUJBQWlCLENBQUM7SUFDMUI7SUFDQTtRQUNJLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLHNDQUFzQztRQUN0Qyw4Q0FBOEM7UUFDOUMsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxNQUFNLGlCQUFpQixDQUFDO1FBQ3hCLElBQUksa0JBQWtCLENBQUM7SUFDM0I7SUFIQTtRQUNJLE1BQU0saUJBQWlCLENBQUM7UUFDeEIsSUFBSSxrQkFBa0IsQ0FBQztJQUMzQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2IoMjU1LCAyNTUsIDI1NSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbn1cclxuLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmZvcm0tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDExNywgMTE3LCAxMTcpO1xyXG59XHJcbi4tZmMge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5tc2ctYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMS4zcmVtIDFyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig4MCwgMCwgMCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig4MCwgMCwgMCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoODAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogLTFyZW0gMCAwIDgwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLmgge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2xvc2UtYnRuIHtcclxuICAgIGNvbG9yOiByZ2IoODAsIDAsIDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnB1dC1jb250ZW50IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbnB1dGZpZWxkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5saW5rIHtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTAsIDE0KTtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDk1LCA5MCwgMTQpO1xyXG59XHJcbi5jb3B5cmlnaHRfIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxufVxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZvcm0tY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBtYXJnaW46IDdyZW0gYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLi1mYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIH1cclxuICAgIC5tc2ctYm94IHtcclxuICAgICAgICBtYXJnaW46IC05cmVtIDAgMCAtMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlRG93biAuNXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIH0gIFxyXG4gICAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgICAgIGZyb20ge21hcmdpbi10b3A6IC0xM3JlbTt9XHJcbiAgICAgICAgdG8ge21hcmdpbi10b3A6IC03cmVtO31cclxuICAgIH1cclxuICAgIC5oIHtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlVXAgLjVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gICAgICAgIGZyb20ge21hcmdpbi10b3A6IC03cmVtO31cclxuICAgICAgICB0byB7bWFyZ2luLXRvcDogLTEzcmVtO31cclxuICAgIH1cclxuICAgIC4tbWIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC03cmVtO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZW5kIG1lZGlhIGNzcyAqLyJdfQ== */"]
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
        value: function ngOnInit() {
          var _this14 = this;

          this.pageTitle = 'Fintech28 | Create Account';
          this.signUpService.getAuthData().subscribe(function (res) {
            if (res || res !== undefined) _this14.router.navigate(['/dashboard']);
          });
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var _this15 = this;

          var revertBtnText = function revertBtnText() {
            checkerbtn.textContent = 'Create my account';
            alert_.classList.add('h');
            localStorage.removeItem('f28err');
          };

          var checkerbtn = document.querySelector('#submit-btn');
          var alert_ = document.querySelector('.msg-box');
          var alertmsg_ = document.querySelector('#alerter');
          checkerbtn.textContent = 'Checking. Please wait...';
          this.subscription = this.signUpService.createUser(this.userModel).subscribe(function (res) {
            _this15.someData = res;

            if (res !== undefined && typeof res === 'object') {
              localStorage.setItem('f28authkey', _this15.someData.data.token);
              checkerbtn.textContent = 'Redirecting...';
              console.log(_this15.someData);
            } else {
              checkerbtn.textContent = 'Encountered an error!';
              var errMsg = localStorage.getItem('f28err');
              alertmsg_.textContent = errMsg;
              alert_.classList.remove('h');
              setTimeout(revertBtnText, 3000);
            }
          });
        }
      }, {
        key: "exitBox",
        value: function exitBox() {
          document.querySelector('.close-btn').addEventListener('click', function () {
            document.querySelector('.msg-box').classList.add('h');
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
      decls: 39,
      vars: 6,
      consts: [[1, "wrapper-container"], [1, "wrapper-content"], [1, "form-content"], [1, "form_"], [1, "msg-box", "-mb", "h"], [1, "close-btn", 3, "click"], ["id", "alerter"], [1, "input-content"], ["for", ""], ["type", "text", "name", "name", "id", "name", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "id", "email", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "text", "name", "phone", "id", "phone", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["routerLink", "/login", 1, "link"], ["id", "submit-btn", 1, "btn-primary", 3, "click"], [1, "copyright_"], [1, "date-content"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_span_click_7_listener() {
            return ctx.exitBox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.userModel.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.userModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.userModel.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.userModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Already have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Log in here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_33_listener() {
            return ctx.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Create my account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isThisYear, " Fintech28");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active  {\r\n    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    -webkit-text-fill-color: rgb(148, 148, 148);\r\n}\r\n.wrapper-container[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n.form-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 45%;\r\n    height: 520px;\r\n    min-width: 240px;\r\n    margin: 1rem auto;\r\n    padding: 1rem;\r\n    box-shadow: 0px 0px 15px rgb(117, 117, 117);\r\n}\r\n.msg-box[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 200px;\r\n    padding: 2rem 1.3rem 1rem 1rem;\r\n    background: rgb(238, 238, 238);\r\n    color: rgb(100, 100, 100);\r\n    box-shadow: 0px 0px 7px rgb(80, 0, 0);\r\n    border-radius: 7px;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -1rem 0 0 80%;\r\n    z-index: 1;\r\n}\r\n.h[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.close-btn[_ngcontent-%COMP%] {\r\n    color: rgb(80, 0, 0);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 7px;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n.input-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width: 83%;\r\n    margin: 1rem 0;\r\n    padding: 10px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    color: rgb(148, 148, 148);\r\n    border-radius: 7px;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n    color: rgb(148, 148, 148);\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n    color: rgb(95, 90, 14);\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgb(100, 100, 100);\r\n    color: rgb(197, 197, 197);\r\n    padding: 1rem;\r\n    font-size: 1.4rem;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    cursor: pointer;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background: rgb(95, 90, 14);\r\n}\r\n.copyright_[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .form-content[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n        margin: 7rem auto;\r\n        margin-bottom: 0;\r\n    }\r\n    .-fc[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n    }\r\n    .msg-box[_ngcontent-%COMP%] {\r\n        margin: -9rem 0 0 -1rem;\r\n        width: 100%;\r\n        padding-top: 3rem;\r\n        -webkit-animation: slideDown .5s;\r\n                animation: slideDown .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }  \r\n    @-webkit-keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }  \r\n    @keyframes slideDown {\r\n        from {margin-top: -13rem;}\r\n        to {margin-top: -7rem;}\r\n    }\r\n    .h[_ngcontent-%COMP%] {\r\n        -webkit-animation: slideUp .5s;\r\n                animation: slideUp .5s;\r\n        animation-timing-function: ease-in-out;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        transition: ease-in-out;\r\n    }\r\n    @-webkit-keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    @keyframes slideUp {\r\n        from {margin-top: -7rem;}\r\n        to {margin-top: -13rem;}\r\n    }\r\n    .-mb[_ngcontent-%COMP%] {\r\n        margin-top: -7rem;\r\n    }\r\n    .close-btn[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n        font-size: 1.7rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7O0lBS0ksMERBQTBEO0lBQzFELDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBR2IsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBR3pCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBLG9CQUFvQjtBQUVwQjtJQUNJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0NBQXdCO2dCQUF4Qix3QkFBd0I7UUFDeEIsc0NBQXNDO1FBQ3RDLDhDQUE4QztRQUM5Qyx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLE1BQU0sa0JBQWtCLENBQUM7UUFDekIsSUFBSSxpQkFBaUIsQ0FBQztJQUMxQjtJQUhBO1FBQ0ksTUFBTSxrQkFBa0IsQ0FBQztRQUN6QixJQUFJLGlCQUFpQixDQUFDO0lBQzFCO0lBQ0E7UUFDSSw4QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0QixzQ0FBc0M7UUFDdEMsOENBQThDO1FBQzlDLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksTUFBTSxpQkFBaUIsQ0FBQztRQUN4QixJQUFJLGtCQUFrQixDQUFDO0lBQzNCO0lBSEE7UUFDSSxNQUFNLGlCQUFpQixDQUFDO1FBQ3hCLElBQUksa0JBQWtCLENBQUM7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cywgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlICB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggcmdiKDI1NSwgMjU1LCAyNTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxufVxyXG4ud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uZm9ybS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbn1cclxuLm1zZy1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjNyZW0gMXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDgwLCAwLCAwKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDgwLCAwLCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig4MCwgMCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAtMXJlbSAwIDAgODAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jbG9zZS1idG4ge1xyXG4gICAgY29sb3I6IHJnYig4MCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmxpbmsge1xyXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxufVxyXG4ubGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDk1LCA5MCwgMTQpO1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTUsIDkwLCAxNCk7XHJcbn1cclxuLmNvcHlyaWdodF8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG59XHJcblxyXG4vKiBzdGFydCBtZWRpYSBjc3MgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIG1hcmdpbjogN3JlbSBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuLWZjIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgLm1zZy1ib3gge1xyXG4gICAgICAgIG1hcmdpbjogLTlyZW0gMCAwIC0xcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC41cztcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgfSAgXHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XHJcbiAgICAgICAgZnJvbSB7bWFyZ2luLXRvcDogLTEzcmVtO31cclxuICAgICAgICB0byB7bWFyZ2luLXRvcDogLTdyZW07fVxyXG4gICAgfVxyXG4gICAgLmgge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAuNXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgICAgICAgZnJvbSB7bWFyZ2luLXRvcDogLTdyZW07fVxyXG4gICAgICAgIHRvIHttYXJnaW4tdG9wOiAtMTNyZW07fVxyXG4gICAgfVxyXG4gICAgLi1tYiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTdyZW07XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBlbmQgbWVkaWEgY3NzICovIl19 */"]
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

    function ViewLoansComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Loan history");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Account is still unverified:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wait for an admin to verify your account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Balance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Want to contact us to confirm your account verification?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Send a message by filling the form below.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Your phone:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewLoansComponent_div_4_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.userPhone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sunject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewLoansComponent_div_4_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.processRequest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send Inquiry");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx_r31.userBalanceUnverified, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.userPhone);
      }
    }

    function ViewLoansComponent_div_5_div_23_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amount borrowed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirmed on date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "To be repaid by date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.senton.split("T")[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.dueon);
      }
    }

    function ViewLoansComponent_div_5_div_23_table_2_span_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This loan request is being processed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewLoansComponent_div_5_div_23_table_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount borrowed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed on date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "To be repaid by date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Amount repaid:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Balance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ViewLoansComponent_div_5_div_23_table_2_span_43_Template, 3, 0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", transaction_r37.amount, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.senton.split("T")[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.dueon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", transaction_r37.totalrepaid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", transaction_r37.amount - transaction_r37.totalrepaid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r37.isconfirmed === false);
      }
    }

    function ViewLoansComponent_div_5_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewLoansComponent_div_5_div_23_table_1_Template, 17, 3, "table", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewLoansComponent_div_5_div_23_table_2_Template, 44, 6, "table", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r37.isfullyrepaid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !transaction_r37.isfullyrepaid);
      }
    }

    function ViewLoansComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My loan history");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verified\u2002");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Balance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewLoansComponent_div_5_div_23_Template, 3, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.userLoanMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx_r32.userBalance, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.userLoanData);
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
          var _this16 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this16.userBalanceUnverified = res.data.balance;
            _this16.userBalance = res.data.balance;
            _this16.userStatus = res.data.status;
            _this16.userPhone = res.data.phone;
            _this16.pageTitle = 'Fintech28 | See Transactions';
          });
        }
      }, {
        key: "viewLoans",
        value: function viewLoans() {
          var _this17 = this;

          this.subscription = this.ViewLoansService.getLoans().subscribe(function (res) {
            _this17.userBalanceUnverified = res.data.balance;
            _this17.userLoanData = res.data;
            _this17.userLoanMessage = res.message;
            console.log(_this17.userLoanData);
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
      decls: 6,
      vars: 3,
      consts: [["id", "main-content-umbrella-container"], ["class", "top-content", 4, "ngIf"], ["class", "menu-container", 4, "ngIf"], [1, "top-content"], [1, "data-container"], [1, "stat-container"], [1, "unv-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "data-container", "d-c"], [1, "contact-container"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "value", "Account verification\u2026", 1, "inputfield"], ["type", "button", "id", "button_", 3, "click"], [1, "menu-container"], [1, "menu-content"], [1, "v-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "i-spanned"], [1, "fa", "fa-check", "fa-check-2x"], [4, "ngFor", "ngForOf"], ["class", "grn", 4, "ngIf"], ["class", "rd", 4, "ngIf"], [1, "grn"], [1, "rd"], ["class", "stxt", 4, "ngIf"], [1, "stxt"]],
      template: function ViewLoansComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewLoansComponent_div_4_Template, 34, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewLoansComponent_div_5_Template, 24, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === true);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#main-content-umbrella-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n.data-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.stat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.d-c[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.d-c[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.unv-stat[_ngcontent-%COMP%], .v-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n}\r\n.unv-stat[_ngcontent-%COMP%] {\r\n    background: rgb(156, 1, 1);\r\n}\r\n.v-stat[_ngcontent-%COMP%] {\r\n    background: rgb(89, 156, 1);\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n    list-style: none;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    background-color: rgb(230, 230, 230);\r\n    border: 1px solid rgb(189, 189, 189);\r\n    border-radius: 7px;\r\n    width: 140px;\r\n    height: 130px;\r\n    margin-right: 15px;\r\n    margin-bottom: 1rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    line-height: 130px;\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n.contact-container[_ngcontent-%COMP%] {\r\n    margin: 5rem 0;\r\n    margin-top: 0;\r\n}\r\n.form_[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 250px;\r\n    margin-left: 2rem;\r\n    margin-bottom: 3rem;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    border: 1px solid rgb(122, 121, 121);\r\n}\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-container[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    padding: 5px;\r\n}\r\n.form_[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    background-color: rgb(89, 156, 1);\r\n    border: 1px solid rgb(89, 156, 1);\r\n    padding: 10px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n.rd[_ngcontent-%COMP%], .grn[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    padding-left: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n.rd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .grn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgb(230, 230, 230);\r\n    line-height: 20%;\r\n}\r\n.rd[_ngcontent-%COMP%] {\r\n    background: rgb(150, 16, 16);\r\n}\r\n.grn[_ngcontent-%COMP%] {\r\n    background-color: rgb(89, 156, 1);\r\n}\r\n.grnltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(89, 156, 1);\r\n}\r\n.redltlttxt[_ngcontent-%COMP%] {\r\n    color: rgb(150, 16, 16);\r\n}\r\n.stxt[_ngcontent-%COMP%] {\r\n    color: rgb(199, 199, 199);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 87%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        width: 94%;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 83%;\r\n    }\r\n}\r\n@media screen and (max-width: 425px) {\r\n    .data-container[_ngcontent-%COMP%] {\r\n        width: 78%;\r\n    }\r\n    .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWxvYW5zL3ZpZXctbG9hbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctbG9hbnMvdmlldy1sb2Fucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGVudC11bWJyZWxsYS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZGF0YS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uc3RhdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZC1jIHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuLmQtYyBoMywgLmQtYyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uZC1jIHAge1xyXG4gICAgY29sb3I6IHJnYig4OSwgMTU2LCAxKTtcclxufVxyXG4udW52LXN0YXQsIC52LXN0YXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi51bnYtc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU2LCAxLCAxKTtcclxufVxyXG4udi1zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4OSwgMTU2LCAxKTtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCB1bCB7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWVudS1jb250YWluZXIgLm1lbnUtY29udGVudCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxufVxyXG4uZ3JubHRsdHR4dCB7XHJcbiAgICBjb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5yZWRsdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNiwgMTYpO1xyXG59XHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDVyZW0gMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmZvcm1fIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIyLCAxMjEsIDEyMSk7XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXRmaWVsZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb3JtXyBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTU2LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4OSwgMTU2LCAxKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJkLCAuZ3JuIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG4ucmQgcCwgLmdybiBwIHtcclxuICAgIGNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBsaW5lLWhlaWdodDogMjAlO1xyXG59XHJcbi5yZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLCAxNiwgMTYpO1xyXG59XHJcbi5ncm4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCAxNTYsIDEpO1xyXG59XHJcbi5ncm5sdGx0dHh0IHtcclxuICAgIGNvbG9yOiByZ2IoODksIDE1NiwgMSk7XHJcbn1cclxuLnJlZGx0bHR0eHQge1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDE2LCAxNik7XHJcbn1cclxuLnN0eHQge1xyXG4gICAgY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcclxufVxyXG5cclxuLyogc3RhcnQgbWVkaWEgY3NzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgdWwge1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgbGkge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGVuZCBtZWRpYSBjc3MgKi8iXX0= */"]
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

    function ViewTransactionsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Account is still unverified:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wait for an admin to verify your account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Balance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Want to contact us to confirm your account verification?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Send a message by filling the form below.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Your phone:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewTransactionsComponent_div_4_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.userPhone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sunject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send Inquiry");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx_r16.userBalanceUnverified, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.userPhone);
      }
    }

    function ViewTransactionsComponent_div_5_p_21_Template(rf, ctx) {
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

    function ViewTransactionsComponent_div_5_li_23_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r22.transactiontype, " ");
      }
    }

    function ViewTransactionsComponent_div_5_li_23_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r22.transactiontype, " ");
      }
    }

    function ViewTransactionsComponent_div_5_li_23_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ksh. ", transaction_r22.amount, " ");
      }
    }

    function ViewTransactionsComponent_div_5_li_23_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ksh. ", transaction_r22.amount, " ");
      }
    }

    function ViewTransactionsComponent_div_5_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewTransactionsComponent_div_5_li_23_p_1_Template, 2, 1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewTransactionsComponent_div_5_li_23_p_2_Template, 2, 1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewTransactionsComponent_div_5_li_23_p_3_Template, 2, 1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewTransactionsComponent_div_5_li_23_p_4_Template, 2, 1, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r22.transactiontype === "Deposit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r22.transactiontype === "Withdrawal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r22.transactiontype === "Deposit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r22.transactiontype === "Withdrawal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r22.datetime.split("T")[0], " ");
      }
    }

    function ViewTransactionsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verified\u2002");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Your Balance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewTransactionsComponent_div_5_p_21_Template, 6, 0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewTransactionsComponent_div_5_li_23_Template, 7, 5, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", ctx_r17.userBalance, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.userTransactions === "No transactions found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.userTransactions);
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
          var _this18 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this18.userBalanceUnverified = res.data.balance;
            _this18.userBalance = res.data.balance;
            _this18.userStatus = res.data.status;
            _this18.userPhone = res.data.phone;
            _this18.pageTitle = 'Fintech28 | See Transactions';
          });
        }
      }, {
        key: "viewTransactions",
        value: function viewTransactions() {
          var _this19 = this;

          this.subscription = this.viewTransactionsService.getTransactions().subscribe(function (res) {
            _this19.userTransactions = res.transactions;
            _this19.pageTitle = 'Fintech28 | See Transactions';
          }); // console.log(this.userTransactions);
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
      decls: 6,
      vars: 3,
      consts: [["id", "main-content-umbrella-container"], ["class", "top-content", 4, "ngIf"], ["class", "menu-container", 4, "ngIf"], [1, "top-content"], [1, "data-container"], [1, "stat-container"], [1, "unv-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "data-container", "d-c"], [1, "contact-container"], ["action", "", 1, "form_"], [1, "input-container"], ["for", "amount"], ["type", "text", "name", "amount", "readonly", "", 1, "inputfield", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "value", "Account verification\u2026", 1, "inputfield"], ["type", "button", "id", "button_"], [1, "menu-container"], [1, "menu-content"], [1, "v-stat", 2, "color", "rgb(216, 215, 215)", "font-size", "13px"], [1, "i-spanned"], [1, "fa", "fa-check", "fa-check-2x"], [4, "ngIf"], [1, "menu-lister"], [4, "ngFor", "ngForOf"], ["routerLink", "/deposit"], ["class", "grnltlttxt", 4, "ngIf"], ["class", "redltlttxt", 4, "ngIf"], [1, "grnltlttxt"], [1, "redltlttxt"]],
      template: function ViewTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewTransactionsComponent_div_4_Template, 34, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewTransactionsComponent_div_5_Template, 24, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus === true);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var WithdrawComponent =
    /*#__PURE__*/
    function () {
      function WithdrawComponent(dashboardService, WithdrawService, router) {
        _classCallCheck(this, WithdrawComponent);

        this.dashboardService = dashboardService;
        this.WithdrawService = WithdrawService;
        this.router = router;
        this.withdrawalRequestBody = {
          amount: ''
        };
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.subscription = this.dashboardService.getAuthData().subscribe(function (res) {
            _this20.userBalance = res.data.balance;
            _this20.userStatus = res.data.status;
            _this20.userPhone = res.data.phone;
            _this20.pageTitle = 'Fintech28 | Withdraw';
          });
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit() {
          var _this21 = this;

          var btn = document.querySelector('#button_');
          var alertbox = document.querySelector('#alert_');
          var msg;
          if (localStorage.getItem('f28successmessage')) msg = localStorage.getItem('f28successmessage');
          btn.textContent = 'Processing...';

          var revertBtnText = function revertBtnText() {
            btn.textContent = 'Send Request';
            alertbox.style.display = 'none';
            localStorage.removeItem('f28err');
          };

          this.subscription = this.WithdrawService.withdrawAmount(this.withdrawalRequestBody).subscribe(function (res) {
            var errMsg = localStorage.getItem('f28err');
            _this21.someData = res;

            if (_this21.someData === undefined) {
              _this21.someData = "An error occured";
              alertbox.style.display = 'block';
              alertbox.textContent = errMsg;
              setTimeout(revertBtnText, 3000);
            }

            alertbox.textContent = msg;

            _this21.router.navigate(['view-transactions']);

            console.log(_this21.someData);
            console.log(_this21.someData);
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
      return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_withdraw_service__WEBPACK_IMPORTED_MODULE_2__["WithdrawService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
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
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]],
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
  "./src/app/services/admin-approveloan.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/admin-approveloan.service.ts ***!
    \*******************************************************/

  /*! exports provided: AdminApproveloanService */

  /***/
  function srcAppServicesAdminApproveloanServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminApproveloanService", function () {
      return AdminApproveloanService;
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

    var AdminApproveloanService =
    /*#__PURE__*/
    function () {
      function AdminApproveloanService(http) {
        _classCallCheck(this, AdminApproveloanService);

        this.http = http;
      }

      _createClass(AdminApproveloanService, [{
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
        key: "seeAllLoans",
        value: function seeAllLoans() {
          return this.http.get("".concat(endpoint, "/admin/loans"), HttpOptions);
        }
      }, {
        key: "approveLoan",
        value: function approveLoan(loanId) {
          return this.http.patch("".concat(endpoint, "/admin/approve-loan/loanId=").concat(loanId), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_loan) {
            console.log(_loan);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Approve loan')));
          ;
        }
      }]);

      return AdminApproveloanService;
    }();

    AdminApproveloanService.ɵfac = function AdminApproveloanService_Factory(t) {
      return new (t || AdminApproveloanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdminApproveloanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminApproveloanService,
      factory: AdminApproveloanService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminApproveloanService, [{
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
    /***/

  },

  /***/
  "./src/app/services/admin-verifyuser.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/admin-verifyuser.service.ts ***!
    \******************************************************/

  /*! exports provided: AdminVerifyuserService */

  /***/
  function srcAppServicesAdminVerifyuserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminVerifyuserService", function () {
      return AdminVerifyuserService;
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

    var AdminVerifyuserService =
    /*#__PURE__*/
    function () {
      function AdminVerifyuserService(http) {
        _classCallCheck(this, AdminVerifyuserService);

        this.http = http;
      }

      _createClass(AdminVerifyuserService, [{
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
        key: "seeAllUsers",
        value: function seeAllUsers() {
          return this.http.get("".concat(endpoint, "/admin/users"), HttpOptions);
        }
      }, {
        key: "verifyUser",
        value: function verifyUser(userId) {
          return this.http.patch("".concat(endpoint, "/admin/verify-user/userId=").concat(userId), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_user) {
            console.log(_user);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Verify user')));
          ;
        }
      }]);

      return AdminVerifyuserService;
    }();

    AdminVerifyuserService.ɵfac = function AdminVerifyuserService_Factory(t) {
      return new (t || AdminVerifyuserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdminVerifyuserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminVerifyuserService,
      factory: AdminVerifyuserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminVerifyuserService, [{
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
          try {
            return this.http.get("".concat(endpoint, "/logged-data"), HttpOptions);
          } catch (err) {
            console.log(err);
          }
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
  "./src/app/services/loan-application.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/loan-application.service.ts ***!
    \******************************************************/

  /*! exports provided: LoanApplicationService */

  /***/
  function srcAppServicesLoanApplicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanApplicationService", function () {
      return LoanApplicationService;
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

    var LoanApplicationService =
    /*#__PURE__*/
    function () {
      function LoanApplicationService(http) {
        _classCallCheck(this, LoanApplicationService);

        this.http = http;
      }

      _createClass(LoanApplicationService, [{
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
        key: "applyForLoan",
        value: function applyForLoan(amount) {
          return this.http.post("".concat(endpoint, "/loan-application"), JSON.stringify(amount), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_amount) {
            console.log(_amount);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Loan application')));
        }
      }]);

      return LoanApplicationService;
    }();

    LoanApplicationService.ɵfac = function LoanApplicationService_Factory(t) {
      return new (t || LoanApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoanApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoanApplicationService,
      factory: LoanApplicationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanApplicationService, [{
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].token;
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

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http, router) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.router = router;
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
          var _this22 = this;

          return this.http.post("".concat(endpoint, "/auth/login-user"), JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_user) {
            console.log(_user);
            if (_user) localStorage.setItem('f28authkey', _user['data'].token);
            window.location.reload();

            _this22.router.navigate(['/dashboard']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Log in')));
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          return this.http.get("".concat(endpoint, "/logged-data"), HttpOptions);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var endpoint = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].apiGlobal;
    var token = _env_env__WEBPACK_IMPORTED_MODULE_4__["globalUri"].token;
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

    var SignupService =
    /*#__PURE__*/
    function () {
      function SignupService(http, router) {
        _classCallCheck(this, SignupService);

        this.http = http;
        this.router = router;
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
          var _this23 = this;

          return this.http.post("".concat(endpoint, "/auth/create-user"), JSON.stringify(user), HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_user) {
            console.log(_user);
            if (_user) localStorage.setItem('f28authkey', _user['data'].token);
            window.location.reload();

            _this23.router.navigate(['/dashboard']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign up')));
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          return this.http.get("".concat(endpoint, "/logged-data"), HttpOptions);
        }
      }]);

      return SignupService;
    }();

    SignupService.ɵfac = function SignupService_Factory(t) {
      return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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
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


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footernav/footernav.component */
    "./src/app/components/footernav/footernav.component.ts");
    /* harmony import */


    var _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/loan-application/loan-application.component */
    "./src/app/components/loan-application/loan-application.component.ts");
    /* harmony import */


    var _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/loan-repayment/loan-repayment.component */
    "./src/app/components/loan-repayment/loan-repayment.component.ts");
    /* harmony import */


    var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/deposit/deposit.component */
    "./src/app/components/deposit/deposit.component.ts");
    /* harmony import */


    var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/withdraw/withdraw.component */
    "./src/app/components/withdraw/withdraw.component.ts");
    /* harmony import */


    var _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/view-loans/view-loans.component */
    "./src/app/components/view-loans/view-loans.component.ts");
    /* harmony import */


    var _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/view-transactions/view-transactions.component */
    "./src/app/components/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/admin-verifyuser/admin-verifyuser.component */
    "./src/app/components/admin-verifyuser/admin-verifyuser.component.ts");
    /* harmony import */


    var _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/admin-approveloan/admin-approveloan.component */
    "./src/app/components/admin-approveloan/admin-approveloan.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_9__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_10__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_11__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_13__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_14__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_15__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_16__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_17__["AdminApproveloanComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_footernav_footernav_component__WEBPACK_IMPORTED_MODULE_9__["FooternavComponent"], _components_loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_10__["LoanApplicationComponent"], _components_loan_repayment_loan_repayment_component__WEBPACK_IMPORTED_MODULE_11__["LoanRepaymentComponent"], _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"], _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_13__["WithdrawComponent"], _components_view_loans_view_loans_component__WEBPACK_IMPORTED_MODULE_14__["ViewLoansComponent"], _components_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_15__["ViewTransactionsComponent"], _components_admin_verifyuser_admin_verifyuser_component__WEBPACK_IMPORTED_MODULE_16__["AdminVerifyuserComponent"], _components_admin_approveloan_admin_approveloan_component__WEBPACK_IMPORTED_MODULE_17__["AdminApproveloanComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
      decls: 2,
      vars: 0,
      template: function DepositComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deposit works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5jc3MifQ== */"]
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

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 0,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { faHome } from '@fortawesome/free-solid-svg-icons';


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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Your message");

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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hbi1hcHBsaWNhdGlvbi9sb2FuLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hbi1yZXBheW1lbnQvbG9hbi1yZXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 10,
      vars: 0,
      consts: [[1, "top"], ["routerLink", "/home"], [1, "error-container"], ["src", "assets/images/f28-logo.png", "alt", "logo-image", 1, "err-l"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 404!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Under Maintenance | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This page will be available soon. We're preparing to serve you better.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".top[_ngcontent-%COMP%] {\r\n    padding: 3rem;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.error-container[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    margin-top: 5rem;\r\n    width: 70%;\r\n    color: rgb(87, 0, 0);\r\n}\r\na[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n}\r\n.err-l[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 2rem;\r\n    width: 6%;\r\n    min-width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5lcnJvci1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6IHJnYig4NywgMCwgMCk7XHJcbn1cclxuYSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uZXJyLWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbn0iXX0= */"]
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
        return [];
      }, null);
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 10,
      vars: 0,
      consts: [[1, "top"], ["routerLink", "/home"], [1, "error-container"], ["src", "assets/images/f28-logo.png", "alt", "logo-image", 1, "err-l"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 404!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Under Maintenance | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This page will be available soon. We're preparing to serve you better.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".top[_ngcontent-%COMP%] {\r\n    padding: 3rem;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n.error-container[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    margin-top: 5rem;\r\n    width: 70%;\r\n    color: rgb(87, 0, 0);\r\n}\r\na[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n}\r\n.err-l[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: 2rem;\r\n    width: 6%;\r\n    min-width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbG9yOiByZ2IoODcsIDAsIDApO1xyXG59XHJcbmEge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuLmVyci1sIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG59Il19 */"]
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
        return [];
      }, null);
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1sb2Fucy92aWV3LWxvYW5zLmNvbXBvbmVudC5jc3MifQ== */"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy10cmFuc2FjdGlvbnMvdmlldy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"]
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LmNzcyJ9 */"]
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
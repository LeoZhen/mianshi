webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cnyt_component__ = __webpack_require__("../../../../../src/app/cnyt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hkdt_component__ = __webpack_require__("../../../../../src/app/hkdt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cnyt_mint_component__ = __webpack_require__("../../../../../src/app/cnyt-mint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cnyt_redeemption_component__ = __webpack_require__("../../../../../src/app/cnyt-redeemption.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redeem_component__ = __webpack_require__("../../../../../src/app/redeem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redeem_token_component__ = __webpack_require__("../../../../../src/app/redeem-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redeem_request_component__ = __webpack_require__("../../../../../src/app/redeem-request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: '/cnyt/cnytmint',
        pathMatch: 'full'
    },
    {
        path: 'cnyt',
        component: __WEBPACK_IMPORTED_MODULE_2__cnyt_component__["a" /* CnytComponent */],
        children: [
            {
                path: 'cnytmint',
                component: __WEBPACK_IMPORTED_MODULE_4__cnyt_mint_component__["a" /* CnytMintComponent */]
            },
            {
                path: 'cnytredeemption',
                component: __WEBPACK_IMPORTED_MODULE_5__cnyt_redeemption_component__["a" /* CnytRedeemptionComponent */]
            }
        ]
    },
    {
        path: 'hkdt',
        component: __WEBPACK_IMPORTED_MODULE_3__hkdt_component__["a" /* HkdtComponent */]
    },
    {
        path: 'redeem',
        component: __WEBPACK_IMPORTED_MODULE_6__redeem_component__["a" /* RedeemComponent */],
    },
    {
        path: 'redeemtoken',
        component: __WEBPACK_IMPORTED_MODULE_7__redeem_token_component__["a" /* RedeemTokenComponent */]
    },
    {
        path: 'redeemrequest',
        component: __WEBPACK_IMPORTED_MODULE_8__redeem_request_component__["a" /* RedeemRequestComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var USER = {
    name: 'user',
    address: '0x90Ea8.......',
    cnyt: 1000,
    hkdt: 1000,
};
var AppComponent = (function () {
    function AppComponent() {
        this.user = USER;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/left-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/left-nav.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cnyt_component__ = __webpack_require__("../../../../../src/app/cnyt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hkdt_component__ = __webpack_require__("../../../../../src/app/hkdt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cnyt_mint_component__ = __webpack_require__("../../../../../src/app/cnyt-mint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cnyt_redeemption_component__ = __webpack_require__("../../../../../src/app/cnyt-redeemption.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redeem_component__ = __webpack_require__("../../../../../src/app/redeem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redeem_bank_component__ = __webpack_require__("../../../../../src/app/redeem-bank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redeem_token_component__ = __webpack_require__("../../../../../src/app/redeem-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__redeem_request_component__ = __webpack_require__("../../../../../src/app/redeem-request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__cnyt_component__["a" /* CnytComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hkdt_component__["a" /* HkdtComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cnyt_mint_component__["a" /* CnytMintComponent */],
                __WEBPACK_IMPORTED_MODULE_7__cnyt_redeemption_component__["a" /* CnytRedeemptionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__redeem_component__["a" /* RedeemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__redeem_bank_component__["a" /* RedeemBankComponent */],
                __WEBPACK_IMPORTED_MODULE_10__redeem_token_component__["a" /* RedeemTokenComponent */],
                __WEBPACK_IMPORTED_MODULE_11__redeem_request_component__["a" /* RedeemRequestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cnyt-mint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  margin-bottom: 10px;\r\n  border: 1px solid #dbdbdb;\r\n  cursor: pointer;\r\n}\r\n.borderb {\r\n  border: 1px solid black;\r\n}\r\n.backgroundb {\r\n  background: #f1f2f3;\r\n}\r\n.head {\r\n  padding: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.head .headlfet {\r\n  padding-left: 50px;\r\n  position: relative;\r\n}\r\n.head .headlfet .circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid #767676;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  left: 7px;\r\n  top: 7px;\r\n}\r\n.head .headlfet .title {\r\n  font-size: 14px;\r\n}\r\n.head .headlfet .date {\r\n  font-size: 8px;\r\n  color: #9b9b9b;\r\n}\r\n.head .headright {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n  padding-right: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n/* .head .headright img {\r\n  width: 21px;\r\n  height: 12px;\r\n  margin-left: 55px;\r\n  margin-top: 3px; \r\n  cursor: pointer;\r\n} */\r\n.arrowt {\r\n  width: 21px;\r\n  height: 12px;\r\n  margin-left: 20px;\r\n  margin-top: 3px; \r\n  cursor: pointer;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/arrowt.png") + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.arrowb {\r\n  width: 21px;\r\n  height: 12px;\r\n  margin-left: 20px;\r\n  margin-top: 3px; \r\n  cursor: pointer;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/arrowb.png") + ")no-repeat;\r\n  background-size: 100%;\r\n}\r\n.graycolor {\r\n  color: #9b9b9b;\r\n}\r\n.blackcolor {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n.hidebox {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 20px 0;\r\n  border-top: 1px solid black;\r\n}\r\n.hideleft {\r\n  width: 50%;\r\n  padding-left: 55px;\r\n  border-right: 1px solid black;\r\n}\r\n.hideight {\r\n  width: 50%;\r\n}\r\n.first,.second,.third{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-left: 30px;\r\n}\r\n.hidebox span {\r\n  margin-bottom: 10px;\r\n}\r\n.hidebox .hideleft span:nth-of-type(1) {\r\n  width: 50%;\r\n}\r\n.hidebox .hideight span:nth-of-type(1) {\r\n  width: 50%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cnyt-mint.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li [ngClass]=\"{'borderb': toggle1}\">\r\n    <div class=\"head\" [ngClass]=\"{'backgroundb': toggle1}\" (click)=\"gotoggle1()\"\r\n    >\r\n      <div class=\"headlfet\">\r\n        <div class=\"circle\"></div>\r\n        <span class=\"title\">Request NO.XXXXXX001</span>\r\n        <div class=\"date\">\r\n          <span>2017-11-05</span>\r\n          <span>19:0021</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"headright\">\r\n        <div>SUBMITTED</div>\r\n        <div [ngClass]=\"{'arrowb': toggle1, 'arrowt': !toggle1}\"></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"toggle1\" class=\"hidebox\">\r\n      <div class=\"hideleft\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">CURRENCY</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">AMOUNT</span>\r\n          <span class=\"blackcolor\">1000</span>\r\n        </div>\r\n        <div class=\"third\">\r\n          <span class=\"graycolor\">BANK</span>\r\n          <span class=\"blackcolor\">BOCHK XXXXXXXX</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"hideight\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">TOKEN</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">CODE</span>\r\n          <span class=\"blackcolor\">XA5R930L</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li [ngClass]=\"{'borderb': toggle2}\">\r\n    <div class=\"head\" [ngClass]=\"{'backgroundb': toggle2}\"  (click)=\"gotoggle2()\">\r\n      <div class=\"headlfet\">\r\n        <div class=\"circle\"></div>\r\n        <span class=\"title\">Request NO.XXXXXX001</span>\r\n        <div class=\"date\">\r\n          <span>2017-11-05</span>\r\n          <span>19:0021</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"headright\">\r\n        <div>SUBMITTED</div>\r\n        <div [ngClass]=\"{'arrowb': toggle2, 'arrowt': !toggle2}\"></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"toggle2\" class=\"hidebox\">\r\n      <div class=\"hideleft\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">CURRENCY</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">AMOUNT</span>\r\n          <span class=\"blackcolor\">1000</span>\r\n        </div>\r\n        <div class=\"third\">\r\n          <span class=\"graycolor\">BANK</span>\r\n          <span class=\"blackcolor\">BOCHK XXXXXXXX</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"hideight\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">TOKEN</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">CODE</span>\r\n          <span class=\"blackcolor\">XA5R930L</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li [ngClass]=\"{'borderb': !toggle3}\">\r\n    <div class=\"head\"  [ngClass]=\"{'backgroundb': !toggle3}\" (click)=\"gotoggle3()\">\r\n      <div class=\"headlfet\">\r\n        <div class=\"circle\"></div>\r\n        <span class=\"title\">Request NO.XXXXXX001</span>\r\n        <div class=\"date\">\r\n          <span>2017-11-05</span>\r\n          <span>19:0021</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"headright\">\r\n        <div>SUBMITTED</div>\r\n        <div [ngClass]=\"{'arrowb': !toggle3, 'arrowt': toggle3}\"></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!toggle3\" class=\"hidebox\">\r\n      <div class=\"hideleft\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">CURRENCY</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">AMOUNT</span>\r\n          <span class=\"blackcolor\">1000</span>\r\n        </div>\r\n        <div class=\"third\">\r\n          <span class=\"graycolor\">BANK</span>\r\n          <span class=\"blackcolor\">BOCHK XXXXXXXX</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"hideight\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">TOKEN</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">CODE</span>\r\n          <span class=\"blackcolor\">XA5R930L</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li [ngClass]=\"{'borderb': toggle4}\">\r\n    <div class=\"head\" [ngClass]=\"{'backgroundb': toggle4}\" (click)=\"gotoggle4()\">\r\n      <div class=\"headlfet\">\r\n        <div class=\"circle\"></div>\r\n        <span class=\"title\">Request NO.XXXXXX001</span>\r\n        <div class=\"date\">\r\n          <span>2017-11-05</span>\r\n          <span>19:0021</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"headright\">\r\n        <div>SUBMITTED</div>\r\n        <div [ngClass]=\"{'arrowb': toggle4, 'arrowt': !toggle4}\"></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"toggle4\" class=\"hidebox\">\r\n      <div class=\"hideleft\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">CURRENCY</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">AMOUNT</span>\r\n          <span class=\"blackcolor\">1000</span>\r\n        </div>\r\n        <div class=\"third\">\r\n          <span class=\"graycolor\">BANK</span>\r\n          <span class=\"blackcolor\">BOCHK XXXXXXXX</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"hideight\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">TOKEN</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">CODE</span>\r\n          <span class=\"blackcolor\">XA5R930L</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/cnyt-mint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnytMintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CnytMintComponent = (function () {
    function CnytMintComponent() {
        this.toggle1 = false;
        this.toggle2 = false;
        this.toggle3 = false;
        this.toggle4 = false;
    }
    CnytMintComponent.prototype.gotoggle1 = function () {
        this.toggle1 = !this.toggle1;
    };
    CnytMintComponent.prototype.gotoggle2 = function () {
        this.toggle2 = !this.toggle2;
    };
    CnytMintComponent.prototype.gotoggle3 = function () {
        this.toggle3 = !this.toggle3;
    };
    CnytMintComponent.prototype.gotoggle4 = function () {
        this.toggle4 = !this.toggle4;
    };
    CnytMintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cnyt-mint',
            template: __webpack_require__("../../../../../src/app/cnyt-mint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cnyt-mint.component.css")]
        })
    ], CnytMintComponent);
    return CnytMintComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cnyt-redeemption.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li [ngClass]=\"{'borderb': toggle1}\">\r\n    <div class=\"head\" [ngClass]=\"{'backgroundb': toggle1}\" (click)=\"gotoggle1()\"\r\n    >\r\n      <div class=\"headlfet\">\r\n        <div class=\"circle\"></div>\r\n        <span class=\"title\">Request NO.XXXXXX001</span>\r\n        <div class=\"date\">\r\n          <span>2017-11-05</span>\r\n          <span>19:0021</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"headright\">\r\n        <div>SUBMITTED</div>\r\n        <div [ngClass]=\"{'arrowb': toggle1, 'arrowt': !toggle1}\"></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"toggle1\" class=\"hidebox\">\r\n      <div class=\"hideleft\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">CURRENCY</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">AMOUNT</span>\r\n          <span class=\"blackcolor\">1000</span>\r\n        </div>\r\n        <div class=\"third\">\r\n          <span class=\"graycolor\">BANK</span>\r\n          <span class=\"blackcolor\">BOCHK XXXXXXXX</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"hideight\">\r\n        <div class=\"first\">\r\n          <span class=\"graycolor\">TOKEN</span>\r\n          <span class=\"blackcolor\">CNY</span>\r\n        </div>\r\n        <div class=\"second\">\r\n          <span class=\"graycolor\">CODE</span>\r\n          <span class=\"blackcolor\">XA5R930L</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/cnyt-redeemption.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnytRedeemptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CnytRedeemptionComponent = (function () {
    function CnytRedeemptionComponent() {
        this.toggle1 = false;
    }
    CnytRedeemptionComponent.prototype.gotoggle1 = function () {
        this.toggle1 = !this.toggle1;
    };
    CnytRedeemptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cnyt-redeemption',
            template: __webpack_require__("../../../../../src/app/cnyt-redeemption.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cnyt-mint.component.css")]
        })
    ], CnytRedeemptionComponent);
    return CnytRedeemptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cnyt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n  font-weight: bold;\r\n}\r\n.zhixian {\r\n  margin-bottom: 40px;\r\n}\r\n.zhixian .zhixiandate {\r\n  margin-top: 15px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.zhixian .zhixiandate span {\r\n  color: #8090a5;\r\n}\r\n.zhixian .zhixiandate .buttons button {\r\n  width: 22px;\r\n  height: 25px;\r\n  color: #cccfd4;\r\n  background-color: #f8fafc;\r\n  outline: 0;\r\n  border: 0;\r\n  border: 1px solid #cccfd4;\r\n  border-radius: 2px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.zhixian .charts img {\r\n  width: 100%;\r\n}\r\n\r\n.request nav {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n.request nav a {\r\n  margin-right: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.request nav a.active {\r\n  border-bottom: 2px solid black;\r\n  font-weight: bold;\r\n}\r\n.dbuttons {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.dbuttons a {\r\n  color: white;\r\n  width: 120px;\r\n  height: 30px;\r\n  background: #4a4a4a;\r\n  text-align: center;\r\n  margin: 20px;\r\n  text-decoration: none;\r\n  line-height: 30px;\r\n  border-radius: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cnyt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">{{title}}</div>\r\n<div class=\"zhixian\">\r\n  <div class=\"zhixiandate\">\r\n    <span>12 Jan 2018</span>\r\n    <div class=\"buttons\">\r\n      <button class=\"before\">\r\n        <</button>\r\n          <button class=\"next\">></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"charts\">\r\n    <img src=\"./assets/zhixian.png\">\r\n  </div>\r\n</div>\r\n<div class=\"request\">\r\n  <div class=\"title\">REQUEST</div>\r\n  <div class=\"content\">\r\n    <nav>\r\n      <a routerLink=\"/cnyt/cnytmint\" routerLinkActive=\"active\">MINT(4)</a>\r\n      <a routerLink=\"/cnyt/cnytredeemption\" routerLinkActive=\"active\">REDEEMPTION(4)</a>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n    <div class=\"dbuttons\">\r\n      <a>Mint</a>\r\n      <a routerLink=\"/redeem\">Redeem</a>\r\n      <a>Transfer</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cnyt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnytComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CnytComponent = (function () {
    function CnytComponent() {
        this.title = 'CNYT/ETH';
    }
    CnytComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cnyt',
            template: __webpack_require__("../../../../../src/app/cnyt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cnyt.component.css")]
        })
    ], CnytComponent);
    return CnytComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hkdt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  background-color: lightblue;\r\n  font-size: 40px;\r\n  height: 1500px;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hkdt.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  hkdt\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/hkdt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkdtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HkdtComponent = (function () {
    function HkdtComponent() {
    }
    HkdtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hkdt',
            template: __webpack_require__("../../../../../src/app/hkdt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hkdt.component.css")]
        })
    ], HkdtComponent);
    return HkdtComponent;
}());



/***/ }),

/***/ "../../../../../src/app/left-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".leftnav {\r\n  position: fixed;\r\n  width: 250px;\r\n  height: 100%;\r\n  border-right: 2px solid black;\r\n}\r\n.container {\r\n  margin-left: 250px;\r\n  padding: 20px;\r\n}\r\n.userbox img {\r\n  display: block;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n  width: 40%;\r\n  margin-bottom: 50px;\r\n}\r\n.userbox {\r\n  font-size: 12px;\r\n  padding-bottom: 100px;\r\n}\r\n.userbox .username,.useraddress {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 10px;\r\n  margin-left: 20%;\r\n  font-weight: bold;\r\n}\r\n\r\n.userbox .username label {\r\n  color: #9b9b9b;\r\n  width: 80px;\r\n}\r\n\r\n.userbox .useraddress label {\r\n  color: #9b9b9b;\r\n  width: 80px;\r\n}\r\n.leftmid {\r\n  width: 100%;\r\n}\r\n.leftmid .cnyt,.hkdt {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 80px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 20px;\r\n  padding-left: 50px;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border-top: 2px solid black;\r\n  border-bottom: 2px solid black;\r\n  cursor: pointer;\r\n}\r\n.leftmid .cnyt:hover {\r\n  background-color: #e2e5ea;\r\n}\r\n/* .leftmid .cnyt.active {\r\n  background-color: #e2e5ea\r\n} */\r\n.leftmid .hkdt:hover {\r\n  background-color: #e2e5ea;\r\n}\r\n/* .leftmid .hkdt.active {\r\n  background-color: #e2e5ea\r\n} */\r\n.leftmid .hkdt {\r\n  border-top: 0;\r\n}\r\n.leftmid .circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n  background-color: #c6c9ce;\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\nnav a.active {\r\n  background-color: #e2e5ea\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"leftnav\">\r\n  <div class=\"userbox\">\r\n    <img src=\"./assets/avatar.png\">\r\n    <div class=\"username\">\r\n      <label>NAME</label>\r\n      <div>{{user.name}}</div>\r\n    </div>\r\n    <div class=\"useraddress\">\r\n      <label>ADDRESS</label>\r\n      <div>{{user.address}}</div>\r\n    </div>\r\n  </div>\r\n  <nav class=\"leftmid\">\r\n    <a class=\"cnyt\" routerLink='/cnyt/cnytmint' routerLinkActive='active'>\r\n      <span class=\"circle\"></span>\r\n      <label>CNYT</label>\r\n      <div>{{user.cnyt}}</div>\r\n    </a>\r\n    <a class=\"hkdt\" routerLink='/hkdt' routerLinkActive='active'>\r\n      <span class=\"circle\"></span>\r\n      <label>HKDT</label>\r\n      <div>{{user.hkdt}}</div>\r\n    </a>\r\n  </nav>\r\n</div>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/redeem-bank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\r\n  width: 75%;\r\n  margin: 20px auto;\r\n  border: 1px solid black;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n.nav .first {\r\n  width: 30.3%;\r\n  background: black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding-left: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.nav .first .word {\r\n  color: white;\r\n}\r\n.nav .second {\r\n  width: 36.3%;\r\n  position: relative;\r\n}\r\n.nav .third {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n}\r\n.nav .black1 {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent white;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .black2 {\r\n  right: -40px;\r\n  position: absolute;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent black;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .white1 {\r\n  right: 0;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.nav .white2 {\r\n  right: -15px;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.garycolor {\r\n  color: #9b9b9b;\r\n}\r\n.part1,.part2,.part3 {\r\n  width: 40%;\r\n  margin: 20px auto;\r\n}\r\n.part1 input {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n.part2 {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.part2 .token {\r\n  width: 50%;\r\n}\r\n.part2 .amount {\r\n  width: 50%;\r\n}\r\n.part2 p {\r\n  margin-bottom: 10px;\r\n}\r\n.part2 select {\r\n  height: 30px;\r\n  outline: none;\r\n  width: 100px;\r\n  padding: 0 10px;\r\n}\r\n.part2 input {\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.part3 input {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n.dbuttons {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.dbuttons a {\r\n  color: white;\r\n  width: 120px;\r\n  height: 30px;\r\n  background: #4a4a4a;\r\n  text-align: center;\r\n  margin: 20px;\r\n  text-decoration: none;\r\n  line-height: 30px;\r\n  border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redeem-bank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n  <div class=\"first\">\r\n    <div class=\"black1\"></div>\r\n    <div class=\"word\">1.BANK INFO</div>\r\n    <div class=\"black2\"></div>\r\n  </div>\r\n  <div class=\"second\">\r\n    <div class=\"white1\"></div>\r\n    <div>2.TOKEN TRANSFER</div>\r\n  </div>\r\n  <div class=\"third\">\r\n    <div class=\"white2\"></div>\r\n    <div>3.REQUEST COMPLETE</div>\r\n  </div>\r\n</div>\r\n<div class=\"part1\">\r\n  <p class=\"garycolor\">REDEEMPTION REQUEST</p>\r\n  <input readonly type=\"text\" placeholder=\"Request NO.BXXXXXX 001\">\r\n</div>\r\n<div class=\"part2\">\r\n  <div class=\"token\">\r\n    <p class=\"garycolor\">TOKEN</p>\r\n    <select name=\"\" id=\"\">\r\n      <option value=\"\">CNYT</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"amount\">\r\n    <p class=\"garycolor\">AMOUNT</p>\r\n    <input type=\"text\" placeholder=\"Enter amount\">\r\n  </div>\r\n</div>\r\n<div class=\"part3\">\r\n  <p class=\"garycolor\">BANK ACCOUNT</p>\r\n  <input type=\"text\" placeholder=\"Enter bank account\">\r\n</div>\r\n<div class=\"dbuttons\">\r\n  <a routerLink=\"/redeemtoken\">Next</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/redeem-bank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemBankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RedeemBankComponent = (function () {
    function RedeemBankComponent() {
    }
    RedeemBankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'redeem-bank',
            template: __webpack_require__("../../../../../src/app/redeem-bank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/redeem-bank.component.css")]
        })
    ], RedeemBankComponent);
    return RedeemBankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/redeem-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toptitle {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-bottom: 1px solid #eaeaea;\r\n  height: 80px;\r\n  line-height: 80px;\r\n} \r\n.requestword {\r\n  margin-top: 40px;\r\n  width: 85%;\r\n  margin: 20px auto;\r\n  font-size: 14px;\r\n}\r\n.requestword p {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n}\r\n.nav {\r\n  width: 75%;\r\n  margin: 20px auto;\r\n  border: 1px solid black;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n.nav .third {\r\n  width: 30.3%;\r\n  background: black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding-left: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.nav .third .word {\r\n  color: white;\r\n}\r\n.nav .first {\r\n  width: 36.3%;\r\n  position: relative;\r\n}\r\n.nav .second {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n}\r\n.nav .black1 {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent white;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .black2 {\r\n  right: -40px;\r\n  position: absolute;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent black;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .white1 {\r\n  left: -15px;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.nav .white2 {\r\n  left: -15px;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.garycolor {\r\n  color: #9b9b9b;\r\n}\r\n.requestbiao {\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  border: 1px solid black;\r\n}\r\n.requestbiao .title {\r\n  border-bottom: 1px solid black;\r\n  background: #f1f2f3;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 80px;\r\n  box-sizing: border-box;\r\n  padding: 20px 50px;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.requestbiao .title .titleright {\r\n  margin-top: 5px;\r\n}\r\n.requestbiao .content {\r\n  padding: 20px 50px;\r\n}\r\n.requestbiao .content .part1,.part2,.part3,.part4 {\r\n  margin-bottom: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.requestbiao .content .part1 span:nth-of-type(1) {\r\n  width: 40%;\r\n}\r\n.requestbiao .content .part2 span:nth-of-type(1) {\r\n  width: 40%;\r\n}\r\n.requestbiao .content .part3 span:nth-of-type(1) {\r\n  width: 40%;\r\n}\r\n.requestbiao .content .part4 span:nth-of-type(1) {\r\n  width: 40%;\r\n}\r\n.dbuttons {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.dbuttons a {\r\n  color: white;\r\n  width: 120px;\r\n  height: 30px;\r\n  background: #4a4a4a;\r\n  text-align: center;\r\n  margin: 20px;\r\n  text-decoration: none;\r\n  line-height: 30px;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redeem-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toptitle\">\r\n  REDEEM\r\n</div>\r\n<div class=\"nav\">\r\n  <div class=\"first\">\r\n    <div class=\"white1\"></div>\r\n    <div>1.BANK INFO</div>\r\n  </div>\r\n  <div class=\"second\">\r\n    <div class=\"white2\"></div>\r\n    <div>2.TOKEN TRANSFER</div>\r\n  </div>\r\n  <div class=\"third\">\r\n    <div class=\"black1\"></div>\r\n    <div class=\"word\">3.REQUEST COMPLETE</div>\r\n    <div class=\"black2\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"requestword\">\r\n  <p>\r\n    Redeem request hs been successfully sent to Admin. You will get notified once proceed to the next step.\r\n  </p>\r\n  <p>\r\n    To check request status, please go to dashboard.\r\n  </p>\r\n</div>\r\n<div class=\"requestbiao\">\r\n  <div class=\"title\">\r\n    <div class=\"titleleft\">\r\n      <p>Request NO.BXXXXXX001</p>\r\n      <p class=\"garycolor\">2017-10-21 18:37:47</p>\r\n    </div>\r\n    <div class=\"titleright\">SUBMITTED</div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"part1\">\r\n      <span class=\"garycolor\">CURRENCY</span>\r\n      <span>CNY</span>\r\n    </div>\r\n    <div class=\"part2\">\r\n      <span class=\"garycolor\">AMOUNT</span>\r\n      <span>1000</span>\r\n    </div>\r\n    <div class=\"part3\">\r\n      <span class=\"garycolor\">BANK</span>\r\n      <span>BOCHK XXXXXXXXX</span>\r\n    </div>\r\n    <div class=\"part4\">\r\n      <span class=\"garycolor\">TRANSFER TO ADDRESS</span>\r\n      <span>OX90E4bE5CD24970a8GI56Vhm05Hi32</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"dbuttons\">\r\n  <a routerLink=\"/cnyt/cnytmint\">Complete</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/redeem-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RedeemRequestComponent = (function () {
    function RedeemRequestComponent() {
    }
    RedeemRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'redeem-request',
            template: __webpack_require__("../../../../../src/app/redeem-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/redeem-request.component.css")]
        })
    ], RedeemRequestComponent);
    return RedeemRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/redeem-token.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-bottom: 1px solid #eaeaea;\r\n  height: 80px;\r\n  line-height: 80px;\r\n} \r\n.nav {\r\n  width: 75%;\r\n  margin: 20px auto;\r\n  border: 1px solid black;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n.nav .second {\r\n  width: 30.3%;\r\n  background: black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding-left: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.nav .second .word {\r\n  color: white;\r\n}\r\n.nav .first {\r\n  width: 36.3%;\r\n  position: relative;\r\n}\r\n.nav .third {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n}\r\n.nav .black1 {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent white;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .black2 {\r\n  right: -40px;\r\n  position: absolute;\r\n  width: 0;     \r\n  height: 0;\r\n  border-width: 20px; \r\n  border-color: transparent  transparent transparent black;\r\n  border-style: dashed   dashed dashed solid;\r\n}\r\n.nav .white1 {\r\n  left: -15px;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.nav .white2 {\r\n  right: -15px;\r\n  top: 5px;\r\n  position: absolute;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\r\n  width: 29px;\r\n  height: 29px;\r\n  border: 1px solid black;\r\n  border-bottom: 0;\r\n  border-left: 0;\r\n}\r\n.garycolor {\r\n  color: #9b9b9b;\r\n}\r\n.part1,.part2,.part3 {\r\n  width: 40%;\r\n  margin: 20px auto;\r\n}\r\n.part1 input {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n.part2 {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.part2 .token {\r\n  width: 50%;\r\n}\r\n.part2 .amount {\r\n  width: 50%;\r\n}\r\n.part2 p {\r\n  margin-bottom: 10px;\r\n}\r\n.part2 select {\r\n  height: 30px;\r\n  outline: none;\r\n  width: 100px;\r\n  padding: 0 10px;\r\n}\r\n.part2 input {\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.part3 input {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n.dbuttons {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.dbuttons a {\r\n  color: white;\r\n  width: 120px;\r\n  height: 30px;\r\n  background: #4a4a4a;\r\n  text-align: center;\r\n  margin: 20px;\r\n  text-decoration: none;\r\n  line-height: 30px;\r\n  border-radius: 3px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redeem-token.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    REDEEM\r\n</div>\r\n<div class=\"nav\">\r\n  <div class=\"first\">\r\n    <div class=\"white1\"></div>\r\n    <div>1.BANK INFO</div>\r\n  </div>\r\n  <div class=\"second\">\r\n    <div class=\"black1\"></div>\r\n    <div class=\"word\">2.TOKEN TRANSFER</div>\r\n    <div class=\"black2\"></div>\r\n  </div>\r\n  <div class=\"third\">\r\n    <div class=\"white2\"></div>\r\n    <div>3.REQUEST COMPLETE</div>\r\n  </div>\r\n</div>\r\n<div class=\"part1\">\r\n  <p class=\"garycolor\">REDEEMPTION REQUEST</p>\r\n  <input readonly type=\"text\" placeholder=\"Request NO.BXXXXXX 001\">\r\n</div>\r\n<div class=\"part2\">\r\n  <div class=\"token\">\r\n    <p class=\"garycolor\">TOKEN</p>\r\n    <select name=\"\" id=\"\" disabled>\r\n      <option value=\"\">CNYT</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"amount\">\r\n    <p class=\"garycolor\">AMOUNT</p>\r\n    <input type=\"text\" placeholder=\"1000\" readonly>\r\n  </div>\r\n</div>\r\n<div class=\"part3\">\r\n  <p class=\"garycolor\">BANK ACCOUNT</p>\r\n  <input type=\"text\" placeholder=\"BOCHK XXXXXXXXX\" readonly>\r\n</div>\r\n<div class=\"dbuttons\">\r\n    <a (click)=\"goBack()\">Back</a>\r\n    <a routerLink=\"/redeemrequest\">Submit</a>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/redeem-token.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemTokenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedeemTokenComponent = (function () {
    function RedeemTokenComponent(location) {
        this.location = location;
    }
    RedeemTokenComponent.prototype.goBack = function () {
        this.location.back();
    };
    RedeemTokenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'redeem-token',
            template: __webpack_require__("../../../../../src/app/redeem-token.component.html"),
            styles: [__webpack_require__("../../../../../src/app/redeem-token.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], RedeemTokenComponent);
    return RedeemTokenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/redeem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-bottom: 1px solid #eaeaea;\r\n  height: 80px;\r\n  line-height: 80px;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redeem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  REDEEM\r\n</div>\r\n<redeem-bank></redeem-bank>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/redeem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RedeemComponent = (function () {
    function RedeemComponent() {
    }
    RedeemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'redeem',
            template: __webpack_require__("../../../../../src/app/redeem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/redeem.component.css")]
        })
    ], RedeemComponent);
    return RedeemComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/arrowb.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAYCAIAAAADE/iqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NDEyNTAwMkNENTgxMUU3OUU5OEFFMzhFOEY5REVGMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NDEyNTAwM0NENTgxMUU3OUU5OEFFMzhFOEY5REVGMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMzRENjdEQ0Q1ODExRTc5RTk4QUUzOEU4RjlERUYyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyMzRENjdFQ0Q1ODExRTc5RTk4QUUzOEU4RjlERUYyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/zWkMgAAAitJREFUeNrElj2vwWAUx5+WhAEJMWLDjNj4Al42r18AHwAzifgAxO5txyAsmNkZWUkkTAih9wi3ep3qrfbKPVPTnPP/tU///+cpxTAM+b+i2avT6dTtdj/6NJfLBRAAetxiviuXy1EUlUwmd7sd84EC2UQiAYh8Ps/evOOr1SpN31ciEAgsl8u/ZYOg3++/LzhN1+v1B77X62k0Gu4qOZ3O2Wz2V+zpdOpwOLj6Wq223+9f8efzORQK4e9kNpuHw6F89mAwMJlMWD8cDgP6+vbr9ToWi+EOnU7XaDTksGu1GrwoVo7H4wB9fPvj8ZhOp3GfQqEoFosSwGDyQqHA+olbmUwGzP/DercqlUoqlQoPvBuHm8mxjlqtLpfL3E7yNNlut41GI56EOKxWK5Em9/l8WAFkO53OUzPB8+Px2Gaz4XmXy/VrHMDkkBo8a7fbQRb3E16V+Xzu8XiwisViGY1GAiaHvOApr9e7WCx4R8grrc1mE41GeePQbDZxP+wkvCaHTG2321cUIrCSEAdwKVZUKpVPcQCTQ0ZwZzabBREBBPnVSuBVcCyWTqVSh8Nhv99DLsSYXCJeIA7BYJDdyZ9MDiNilInIKINvrVarmFMVUjOZTETKEvGbCcQBPCzMFjC5XPwtDpFI5BUbkgINbwmSdzdz2K55TwfuTv5BPBsH9nSAi0qlIk1HIh6q1Wrp9XqDwSDS5LxFyfm3BIfDv5vb7ZasIAsvv74EGAAZrf1xTTjqYgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/arrowt.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAYCAIAAAADE/iqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQzBGMjRFQkNENUMxMUU3OUUwQUFGRkQzM0NCQzk0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQzBGMjRFQ0NENUMxMUU3OUUwQUFGRkQzM0NCQzk0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBRkJEQzJDQ0Q1QzExRTc5RTBBQUZGRDMzQ0JDOTQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBRkJEQzJEQ0Q1QzExRTc5RTBBQUZGRDMzQ0JDOTQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HmzetAAAAqFJREFUeNpi/PjpM8PAASZKNJ89e/bcubMDY/2WLVuCAgOCAgO3bt1Kb+tnzZqZlJjw4cOH9+/fJybEz5k9m07W//nzp7amprSk5OfPnxARIKO4uKiutgYoRappjCQlvY8fP+bn561ftw6rbFBw8IQJE/n5+Wni+4cPH0aEh+GyGwjWrV0LVPDo0SPqWw9M5IEB/seOHcOvDKgAqIz47ECU9cC0HRoSfPfuXTRxT09Pd3d3NME7d+6EBAcTmx2AcY8fdff0cHBwYGpMSk5+9frNy1evE5OSMGWBWoAaCRqOz/o3b9/l5+djGs3CwlJf34Cssra2jpmZGVNlQUEB0BByrH/0+AkwJWOayMvLO3vOHEz1M2fN4uHhwVQfHBLy+MlT0qy/dPmKpaUlplkyMrJbt27DZdbmzVukZWQwdVlZWV2+cpVY6/ftP6CiooJpioGB4anTZ/DH5clTp/X1DTD1qqqqAo0lbP2y5SuEhYUx9Xt4eNy5e49gUgKi23fuurm5Y5oANHb5ipX4rO/q7mZnZ8fUCUzbL16+IsZuCAIqTkhMJCY7MMATeV4elkQOTM9oiZxI9OHjJ2B2YGLCUq4Ac9Pbd+8R1t9/8BCYPrEm8lmzZ5NhNxzNmDkTa3YICQkFWgqy/v2Hj/4BAZgqgGl4y5atlNgNzw5S0tKY5gcEBgKtBgYPU1xcHDc3N7IcMPWuX7/B1s6O8uaUnb090Cg9fX1kQWCQAC1lgsSNi4trT28vPJ6AiXzN2rXq6urUatBpaGisXbsOXjsALert63N2dkFUOVFR0eXlFYyMjMBEvmDhIjExMeo2KYEGLly0GJgdgFZUVFRGRESiNzd+//69b98+Nzc3oAoatWv//fu3e/duJycnVlZWclo7VAcAAQYAGjRtfWh5SQkAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
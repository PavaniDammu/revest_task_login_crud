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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <nav class=\"navbar navbar-expand navbar-dark bg-brown\">\r\n        <a href=\"#\" class=\"navbar-brand marginLeft\">Revest task</a>\r\n\r\n        <!-- Navbar Content -->\r\n        <div class=\"collapse navbar-collapse right-section\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item listUserTab\" *ngIf=\"isLoggedIn()\">\r\n                    <a routerLink=\"users\" class=\"nav-link\">Users</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\r\n                    <a routerLink=\"add\" class=\"nav-link\">Add</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn()\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#\" class=\"nav-link\" (click)=\"logout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class=\"container mt-3 main-container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-form\">\n    <h2>{{ isLoginMode ? 'Login' : 'Sign Up' }}</h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n        <div class=\"form-group  mt-2\">\n            <label for=\"userName\">UserName:</label>\n            <input type=\"text\" id=\"userName\" formControlName=\"userName\" required>\n            <div *ngIf=\"loginForm.get('userName').hasError('required') && loginForm.get('userName').touched\" class=\"error-message\">\n                userName is required.\n            </div>\n        </div>\n\n        <div class=\"form-group  mt-2\">\n            <label for=\"password\">Password:</label>\n            <input type=\"password\" id=\"password\" formControlName=\"password\" required>\n            <div *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\" class=\"error-message\">\n                Password is required.\n            </div>\n        </div>\n\n        <button type=\"submit\" [disabled]=\"loginForm.invalid\">Submit</button>\n    </form>\n\n    <p class=\"mt-3\"> {{ isLoginMode ? 'Don\\'t have an account? ' : 'Already have an account? ' }}\n        <a (click)=\"toggleMode()\" class=\"signup-link\">{{ isLoginMode ? 'Sign Up' : 'Login' }}</a>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-create/user-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-create/user-create.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"submit-form\">\r\n    <div *ngIf=\"!submitted\">\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"saveUser()\">\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" />\r\n                <div *ngIf=\"userForm.get('firstName').hasError('required') && userForm.get('firstName').touched\" class=\"error-message text-danger\">\r\n                    First Name is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" />\r\n                <div *ngIf=\"userForm.get('lastName').hasError('required') && userForm.get('lastName').touched\" class=\"error-message text-danger\">\r\n                    Last Name is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"email\">Email</label>\r\n                <input class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"ex: name@gmail.com\" />\r\n                <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"error-message text-danger\">\r\n                    Email is required\r\n                </div>\r\n                <div *ngIf=\"userForm.get('email').hasError('email') && userForm.get('email').touched\" class=\"error-message text-danger\">\r\n                    Enter a valid email address\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"phone\">Phone</label>\r\n                <input type=\"tel\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" />\r\n                <div *ngIf=\"userForm.get('phone').hasError('required') && userForm.get('phone').touched\" class=\"error-message text-danger\">\r\n                    Phone is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"dob\">DOB</label>\r\n                <input class=\"form-control\" id=\"dob\" placeholder=\"YYYY-MM-DD\" formControlName=\"dob\" />\r\n                <div *ngIf=\"userForm.get('dob').hasError('required') && userForm.get('dob').touched\" class=\"error-message text-danger\">\r\n                    Date of Birth is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"gender\">Gender</label>\r\n                <input class=\"form-control\" id=\"gender\" formControlName=\"gender\" />\r\n                <div *ngIf=\"userForm.get('gender').hasError('required') && userForm.get('gender').touched\" class=\"error-message text-danger\">\r\n                    Gender is required\r\n                </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-bg mt-3\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"submitted\">\r\n        <h4>User created Successfully!</h4>\r\n        <button class=\"btn btn-bg\" (click)=\"newUser()\">Add</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-details/user-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-details/user-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currentUser\" class=\"edit-form\">\r\n    <form>\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"firstName\">FirstName</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"currentUser.firstName\" name=\"firstName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"lastName\">LastName</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"currentUser.lastName\" name=\"lastName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"email\">Email</label>\r\n            <input class=\"form-control\" id=\"email\" required [(ngModel)]=\"currentUser.email\" name=\"email\" email placeholder=\"ex: name@gmail.com\" />\r\n        </div>\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"phone\">Phone</label>\r\n            <input type=\"tel\" class=\"form-control\" id=\"phone\" required [(ngModel)]=\"currentUser.phone\" name=\"phone\" />\r\n        </div>\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"dob\">DOB</label>\r\n            <input class=\"form-control\" id=\"dob\" placeholder=\"YYYY-MM-DD\" required [(ngModel)]=\"currentUser.dob\" name=\"dob\" />\r\n        </div>\r\n        <div class=\"form-group mt-2\">\r\n            <label for=\"gender\">Gender</label>\r\n            <input class=\"form-control\" id=\"gender\" required [(ngModel)]=\"currentUser.gender\" name=\"gender\" />\r\n        </div>\r\n    </form>\r\n\r\n    <button class=\"btn mt-3 deletBtn\" (click)=\"deleteUser()\">\r\n        <i class=\"fas fa-trash delete-icon\"></i> Delete</button>\r\n\r\n    <button type=\"submit\" class=\"btn mt-3 updateBtn\" (click)=\"updateUser()\">\r\n        <i class=\"fas fa-edit edit-icon\"></i> Update</button>\r\n    <p>{{ message }}</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list row\">\r\n    <div class=\"col-md-8\">\r\n        <div class=\"input-group mb-3\">\r\n            <i class=\"fas fa-search search-icon\"></i>\r\n            <input type=\"text\" [(ngModel)]=\"searchQuery\" (input)=\"onSearch()\" placeholder=\"Search by userName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <h4>Users List</h4>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item usersList\" matTooltip=\"Click to get user details\" *ngFor=\"let user of users | filterUser: searchQuery; let i = index\" [class.active]=\"i == currentIndex\" (click)=\"showSelectedUser(user, i)\">\r\n                <span [innerHTML]=\"(user.userName) | highlightSearch: searchQuery\"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"users?.length === 0\">\r\n        <div class=\"no-results ml-1\">\r\n            <p>No results</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\" [ngClass]=\"{'userDetails': currentUser}\">\r\n        <div *ngIf=\"currentUser\">\r\n            <h5>Details of selected user</h5>\r\n            <div>\r\n                <label class=\"textFont\">FirstName:  </label> {{ currentUser.firstName }}\r\n            </div>\r\n            <div>\r\n                <label class=\"textFont\">LastName:  </label> {{ currentUser.lastName }}\r\n            </div>\r\n            <div>\r\n                <label class=\"textFont\">Email:  </label> {{ currentUser.email }}\r\n            </div>\r\n            <div>\r\n                <label class=\"textFont\">Phone:  </label> {{ currentUser.phone }}\r\n            </div>\r\n            <div>\r\n                <label class=\"textFont\">Gender:  </label> {{ currentUser.gender }}\r\n            </div>\r\n\r\n            <a class=\"btn mt-2 userEdit\" routerLink=\"/users/{{ currentUser.id }} \">\r\n                <i class=\"fas fa-edit edit-icon\"></i> Edit</a>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-create/user-create.component */ "./src/app/components/user-create/user-create.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








const routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'users', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'add', component: _components_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'users/:id', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-brown {\r\n    background-color: #953601;\r\n}\r\n\r\n.right-section {\r\n    justify-content: right;\r\n}\r\n\r\na.nav-link {\r\n    color: white !important;\r\n}\r\n\r\n/* .main-container {\r\n    margin: 0;\r\n} */\r\n\r\n.listUserTab {\r\n    padding-right: 50px;\r\n}\r\n\r\n.marginLeft {\r\n    margin-left: 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1icm93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUzNjAxO1xyXG59XHJcblxyXG4ucmlnaHQtc2VjdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG5hLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxufSAqL1xyXG5cclxuLmxpc3RVc2VyVGFiIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW5MZWZ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Demo-FE';
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-create/user-create.component */ "./src/app/components/user-create/user-create.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/components/users-list/users-list.component.ts");
/* harmony import */ var _app_components_filterUser_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/components/filterUser.pipe */ "./src/app/components/filterUser.pipe.ts");
/* harmony import */ var _app_components_highlight_search_text_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/components/highlight-search-text.pipe */ "./src/app/components/highlight-search-text.pipe.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_authInterceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authInterceptor */ "./src/app/services/authInterceptor.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__["UserCreateComponent"],
            _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"],
            _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"],
            _app_components_filterUser_pipe__WEBPACK_IMPORTED_MODULE_13__["filterUsersPipe"],
            _app_components_highlight_search_text_pipe__WEBPACK_IMPORTED_MODULE_14__["HighlightSearchPipe"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            _app_components_filterUser_pipe__WEBPACK_IMPORTED_MODULE_13__["filterUsersPipe"],
            _app_components_highlight_search_text_pipe__WEBPACK_IMPORTED_MODULE_14__["HighlightSearchPipe"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _services_authInterceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const isLoggedIn = true;
        if (isLoggedIn) {
            return true;
        }
        else {
            // Redirect to the login page if not logged in
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/components/filterUser.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/components/filterUser.pipe.ts ***!
  \***********************************************/
/*! exports provided: filterUsersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterUsersPipe", function() { return filterUsersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/*
 *
 * Copyright (c) Tamtron Oy. All rights reserved.
 *
 */



let filterUsersPipe = class filterUsersPipe {
    transform(items, options) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](items)) {
            return [];
        }
        else if (!options) {
            return items;
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isObject"](options) || !Object.keys(options).length) {
            return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](items, (item) => this.isMatchFound(item, options));
        }
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](items, options);
    }
    isMatchFound(item, searchStr) {
        if (!item || !Object.keys(item).length || !searchStr.length) {
            return false;
        }
        return 0 < Object.keys(item).filter((key) => key && (key == "userName") && item[key] && item[key].toString().toLowerCase().includes(searchStr.toLowerCase())).length;
    }
};
filterUsersPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterUser'
    })
], filterUsersPipe);



/***/ }),

/***/ "./src/app/components/highlight-search-text.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/highlight-search-text.pipe.ts ***!
  \**********************************************************/
/*! exports provided: HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
 *
 * Copyright (c) Tamtron Oy. All rights reserved.
 *
 */


let HighlightSearchPipe = class HighlightSearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex);
        if (!match) {
            return value;
        }
        return value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
    }
};
HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'highlightSearch'
    })
], HighlightSearchPipe);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\r\n    max-width: 400px;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.error-message {\r\n    color: red;\r\n}\r\n\r\nbutton {\r\n    background-color: #953601;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signup-link {\r\n    color: blue;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.signup-link:hover {\r\n    color: darkblue;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUzNjAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbnVwLWxpbmsge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWdudXAtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userName = '';
        this.password = '';
        this.isLoginMode = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
        this.loginForm.reset();
    }
    submit() {
        if (this.isLoginMode) {
            this.login();
        }
        else {
            this.signup();
        }
    }
    login() {
        this.authService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value).subscribe(response => {
            console.log(response);
            if (response)
                this.router.navigate(['/users']);
        }, error => {
            // Handle login error
            console.error('Login failed', error);
        });
    }
    signup() {
        this.authService.signup(this.loginForm.get('userName').value, this.loginForm.get('password').value)
            .subscribe(response => {
            if (response)
                this.router.navigate(['/users']);
        }, error => {
            console.error('Login failed', error);
        });
    }
    logout() {
        this.authService.logout().subscribe(response => {
            this.router.navigate(['/login']);
        }, error => {
            console.error('Logout failed', error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/user-create/user-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/user-create/user-create.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submit-form {\r\n    max-width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.btn-bg {\r\n    background-color: #e8d9d9;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ0bi1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThkOWQ5O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/user-create/user-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-create/user-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let UserCreateComponent = class UserCreateComponent {
    constructor(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.user = {};
        this.submitted = false;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    saveUser() {
        if (this.userForm.valid) {
            const userData = this.userForm.value;
            this.userService.create(userData)
                .subscribe(response => {
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            // Mark all fields as touched to display validation messages
            this.markFormGroupTouched(this.userForm);
        }
    }
    newUser() {
        this.submitted = false;
        this.userForm.reset();
    }
    // Helper method to mark all form controls as touched
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.markFormGroupTouched(control);
            }
        });
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-create/user-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.css */ "./src/app/components/user-create/user-create.component.css")).default]
    })
], UserCreateComponent);



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-form {\r\n    max-width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.deletBtn {\r\n    margin-right: 1rem;\r\n    background-color: #e8d9d9;\r\n}\r\n\r\n.updateBtn {\r\n    background-color: #e8d9d9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmRlbGV0QnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGQ5ZDk7XHJcbn1cclxuXHJcbi51cGRhdGVCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZDlkOTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserDetailsComponent = class UserDetailsComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.currentUser = null;
        this.message = '';
    }
    ngOnInit() {
        this.message = '';
        this.getuser(this.route.snapshot.paramMap.get('id'));
    }
    getuser(id) {
        this.userService.get(id)
            .subscribe(data => {
            this.currentUser = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    updateUser() {
        this.userService.update(this.currentUser.id, this.currentUser)
            .subscribe(response => {
            console.log(response);
            this.message = 'User updated successfully!';
        }, error => {
            console.log(error);
        });
    }
    deleteUser() {
        this.userService.delete(this.currentUser.id)
            .subscribe(response => {
            console.log(response);
            this.router.navigate(['/users']);
        }, error => {
            console.log(error);
        });
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-details/user-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")).default]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/components/users-list/users-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\r\n    text-align: center;\r\n    max-width: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    outline: none;\r\n    font-size: 16px;\r\n    padding: 4px;\r\n    width: 70%;\r\n    /* Adjusted width for better alignment */\r\n}\r\n\r\n.search-icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    /* Adjusted right position */\r\n    color: #919ca7;\r\n    pointer-events: none;\r\n}\r\n\r\n.usersList.active {\r\n    color: #495057;\r\n    background-color: #e8d9d9;\r\n    border-color: #E6E6E6;\r\n}\r\n\r\n.userEdit {\r\n    background-color: #e8d9d9;\r\n    border-color: #E6E6E6;\r\n}\r\n\r\n.userList {\r\n    cursor: pointer;\r\n}\r\n\r\n.userDetails {\r\n    background-color: #e8d9d9;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n    /* Align text left within userDetails */\r\n}\r\n\r\n.textFont {\r\n    font-weight: 500;\r\n}\r\n\r\n.no-results {\r\n    color: #999;\r\n    margin-top: 10px;\r\n}\r\n\r\n.main-container {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvKiBBZGp1c3RlZCB3aWR0aCBmb3IgYmV0dGVyIGFsaWdubWVudCAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAvKiBBZGp1c3RlZCByaWdodCBwb3NpdGlvbiAqL1xyXG4gICAgY29sb3I6ICM5MTljYTc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnVzZXJzTGlzdC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThkOWQ5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRTZFNkU2O1xyXG59XHJcblxyXG4udXNlckVkaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZDlkOTtcclxuICAgIGJvcmRlci1jb2xvcjogI0U2RTZFNjtcclxufVxyXG5cclxuLnVzZXJMaXN0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVzZXJEZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGQ5ZDk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAvKiBBbGlnbiB0ZXh0IGxlZnQgd2l0aGluIHVzZXJEZXRhaWxzICovXHJcbn1cclxuXHJcbi50ZXh0Rm9udCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cyB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let UsersListComponent = class UsersListComponent {
    constructor(userService) {
        this.userService = userService;
        this.currentUser = null;
        this.currentIndex = -1;
        this.searchQuery = '';
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getAll()
            .subscribe(data => {
            this.users = data;
            this.user = this.users[0];
            this.showSelectedUser(this.user, 0);
            this.currentUser = this.user;
        }, error => { console.log(error); });
    }
    showSelectedUser(user, index) {
        this.currentUser = user;
        this.currentIndex = index;
    }
    refreshUsersList() {
        this.getUsers();
        this.currentUser = null;
        this.currentIndex = -1;
    }
    searchUsersByuserName(userName) {
        return this.users.filter((user) => {
            return user.userName ? userName : '';
        });
    }
    onSearch() {
        this.filteredUsers = this.searchUsersByuserName(this.searchQuery);
    }
};
UsersListComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-list.component.css */ "./src/app/components/users-list/users-list.component.css")).default]
    })
], UsersListComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
        this.tokenKey = 'auth-token';
    }
    login(userName, password) {
        const credentials = { userName, password };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.baseUrl}/api/auth/signin`, credentials, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            const token = response && response.token;
            if (token) {
                sessionStorage.setItem(this.tokenKey, token);
            }
        }));
    }
    signup(userName, password) {
        const credentials = { userName, password };
        return this.http.post(`${this.baseUrl}/api/auth/signup`, credentials);
    }
    logout() {
        console.log('logout');
        return this.http.post(`${this.baseUrl}/api/auth/signout`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            sessionStorage.removeItem(this.tokenKey);
        }));
    }
    getToken() {
        return sessionStorage.getItem(this.tokenKey);
    }
    isAuthenticated() {
        const token = this.getToken();
        return !!token; // Return true if the token exists
    }
    isLoggedIn() {
        return this.isAuthenticated();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/authInterceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/authInterceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
    constructor() { }
    intercept(request, next) {
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const baseUrl = 'http://localhost:8080/api/users';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kotag\Desktop\gdkn-demo\demo-fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
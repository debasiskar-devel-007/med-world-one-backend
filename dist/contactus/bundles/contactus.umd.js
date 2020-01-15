(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser/animations'), require('@angular/core'), require('@angular/router'), require('@angular/material'), require('@angular/common/http'), require('ngx-cookie-service'), require('listing-angular7')) :
    typeof define === 'function' && define.amd ? define('contactus', ['exports', 'rxjs/operators', 'rxjs', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/common', '@angular/forms', '@angular/platform-browser/animations', '@angular/core', '@angular/router', '@angular/material', '@angular/common/http', 'ngx-cookie-service', 'listing-angular7'], factory) :
    (factory((global.contactus = {}),global.rxjs.operators,global.rxjs,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.common,global.ng.forms,global.ng.platformBrowser.animations,global.ng.core,global.ng.router,global.ng.material,global.ng.common.http,global.i2,global.listingAngular7));
}(this, (function (exports,operators,rxjs,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,common,forms,animations,i0,router,material,i1,i2,listingAngular7) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactusService = /** @class */ (function () {
        function ContactusService() {
        }
        ContactusService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ContactusService.ctorParameters = function () { return []; };
        /** @nocollapse */ ContactusService.ngInjectableDef = i0.defineInjectable({ factory: function ContactusService_Factory() { return new ContactusService(); }, token: ContactusService, providedIn: "root" });
        return ContactusService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(_http, _authHttp, cookieService) {
            var _this = this;
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
            this.fileservername = [];
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.serverUrl = result;
                }
                else {
                    _this.serverUrl = null;
                }
            }));
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.addendpointUrl = result;
                }
                else {
                    _this.addendpointUrl = null;
                }
            }));
            /*********added by souresh***********/
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.uploadEndpointUrl = result;
                }
                else {
                    _this.uploadEndpointUrl = null;
                }
            }));
            /************souresh end here**************/
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updateendpointUrl = result;
                }
                else {
                    _this.updateendpointUrl = null;
                }
            }));
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.deletesingle_endpointUrl = result;
                }
                else {
                    _this.deletesingle_endpointUrl = null;
                }
            }));
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updatestatus_single_endpointUrl = result;
                }
                else {
                    _this.updatestatus_single_endpointUrl = null;
                }
            }));
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.getdata_endpointUrl = result;
                }
                else {
                    _this.getdata_endpointUrl = null;
                }
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setServerUrl = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForServerUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearServerUrl = /**
         * @return {?}
         */
            function () {
                this.subjectForServerUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getServerUrl = /**
         * @return {?}
         */
            function () {
                return this.subjectForServerUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setaddEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForaddEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearaddEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForaddEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getaddEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForaddEndpointUrl.asObservable();
            };
        /*****added by souresh******/
        /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setuploadEndpont = /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForuploadEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearuploadEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForuploadEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getuploadEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForuploadEndpointUrl.asObservable();
            };
        /********souresh end here********/
        /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdateEndpoint = /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdateEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdateEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdateEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdateEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdateEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setdeletesingleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectFordeletesingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleardeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectFordeletesingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectFordeletesingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdatestatus_singleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdatestatusSingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdatestatusSingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setgetdataEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForGetdataEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleargetdataEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForGetdataEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdataEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForGetdataEndpointUrl.asObservable();
            };
        /**
         * @return {?}
         */
        ApiService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.addData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                console.log('in adddata apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written access-token(temp)
                    })
                };
                console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******added by souresh************/
        /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.uploadFile = /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******souresh end here********/
        /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateData = /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.getData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.CustomRequest = /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
            function (requestdata, endpoint) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactusComponent = /** @class */ (function () {
        function ContactusComponent(fb, apiService, http, router$$1, cookieService, dialog$$1) {
            this.fb = fb;
            this.apiService = apiService;
            this.http = http;
            this.router = router$$1;
            this.cookieService = cookieService;
            this.dialog = dialog$$1;
            this.value = '';
            this.link = '';
            this.Url = '';
            this.message = '';
            // This variable is use for show the Form title   
            this.email = [];
            this.phone = [];
            this.address = [];
            this.serverURL = ''; // url variable to fetch the add availability form page
            // url variable to fetch the add availability form page
            this.addEndpointData = '';
            this.routeingUrlValue = '';
            this.setJwtTokenValue = '';
            this.listingValue = '';
            this.logoImgValue = '';
            /*Using for google map start ----*/
            this.latitude = -28.68352;
            this.longitude = -147.20785;
            this.mapType = 'satellite';
            this.contactUsForm = this.fb.group({
                name: ['', forms.Validators.required],
                message: [''],
                // tslint:disable-next-line:max-line-length
                multipleemails: this.fb.array([this.fb.group({ emails: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
                phones: this.fb.array([this.fb.group({ phone: ['', forms.Validators.required] })]),
                addresses: this.fb.array([this.fb.group({ address: ['', forms.Validators.required] })])
            });
        }
        Object.defineProperty(ContactusComponent.prototype, "modaleLogo", {
            set: /**
             * @param {?} modaleLogoVal
             * @return {?}
             */ function (modaleLogoVal) {
                this.link = modaleLogoVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "formTitle", {
            set: /**
             * @param {?} formTitleVal
             * @return {?}
             */ function (formTitleVal) {
                this.formTitleValue = formTitleVal;
                console.log(this.formTitleValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "logoimg", {
            set: /**
             * @param {?} logoVal
             * @return {?}
             */ function (logoVal) {
                this.logoImgValue = logoVal;
                console.log(this.logoImgValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "addlisting", {
            set: /**
             * @param {?} listingVal
             * @return {?}
             */ function (listingVal) {
                this.listingValue = (listingVal) || '<no name set>';
                this.listingValue = listingVal;
                console.log('this.listingValue');
                console.log(this.listingValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "JwtToken", {
            set: /**
             * @param {?} JwtTokenVal
             * @return {?}
             */ function (JwtTokenVal) {
                this.setJwtTokenValue = JwtTokenVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */ function (serverUrlval) {
                this.serverURL = (serverUrlval) || '<no name set>';
                this.serverURL = serverUrlval;
                // console.log(this.serverURL);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
                console.log('this.addEndpointData');
                console.log(this.addEndpointData);
                // console.log(this.addEndpointData.endpoint);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusComponent.prototype, "routeingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.routeingUrlValue = (routeingUrlval) || '<no name set>';
                this.routeingUrlValue = routeingUrlval;
                // console.log(this.routeingUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ContactusComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverURL);
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointData.endpoint);
                }), 50);
                // console.log(this.addEndpointData.endpoint);
            };
        Object.defineProperty(ContactusComponent.prototype, "multipleemails", {
            /* Multiple emails created start here*/
            get: /* Multiple emails created start here*/ 
            /**
             * @return {?}
             */
            function () {
                return ( /** @type {?} */(this.contactUsForm.get('multipleemails')));
            },
            enumerable: true,
            configurable: true
        });
        /* Add email field start here */
        /* Add email field start here */
        /**
         * @return {?}
         */
        ContactusComponent.prototype.addEmail = /* Add email field start here */
            /**
             * @return {?}
             */
            function () {
                console.log('okk');
                // tslint:disable-next-line:max-line-length
                this.multipleemails.push(this.fb.group({ emails: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
            };
        /* Add email field end here */
        /* Remove email field start here */
        /* Add email field end here */
        /* Remove email field start here */
        /**
         * @param {?} index
         * @return {?}
         */
        ContactusComponent.prototype.removeEmail = /* Add email field end here */
            /* Remove email field start here */
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                console.log(index);
                this.multipleemails.removeAt(index);
            };
        Object.defineProperty(ContactusComponent.prototype, "addresses", {
            /* Remove email field end here */
            /* Multiple emails created end here*/
            /* Multiple addresses created start here*/
            get: /* Remove email field end here */ 
            /* Multiple emails created end here*/
            /* Multiple addresses created start here*/
            /**
             * @return {?}
             */
            function () {
                return ( /** @type {?} */(this.contactUsForm.get('addresses')));
            },
            enumerable: true,
            configurable: true
        });
        /* Add addresses field start here */
        /* Add addresses field start here */
        /**
         * @return {?}
         */
        ContactusComponent.prototype.addAddress = /* Add addresses field start here */
            /**
             * @return {?}
             */
            function () {
                console.log('okk');
                this.addresses.push(this.fb.group({ address: ['', forms.Validators.required] }));
            };
        /* Add addresses field end here */
        /* Remove addresses field start here */
        /* Add addresses field end here */
        /* Remove addresses field start here */
        /**
         * @param {?} index
         * @return {?}
         */
        ContactusComponent.prototype.removeAddress = /* Add addresses field end here */
            /* Remove addresses field start here */
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                // console.log(index);
                this.addresses.removeAt(index);
            };
        Object.defineProperty(ContactusComponent.prototype, "phones", {
            /* Remove addresses field end here */
            /* Multiple addresses created end here*/
            /* Multiple phones created start here*/
            get: /* Remove addresses field end here */ 
            /* Multiple addresses created end here*/
            /* Multiple phones created start here*/
            /**
             * @return {?}
             */
            function () {
                return ( /** @type {?} */(this.contactUsForm.get('phones')));
            },
            enumerable: true,
            configurable: true
        });
        /* Add addresses field start here */
        /* Add addresses field start here */
        /**
         * @return {?}
         */
        ContactusComponent.prototype.addPhone = /* Add addresses field start here */
            /**
             * @return {?}
             */
            function () {
                // console.log('okk');
                this.phones.push(this.fb.group({ phone: ['', forms.Validators.required] }));
            };
        /* Add phones field end here */
        /* Remove phones field start here */
        /* Add phones field end here */
        /* Remove phones field start here */
        /**
         * @param {?} index
         * @return {?}
         */
        ContactusComponent.prototype.removePhone = /* Add phones field end here */
            /* Remove phones field start here */
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                // console.log(index);
                this.phones.removeAt(index);
            };
        /* Remove phones field end here */
        /* Multiple phones created end here*/
        // contactUsForm submit function start here
        /* Remove phones field end here */
        /* Multiple phones created end here*/
        // contactUsForm submit function start here
        /**
         * @return {?}
         */
        ContactusComponent.prototype.contactUsFormSubmit = /* Remove phones field end here */
            /* Multiple phones created end here*/
            // contactUsForm submit function start here
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                var e_1, _a, e_2, _b, e_3, _c;
                /** @type {?} */
                var x;
                for (x in this.contactUsForm.controls) {
                    this.contactUsForm.controls[x].markAsTouched();
                }
                if (this.contactUsForm.valid) {
                    try {
                        // console.log('ok');
                        // console.log(this.contactUsForm.value);
                        // All emails sites in a Array start here
                        for (var _d = __values(this.contactUsForm.value.multipleemails), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var key = _e.value;
                            this.email.push(key.emails);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_e && !_e.done && (_a = _d.return))
                                _a.call(_d);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    try {
                        // All emails sites in a Array end here
                        // All Phones sites in a Array start here
                        // console.log(this.contactUsForm.value.phones);
                        for (var _f = __values(this.contactUsForm.value.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var key = _g.value;
                            this.phone.push(key.phone);
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return))
                                _b.call(_f);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    try {
                        // All Phones sites in a Array end here
                        // All addresses sites in a Array start here
                        for (var _h = __values(this.contactUsForm.value.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var key = _j.value;
                            this.address.push(key.address);
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return))
                                _c.call(_h);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                    // All addresses sites in a Array end here
                    /** @type {?} */
                    var allData = {};
                    allData.name = this.contactUsForm.value.name;
                    allData.address = this.address;
                    allData.phone = this.phone;
                    allData.email = this.email;
                    allData.message = this.contactUsForm.value.message;
                    // console.log(allData);
                    /** @type {?} */
                    var data = {
                        "source": this.addEndpointData.source,
                        "data": allData,
                        "token": this.addEndpointData.token
                    };
                    console.log(data);
                    this.apiService.addData(data).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result;
                        result = res;
                        if (result.status === 'success') {
                            // console.log(result);
                            /** @type {?} */
                            var dialogRef = _this.dialog.open(successModalComponent, {
                                width: '250px',
                                data: { value: result.status, Url: _this.link }
                            });
                            _this.formDirective.resetForm();
                        }
                    }));
                }
            };
        // contactUsForm submit function end here
        // contactUsForm submit function end here
        /**
         * @param {?} val
         * @return {?}
         */
        ContactusComponent.prototype.inputUntouched =
            // contactUsForm submit function end here
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                console.log('ok----');
                this.contactUsForm.controls[val].markAsUntouched();
            };
        /**
         * @return {?}
         */
        ContactusComponent.prototype.goToListing = /**
         * @return {?}
         */
            function () {
                this.router.navigateByUrl('/' + this.routeingUrlValue);
            };
        ContactusComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contactus',
                        template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <div class=\"fromClass\">\n  <mat-form-field>\n      <input matInput placeholder=\"Name \" formControlName=\"name\" (blur)=\"inputUntouched('name')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['name'].valid && contactUsForm.controls['name'].errors.required && contactUsForm.controls['name'].touched\">Name field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\"  *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" class=\"fromClass\" >\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n     <!-- <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error> -->\n      <!-- <mat-error *ngIf=\"!item.valid  \">Email field can not be blank</mat-error> -->\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" *ngFor=\"let item of phones.controls; let pointIndex=index\" class=\"fromClass\">\n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <!-- <mat-error *ngIf=\"!item.valid  \">Phone field can not be blank</mat-error> -->\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" *ngFor=\"let item of addresses.controls; let pointIndex=index\"  class=\"fromClass\">\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" (blur)=\"inputUntouched('address')\"></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <!-- <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error> -->\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <div class=\"fromClass\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n  </div>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        ContactusComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ApiService },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: i2.CookieService },
                { type: material.MatDialog }
            ];
        };
        ContactusComponent.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            modaleLogo: [{ type: i0.Input }],
            formTitle: [{ type: i0.Input }],
            logoimg: [{ type: i0.Input }],
            addlisting: [{ type: i0.Input }],
            JwtToken: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            routeingUrl: [{ type: i0.Input }]
        };
        return ContactusComponent;
    }());
    var successModalComponent = /** @class */ (function () {
        function successModalComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            console.log(data);
        }
        /**
         * @return {?}
         */
        successModalComponent.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        successModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'successModal',
                        template: "\n  \n<span style=\"text-align: center\"  *ngIf=\"data.Url != ''\" >\n<img style=\"max-width: 100%; text-align: center\" [src]=\"data.Url\">\n</span>\n\n<div mat-dialog-content>\n<p *ngIf=\"data.value.length <= 7\">Thanks! your account has been successfully created</p>\n<p *ngIf=\"data.value.length >= 8\">{{data.value}}</p>\n\n</div>\n<div mat-dialog-actions>\n<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\n</div>\n\n  "
                    }] }
        ];
        /** @nocollapse */
        successModalComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return successModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent(router$$1) {
            var _this = this;
            this.router = router$$1;
            this.loading = false;
            this.router.events.subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                switch (true) {
                    case event instanceof router.NavigationStart: {
                        _this.loading = true;
                        break;
                    }
                    case event instanceof router.NavigationEnd:
                    case event instanceof router.NavigationCancel:
                    case event instanceof router.NavigationError: {
                        _this.loading = false;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }));
        }
        /**
         * @return {?}
         */
        LoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-loading',
                        template: "\n\n\n\n<div style=\"width:100vw; height:100vh; display:table-cell; vertical-align:middle; text-align:center;\" *ngIf=\"loading==true\">\n  <mat-spinner></mat-spinner>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoadingComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return LoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactusListingComponent = /** @class */ (function () {
        function ContactusListingComponent(apiService, http, loadingComponent, dialog$$1) {
            this.apiService = apiService;
            this.http = http;
            this.loadingComponent = loadingComponent;
            this.dialog = dialog$$1;
            this.contactUsAllData = [];
            this.contactUsAllDataHeaderSkipValue = [];
            this.contactUsAllDataModifyHeaderValue = {};
            // tslint:disable-next-line:variable-name
            this.contactUsAllData_collection = 'events';
            this.serverURL = ''; // url variable to fetch the add availability form page
            // url variable to fetch the add availability form page
            this.addEndpointData = '';
            this.getDataEndpointData = '';
            this.updateendpointData = '';
            this.deleteendpointData = '';
        }
        Object.defineProperty(ContactusListingComponent.prototype, "formTitle", {
            set: /**
             * @param {?} formTitleVal
             * @return {?}
             */ function (formTitleVal) {
                this.formTitleValue = formTitleVal;
                console.log(this.formTitleValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */ function (serverUrlval) {
                this.serverURL = (serverUrlval) || '<no name set>';
                this.serverURL = serverUrlval;
                console.log(this.serverURL);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "contactUsAllDataHeader_skip", {
            set: /**
             * @param {?} contactUsAllDataHeaderSkipval
             * @return {?}
             */ function (contactUsAllDataHeaderSkipval) {
                this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
                this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
                console.log(this.contactUsAllDataHeaderSkipValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "contactUsAllDataModify_header", {
            set: /**
             * @param {?} contactUsAllDataModifyHeaderval
             * @return {?}
             */ function (contactUsAllDataModifyHeaderval) {
                this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
                this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
                console.log('this.contactUsAllDataModifyHeaderValue');
                console.log(this.contactUsAllDataModifyHeaderValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
                // console.log('this.addEndpointData');
                // console.log(this.addEndpointData)
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "getDataEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.getDataEndpointData = (endpointUrlval) || '<no name set>';
                this.getDataEndpointData = endpointUrlval;
                console.log('this.getDataEndpointData');
                console.log(this.getDataEndpointData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "updateendpoint", {
            set: /**
             * @param {?} updateendpointval
             * @return {?}
             */ function (updateendpointval) {
                this.updateendpointData = (updateendpointval) || '<no name set>';
                this.updateendpointData = updateendpointval;
                console.log('this.updateendpointData');
                console.log(this.updateendpointData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactusListingComponent.prototype, "deleteendpoint", {
            set: /**
             * @param {?} deleteendpointval
             * @return {?}
             */ function (deleteendpointval) {
                this.deleteendpointData = (deleteendpointval) || '<no name set>';
                this.deleteendpointData = deleteendpointval;
                console.log('this.deleteendpointData');
                console.log(this.deleteendpointData);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ContactusListingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverURL);
                }), 50);
                console.log(this.serverURL);
                this.apiService.cleargetdataEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setgetdataEndpoint(_this.getDataEndpointData.endpoint);
                }), 50);
                this.apiService.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointData);
                }), 50);
                console.log(this.addEndpointData);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.getAllData();
                }), 100);
                // setInterval(()=> {
                //   this.openDialog(); },4000); 
                // setInterval(() => {this.openDialog(); },4000);
            };
        /**
         * @return {?}
         */
        ContactusListingComponent.prototype.getAllData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.loadingComponent.loading = false;
                /** @type {?} */
                var data;
                data = {
                    "source": this.getDataEndpointData.source
                };
                this.apiService.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    _this.loadingComponent.loading = true;
                    /** @type {?} */
                    var result = [];
                    result = response;
                    if (result.resc != 0) {
                        console.log('result');
                        console.log(result);
                        _this.contactUsAllData = result.res;
                    }
                    else
                        console.log('oppes');
                }));
            };
        ContactusListingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contactus-listing',
                        template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
                    }] }
        ];
        /** @nocollapse */
        ContactusListingComponent.ctorParameters = function () {
            return [
                { type: ApiService },
                { type: i1.HttpClient },
                { type: LoadingComponent },
                { type: material.MatDialog }
            ];
        };
        ContactusListingComponent.propDecorators = {
            formTitle: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            contactUsAllDataHeader_skip: [{ type: i0.Input }],
            contactUsAllDataModify_header: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            getDataEndpoint: [{ type: i0.Input }],
            updateendpoint: [{ type: i0.Input }],
            deleteendpoint: [{ type: i0.Input }]
        };
        return ContactusListingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactusModule = /** @class */ (function () {
        function ContactusModule() {
        }
        ContactusModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ContactusComponent, successModalComponent, ContactusListingComponent, LoadingComponent],
                        imports: [
                            DemoMaterialModule,
                            animations.BrowserAnimationsModule,
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            listingAngular7.ListingModule,
                            i1.HttpClientModule,
                        ],
                        exports: [ContactusComponent, ContactusListingComponent],
                        providers: [ApiService, LoadingComponent, i2.CookieService],
                        bootstrap: [],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        entryComponents: [successModalComponent]
                    },] }
        ];
        return ContactusModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ContactusService = ContactusService;
    exports.ContactusComponent = ContactusComponent;
    exports.successModalComponent = successModalComponent;
    exports.ContactusModule = ContactusModule;
    exports.ɵa = ApiService;
    exports.ɵb = ContactusListingComponent;
    exports.ɵc = LoadingComponent;
    exports.ɵd = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=contactus.umd.js.map
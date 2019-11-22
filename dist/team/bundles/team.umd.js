(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('rxjs/operators'), require('@angular/common/http'), require('rxjs'), require('ngx-cookie-service'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('lib-listing'), require('@angular/platform-browser/animations'), require('file-upload')) :
    typeof define === 'function' && define.amd ? define('team', ['exports', '@angular/core', '@angular/forms', '@angular/router', 'rxjs/operators', '@angular/common/http', 'rxjs', 'ngx-cookie-service', '@angular/platform-browser', '@angular/common', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', 'lib-listing', '@angular/platform-browser/animations', 'file-upload'], factory) :
    (global = global || self, factory(global.team = {}, global.ng.core, global.ng.forms, global.ng.router, global.rxjs.operators, global.ng.common.http, global.rxjs, global.ngxCookieService, global.ng.platformBrowser, global.ng.common, global.ng.cdk.a11y, global.ng.cdk['drag-drop'], global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material['bottom-sheet'], global.ng.material.button, global.ng.material['button-toggle'], global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.stepper, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material['grid-list'], global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.core, global.ng.material.paginator, global.ng.material['progress-bar'], global.ng.material['progress-spinner'], global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slider, global.ng.material['slide-toggle'], global.ng.material['snack-bar'], global.ng.material.sort, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.libListing, global.ng.platformBrowser.animations, global.fileUpload));
}(this, function (exports, core, forms, router, operators, http, rxjs, ngxCookieService, platformBrowser, common, a11y, dragDrop, portal, scrolling, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, stepper$1, datepicker, dialog, divider, expansion, gridList, icon, input, list, menu, core$1, paginator, progressBar, progressSpinner, radio, select, sidenav, slider, slideToggle, snackBar, sort, table$1, tabs, toolbar, tooltip, tree$1, libListing, animations, fileUpload) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamService = /** @class */ (function () {
        function TeamService() {
        }
        TeamService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TeamService.ctorParameters = function () { return []; };
        /** @nocollapse */ TeamService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TeamService_Factory() { return new TeamService(); }, token: TeamService, providedIn: "root" });
        return TeamService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamComponent = /** @class */ (function () {
        function TeamComponent() {
        }
        /**
         * @return {?}
         */
        TeamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TeamComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-Team',
                        template: "",
                        styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:auto;width:100%}.example-full-width{width:100%}td{padding-right:8px}.mat-card{background:#fff!important}.mat-dialog-content{border-radius:0;overflow:hidden!important;padding:0 24px!important;box-shadow:none!important}.mat-dialog-content .mat-dialog-title{background-color:#4f4f4f;border:0;padding:.35em;color:#fff}.mat-dialog-content .mat-card{transition:none!important;display:flex!important;position:relative;padding:5px;border-radius:0;align-items:center}.mat-dialog-content .mat-card .mat-card-content,.mat-dialog-content .mat-card .mat-card-header{white-space:normal;word-break:break-word}.mat-dialog-content .mat-card-header .mat-card-title{margin-bottom:0;font-size:16px}.mat-dialog-content .mat-dialog-actions{margin-bottom:0;justify-content:center}.mat-dialog-content .mat-dialog-actions button{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:10px auto 0;white-space:normal;padding:12px 10px;border-radius:0!important}.cdk-global-overlay-wrapper{align-items:center!important}.cdk-global-overlay-wrapper .mat-bottom-sheet-container bottom-sheet .mat-nav-list{display:flex;padding-top:0!important}.mat-bottom-sheet-container bottom-sheet .mat-nav-list .mat-list-item{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:5px;white-space:normal;padding:12px 10px;border-radius:0!important}.mat-bottom-sheet-container bottom-sheet .mat-nav-list{text-align:center}.mat-dialog-container .mat-dialog-actions button{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:10px auto 0;white-space:normal;padding:12px 10px;border-radius:0!important}.mat-dialog-container .mat-card-header .mat-card-title{margin-bottom:0;font-size:16px;font-weight:600}.mat-form-field{margin:0 10px}"]
                    }] }
        ];
        /** @nocollapse */
        TeamComponent.ctorParameters = function () { return []; };
        return TeamComponent;
    }());

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
            this.fileservername = [];
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    // 'access-token': this.accesstoken 
                    'Authorization': this.accesstoken //hard code written access-token(temp)
                })
            };
            console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken //hard code written access-token(temp)
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken //hard code written access-token(temp)
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.accesstoken
                })
            };
            /** @type {?} */
            var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res; })));
            return result;
        };
        ApiService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: http.HttpClient },
            { type: ngxCookieService.CookieService }
        ]; };
        /** @nocollapse */ ApiService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(http.HttpClient), core.ɵɵinject(ngxCookieService.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());
    if (false) {
        /** @type {?} */
        ApiService.prototype.lengthis;
        /** @type {?} */
        ApiService.prototype.percentageis;
        /** @type {?} */
        ApiService.prototype.inprogress;
        /** @type {?} */
        ApiService.prototype.progress;
        /** @type {?} */
        ApiService.prototype.uploadtype;
        /** @type {?} */
        ApiService.prototype.uploaderror;
        /** @type {?} */
        ApiService.prototype.accesstoken;
        /** @type {?} */
        ApiService.prototype.fileservername;
        /** @type {?} */
        ApiService.prototype.serverUrl;
        /** @type {?} */
        ApiService.prototype.addendpointUrl;
        /** @type {?} */
        ApiService.prototype.uploadEndpointUrl;
        /** @type {?} */
        ApiService.prototype.updateendpointUrl;
        /** @type {?} */
        ApiService.prototype.deletesingle_endpointUrl;
        /** @type {?} */
        ApiService.prototype.updatestatus_single_endpointUrl;
        /** @type {?} */
        ApiService.prototype.deletemultiple_endpointUrl;
        /** @type {?} */
        ApiService.prototype.updatestatus_multiple_endpointUrl;
        /** @type {?} */
        ApiService.prototype.getdata_endpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForServerUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForaddEndpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForuploadEndpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForupdateEndpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectFordeletesingleEndpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForupdatestatusSingleEndpointUrl;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.subjectForGetdataEndpointUrl;
        /** @type {?} */
        ApiService.prototype.subscriptionServer;
        /** @type {?} */
        ApiService.prototype.subscriptionaddEndpoint;
        /** @type {?} */
        ApiService.prototype.subscriptionuploadEndpoint;
        /** @type {?} */
        ApiService.prototype.subscriptionupdateEndpoint;
        /** @type {?} */
        ApiService.prototype.subscriptiondeletesingleEndpoint;
        /** @type {?} */
        ApiService.prototype.subscriptionupdatestatusSingleEndpoint;
        /** @type {?} */
        ApiService.prototype.subscriptionGetdataEndpoint;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype._authHttp;
        /**
         * @type {?}
         * @private
         */
        ApiService.prototype.cookieService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UploadService = /** @class */ (function () {
        function UploadService(httpClient) {
            this.httpClient = httpClient;
            this.SERVER_URL = "http://166.62.39.137:5009/uploads";
            this.response = {};
        }
        /**
         * @param {?} data
         * @param {?} userId
         * @return {?}
         */
        UploadService.prototype.upload = /**
         * @param {?} data
         * @param {?} userId
         * @return {?}
         */
        function (data, userId) {
            var _this = this;
            return this.httpClient.post(this.SERVER_URL, data, {
                reportProgress: true,
                observe: 'events'
            }).pipe(operators.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                switch (event.type) {
                    case http.HttpEventType.UploadProgress:
                        /** @type {?} */
                        var uploadPercent = Math.round(100 * event.loaded / event.total);
                        _this.response = { status: "process", data: { total: 100, loaded: uploadPercent } };
                        return _this.response;
                    case http.HttpEventType.Response:
                        return event.body;
                    default:
                        return "Unhandled event: " + event.type;
                    // return `Unhandled event: ${event.type}`;
                }
            })));
        };
        UploadService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UploadService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ UploadService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(core.ɵɵinject(http.HttpClient)); }, token: UploadService, providedIn: "root" });
        return UploadService;
    }());
    if (false) {
        /** @type {?} */
        UploadService.prototype.SERVER_URL;
        /** @type {?} */
        UploadService.prototype.response;
        /**
         * @type {?}
         * @private
         */
        UploadService.prototype.httpClient;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddEditTeamComponent = /** @class */ (function () {
        function AddEditTeamComponent(fb, activeroute, _http, uploadService, apiservice, router) {
            this.fb = fb;
            this.activeroute = activeroute;
            this._http = _http;
            this.uploadService = uploadService;
            this.apiservice = apiservice;
            this.router = router;
            this.teamData = [];
            this.allData = [];
            this.listrouteData = "";
            this.editarray = [];
            this.imageConfigData = '';
            this.SingleDataList = [];
            this.ButtonText = "Submit";
            this.HeaderText = "Add Team Member";
            this.flag = false;
            this.img_var = '';
            this.teamForm = this.fb.group({
                categoryname: ["", forms.Validators.required],
                membername: ["", forms.Validators.required],
                description: ["", forms.Validators.required],
                multiplephone: this.fb.array([]),
                multipleemail: this.fb.array([]),
                bulletarray: this.fb.array([]),
                team_img: ['']
            });
        }
        Object.defineProperty(AddEditTeamComponent.prototype, "imageUpload", {
            /* Config Upload file lib */
            set: /* Config Upload file lib */
            /**
             * @param {?} getConfig
             * @return {?}
             */
            function (getConfig) {
                this.imageConfigData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddEditTeamComponent.prototype, "singleData", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.SingleDataList = (val) || '<no name set>';
                this.SingleDataList = val;
                if (this.activeroute.snapshot.params._id) {
                    this.ButtonText = "Update";
                    this.HeaderText = "Edit Team Member";
                    this.flag = true;
                    this.params_id = this.activeroute.snapshot.params._id;
                    this.teamForm.controls['categoryname'].patchValue(val[0].categoryname);
                    this.teamForm.controls['description'].patchValue(val[0].description);
                    this.teamForm.controls['membername'].patchValue(val[0].membername);
                    this.teamForm.controls['team_img'].patchValue(val[0].team_img);
                    this.img_var = this.SingleDataList[0].team_img.basepath + this.SingleDataList[0].team_img.image;
                    this.image_name = this.SingleDataList[0].team_img.name;
                    this.image_type = this.SingleDataList[0].team_img.type;
                    for (var i in this.SingleDataList[0].bulletarray) {
                        this.addBulletListData(this.SingleDataList[0].bulletarray[i].bullet_name, this.SingleDataList[0].bulletarray[i].bullet_desc);
                    }
                    for (var i in this.SingleDataList[0].multiplephone) {
                        this.addphone(this.SingleDataList[0].multiplephone[i].contactphone);
                    }
                    for (var i in this.SingleDataList[0].multipleemail) {
                        this.addemail(this.SingleDataList[0].multipleemail[i].contactemail);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddEditTeamComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */
            function (serverUrlval) {
                this.serverUrlData = (serverUrlval) || '<no name set>';
                this.serverUrlData = serverUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddEditTeamComponent.prototype, "ListRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.listrouteData = (val) || '<no name set>';
                this.listrouteData = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddEditTeamComponent.prototype, "getDataEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */
            function (endpointUrlval) {
                this.getDataEndpointData = (endpointUrlval) || '<no name set>';
                this.getDataEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddEditTeamComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */
            function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddEditTeamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.apiservice.clearServerUrl();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiservice.setServerUrl(_this.serverUrlData);
            }), 50);
            this.apiservice.cleargetdataEndpoint();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
            }), 50);
            this.apiservice.clearaddEndpoint();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiservice.setaddEndpoint(_this.addEndpointData);
            }), 50);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.getData();
            }), 50);
            if (this.activeroute.snapshot.params._id == null) {
                this.addBulletListData('', '');
                this.addphone('');
                this.addemail('');
            }
        };
        /**
         * @param {?} form
         * @param {?} val
         * @return {?}
         */
        AddEditTeamComponent.prototype.inputUntouch = /**
         * @param {?} form
         * @param {?} val
         * @return {?}
         */
        function (form, val) {
            form.controls[val].markAsUntouched();
        };
        /**for multiple phone function start here**/
        /**
         * for multiple phone function start here*
         * @param {?} a
         * @return {?}
         */
        AddEditTeamComponent.prototype.addphone = /**
         * for multiple phone function start here*
         * @param {?} a
         * @return {?}
         */
        function (a) {
            /** @type {?} */
            var mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
            mphone.push(this.fb.group({
                contactphone: [a]
            }));
        };
        /**
         * @param {?} index
         * @return {?}
         */
        AddEditTeamComponent.prototype.removephone = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
            mphone.removeAt(index);
        };
        /**multiple phone end here**/
        /**for multiple emails functions start here**/
        /**multiple phone end here**/
        /**
         * for multiple emails functions start here*
         * @param {?} a
         * @return {?}
         */
        AddEditTeamComponent.prototype.addemail = /**multiple phone end here**/
        /**
         * for multiple emails functions start here*
         * @param {?} a
         * @return {?}
         */
        function (a) {
            /** @type {?} */
            var memail = (/** @type {?} */ (this.teamForm.controls.multipleemail));
            memail.push(this.fb.group({
                contactemail: [a]
            }));
        };
        /**
         * @param {?} index
         * @return {?}
         */
        AddEditTeamComponent.prototype.removeemail = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var mphone = (/** @type {?} */ (this.teamForm.controls.multipleemail));
            mphone.removeAt(index);
        };
        /**multiple email functions end here**/
        /**
         * multiple email functions end here*
         * @return {?}
         */
        AddEditTeamComponent.prototype.getData = /**
         * multiple email functions end here*
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                "source": "Team_category"
            };
            this.apiservice.getData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = response;
                _this.allData = result.res;
            }));
        };
        /**resetting the form**/
        /**
         * resetting the form*
         * @return {?}
         */
        AddEditTeamComponent.prototype.ResetForm = /**
         * resetting the form*
         * @return {?}
         */
        function () {
            this.teamForm.reset();
        };
        /**bullet list function start here**/
        /**
         * bullet list function start here*
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        AddEditTeamComponent.prototype.addBulletListData = /**
         * bullet list function start here*
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
            bulletlist.push(this.fb.group({
                bullet_name: [a],
                bullet_desc: [b],
            }));
        };
        /**
         * @return {?}
         */
        AddEditTeamComponent.prototype.deleteBulletListData = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
            bulletlist.removeAt(1);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        AddEditTeamComponent.prototype.trackByFn = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            return index;
        };
        /**bullet list function end here**/
        /**
         * bullet list function end here*
         * @return {?}
         */
        AddEditTeamComponent.prototype.clear_image = /**
         * bullet list function end here*
         * @return {?}
         */
        function () {
            this.flag = false;
        };
        /**
         * @return {?}
         */
        AddEditTeamComponent.prototype.TeamFormSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.imageConfigData.files) {
                if (this.imageConfigData.files.length > 1) {
                    this.ErrCode = true;
                    return;
                }
                this.teamForm.value.team_img =
                    {
                        "basepath": this.imageConfigData.files[0].upload.data.basepath + '/'
                            + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[0].name,
                        "type": this.imageConfigData.files[0].type
                    };
            }
            else {
                this.teamForm.value.team_img = false;
            }
            /** @type {?} */
            var x;
            for (x in this.teamForm.controls) {
                this.teamForm.controls[x].markAsTouched();
            }
            if (this.teamForm.valid) {
                /** @type {?} */
                var data;
                if (this.activeroute.snapshot.params._id) { //update part
                    data = {
                        "source": "Team_management",
                        "data": {
                            "id": this.params_id,
                            "categoryname": this.teamForm.value.categoryname,
                            "membername": this.teamForm.value.membername,
                            "description": this.teamForm.value.description,
                            "multiplephone": this.teamForm.value.multiplephone,
                            "multipleemail": this.teamForm.value.multipleemail,
                            "bulletarray": this.teamForm.value.bulletarray,
                            'team_img': this.teamForm.value.team_img
                        },
                        "sourceobj": ["categoryname"]
                    };
                }
                else {
                    data = {
                        //add part
                        "source": "Team_management",
                        "data": this.teamForm.value,
                        "sourceobj": ["categoryname"]
                    };
                }
                ;
                this.spinnerLoader = true;
                this.apiservice.addData(data).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.spinnerLoader = false;
                    _this.ResetForm();
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.router.navigateByUrl('/' + _this.listrouteData);
                    }), 100);
                }));
            }
            else {
                alert("error occured");
            }
        };
        AddEditTeamComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-add-edit-team',
                        template: "<span class=\"formspan\">\n  <mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n      <h2 class=\"headerSpan\">{{HeaderText}}</h2>\n    </mat-toolbar>\n    <span class=\"formspan\">\n      <mat-card-content class=\"example-container\">\n        <form class=\"example-form\" novalidate [formGroup]=\"teamForm\" name=\"teamForm\" (ngSubmit)=\"TeamFormSubmit()\"\n          autocomplete=\"off\">\n          <div class=\"example-container\">\n\n            <mat-form-field>\n              <input matInput placeholder=\"Team Member Name\" [formControl]=\"teamForm.controls['membername']\"\n                (blur)=\"inputUntouch(teamForm,'membername')\">\n              <mat-error *ngIf=\"teamForm.controls['membername'].touched \n                && !teamForm.controls['membername'].valid\n                       && teamForm.controls['membername'].errors.required\">\n                Category Name field can not be blank</mat-error>\n            </mat-form-field><br>\n\n\n\n            <mat-form-field>\n              <textarea matInput placeholder=\"Description\" [formControl]=\"teamForm.controls['description']\"\n                (blur)=\"inputUntouch(teamForm,'description')\">\n                       </textarea>\n              <mat-error *ngIf=\"teamForm.controls['description'].touched && !teamForm.controls['description'].valid\n                   && teamForm.controls['description'].errors.required\">\n                Description field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n              <mat-label>Category Name</mat-label>\n              <mat-select formControlName=\"categoryname\">\n                <mat-option [value]=0>\n                  Select a category\n                </mat-option>\n                <mat-option *ngFor=\"let f of allData\" [value]=\"f._id\">\n                  {{f.categoryName}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!-- bullet list start here -->\n            <div formArrayName=\"bulletarray\" class=\"bulletarr\"\n              *ngFor=\"let blist of teamForm.controls.bulletarray?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n                <div class=\"top_header\">\n                  bullet list\n                </div>\n                <!-- ------------bullet name-----------  -->\n                <mat-form-field>\n                  <input matInput formControlName=\"bullet_name\" placeholder=\"Name\">\n\n                </mat-form-field><br>\n                <!-- -----------------------------------  -->\n\n\n                <!-- --------------------bullet description-----------------  -->\n                <mat-form-field>\n                  <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Description\"></textarea>\n\n                </mat-form-field><br>\n                <!-- ----------------------------------------------------------  -->\n\n              </ng-container>\n              <button type=\"button\" (click)=\"addBulletListData('','')\">\n                <mat-icon>add</mat-icon>\n              </button>\n              <button type=\"button\" (click)=\"deleteBulletListData()\" *ngIf=\"i!=0\">\n                <mat-icon>remove</mat-icon>\n              </button>\n            </div>\n            <!-- bullet list end here -->\n\n\n            <!--multiple phone start here -->\n            <div formArrayName=\"multiplephone\"\n              *ngFor=\"let plist of teamForm.controls.multiplephone?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactphone\" placeholder=\"contactphone\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addphone('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removephone(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple phone end here -->\n\n            <!-- multiple e-mail start here -->\n            <div formArrayName=\"multipleemail\"\n              *ngFor=\"let elist of teamForm.controls.multipleemail?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactemail\" placeholder=\"contactemail\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addemail('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removeemail(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple e-mail end here -->\n\n          </div>\n          <!-- file upload library start here -->\n          <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n          <mat-error *ngIf=\"ErrCode==true\">Please add just one image.</mat-error>\n\n          <!-- CARD VIEW  -->\n          <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n            <mat-card class=\"example-card\">\n              <img mat-card-image [attr.src]=\"img_var\">\n              <mat-card-title>{{ image_name }}</mat-card-title>\n              <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n              <span class=\"closecard\" (click)=\"clear_image()\">\n                <i class=\"material-icons\">clear</i>\n              </span>\n            </mat-card>\n          </mat-card-content>\n          <!-- file upload end here -->\n          <button mat-raised-button color=\"primary\" mat-button class=\"submitbtn\" type=\"submit\">{{ButtonText}}</button>\n          <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetForm()\">Reset</button>\n        </form>\n      </mat-card-content>\n    </span>\n    <mat-spinner *ngIf=\"spinnerLoader\"></mat-spinner>\n  </mat-card>\n",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:block;position:relative;text-align:left;width:100%;background:#fff;padding:1px 14px;box-sizing:border-box;margin:0}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.bulletarr{margin-top:20px;border:2px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize;margin-bottom:20px}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        /** @nocollapse */
        AddEditTeamComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: router.ActivatedRoute },
            { type: http.HttpClient },
            { type: UploadService },
            { type: ApiService },
            { type: router.Router }
        ]; };
        AddEditTeamComponent.propDecorators = {
            imageUpload: [{ type: core.Input }],
            singleData: [{ type: core.Input }],
            serverUrl: [{ type: core.Input }],
            ListRoute: [{ type: core.Input }],
            getDataEndpoint: [{ type: core.Input }],
            addEndpoint: [{ type: core.Input }]
        };
        return AddEditTeamComponent;
    }());
    if (false) {
        /** @type {?} */
        AddEditTeamComponent.prototype.teamData;
        /** @type {?} */
        AddEditTeamComponent.prototype.allData;
        /** @type {?} */
        AddEditTeamComponent.prototype.teamForm;
        /** @type {?} */
        AddEditTeamComponent.prototype.params_id;
        /** @type {?} */
        AddEditTeamComponent.prototype.getDataEndpointData;
        /** @type {?} */
        AddEditTeamComponent.prototype.addEndpointData;
        /** @type {?} */
        AddEditTeamComponent.prototype.serverUrlData;
        /** @type {?} */
        AddEditTeamComponent.prototype.listrouteData;
        /** @type {?} */
        AddEditTeamComponent.prototype.editarray;
        /** @type {?} */
        AddEditTeamComponent.prototype.spinnerLoader;
        /** @type {?} */
        AddEditTeamComponent.prototype.imageConfigData;
        /** @type {?} */
        AddEditTeamComponent.prototype.SingleDataList;
        /** @type {?} */
        AddEditTeamComponent.prototype.ButtonText;
        /** @type {?} */
        AddEditTeamComponent.prototype.HeaderText;
        /** @type {?} */
        AddEditTeamComponent.prototype.ErrCode;
        /** @type {?} */
        AddEditTeamComponent.prototype.flag;
        /** @type {?} */
        AddEditTeamComponent.prototype.img_var;
        /** @type {?} */
        AddEditTeamComponent.prototype.image_name;
        /** @type {?} */
        AddEditTeamComponent.prototype.image_type;
        /** @type {?} */
        AddEditTeamComponent.prototype.fb;
        /** @type {?} */
        AddEditTeamComponent.prototype.activeroute;
        /** @type {?} */
        AddEditTeamComponent.prototype._http;
        /**
         * @type {?}
         * @private
         */
        AddEditTeamComponent.prototype.uploadService;
        /** @type {?} */
        AddEditTeamComponent.prototype.apiservice;
        /** @type {?} */
        AddEditTeamComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule
                        ],
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
                            core$1.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core$1.MatRippleModule,
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
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditTeamComponent = /** @class */ (function () {
        function AddeditTeamComponent(fb, activeroute, _http, router, apiService) {
            this.fb = fb;
            this.activeroute = activeroute;
            this._http = _http;
            this.router = router;
            this.apiService = apiService;
            this.DataListViaResolve = [];
            this.allData = [];
            this.SingledataEdit = [];
            this.listingPageUrl = '';
            this.ButtonText = "Submit";
            this.CategoryManagementTeamForm = this.fb.group({
                categoryName: ['', forms.Validators.required],
                description: ['', forms.Validators.required],
                status: [true,],
                role: ['']
            });
        }
        Object.defineProperty(AddeditTeamComponent.prototype, "TeamData", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.DataListViaResolve = (val) || '<no name set>';
                this.DataListViaResolve = val;
                console.log("in ts ", this.DataListViaResolve);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditTeamComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */
            function (serverUrlval) {
                this.serverUrlData = (serverUrlval) || '<no name set>';
                this.serverUrlData = serverUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditTeamComponent.prototype, "getDataEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */
            function (endpointUrlval) {
                this.getDataEndpointData = (endpointUrlval) || '<no name set>';
                this.getDataEndpointData = endpointUrlval;
                console.log("data", this.getDataEndpointData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditTeamComponent.prototype, "singleEditData", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.SingledataEdit = (val) || '<no name set>';
                this.SingledataEdit = val;
                if (this.activeroute.snapshot.params._id) {
                    this.ButtonText = "Update";
                    this.params_id = this.activeroute.snapshot.params._id;
                    this.CategoryManagementTeamForm.controls['categoryName'].patchValue(val[0].categoryName);
                    this.CategoryManagementTeamForm.controls['description'].patchValue(val[0].description);
                    this.CategoryManagementTeamForm.controls['status'].patchValue(val[0].status);
                    //this.CategoryManagementTeamForm.controls['role'].patchValue(val[0].role);
                    // for (const i in this.SingledataEdit[0].role) {
                    //     this.CategoryManagementTeamForm.controls['role'].patchValue(this.SingledataEdit[i].role)
                    // }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditTeamComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */
            function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditTeamComponent.prototype, "ListPageRoute", {
            set: /**
             * @param {?} Url
             * @return {?}
             */
            function (Url) {
                this.listingPageUrl = (Url) || '<no name set>';
                this.listingPageUrl = Url;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddeditTeamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.apiService.clearServerUrl();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiService.setServerUrl(_this.serverUrlData);
            }), 50);
            this.apiService.clearaddEndpoint();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiService.setaddEndpoint(_this.addEndpointData);
            }), 50);
            this.apiService.cleargetdataEndpoint();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.apiService.setgetdataEndpoint(_this.getDataEndpointData);
            }), 50);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.getData();
            }), 50);
        };
        /**
         * @param {?} form
         * @param {?} val
         * @return {?}
         */
        AddeditTeamComponent.prototype.inputUntouch = /**
         * @param {?} form
         * @param {?} val
         * @return {?}
         */
        function (form, val) {
            form.controls[val].markAsUntouched();
        };
        /**
         * @return {?}
         */
        AddeditTeamComponent.prototype.CategoryManagementTeamFormSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.CategoryManagementTeamForm.valid) {
                /** @type {?} */
                var x = void 0;
                for (x in this.CategoryManagementTeamForm.controls) {
                    this.CategoryManagementTeamForm.controls[x].markAsTouched();
                }
                if (this.CategoryManagementTeamForm.valid) {
                    if (this.CategoryManagementTeamForm.value.status)
                        this.CategoryManagementTeamForm.value.status = parseInt("1");
                    else
                        this.CategoryManagementTeamForm.value.status = parseInt("0");
                }
                /** @type {?} */
                var data;
                if (this.activeroute.snapshot.params._id) {
                    data = {
                        "source": "Team_category",
                        "data": {
                            "id": this.params_id,
                            'categoryName': this.CategoryManagementTeamForm.value.categoryName,
                            'description': this.CategoryManagementTeamForm.value.description,
                            'status': this.CategoryManagementTeamForm.value.status,
                            'role': this.CategoryManagementTeamForm.value.role
                        }
                    };
                }
                else {
                    data = {
                        "source": "Team_category",
                        "data": this.CategoryManagementTeamForm.value
                    };
                }
                this.spinnerLoader = true;
                this.apiService.addData(data).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.spinnerLoader = false;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.router.navigateByUrl('/' + _this.listingPageUrl);
                    }), 100);
                }));
            }
        };
        /**
         * @return {?}
         */
        AddeditTeamComponent.prototype.getData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                "source": "rolemanagement"
            };
            this.apiService.getData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = response;
                _this.allData = result.res;
            }));
        };
        /**
         * @return {?}
         */
        AddeditTeamComponent.prototype.ResetTeamForm = /**
         * @return {?}
         */
        function () {
            this.CategoryManagementTeamForm.reset();
        };
        AddeditTeamComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-addedit-team',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management</h2>\n  </mat-toolbar>\n\n  <span class=\"formspan\">\n  <mat-card-content class=\"example-container\">\n\n    <!-- ----------form starts here------------------ -->\n    <form class=\"example-form\"\n    name=\"CategoryManagementTeamForm\" (ngSubmit)=\"CategoryManagementTeamFormSubmit()\"\n          [formGroup]=\"CategoryManagementTeamForm\" >\n\n\n      <!-- ---------------------input for role name---------------- -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" \n        [formControl]=\"CategoryManagementTeamForm.controls['categoryName']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'categoryName')\">\n        <mat-error *ngIf=\"CategoryManagementTeamForm.controls['categoryName'].touched && !CategoryManagementTeamForm.controls['categoryName'].valid\n               && CategoryManagementTeamForm.controls['categoryName'].errors.required\">\n              Category Name field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- -----------------------text area------------------------>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Description\" \n        [formControl]=\"CategoryManagementTeamForm.controls['description']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'description')\"\n          ></textarea>\n          <mat-error *ngIf=\"CategoryManagementTeamForm.controls['description'].touched && !CategoryManagementTeamForm.controls['description'].valid\n          && CategoryManagementTeamForm.controls['description'].errors.required\">\n         Description field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- ------status for role-management---------- -->\n      <mat-checkbox [formControl]=\"CategoryManagementTeamForm.controls['status']\" color=\"primary\" >Active</mat-checkbox><br>\n\n      <mat-form-field>\n        <mat-label>Multiple Role</mat-label>\n        <mat-select formControlName=\"role\" multiple >\n          <mat-option [value]=0>\n            Select a category\n          </mat-option>\n          <mat-option *ngFor=\"let f of allData\" [value]=\"f.roleslug\">\n        {{f.roleslug}}\n      </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <!-- -------------------button form submission----------------------- -->\n      <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\" >{{ButtonText}}</button>\n      <!-- resetting the form -->\n      <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetTeamForm()\" >Reset</button>\n    </form>\n\n    <!-- -----------------------form ends here--------------------->\n  </mat-card-content>\n  \n\n</span>\n<mat-spinner  *ngIf=\"spinnerLoader\"></mat-spinner>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditTeamComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: router.ActivatedRoute },
            { type: http.HttpClient },
            { type: router.Router },
            { type: ApiService }
        ]; };
        AddeditTeamComponent.propDecorators = {
            TeamData: [{ type: core.Input }],
            serverUrl: [{ type: core.Input }],
            getDataEndpoint: [{ type: core.Input }],
            singleEditData: [{ type: core.Input }],
            addEndpoint: [{ type: core.Input }],
            ListPageRoute: [{ type: core.Input }]
        };
        return AddeditTeamComponent;
    }());
    if (false) {
        /** @type {?} */
        AddeditTeamComponent.prototype.CategoryManagementTeamForm;
        /** @type {?} */
        AddeditTeamComponent.prototype.DataListViaResolve;
        /** @type {?} */
        AddeditTeamComponent.prototype.allData;
        /** @type {?} */
        AddeditTeamComponent.prototype.SingledataEdit;
        /** @type {?} */
        AddeditTeamComponent.prototype.getDataEndpointData;
        /** @type {?} */
        AddeditTeamComponent.prototype.addEndpointData;
        /** @type {?} */
        AddeditTeamComponent.prototype.serverUrlData;
        /** @type {?} */
        AddeditTeamComponent.prototype.spinnerLoader;
        /** @type {?} */
        AddeditTeamComponent.prototype.listingPageUrl;
        /** @type {?} */
        AddeditTeamComponent.prototype.params_id;
        /** @type {?} */
        AddeditTeamComponent.prototype.ButtonText;
        /** @type {?} */
        AddeditTeamComponent.prototype.fb;
        /** @type {?} */
        AddeditTeamComponent.prototype.activeroute;
        /** @type {?} */
        AddeditTeamComponent.prototype._http;
        /** @type {?} */
        AddeditTeamComponent.prototype.router;
        /** @type {?} */
        AddeditTeamComponent.prototype.apiService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListTeamComponent = /** @class */ (function () {
        function ListTeamComponent(router) {
            this.router = router;
            this.alldata = [];
            this.addPageVal = '';
            this.searchingendpoint = '';
            this.sourcenameViaapp = '';
            this.tokenVal = '';
            this.deleteendpointVal = '';
            this.addupdate = '';
            this.serverUrlData = '';
            this.editRouteval = '';
            this.alldata_skip = ["_id", "created_at"];
            this.alldata_modify_header = {
                "categoryName": "Category Name", "description": "Description",
                "rolename": "Role Name", "status": "Status", "role": "Role"
            };
            this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
            this.search_settings = {
                selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
                textsearch: [{ label: "Search By Category Name", field: 'categoryName' }],
            };
        }
        Object.defineProperty(ListTeamComponent.prototype, "TeamData", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.alldata = (val) || '<no name set>';
                this.alldata = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "EditRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.editRouteval = (val) || '<no name set>';
                this.editRouteval = val;
                console.log(this.editRouteval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "addButtonRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.addPageVal = (val) || '<no name set>';
                this.addPageVal = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "manageButtonRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.manageRoute = (val) || '<no name set>';
                this.manageRoute = (val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "UpdateRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.addupdate = (val) || '<no name set>';
                this.addupdate = val;
                console.log(this.addupdate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "Token", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.tokenVal = (val) || '<no name set>';
                this.tokenVal = val;
                console.log(this.tokenVal);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "SourceName", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.sourcenameViaapp = (val) || '<no name set>';
                this.sourcenameViaapp = val;
                console.log(this.sourcenameViaapp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "SearchEndpoint", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.searchingendpoint = (val) || '<no name set>';
                this.searchingendpoint = val;
                console.log(this.searchingendpoint);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "DeleteEndpoint", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.deleteendpointVal = (val) || '<no name set>';
                this.deleteendpointVal = val;
                console.log(this.deleteendpointVal);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListTeamComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */
            function (serverUrlval) {
                this.serverUrlData = (serverUrlval) || '<no name set>';
                this.serverUrlData = serverUrlval;
                console.log(this.serverUrlData);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListTeamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ListTeamComponent.prototype.addButton = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('/' + this.addPageVal);
        };
        /**
         * @return {?}
         */
        ListTeamComponent.prototype.manageTeamButton = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('/' + this.manageRoute);
        };
        ListTeamComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-list-team',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management List</h2>\n  </mat-toolbar>\n\n  <!-- add button start here -->\n  <mat-toolbar class=\"buttonsetToolbar\">\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Category</button>\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"manageTeamButton()\" >Manage Team</button>\n\n  </mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n \n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"alldata.length>0\" \n    [datasource]=\"alldata\"\n    [sourcedata]=\"sourcenameViaapp\"\n    [skip]=\"alldata_skip\" \n    [modify_header_array]=\"alldata_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [editroute]=\"editRouteval\"\n    [jwttoken]=\"tokenVal\" \n    [statusarr]=\"status\" \n    [updateendpoint]=\"addupdate\"\n    [deleteendpoint]=\"deleteendpointVal\"\n    [jwttoken]=\"tokenVal\"\n    [date_search_endpoint]=\"searchingendpoint\"\n    [date_search_source]=\"sourcenameViaapp\"\n    [search_settings]=\"search_settings\">\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                        styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                    }] }
        ];
        /** @nocollapse */
        ListTeamComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        ListTeamComponent.propDecorators = {
            TeamData: [{ type: core.Input }],
            EditRoute: [{ type: core.Input }],
            addButtonRoute: [{ type: core.Input }],
            manageButtonRoute: [{ type: core.Input }],
            UpdateRoute: [{ type: core.Input }],
            Token: [{ type: core.Input }],
            SourceName: [{ type: core.Input }],
            SearchEndpoint: [{ type: core.Input }],
            DeleteEndpoint: [{ type: core.Input }],
            serverUrl: [{ type: core.Input }]
        };
        return ListTeamComponent;
    }());
    if (false) {
        /** @type {?} */
        ListTeamComponent.prototype.alldata;
        /** @type {?} */
        ListTeamComponent.prototype.addPageVal;
        /** @type {?} */
        ListTeamComponent.prototype.searchingendpoint;
        /** @type {?} */
        ListTeamComponent.prototype.sourcenameViaapp;
        /** @type {?} */
        ListTeamComponent.prototype.tokenVal;
        /** @type {?} */
        ListTeamComponent.prototype.deleteendpointVal;
        /** @type {?} */
        ListTeamComponent.prototype.addupdate;
        /** @type {?} */
        ListTeamComponent.prototype.serverUrlData;
        /** @type {?} */
        ListTeamComponent.prototype.editRouteval;
        /** @type {?} */
        ListTeamComponent.prototype.manageRoute;
        /** @type {?} */
        ListTeamComponent.prototype.alldata_skip;
        /** @type {?} */
        ListTeamComponent.prototype.alldata_modify_header;
        /** @type {?} */
        ListTeamComponent.prototype.status;
        /** @type {?} */
        ListTeamComponent.prototype.search_settings;
        /** @type {?} */
        ListTeamComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamListComponent = /** @class */ (function () {
        function TeamListComponent(router) {
            this.router = router;
            this.DataList = [];
            this.serverUrlData = '';
            this.tokenVal = '';
            this.DelEndpoint = '';
            this.editroute = '';
            this.updatendpoint = '';
            this.collectionName = '';
            this.searchingSource = '';
            this.searchingEndpoint = '';
            this.addPageRoute = '';
            this.data_skip = ["_id", "multipleemail", "bulletarray"];
            this.data_modify_header = { "membername": "Member Name", "description": "Description",
                "categoryName": "Category Name", "multiplephone": "Phone Numbers", "images": "Images"
            };
            this.search_settings = {
                textsearch: [{ label: "Search By Category Name", field: 'categoryname' },
                    { label: "Search By Member Name", field: 'membername' },
                    { label: "Search By E-Mail", field: 'multipleemail' }],
            };
            this.pendingmodelapplicationarray_detail_datatype = [{
                    key: "images",
                    value: 'image',
                    fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/team/' // Image path 
                }];
        }
        Object.defineProperty(TeamListComponent.prototype, "allData", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.DataList = (val) || '<no name set>';
                this.DataList = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlval
             * @return {?}
             */
            function (serverUrlval) {
                this.serverUrlData = (serverUrlval) || '<no name set>';
                this.serverUrlData = serverUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "Token", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.tokenVal = (val) || '<no name set>';
                this.tokenVal = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "DeleteEndpoint", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.DelEndpoint = (val) || '<no name set>';
                this.DelEndpoint = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "EditRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.editroute = (val) || '<no name set>';
                this.editroute = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "UpdateEndpoint", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.updatendpoint = (val) || '<no name set>';
                this.updatendpoint = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "SourceName", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.collectionName = (val) || '<no name set>';
                this.collectionName = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "SearchSourceName", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.searchingSource = (val) || '<no name set>';
                this.searchingSource = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "SearchEndpoint", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.searchingEndpoint = (val) || '<no name set>';
                this.searchingEndpoint = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamListComponent.prototype, "AddPageRoute", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.addPageRoute = (val) || '<no name set>';
                this.addPageRoute = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TeamListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            console.log('this.preview_detail_listing');
            console.log(this.pendingmodelapplicationarray_detail_datatype);
        };
        /**
         * @return {?}
         */
        TeamListComponent.prototype.addButton = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('/' + this.addPageRoute);
        };
        TeamListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-team-list',
                        template: "\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team List</h2>\n  </mat-toolbar>\n\n<!-- add button start here -->\n<mat-toolbar class=\"buttonsetToolbar\">\n  <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Member</button>\n</mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"DataList.length>0\" \n    [datasource]=\"DataList\"\n    [jwttoken]=\"tokenVal\" \n    [skip]=\"data_skip\" \n    [modify_header_array]=\"data_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [deleteendpoint]=\"DelEndpoint\"\n    [editroute]=\"editroute\"\n    [updateendpoint]=\"updatendpoint\"\n    [sourcedata]=\"collectionName\"\n    [date_search_source]=\"searchingSource\"\n    [date_search_endpoint]=\"searchingEndpoint\"\n    [search_settings]=\"search_settings\"\n    [detail_datatype]=\"pendingmodelapplicationarray_detail_datatype\"\n   >\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                        styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                    }] }
        ];
        /** @nocollapse */
        TeamListComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        TeamListComponent.propDecorators = {
            allData: [{ type: core.Input }],
            serverUrl: [{ type: core.Input }],
            Token: [{ type: core.Input }],
            DeleteEndpoint: [{ type: core.Input }],
            EditRoute: [{ type: core.Input }],
            UpdateEndpoint: [{ type: core.Input }],
            SourceName: [{ type: core.Input }],
            SearchSourceName: [{ type: core.Input }],
            SearchEndpoint: [{ type: core.Input }],
            AddPageRoute: [{ type: core.Input }]
        };
        return TeamListComponent;
    }());
    if (false) {
        /** @type {?} */
        TeamListComponent.prototype.DataList;
        /** @type {?} */
        TeamListComponent.prototype.serverUrlData;
        /** @type {?} */
        TeamListComponent.prototype.tokenVal;
        /** @type {?} */
        TeamListComponent.prototype.DelEndpoint;
        /** @type {?} */
        TeamListComponent.prototype.editroute;
        /** @type {?} */
        TeamListComponent.prototype.updatendpoint;
        /** @type {?} */
        TeamListComponent.prototype.collectionName;
        /** @type {?} */
        TeamListComponent.prototype.searchingSource;
        /** @type {?} */
        TeamListComponent.prototype.searchingEndpoint;
        /** @type {?} */
        TeamListComponent.prototype.addPageRoute;
        /** @type {?} */
        TeamListComponent.prototype.data_skip;
        /** @type {?} */
        TeamListComponent.prototype.data_modify_header;
        /** @type {?} */
        TeamListComponent.prototype.search_settings;
        /** @type {?} */
        TeamListComponent.prototype.pendingmodelapplicationarray_detail_datatype;
        /** @type {?} */
        TeamListComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamModule = /** @class */ (function () {
        function TeamModule() {
        }
        TeamModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            MaterialModule,
                            animations.BrowserAnimationsModule,
                            libListing.ListingModule,
                            fileUpload.FileUploadModule
                        ],
                        providers: [ApiService],
                        exports: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return TeamModule;
    }());

    exports.TeamComponent = TeamComponent;
    exports.TeamModule = TeamModule;
    exports.TeamService = TeamService;
    exports.ɵa = AddEditTeamComponent;
    exports.ɵb = UploadService;
    exports.ɵc = ApiService;
    exports.ɵd = AddeditTeamComponent;
    exports.ɵe = ListTeamComponent;
    exports.ɵf = TeamListComponent;
    exports.ɵg = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=team.umd.js.map

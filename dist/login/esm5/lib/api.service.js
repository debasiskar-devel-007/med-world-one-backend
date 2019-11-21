/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-cookie-service";
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
        this.subjectForServerUrl = new Subject();
        this.subjectForaddEndpointUrl = new Subject();
        this.subjectForuploadEndpointUrl = new Subject(); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new Subject();
        this.subjectFordeletesingleEndpointUrl = new Subject();
        this.subjectForupdatestatusSingleEndpointUrl = new Subject();
        this.subjectForGetdataEndpointUrl = new Subject();
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        // console.log('httpoptions',httpOptions,this.serverUrl,requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri start here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.addLogin = /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in addLogin apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written access-token(temp)
            })
        };
        // console.log(this.serverUrl,requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /*************** Added by himadri start here ***************/
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.forgetPassword = /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in forgetPassword apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written access-token(temp)
            })
        };
        // console.log(this.serverUrl,requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.deleteSingleData = /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE0QixVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxHQUFHLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUvRCxPQUFPLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFNLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHaEQ7SUFzQ0Usb0JBQW9CLEtBQWlCLEVBQzNCLFNBQXFCLEVBQVMsYUFBNEI7UUFEcEUsaUJBcUVDO1FBckVtQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CN0QsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUUxRCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQVVqQix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3pDLDZCQUF3QixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDOUMsZ0NBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQyxDQUFFLGtCQUFrQjs7UUFDckUsZ0NBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqRCxzQ0FBaUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3ZELDRDQUF1QyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDN0QsaUNBQTRCLEdBQUcsSUFBSSxP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QUFpRDs7Ozs7SUFFckMsMkJBQXlCOzs7OztJQUNuQywrQkFBNkI7Ozs7O0lBQUMsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBmb3Igc2V0dGluZyBvYnNlcnZhYmxlcyB0byBnZXQgc2VydmVydXJsIGFuZCBlbmRwb2ludHVybCBmcm9tIGFwcFxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0e0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoeyAgIFxyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBsZW5ndGhpcztcclxuICBwdWJsaWMgcGVyY2VudGFnZWlzO1xyXG4gIHB1YmxpYyBpbnByb2dyZXNzO1xyXG4gIHB1YmxpYyBwcm9ncmVzczogYW55ID0gW107XHJcbiAgcHVibGljIHVwbG9hZHR5cGU7XHJcbiAgcHVibGljIHVwbG9hZGVycm9yOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWNjZXNzdG9rZW46YW55PXRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJyk7XHJcbiAgLy8gcHVibGljIGFjY2Vzc3Rva2VuOmFueT0nZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm1iMjhpT2lKaVlYSWlMQ0psZUhBaU9qRTFOamd6TlRneU1UQXNJbWxoZENJNk1UVTJPREkzTVRneE1IMC4ybHR2eFZLd2ZYMXV3TU93UTJaemdwMUsyamlhQ0RqMDUxV3lobzBJdy1RJztcclxuICBmaWxlc2VydmVybmFtZTogYW55ID0gW107XHJcbiAgc2VydmVyVXJsOiBhbnk7XHJcbiAgYWRkZW5kcG9pbnRVcmw6IGFueTtcclxuICB1cGxvYWRFbmRwb2ludFVybDphbnk7IC8vc291cmVzaFxyXG4gIHVwZGF0ZWVuZHBvaW50VXJsOiBhbnk7XHJcbiAgZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgdXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybDogYW55O1xyXG4gIGRlbGV0ZW11bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgdXBkYXRlc3RhdHVzX211bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgZ2V0ZGF0YV9lbmRwb2ludFVybDogYW55O1xyXG4gIHByaXZhdGUgc3ViamVjdEZvclNlcnZlclVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIHN1YmplY3RGb3JhZGRFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIHN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTsgIC8vYWRkZWQgYnkgc291cmVzaFxyXG4gIHByaXZhdGUgc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uU2VydmVyOiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbmFkZEVuZHBvaW50OiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwbG9hZEVuZHBvaW50OiBTdWJzY3JpcHRpb247ICAgLy9hZGRlZCBieSBzb3VyZXNoXHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwZGF0ZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbmRlbGV0ZXNpbmdsZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbkdldGRhdGFFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBjb29raWVTZXJ2aWNlIDpDb29raWVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvblNlcnZlciA9IHRoaXMuZ2V0U2VydmVyVXJsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQgPSB0aGlzLmdldGFkZEVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuYWRkZW5kcG9pbnRVcmwgPSByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hZGRlbmRwb2ludFVybCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLyoqKioqKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKioqKioqKi9cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBsb2FkRW5kcG9pbnQ9dGhpcy5nZXR1cGxvYWRFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlPT57XHJcbiAgICAgIGxldCByZXN1bHQ6YW55O1xyXG4gICAgICByZXN1bHQ9bWVzc2FnZTtcclxuICAgICAgICBpZihyZXN1bHQhPW51bGwpe1xyXG4gICAgICAgICAgdGhpcy51cGxvYWRFbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZEVuZHBvaW50VXJsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLyoqKioqKioqKioqKnNvdXJlc2ggZW5kIGhlcmUqKioqKioqKioqKioqKi9cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBkYXRlRW5kcG9pbnQgPSB0aGlzLmdldHVwZGF0ZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlZW5kcG9pbnRVcmwgPSByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVlbmRwb2ludFVybCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25kZWxldGVzaW5nbGVFbmRwb2ludCA9IHRoaXMuZ2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnQgPSB0aGlzLmdldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkdldGRhdGFFbmRwb2ludCA9IHRoaXMuZ2V0ZGF0YUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdldGRhdGFfZW5kcG9pbnRVcmwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNldFNlcnZlclVybCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjbGVhclNlcnZlclVybCgpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2VydmVyVXJsKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0YWRkRW5kcG9pbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjbGVhcmFkZEVuZHBvaW50KCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcclxuICB9XHJcbiAgcHVibGljIGdldGFkZEVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG4vKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqL1xyXG4gIHNldHVwbG9hZEVuZHBvbnQodmFsdWU6YW55KXtcclxuICAgIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgY2xlYXJ1cGxvYWRFbmRwb2ludCgpe1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcclxuICB9XHJcbiAgcHVibGljIGdldHVwbG9hZEVuZHBvaW50KCk6IE9ic2VydmFibGUgPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuICAgLyoqKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xyXG5cclxuXHJcbiAgc2V0dXBkYXRlRW5kcG9pbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjbGVhcnVwZGF0ZUVuZHBvaW50KCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcclxuICB9XHJcbiAgcHVibGljIGdldHVwZGF0ZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRkZWxldGVzaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFyZGVsZXRlc2luZ2xlRW5kcG9pbnQoKSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFydXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcclxuICB9XHJcbiAgcHVibGljIGdldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Z2V0ZGF0YUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFyZ2V0ZGF0YUVuZHBvaW50KCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLm5leHQobnVsbCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRkYXRhRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGlzVG9rZW5FeHBpcmVkKCkge1xyXG5cclxuICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXHJcbiAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcclxuICB9XHJcblxyXG4gIGFkZERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ2luIGFkZGRhdGEgYXBpc2VydmljZScpO1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBhY2Nlc3MtdG9rZW4odGVtcClcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2h0dHBvcHRpb25zJyxodHRwT3B0aW9ucyx0aGlzLnNlcnZlclVybCxyZXF1ZXN0ZGF0YSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5hZGRlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgLyoqKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqKioqKioqL1xyXG4gIHVwbG9hZEZpbGUocmVxdWVzdGRhdGE6YW55KXtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zPXtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2FjY2Vzcy10b2tlbic6dGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdD10aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwbG9hZEVuZHBvaW50VXJsLEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSxodHRwT3B0aW9ucykucGlwZShtYXAocmVzPT5yZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIC8qKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xyXG4gIFVwZGF0ZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmdldGRhdGFfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4vKioqKioqKioqKioqKioqIEFkZGVkIGJ5IGhpbWFkcmkgc3RhcnQgaGVyZSAqKioqKioqKioqKioqKiovIFxyXG4gIGFkZExvZ2luKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBhZGRMb2dpbiBhcGlzZXJ2aWNlJyk7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgLy8gJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuICAgICAgICAgIC8vaGFyZCBjb2RlIHdyaXR0ZW4gYWNjZXNzLXRva2VuKHRlbXApXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsLHJlcXVlc3RkYXRhKTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmFkZGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICAvKioqKioqKioqKioqKioqIEFkZGVkIGJ5IGhpbWFkcmkgZW5kIGhlcmUgKioqKioqKioqKioqKioqLyBcclxuXHJcbi8qKioqKioqKioqKioqKiogQWRkZWQgYnkgaGltYWRyaSBzdGFydCBoZXJlICoqKioqKioqKioqKioqKi8gXHJcbmZvcmdldFBhc3N3b3JkKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICBjb25zb2xlLmxvZygnaW4gZm9yZ2V0UGFzc3dvcmQgYXBpc2VydmljZScpO1xyXG4gIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAvLyAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBhY2Nlc3MtdG9rZW4odGVtcClcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmwscmVxdWVzdGRhdGEpO1xyXG4gIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmFkZGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4vKioqKioqKioqKioqKioqIEFkZGVkIGJ5IGhpbWFkcmkgZW5kIGhlcmUgKioqKioqKioqKioqKioqLyBcclxuXHJcblxyXG4gIGRlbGV0ZVNpbmdsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU11bHRpcGxlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0aGlzLmFjY2Vzc3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsKydtYW55JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIFVwZGF0ZVN0YXR1c0ZvclNpbmdsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGVTdGF0dXNGb3JNdWx0aXBsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwrJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBDdXN0b21SZXF1ZXN0KHJlcXVlc3RkYXRhOiBhbnksIGVuZHBvaW50OmFueSApIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICtlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
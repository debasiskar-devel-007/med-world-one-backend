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
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
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
                'Authorization': this.accesstoken //hard code written Authorization(temp)
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
                'Authorization': this.accesstoken //hard code written Authorization(temp)
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
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
                'Authorization': this.accesstoken
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
                'Authorization': this.accesstoken
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
                'Authorization': this.accesstoken
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
                'Authorization': this.accesstoken
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLEdBQUcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRS9ELE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUdoRDtJQXFDRSxvQkFBb0IsS0FBaUIsRUFDM0IsU0FBcUIsRUFBUyxhQUE0QjtRQURwRSxpQkFxRUM7UUFyRW1CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBOUI3RCxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFVakIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN6Qyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzlDLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBRSxrQkFBa0I7O1FBQ3JFLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakQsc0NBQWlDLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2RCw0Q0FBdUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzdELGlDQUE0QixHQUFHLElBQUksT0FB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d0NBQXdDOztJQUN4Qyw2Q0FBNkM7O0lBQzdDLGdEQUFnRDs7SUFDaEQsZ0RBQWdEOztJQUNoRCxzREFBc0Q7O0lBQ3RELDREQUE0RDs7SUFDNUQsaURBQWlEOzs7OztJQUVyQywyQkFBeUI7Ozs7O0lBQ25DLCtCQUE2Qjs7Ozs7SUFBQyxtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGZvciBzZXR0aW5nIG9ic2VydmFibGVzIHRvIGdldCBzZXJ2ZXJ1cmwgYW5kIGVuZHBvaW50dXJsIGZyb20gYXBwXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydHtDb29raWVTZXJ2aWNlfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHsgICBcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gIHB1YmxpYyBsZW5ndGhpcztcbiAgcHVibGljIHBlcmNlbnRhZ2VpcztcbiAgcHVibGljIGlucHJvZ3Jlc3M7XG4gIHB1YmxpYyBwcm9ncmVzczogYW55ID0gW107XG4gIHB1YmxpYyB1cGxvYWR0eXBlO1xuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xuICBwdWJsaWMgYWNjZXNzdG9rZW46YW55PXRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJyk7XG4gIGZpbGVzZXJ2ZXJuYW1lOiBhbnkgPSBbXTtcbiAgc2VydmVyVXJsOiBhbnk7XG4gIGFkZGVuZHBvaW50VXJsOiBhbnk7XG4gIHVwbG9hZEVuZHBvaW50VXJsOmFueTsgLy9zb3VyZXNoXG4gIHVwZGF0ZWVuZHBvaW50VXJsOiBhbnk7XG4gIGRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybDogYW55O1xuICB1cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XG4gIGRlbGV0ZW11bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XG4gIHVwZGF0ZXN0YXR1c19tdWx0aXBsZV9lbmRwb2ludFVybDogYW55O1xuICBnZXRkYXRhX2VuZHBvaW50VXJsOiBhbnk7XG4gIHByaXZhdGUgc3ViamVjdEZvclNlcnZlclVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpOyAgLy9hZGRlZCBieSBzb3VyZXNoXG4gIHByaXZhdGUgc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIHN1YnNjcmlwdGlvblNlcnZlcjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwbG9hZEVuZHBvaW50OiBTdWJzY3JpcHRpb247ICAgLy9hZGRlZCBieSBzb3VyZXNoXG4gIHB1YmxpYyBzdWJzY3JpcHRpb251cGRhdGVFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uZGVsZXRlc2luZ2xlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25HZXRkYXRhRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgY29va2llU2VydmljZSA6Q29va2llU2VydmljZSkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VydmVyID0gdGhpcy5nZXRTZXJ2ZXJVcmwoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlcnZlclVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25hZGRFbmRwb2ludCA9IHRoaXMuZ2V0YWRkRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYWRkZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZGVuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKioqKioqKioqYWRkZWQgYnkgc291cmVzaCoqKioqKioqKioqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBsb2FkRW5kcG9pbnQ9dGhpcy5nZXR1cGxvYWRFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlPT57XG4gICAgICBsZXQgcmVzdWx0OmFueTtcbiAgICAgIHJlc3VsdD1tZXNzYWdlO1xuICAgICAgICBpZihyZXN1bHQhPW51bGwpe1xuICAgICAgICAgIHRoaXMudXBsb2FkRW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICB0aGlzLnVwbG9hZEVuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLyoqKioqKioqKioqKnNvdXJlc2ggZW5kIGhlcmUqKioqKioqKioqKioqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnVwZGF0ZUVuZHBvaW50ID0gdGhpcy5nZXR1cGRhdGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVlbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uZGVsZXRlc2luZ2xlRW5kcG9pbnQgPSB0aGlzLmdldGRlbGV0ZXNpbmdsZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50ID0gdGhpcy5nZXR1cGRhdGVzdGF0dXNfc2luZ2xlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25HZXRkYXRhRW5kcG9pbnQgPSB0aGlzLmdldGRhdGFFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICB9XG5cbiAgc2V0U2VydmVyVXJsKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFyU2VydmVyVXJsKCkge1xuICAgIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXRTZXJ2ZXJVcmwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0YWRkRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvcmFkZEVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcmFkZEVuZHBvaW50KCkge1xuICAgIHRoaXMuc3ViamVjdEZvcmFkZEVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldGFkZEVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcmFkZEVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4vKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqL1xuICBzZXR1cGxvYWRFbmRwb250KHZhbHVlOmFueSl7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFydXBsb2FkRW5kcG9pbnQoKXtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXR1cGxvYWRFbmRwb2ludCgpOiBPYnNlcnZhYmxlIDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgIC8qKioqKioqKnNvdXJlc2ggZW5kIGhlcmUqKioqKioqKi9cblxuXG4gIHNldHVwZGF0ZUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJ1cGRhdGVFbmRwb2ludCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXR1cGRhdGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldGRlbGV0ZXNpbmdsZUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJkZWxldGVzaW5nbGVFbmRwb2ludCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXRkZWxldGVzaW5nbGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFydXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkge1xuICAgIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldGdldGRhdGFFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcmdldGRhdGFFbmRwb2ludCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0ZGF0YUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG5cblxuICBpc1Rva2VuRXhwaXJlZCgpIHtcblxuICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gaGVscGVyLmRlY29kZVRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXG4gICAgLy8gY29uc3QgaXNSZWZyZXNoVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcbiAgfVxuXG4gIGFkZERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBhZGRkYXRhIGFwaXNlcnZpY2UnKTtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIEF1dGhvcml6YXRpb24odGVtcClcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCdodHRwb3B0aW9ucycsaHR0cE9wdGlvbnMsdGhpcy5zZXJ2ZXJVcmwscmVxdWVzdGRhdGEpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmFkZGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKioqKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKioqKioqKiovXG4gIHVwbG9hZEZpbGUocmVxdWVzdGRhdGE6YW55KXtcbiAgICBjb25zdCBodHRwT3B0aW9ucz17XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzp0aGlzLmFjY2Vzc3Rva2VuICAgICAgICAgIC8vaGFyZCBjb2RlIHdyaXR0ZW4gQXV0aG9yaXphdGlvbih0ZW1wKVxuICAgICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdD10aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwbG9hZEVuZHBvaW50VXJsLEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSxodHRwT3B0aW9ucykucGlwZShtYXAocmVzPT5yZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xuICBVcGRhdGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIEF1dGhvcml6YXRpb24odGVtcClcbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXREYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmdldGRhdGFfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVsZXRlU2luZ2xlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVsZXRlTXVsdGlwbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCsnbWFueScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgVXBkYXRlU3RhdHVzRm9yU2luZ2xlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIFVwZGF0ZVN0YXR1c0Zvck11bHRpcGxlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsKydtYW55JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgQ3VzdG9tUmVxdWVzdChyZXF1ZXN0ZGF0YTogYW55LCBlbmRwb2ludDphbnkgKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICtlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cblxufSJdfQ==
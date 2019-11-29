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
export class ApiService {
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
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
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.serverUrl = result;
            }
            else {
                this.serverUrl = null;
            }
        }));
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.addendpointUrl = result;
            }
            else {
                this.addendpointUrl = null;
            }
        }));
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.uploadEndpointUrl = result;
            }
            else {
                this.uploadEndpointUrl = null;
            }
        }));
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updateendpointUrl = result;
            }
            else {
                this.updateendpointUrl = null;
            }
        }));
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.deletesingle_endpointUrl = result;
            }
            else {
                this.deletesingle_endpointUrl = null;
            }
        }));
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updatestatus_single_endpointUrl = result;
            }
            else {
                this.updatestatus_single_endpointUrl = null;
            }
        }));
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.getdata_endpointUrl = result;
            }
            else {
                this.getdata_endpointUrl = null;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setServerUrl(value) {
        this.subjectForServerUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearServerUrl() {
        this.subjectForServerUrl.next(null);
    }
    /**
     * @return {?}
     */
    getServerUrl() {
        return this.subjectForServerUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setaddEndpoint(value) {
        this.subjectForaddEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearaddEndpoint() {
        this.subjectForaddEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getaddEndpoint() {
        return this.subjectForaddEndpointUrl.asObservable();
    }
    /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    setuploadEndpont(value) {
        this.subjectForuploadEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearuploadEndpoint() {
        this.subjectForuploadEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getuploadEndpoint() {
        return this.subjectForuploadEndpointUrl.asObservable();
    }
    /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    setupdateEndpoint(value) {
        this.subjectForupdateEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdateEndpoint() {
        this.subjectForupdateEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdateEndpoint() {
        return this.subjectForupdateEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setdeletesingleEndpoint(value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleardeletesingleEndpoint() {
        this.subjectFordeletesingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdeletesingleEndpoint() {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setupdatestatus_singleEndpoint(value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdatestatus_singleEndpoint() {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdatestatus_singleEndpoint() {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setgetdataEndpoint(value) {
        this.subjectForGetdataEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleargetdataEndpoint() {
        this.subjectForGetdataEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdataEndpoint() {
        return this.subjectForGetdataEndpointUrl.asObservable();
    }
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    addData(requestdata) {
        console.log('in adddata apiservice');
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    uploadFile(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    getData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    CustomRequest(requestdata, endpoint) {
        /** @type {?} */
        const httpOptions = {
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
        res => res)));
        return result;
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLEdBQUcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRS9ELE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU1oRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBa0NyQixZQUFvQixLQUFpQixFQUMzQixTQUFxQixFQUFTLGFBQTRCO1FBRGhELFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBOUI3RCxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFVakIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN6Qyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzlDLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBRSxrQkFBa0I7O1FBQ3JFLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakQsc0NBQWlDLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2RCw0Q0FBdUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzdELGlDQUE0QixHQUFHLElB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LEdBQUcsRUFBQyxDQUFDO1FBQ3RILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQXBTRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxVQUFVO1lBQVYsVUFBVTtZQUdaLGFBQWE7Ozs7O0lBUWxCLDhCQUFnQjs7SUFDaEIsa0NBQW9COztJQUNwQixnQ0FBa0I7O0lBQ2xCLDhCQUEwQjs7SUFDMUIsZ0NBQWtCOztJQUNsQixpQ0FBNkI7O0lBQzdCLGlDQUEwRDs7SUFDMUQsb0NBQXlCOztJQUN6QiwrQkFBZTs7SUFDZixvQ0FBb0I7O0lBQ3BCLHVDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUN2Qiw4Q0FBOEI7O0lBQzlCLHFEQUFxQzs7SUFDckMsZ0RBQWdDOztJQUNoQyx1REFBdUM7O0lBQ3ZDLHlDQUF5Qjs7Ozs7SUFDekIseUNBQWlEOzs7OztJQUNqRCw4Q0FBc0Q7Ozs7O0lBQ3RELGlEQUF5RDs7Ozs7SUFDekQsaURBQXlEOzs7OztJQUN6RCx1REFBK0Q7Ozs7O0lBQy9ELDZEQUFxRTs7Ozs7SUFDckUsa0RBQTBEOztJQUMxRCx3Q0FBd0M7O0lBQ3hDLDZDQUE2Qzs7SUFDN0MsZ0RBQWdEOztJQUNoRCxnREFBZ0Q7O0lBQ2hELHNEQUFzRDs7SUFDdEQsNERBQTREOztJQUM1RCxpREFBaUQ7Ozs7O0lBRXJDLDJCQUF5Qjs7Ozs7SUFDbkMsK0JBQTZCOzs7OztJQUFDLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gZm9yIHNldHRpbmcgb2JzZXJ2YWJsZXMgdG8gZ2V0IHNlcnZlcnVybCBhbmQgZW5kcG9pbnR1cmwgZnJvbSBhcHBcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0e0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoeyAgIFxuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgcHVibGljIGxlbmd0aGlzO1xuICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuICBwdWJsaWMgaW5wcm9ncmVzcztcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcbiAgcHVibGljIHVwbG9hZHR5cGU7XG4gIHB1YmxpYyB1cGxvYWRlcnJvcjogYW55ID0gJyc7XG4gIHB1YmxpYyBhY2Nlc3N0b2tlbjphbnk9dGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKTtcbiAgZmlsZXNlcnZlcm5hbWU6IGFueSA9IFtdO1xuICBzZXJ2ZXJVcmw6IGFueTtcbiAgYWRkZW5kcG9pbnRVcmw6IGFueTtcbiAgdXBsb2FkRW5kcG9pbnRVcmw6YW55OyAvL3NvdXJlc2hcbiAgdXBkYXRlZW5kcG9pbnRVcmw6IGFueTtcbiAgZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XG4gIHVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgZGVsZXRlbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgdXBkYXRlc3RhdHVzX211bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XG4gIGdldGRhdGFfZW5kcG9pbnRVcmw6IGFueTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yU2VydmVyVXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3JhZGRFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7ICAvL2FkZGVkIGJ5IHNvdXJlc2hcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uU2VydmVyOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25hZGRFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBsb2FkRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjsgICAvL2FkZGVkIGJ5IHNvdXJlc2hcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwZGF0ZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25kZWxldGVzaW5nbGVFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbkdldGRhdGFFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBjb29raWVTZXJ2aWNlIDpDb29raWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25TZXJ2ZXIgPSB0aGlzLmdldFNlcnZlclVybCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlcnZlclVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbmFkZEVuZHBvaW50ID0gdGhpcy5nZXRhZGRFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hZGRlbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qKioqKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGxvYWRFbmRwb2ludD10aGlzLmdldHVwbG9hZEVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2U9PntcbiAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgcmVzdWx0PW1lc3NhZ2U7XG4gICAgICAgIGlmKHJlc3VsdCE9bnVsbCl7XG4gICAgICAgICAgdGhpcy51cGxvYWRFbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIHRoaXMudXBsb2FkRW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAvKioqKioqKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqKioqKioqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBkYXRlRW5kcG9pbnQgPSB0aGlzLmdldHVwZGF0ZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVlbmRwb2ludFVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25kZWxldGVzaW5nbGVFbmRwb2ludCA9IHRoaXMuZ2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9udXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnQgPSB0aGlzLmdldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkdldGRhdGFFbmRwb2ludCA9IHRoaXMuZ2V0ZGF0YUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmdldGRhdGFfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldGRhdGFfZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gIH1cblxuICBzZXRTZXJ2ZXJVcmwodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJTZXJ2ZXJVcmwoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldFNlcnZlclVybCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRhZGRFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFyYWRkRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0YWRkRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbi8qKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKiovXG4gIHNldHVwbG9hZEVuZHBvbnQodmFsdWU6YW55KXtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJ1cGxvYWRFbmRwb2ludCgpe1xuICAgIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldHVwbG9hZEVuZHBvaW50KCk6IE9ic2VydmFibGUgPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuICAgLyoqKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xuXG5cbiAgc2V0dXBkYXRlRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcnVwZGF0ZUVuZHBvaW50KCkge1xuICAgIHRoaXMuc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldHVwZGF0ZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcmRlbGV0ZXNpbmdsZUVuZHBvaW50KCkge1xuICAgIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldGRlbGV0ZXNpbmdsZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJ1cGRhdGVzdGF0dXNfc2luZ2xlRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0Z2V0ZGF0YUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFyZ2V0ZGF0YUVuZHBvaW50KCkge1xuICAgIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXRkYXRhRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cblxuXG4gIGlzVG9rZW5FeHBpcmVkKCkge1xuXG4gICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbiAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuICB9XG5cbiAgYWRkRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2luIGFkZGRhdGEgYXBpc2VydmljZScpO1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuICAgICAgICAgIC8vaGFyZCBjb2RlIHdyaXR0ZW4gQXV0aG9yaXphdGlvbih0ZW1wKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coJ2h0dHBvcHRpb25zJyxodHRwT3B0aW9ucyx0aGlzLnNlcnZlclVybCxyZXF1ZXN0ZGF0YSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuYWRkZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKioqKioqYWRkZWQgYnkgc291cmVzaCoqKioqKioqKioqKi9cbiAgdXBsb2FkRmlsZShyZXF1ZXN0ZGF0YTphbnkpe1xuICAgIGNvbnN0IGh0dHBPcHRpb25zPXtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOnRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBBdXRob3JpemF0aW9uKHRlbXApXG4gICAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0PXRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMudXBsb2FkRW5kcG9pbnRVcmwsSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXM9PnJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqKioqKipzb3VyZXNoIGVuZCBoZXJlKioqKioqKiovXG4gIFVwZGF0ZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuICAgICAgICAgIC8vaGFyZCBjb2RlIHdyaXR0ZW4gQXV0aG9yaXphdGlvbih0ZW1wKVxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZWxldGVTaW5nbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZWxldGVNdWx0aXBsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsKydtYW55JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBVcGRhdGVTdGF0dXNGb3JTaW5nbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgVXBkYXRlU3RhdHVzRm9yTXVsdGlwbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwrJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBDdXN0b21SZXF1ZXN0KHJlcXVlc3RkYXRhOiBhbnksIGVuZHBvaW50OmFueSApIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgK2VuZHBvaW50LCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuXG59Il19
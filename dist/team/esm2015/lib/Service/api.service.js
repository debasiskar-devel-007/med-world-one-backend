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
                // 'access-token': this.accesstoken 
                'Authorization': this.accesstoken //hard code written access-token(temp)
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
                'Authorization': this.accesstoken //hard code written access-token(temp)
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
                'Authorization': this.accesstoken //hard code written access-token(temp)
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
/** @nocollapse */ ApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL1NlcnZpY2UvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFhLEdBQUcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRS9ELE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUloRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBZ0NyQixZQUFvQixLQUFpQixFQUMzQixTQUFxQixFQUFTLGFBQTRCO1FBRGhELFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBN0I3RCxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFVakIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN6Qyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzlDLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBRSxrQkFBa0I7O1FBQ3JFLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakQsc0NBQWlDLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2RCw0Q0FBdUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzdELGlDQUE0QixH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QUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUN0SCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFoU0osVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsVUFBVTtZQUFWLFVBQVU7WUFHWixhQUFhOzs7OztJQUtsQiw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQiw4QkFBMEI7O0lBQzFCLGdDQUFrQjs7SUFDbEIsaUNBQTZCOztJQUM3QixpQ0FBMEQ7O0lBQzFELG9DQUF5Qjs7SUFDekIsK0JBQWU7O0lBQ2Ysb0NBQW9COztJQUNwQix1Q0FBc0I7O0lBQ3RCLHVDQUF1Qjs7SUFDdkIsOENBQThCOztJQUM5QixxREFBcUM7O0lBQ3JDLGdEQUFnQzs7SUFDaEMsdURBQXVDOztJQUN2Qyx5Q0FBeUI7Ozs7O0lBQ3pCLHlDQUFpRDs7Ozs7SUFDakQsOENBQXNEOzs7OztJQUN0RCxpREFBeUQ7Ozs7O0lBQ3pELGlEQUF5RDs7Ozs7SUFDekQsdURBQStEOzs7OztJQUMvRCw2REFBcUU7Ozs7O0lBQ3JFLGtEQUEwRDs7SUFDMUQsd0NBQXdDOztJQUN4Qyw2Q0FBNkM7O0lBQzdDLGdEQUFnRDs7SUFDaEQsZ0RBQWdEOztJQUNoRCxzREFBc0Q7O0lBQ3RELDREQUE0RDs7SUFDNUQsaURBQWlEOzs7OztJQUNyQywyQkFBeUI7Ozs7O0lBQ25DLCtCQUE2Qjs7Ozs7SUFBQyxtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGZvciBzZXR0aW5nIG9ic2VydmFibGVzIHRvIGdldCBzZXJ2ZXJ1cmwgYW5kIGVuZHBvaW50dXJsIGZyb20gYXBwXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydHtDb29raWVTZXJ2aWNlfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHB1YmxpYyBsZW5ndGhpcztcbiAgcHVibGljIHBlcmNlbnRhZ2VpcztcbiAgcHVibGljIGlucHJvZ3Jlc3M7XG4gIHB1YmxpYyBwcm9ncmVzczogYW55ID0gW107XG4gIHB1YmxpYyB1cGxvYWR0eXBlO1xuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xuICBwdWJsaWMgYWNjZXNzdG9rZW46YW55PXRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJyk7XG4gIGZpbGVzZXJ2ZXJuYW1lOiBhbnkgPSBbXTtcbiAgc2VydmVyVXJsOiBhbnk7XG4gIGFkZGVuZHBvaW50VXJsOiBhbnk7XG4gIHVwbG9hZEVuZHBvaW50VXJsOmFueTsgLy9zb3VyZXNoXG4gIHVwZGF0ZWVuZHBvaW50VXJsOiBhbnk7XG4gIGRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybDogYW55O1xuICB1cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XG4gIGRlbGV0ZW11bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XG4gIHVwZGF0ZXN0YXR1c19tdWx0aXBsZV9lbmRwb2ludFVybDogYW55O1xuICBnZXRkYXRhX2VuZHBvaW50VXJsOiBhbnk7XG4gIHByaXZhdGUgc3ViamVjdEZvclNlcnZlclVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpOyAgLy9hZGRlZCBieSBzb3VyZXNoXG4gIHByaXZhdGUgc3ViamVjdEZvcnVwZGF0ZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIHN1YnNjcmlwdGlvblNlcnZlcjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwbG9hZEVuZHBvaW50OiBTdWJzY3JpcHRpb247ICAgLy9hZGRlZCBieSBzb3VyZXNoXG4gIHB1YmxpYyBzdWJzY3JpcHRpb251cGRhdGVFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uZGVsZXRlc2luZ2xlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25HZXRkYXRhRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9hdXRoSHR0cDogSHR0cENsaWVudCxwcml2YXRlIGNvb2tpZVNlcnZpY2UgOkNvb2tpZVNlcnZpY2UpIHsgXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblNlcnZlciA9IHRoaXMuZ2V0U2VydmVyVXJsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgIHRoaXMuc2VydmVyVXJsID0gcmVzdWx0O1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSBudWxsO1xuICAgICAgICAgfVxuICAgICAgIH0pO1xuICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQgPSB0aGlzLmdldGFkZEVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICB0aGlzLmFkZGVuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5hZGRlbmRwb2ludFVybCA9IG51bGw7XG4gICAgICAgICB9XG4gICAgICAgfSk7XG4gICAgICAgLyoqKioqKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKioqKioqKi9cbiAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnVwbG9hZEVuZHBvaW50PXRoaXMuZ2V0dXBsb2FkRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZT0+e1xuICAgICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICAgICByZXN1bHQ9bWVzc2FnZTtcbiAgICAgICAgICAgaWYocmVzdWx0IT1udWxsKXtcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZEVuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgdGhpcy51cGxvYWRFbmRwb2ludFVybCA9IG51bGw7XG4gICAgICAgICAgIH1cbiAgICAgICB9KVxuICAgICAgIC8qKioqKioqKioqKipzb3VyZXNoIGVuZCBoZXJlKioqKioqKioqKioqKiovXG4gICAgICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgIHRoaXMudXBkYXRlZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgICAgIH1cbiAgICAgICB9KTtcbiAgICAgICB0aGlzLnN1YnNjcmlwdGlvbmRlbGV0ZXNpbmdsZUVuZHBvaW50ID0gdGhpcy5nZXRkZWxldGVzaW5nbGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCA9IG51bGw7XG4gICAgICAgICB9XG4gICAgICAgfSk7XG4gICAgICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgICAgfVxuICAgICAgIH0pO1xuICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uR2V0ZGF0YUVuZHBvaW50ID0gdGhpcy5nZXRkYXRhRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IG51bGw7XG4gICAgICAgICB9XG4gICAgICAgfSk7XG4gICAgfVxuICAgIHNldFNlcnZlclVybCh2YWx1ZTogYW55KSB7XG4gICAgICB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwubmV4dCh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhclNlcnZlclVybCgpIHtcbiAgICAgIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5uZXh0KG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0U2VydmVyVXJsKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgXG4gICAgc2V0YWRkRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcmFkZEVuZHBvaW50KCkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldGFkZEVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yYWRkRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAvKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqL1xuICAgIHNldHVwbG9hZEVuZHBvbnQodmFsdWU6YW55KXtcbiAgICAgIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJ1cGxvYWRFbmRwb2ludCgpe1xuICAgICAgdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldHVwbG9hZEVuZHBvaW50KCk6IE9ic2VydmFibGUgPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICAgLyoqKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xuICBcbiAgXG4gICAgc2V0dXBkYXRlRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcnVwZGF0ZUVuZHBvaW50KCkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldHVwZGF0ZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICBcbiAgICBzZXRkZWxldGVzaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyZGVsZXRlc2luZ2xlRW5kcG9pbnQoKSB7XG4gICAgICB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JkZWxldGVzaW5nbGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIFxuICAgIHNldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFydXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldHVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgXG4gICAgc2V0Z2V0ZGF0YUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICAgIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyZ2V0ZGF0YUVuZHBvaW50KCkge1xuICAgICAgdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRkYXRhRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICBcbiAgXG4gIFxuICAgIGlzVG9rZW5FeHBpcmVkKCkge1xuICBcbiAgICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXG4gICAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcbiAgICB9XG4gIFxuICAgIGFkZERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ2luIGFkZGRhdGEgYXBpc2VydmljZScpO1xuICAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLyAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlbiBcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgXG4gICAgICBjb25zb2xlLmxvZygnaHR0cG9wdGlvbnMnLGh0dHBPcHRpb25zLHRoaXMuc2VydmVyVXJsLHJlcXVlc3RkYXRhKTtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmFkZGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKioqKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKioqKioqKiovXG4gICAgdXBsb2FkRmlsZShyZXF1ZXN0ZGF0YTphbnkpe1xuICAgICAgY29uc3QgaHR0cE9wdGlvbnM9e1xuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6dGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxuICAgICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIHJlc3VsdD10aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwbG9hZEVuZHBvaW50VXJsLEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSxodHRwT3B0aW9ucykucGlwZShtYXAocmVzPT5yZXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqL1xuICAgIFVwZGF0ZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBhY2Nlc3MtdG9rZW4odGVtcClcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIFxuICAgIGdldERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgXG4gICAgZGVsZXRlU2luZ2xlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIFxuICAgIGRlbGV0ZU11bHRpcGxlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCsnbWFueScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICBcbiAgICBVcGRhdGVTdGF0dXNGb3JTaW5nbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIFxuICAgIFVwZGF0ZVN0YXR1c0Zvck11bHRpcGxlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwrJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBDdXN0b21SZXF1ZXN0KHJlcXVlc3RkYXRhOiBhbnksIGVuZHBvaW50OmFueSApIHtcbiAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG4iXX0=
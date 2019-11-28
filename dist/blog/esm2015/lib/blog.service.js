/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-cookie-service";
export class BlogService {
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
        this.serverUrl = '';
        this.getdata_endpointUrl = 'datalist';
    }
    ;
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
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    addData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    getData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(endpoint, requestdata) {
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
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    CustomRequest(endpoint, requestdata) {
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
BlogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BlogService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ BlogService.ngInjectableDef = i0.defineInjectable({ factory: function BlogService_Factory() { return new BlogService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: BlogService, providedIn: "root" });
if (false) {
    /** @type {?} */
    BlogService.prototype.lengthis;
    /** @type {?} */
    BlogService.prototype.percentageis;
    /** @type {?} */
    BlogService.prototype.inprogress;
    /** @type {?} */
    BlogService.prototype.progress;
    /** @type {?} */
    BlogService.prototype.uploadtype;
    /** @type {?} */
    BlogService.prototype.uploaderror;
    /** @type {?} */
    BlogService.prototype.accesstoken;
    /** @type {?} */
    BlogService.prototype.fileservername;
    /** @type {?} */
    BlogService.prototype.serverUrl;
    /** @type {?} */
    BlogService.prototype.addendpointUrl;
    /** @type {?} */
    BlogService.prototype.updateendpointUrl;
    /** @type {?} */
    BlogService.prototype.deletesingle_endpointUrl;
    /** @type {?} */
    BlogService.prototype.updatestatus_single_endpointUrl;
    /** @type {?} */
    BlogService.prototype.deletemultiple_endpointUrl;
    /** @type {?} */
    BlogService.prototype.updatestatus_multiple_endpointUrl;
    /** @type {?} */
    BlogService.prototype.getdata_endpointUrl;
    /**
     * @type {?}
     * @private
     */
    BlogService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    BlogService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    BlogService.prototype.cookieService;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQXVDLE1BQU0sc0JBQXNCLENBQUM7QUFFcEcsT0FBTyxFQUFFLEdBQUcsRUFBbUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFNbkQsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQWtCdEIsWUFBb0IsS0FBaUIsRUFBVSxTQUFxQixFQUFTLGFBQTZCO1FBQXRGLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBZG5HLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFbkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBUSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBT3BCLHdCQUFtQixHQUFRLFVBQVUsQ0FBQztJQUVpRSxDQUFDO0lBWGxELENBQUM7Ozs7SUFhOUQsY0FBYztRQUNaLHlDQUF5QztRQUN6Qyw2RUFBNkU7UUFDN0Usa0ZBQWtGO1FBQ2xGLHFFQUFxRTtRQUNyRSw4RkFBOEY7UUFDOUYsc0RBQXNEO1FBQ3RELGdFQUFnRTtJQUNsRSxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBYSxFQUFFLFdBQWdCOztjQUMvQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNs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LElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUN2SCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUF2SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVTtZQUFWLFVBQVU7WUFHVixhQUFhOzs7OztJQU9wQiwrQkFBZ0I7O0lBQ2hCLG1DQUFvQjs7SUFDcEIsaUNBQWtCOztJQUNsQiwrQkFBMEI7O0lBQzFCLGlDQUFrQjs7SUFDbEIsa0NBQTZCOztJQUM3QixrQ0FBNkQ7O0lBQzdELHFDQUFnQzs7SUFDaEMsZ0NBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHdDQUE4Qjs7SUFDOUIsK0NBQXFDOztJQUNyQyxzREFBNEM7O0lBQzVDLGlEQUF1Qzs7SUFDdkMsd0RBQThDOztJQUM5QywwQ0FBNkM7Ozs7O0lBRWpDLDRCQUF5Qjs7Ozs7SUFBRSxnQ0FBNkI7Ozs7O0lBQUMsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9nU2VydmljZSB7XHJcbiAgcHVibGljIGxlbmd0aGlzO1xyXG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XHJcbiAgcHVibGljIGlucHJvZ3Jlc3M7XHJcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgdXBsb2FkdHlwZTtcclxuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhY2Nlc3N0b2tlbjogYW55ID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKTs7XHJcbiAgcHVibGljIGZpbGVzZXJ2ZXJuYW1lOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgc2VydmVyVXJsOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkZW5kcG9pbnRVcmw6IGFueTtcclxuICBwdWJsaWMgdXBkYXRlZW5kcG9pbnRVcmw6IGFueTtcclxuICBwdWJsaWMgZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgcHVibGljIHVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcclxuICBwdWJsaWMgZGVsZXRlbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcclxuICBwdWJsaWMgdXBkYXRlc3RhdHVzX211bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgcHVibGljIGdldGRhdGFfZW5kcG9pbnRVcmw6IGFueSA9ICdkYXRhbGlzdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UpIHsgfVxyXG5cclxuICBpc1Rva2VuRXhwaXJlZCgpIHtcclxuICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXHJcbiAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcclxuICB9XHJcblxyXG4gIGFkZERhdGEoZW5kcG9pbnQ6IGFueSwgcmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGVEYXRhKGVuZHBvaW50OiBhbnksIHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIGVuZHBvaW50LCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyBlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVNpbmdsZURhdGEoZW5kcG9pbnQ6IGFueSwgcmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkZWxldGVNdWx0aXBsZURhdGEoZW5kcG9pbnQ6IGFueSwgcmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGVTdGF0dXNGb3JTaW5nbGVEYXRhKGVuZHBvaW50OiBhbnksIHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIGVuZHBvaW50LCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlU3RhdHVzRm9yTXVsdGlwbGVEYXRhKGVuZHBvaW50OiBhbnksIHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIGVuZHBvaW50ICsgJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgQ3VzdG9tUmVxdWVzdChlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyBlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
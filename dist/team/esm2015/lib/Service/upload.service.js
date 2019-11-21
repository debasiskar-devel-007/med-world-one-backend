/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UploadService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://166.62.39.137:5009/uploads";
        this.response = {};
    }
    /**
     * @param {?} data
     * @param {?} userId
     * @return {?}
     */
    upload(data, userId) {
        return this.httpClient.post(this.SERVER_URL, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    /** @type {?} */
                    const uploadPercent = Math.round(100 * event.loaded / event.total);
                    this.response = { status: "process", data: { total: 100, loaded: uploadPercent } };
                    return this.response;
                case HttpEventType.Response:
                    return event.body;
                default:
                    return `Unhandled event: ${event.type}`;
                // return `Unhandled event: ${event.type}`;
            }
        })));
    }
}
UploadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UploadService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ UploadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(i0.ɵɵinject(i1.HttpClient)); }, token: UploadService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL1NlcnZpY2UvdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBZ0MsYUFBYSxFQUFFLE1BQU8sc0JBQXNCLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFPLGdCQUFnQixDQUFDOzs7QUFJdEMsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJeEIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUgxQyxlQUFVLEdBQVcsbUNBQW1DLENBQUM7UUFDbEQsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUVvQixDQUFDOzs7Ozs7SUFDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDcEQsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssYUFBYSxDQUFDLGNBQWM7OzBCQUN6QixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDO29CQUNuRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLEtBQUssYUFBYSxDQUFDLFFBQVE7b0JBQ3pCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEI7b0JBQ0UsT0FBTyxvQkFBb0IsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QywyQ0FBMkM7YUFHOUM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBNUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7O0lBTWpCLG1DQUF5RDs7SUFDekQsaUNBQTBCOzs7OztJQUVkLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudFR5cGUgfSBmcm9tICAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAgJ3J4anMvb3BlcmF0b3JzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuICBTRVJWRVJfVVJMOiBzdHJpbmcgPSBcImh0dHA6Ly8xNjYuNjIuMzkuMTM3OjUwMDkvdXBsb2Fkc1wiO1xuICBwdWJsaWMgcmVzcG9uc2U6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG4gIHB1YmxpYyB1cGxvYWQoZGF0YSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4odGhpcy5TRVJWRVJfVVJMLCBkYXRhLCB7XG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJ1xuICAgICAgfSkucGlwZShtYXAoKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczpcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZFBlcmNlbnQgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSB7IHN0YXR1czogXCJwcm9jZXNzXCIsIGRhdGE6IHsgdG90YWw6IDEwMCwgbG9hZGVkOiB1cGxvYWRQZXJjZW50IH0gfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlO1xuICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5SZXNwb25zZTpcbiAgICAgICAgICAgIHJldHVybiBldmVudC5ib2R5O1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYFVuaGFuZGxlZCBldmVudDogJHtldmVudC50eXBlfWA7XG4gICAgICAgICAgICAvLyByZXR1cm4gYFVuaGFuZGxlZCBldmVudDogJHtldmVudC50eXBlfWA7XG5cblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
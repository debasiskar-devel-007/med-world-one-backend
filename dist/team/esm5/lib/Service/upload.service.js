/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
        }).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    /** @type {?} */
                    var uploadPercent = Math.round(100 * event.loaded / event.total);
                    _this.response = { status: "process", data: { total: 100, loaded: uploadPercent } };
                    return _this.response;
                case HttpEventType.Response:
                    return event.body;
                default:
                    return "Unhandled event: " + event.type;
                // return `Unhandled event: ${event.type}`;
            }
        })));
    };
    UploadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UploadService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ UploadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(i0.ɵɵinject(i1.HttpClient)); }, token: UploadService, providedIn: "root" });
    return UploadService;
}());
export { UploadService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL1NlcnZpY2UvdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBZ0MsYUFBYSxFQUFFLE1BQU8sc0JBQXNCLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFPLGdCQUFnQixDQUFDOzs7QUFDdEM7SUFPRSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUgxQyxlQUFVLEdBQVcsbUNBQW1DLENBQUM7UUFDbEQsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUVvQixDQUFDOzs7Ozs7SUFDeEMsOEJBQU07Ozs7O0lBQWIsVUFBYyxJQUFJLEVBQUUsTUFBTTtRQUExQixpQkFvQkM7UUFuQkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtZQUNwRCxjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDaEIsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLGFBQWEsQ0FBQyxjQUFjOzt3QkFDekIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDbEUsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztvQkFDbkYsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN2QixLQUFLLGFBQWEsQ0FBQyxRQUFRO29CQUN6QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCO29CQUNFLE9BQU8sc0JBQW9CLEtBQUssQ0FBQyxJQUFNLENBQUM7Z0JBQ3hDLDJDQUEyQzthQUc5QztRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7d0JBRG5CO0NBZ0NDLEFBN0JELElBNkJDO1NBMUJZLGFBQWE7OztJQUN4QixtQ0FBeUQ7O0lBQ3pELGlDQUEwQjs7Ozs7SUFFZCxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnRUeXBlIH0gZnJvbSAgJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gICdyeGpzL29wZXJhdG9ycyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcbiAgU0VSVkVSX1VSTDogc3RyaW5nID0gXCJodHRwOi8vMTY2LjYyLjM5LjEzNzo1MDA5L3VwbG9hZHNcIjtcbiAgcHVibGljIHJlc3BvbnNlOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxuICBwdWJsaWMgdXBsb2FkKGRhdGEsIHVzZXJJZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxhbnk+KHRoaXMuU0VSVkVSX1VSTCwgZGF0YSwge1xuICAgICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cydcbiAgICAgIH0pLnBpcGUobWFwKChldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XG4gICAgICAgICAgICBjb25zdCB1cGxvYWRQZXJjZW50ID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0geyBzdGF0dXM6IFwicHJvY2Vzc1wiLCBkYXRhOiB7IHRvdGFsOiAxMDAsIGxvYWRlZDogdXBsb2FkUGVyY2VudCB9IH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuYm9keTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGBVbmhhbmRsZWQgZXZlbnQ6ICR7ZXZlbnQudHlwZX1gO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGBVbmhhbmRsZWQgZXZlbnQ6ICR7ZXZlbnQudHlwZX1gO1xuXG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
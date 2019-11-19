/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material';
var ContactusListingComponent = /** @class */ (function () {
    function ContactusListingComponent(apiService, http, loadingComponent, dialog) {
        this.apiService = apiService;
        this.http = http;
        this.loadingComponent = loadingComponent;
        this.dialog = dialog;
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
         */
        function (formTitleVal) {
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
         */
        function (serverUrlval) {
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
         */
        function (contactUsAllDataHeaderSkipval) {
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
         */
        function (contactUsAllDataModifyHeaderval) {
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
         */
        function (endpointUrlval) {
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
         */
        function (endpointUrlval) {
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
         */
        function (updateendpointval) {
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
         */
        function (deleteendpointval) {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL);
        }), 50);
        console.log(this.serverURL);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setgetdataEndpoint(_this.getDataEndpointData.endpoint);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData);
        }), 50);
        console.log(this.addEndpointData);
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
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
        { type: Component, args: [{
                    selector: 'lib-contactus-listing',
                    template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
                }] }
    ];
    /** @nocollapse */
    ContactusListingComponent.ctorParameters = function () { return [
        { type: ApiService },
        { type: HttpClient },
        { type: LoadingComponent },
        { type: MatDialog }
    ]; };
    ContactusListingComponent.propDecorators = {
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        contactUsAllDataHeader_skip: [{ type: Input }],
        contactUsAllDataModify_header: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        updateendpoint: [{ type: Input }],
        deleteendpoint: [{ type: Input }]
    };
    return ContactusListingComponent;
}());
export { ContactusListingComponent };
if (false) {
    /** @type {?} */
    ContactusListingComponent.prototype.formTitleValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllData;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllDataHeaderSkipValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllDataModifyHeaderValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllData_collection;
    /** @type {?} */
    ContactusListingComponent.prototype.serverURL;
    /** @type {?} */
    ContactusListingComponent.prototype.addEndpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.getDataEndpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.updateendpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.deleteendpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.apiService;
    /** @type {?} */
    ContactusListingComponent.prototype.http;
    /** @type {?} */
    ContactusListingComponent.prototype.loadingComponent;
    /** @type {?} */
    ContactusListingComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdHVzLyIsInNvdXJjZXMiOlsibGliL2NvbnRhY3R1cy1saXN0aW5nL2NvbnRhY3R1cy1saXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFpQyxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RTtJQTBGRSxtQ0FBbUIsVUFBc0IsRUFBUyxJQUFnQixFQUN4RCxnQkFBa0MsRUFBUyxNQUFpQjtRQURuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN4RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQW5GL0QscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQ2xDLG9DQUErQixHQUFRLEVBQUUsQ0FBQztRQUMxQyxzQ0FBaUMsR0FBUSxFQUFFLENBQUM7O1FBRzVDLGdDQUEyQixHQUFRLFFBQVEsQ0FBQztRQUVyQyxjQUFTLEdBQVEsRUFBRSxDQUFDLENBQU0sdURBQXVEOztRQUNqRixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDOUIsdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztJQXlFN0IsQ0FBQztJQXRFUixzQkFFVyxnREFBUzs7Ozs7UUFGcEIsVUFFcUIsWUFBcUI7WUFDeEMsSUFBSSxD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Z0JBQ2pDLE1BQU0sR0FBUSxFQUFFO1lBRXBCLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDbEM7O2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHN2QkFBaUQ7O2lCQUVsRDs7OztnQkFWTyxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1QsZ0JBQWdCO2dCQUNlLFNBQVM7Ozs0QkF5QjlDLEtBQUs7NEJBT0wsS0FBSzs4Q0FRTCxLQUFLO2dEQVFMLEtBQUs7OEJBVUwsS0FBSztrQ0FRTCxLQUFLO2lDQVFMLEtBQUs7aUNBUUwsS0FBSzs7SUF1RVIsZ0NBQUM7Q0FBQSxBQXRKRCxJQXNKQztTQWpKWSx5QkFBeUI7OztJQUVwQyxtREFBMkI7O0lBQzNCLHFEQUFrQzs7SUFDbEMsb0VBQTBDOztJQUMxQyxzRUFBNEM7O0lBRzVDLGdFQUE0Qzs7SUFFNUMsOENBQTJCOztJQUMzQixvREFBaUM7O0lBQ2pDLHdEQUFxQzs7SUFDckMsdURBQW9DOztJQUNwQyx1REFBb0M7O0lBdUV4QiwrQ0FBNkI7O0lBQUUseUNBQXVCOztJQUMvRCxxREFBeUM7O0lBQUUsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb250YWN0dXMtbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3R1cy1saXN0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueTtcbiAgcHVibGljIGNvbnRhY3RVc0FsbERhdGE6IGFueSA9IFtdO1xuICBjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlOiBhbnkgPSBbXTtcbiAgY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlOiBhbnkgPSB7fTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBjb250YWN0VXNBbGxEYXRhX2NvbGxlY3Rpb246IGFueSA9ICdldmVudHMnO1xuXG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnOyAgICAgIC8vIHVybCB2YXJpYWJsZSB0byBmZXRjaCB0aGUgYWRkIGF2YWlsYWJpbGl0eSBmb3JtIHBhZ2VcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHVwZGF0ZWVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBkZWxldGVlbmRwb2ludERhdGE6IGFueSA9ICcnO1xuXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbCA6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSlcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVSTCA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IHNlcnZlclVybHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgY29udGFjdFVzQWxsRGF0YUhlYWRlcl9za2lwKGNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwdmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUgPSAoY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXB2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUgPSBjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUpO1xuXG4gIH1cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IGNvbnRhY3RVc0FsbERhdGFNb2RpZnlfaGVhZGVyKGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWw6IGFueSkge1xuICAgIHRoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlID0gKGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZSA9IGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVyVmFsdWUpO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5hZGRFbmRwb2ludERhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSlcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmdldERhdGFFbmRwb2ludERhdGEnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gVGhpcyBpcyBhIFVwZGF0ZSBVcmxcbiAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YSA9ICh1cGRhdGVlbmRwb2ludHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnREYXRhID0gdXBkYXRlZW5kcG9pbnR2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudXBkYXRlZW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVlbmRwb2ludERhdGEpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gdGhpcyBpcyBhIERlbGV0ZSBVcmxcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YSA9IChkZWxldGVlbmRwb2ludHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnREYXRhID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGVsZXRlZW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZWxldGVlbmRwb2ludERhdGEpO1xuICB9XG5cbiAgXG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgIHB1YmxpYyBsb2FkaW5nQ29tcG9uZW50OiBMb2FkaW5nQ29tcG9uZW50LCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2dcbiAgICAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpO1xuICAgIH0sIDUwKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgICB9LCA1MCk7XG5cblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEFsbERhdGEoKTtcbiAgICB9LCAxMDApO1xuICAgIC8vIHNldEludGVydmFsKCgpPT4ge1xuICAgIC8vICAgdGhpcy5vcGVuRGlhbG9nKCk7IH0sNDAwMCk7IFxuICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMub3BlbkRpYWxvZygpOyB9LDQwMDApO1xuXG4gIH1cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICB0aGlzLmxvYWRpbmdDb21wb25lbnQubG9hZGluZyA9IGZhbHNlO1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgIFwic291cmNlXCIgOiB0aGlzLmdldERhdGFFbmRwb2ludERhdGEuc291cmNlXG4gICAgfTtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0gW107XG5cbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgaWYgKHJlc3VsdC5yZXNjICE9IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGEgPSByZXN1bHQucmVzO1xuICAgICAgfSBlbHNlIFxuICAgICAgY29uc29sZS5sb2coJ29wcGVzJyk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gIC8vICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihuZXdzVGl0bGVEaWFsb2csIHtcbiAgLy8gICAgIHdpZHRoOiAnMjUwcHgnLFxuICAvLyAgICAgLy8gZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH1cbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuXG5cblxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuLy8gICBlbWFpbDogc3RyaW5nO1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyAgIGNvbXBhbnk6IHN0cmluZztcbi8vICAgcGhvbmU6IG51bWJlcjtcbi8vIH1cblxuXG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICBzZWxlY3RvcjogJ25ld3NUaXRsZScsXG4vLyAgIHRlbXBsYXRlVXJsOiAnbmV3c1RpdGxlLmh0bWwnLFxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBuZXdzVGl0bGVEaWFsb2cge1xuLy8gICBwdWJsaWMgbmV3c1RpdGxlRm9ybTogRm9ybUdyb3VwO1xuLy8gICBjb25zdHJ1Y3Rvcihcbi8vICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8bmV3c1RpdGxlRGlhbG9nPixcbi8vICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgXG4vLyAgICAgLy8gcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXG4vLyAgICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xuLy8gICAgICAgdGhpcy5uZXdzVGl0bGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4vLyAgICAgICAgIGZ1bGxuYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgcGhvbmU6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuLy8gICAgICAgICBjb21wYW55OlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXG4vLyAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAvLyBvbk5vQ2xpY2soKTogdm9pZCB7XG4vLyAgIC8vICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbi8vICAgLy8gfVxuXG5cbi8vICAgbmV3c1RpdGxlRm9ybVN1Ym1pdCgpIHtcbi8vICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHMpIHtcbi8vICAgICAgIHRoaXMubmV3c1RpdGxlRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMubmV3c1RpdGxlRm9ybS52YWxpZCkge1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5uZXdzVGl0bGVGb3JtLnZhbHVlKTtcbi8vICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4vLyAgICAgfVxuICAgXG4vLyAgIH1cblxuLy8gICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbi8vICAgICB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbi8vICAgfVxuXG5cblxuXG4vLyB9Il19
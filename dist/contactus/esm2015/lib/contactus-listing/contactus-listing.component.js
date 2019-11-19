/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material';
export class ContactusListingComponent {
    /**
     * @param {?} apiService
     * @param {?} http
     * @param {?} loadingComponent
     * @param {?} dialog
     */
    constructor(apiService, http, loadingComponent, dialog) {
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
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        console.log(this.serverURL);
    }
    /**
     * @param {?} contactUsAllDataHeaderSkipval
     * @return {?}
     */
    set contactUsAllDataHeader_skip(contactUsAllDataHeaderSkipval) {
        this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
        this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
        console.log(this.contactUsAllDataHeaderSkipValue);
    }
    /**
     * @param {?} contactUsAllDataModifyHeaderval
     * @return {?}
     */
    set contactUsAllDataModify_header(contactUsAllDataModifyHeaderval) {
        this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
        this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
        console.log('this.contactUsAllDataModifyHeaderValue');
        console.log(this.contactUsAllDataModifyHeaderValue);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        // console.log('this.addEndpointData');
        // console.log(this.addEndpointData)
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
        console.log('this.getDataEndpointData');
        console.log(this.getDataEndpointData);
    }
    /**
     * @param {?} updateendpointval
     * @return {?}
     */
    set updateendpoint(updateendpointval) {
        this.updateendpointData = (updateendpointval) || '<no name set>';
        this.updateendpointData = updateendpointval;
        console.log('this.updateendpointData');
        console.log(this.updateendpointData);
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointData = (deleteendpointval) || '<no name set>';
        this.deleteendpointData = deleteendpointval;
        console.log('this.deleteendpointData');
        console.log(this.deleteendpointData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        console.log(this.serverURL);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setgetdataEndpoint(this.getDataEndpointData.endpoint);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData);
        }), 50);
        console.log(this.addEndpointData);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getAllData();
        }), 100);
        // setInterval(()=> {
        //   this.openDialog(); },4000); 
        // setInterval(() => {this.openDialog(); },4000);
    }
    /**
     * @return {?}
     */
    getAllData() {
        this.loadingComponent.loading = false;
        /** @type {?} */
        let data;
        data = {
            "source": this.getDataEndpointData.source
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.loadingComponent.loading = true;
            /** @type {?} */
            let result = [];
            result = response;
            if (result.resc != 0) {
                console.log('result');
                console.log(result);
                this.contactUsAllData = result.res;
            }
            else
                console.log('oppes');
        }));
    }
}
ContactusListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus-listing',
                template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
            }] }
];
/** @nocollapse */
ContactusListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: HttpClient },
    { type: LoadingComponent },
    { type: MatDialog }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdHVzLyIsInNvdXJjZXMiOlsibGliL2NvbnRhY3R1cy1saXN0aW5nL2NvbnRhY3R1cy1saXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFpQyxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVE3RSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBcUZwQyxZQUFtQixVQUFzQixFQUFTLElBQWdCLEVBQ3hELGdCQUFrQyxFQUFTLE1BQWlCO1FBRG5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3hELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbkYvRCxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDbEMsb0NBQStCLEdBQVEsRUFBRSxDQUFDO1FBQzFDLHNDQUFpQyxHQUFRLEVBQUUsQ0FBQzs7UUFHNUMsZ0NBQTJCLEdBQVEsUUFBUSxDQUFDO1FBRXJDLGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBTSx1REFBdUQ7O1FBQ2pGLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUM5Qix1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsdUJBQWtCLEdBQVEsRUFBRSxDQUFDO0lBeUU3QixDQUFDOzs7OztJQXRFUixJQUVXLFNBQVMsQ0FBQyxZQUFx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QUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNsQzs7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTdJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsc3ZCQUFpRDs7YUFFbEQ7Ozs7WUFWTyxVQUFVO1lBQ1YsVUFBVTtZQUNULGdCQUFnQjtZQUNlLFNBQVM7Ozt3QkF5QjlDLEtBQUs7d0JBT0wsS0FBSzswQ0FRTCxLQUFLOzRDQVFMLEtBQUs7MEJBVUwsS0FBSzs4QkFRTCxLQUFLOzZCQVFMLEtBQUs7NkJBUUwsS0FBSzs7OztJQXhFTixtREFBMkI7O0lBQzNCLHFEQUFrQzs7SUFDbEMsb0VBQTBDOztJQUMxQyxzRUFBNEM7O0lBRzVDLGdFQUE0Qzs7SUFFNUMsOENBQTJCOztJQUMzQixvREFBaUM7O0lBQ2pDLHdEQUFxQzs7SUFDckMsdURBQW9DOztJQUNwQyx1REFBb0M7O0lBdUV4QiwrQ0FBNkI7O0lBQUUseUNBQXVCOztJQUMvRCxxREFBeUM7O0lBQUUsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb250YWN0dXMtbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3R1cy1saXN0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueTtcbiAgcHVibGljIGNvbnRhY3RVc0FsbERhdGE6IGFueSA9IFtdO1xuICBjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlOiBhbnkgPSBbXTtcbiAgY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlOiBhbnkgPSB7fTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBjb250YWN0VXNBbGxEYXRhX2NvbGxlY3Rpb246IGFueSA9ICdldmVudHMnO1xuXG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnOyAgICAgIC8vIHVybCB2YXJpYWJsZSB0byBmZXRjaCB0aGUgYWRkIGF2YWlsYWJpbGl0eSBmb3JtIHBhZ2VcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHVwZGF0ZWVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBkZWxldGVlbmRwb2ludERhdGE6IGFueSA9ICcnO1xuXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbCA6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSlcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVSTCA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IHNlcnZlclVybHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgY29udGFjdFVzQWxsRGF0YUhlYWRlcl9za2lwKGNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwdmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUgPSAoY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXB2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUgPSBjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwVmFsdWUpO1xuXG4gIH1cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IGNvbnRhY3RVc0FsbERhdGFNb2RpZnlfaGVhZGVyKGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWw6IGFueSkge1xuICAgIHRoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlID0gKGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZSA9IGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJ2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVyVmFsdWUpO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5hZGRFbmRwb2ludERhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSlcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmdldERhdGFFbmRwb2ludERhdGEnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gVGhpcyBpcyBhIFVwZGF0ZSBVcmxcbiAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YSA9ICh1cGRhdGVlbmRwb2ludHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnREYXRhID0gdXBkYXRlZW5kcG9pbnR2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudXBkYXRlZW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVlbmRwb2ludERhdGEpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gdGhpcyBpcyBhIERlbGV0ZSBVcmxcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YSA9IChkZWxldGVlbmRwb2ludHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnREYXRhID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGVsZXRlZW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZWxldGVlbmRwb2ludERhdGEpO1xuICB9XG5cbiAgXG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgIHB1YmxpYyBsb2FkaW5nQ29tcG9uZW50OiBMb2FkaW5nQ29tcG9uZW50LCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2dcbiAgICAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpO1xuICAgIH0sIDUwKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgICB9LCA1MCk7XG5cblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEFsbERhdGEoKTtcbiAgICB9LCAxMDApO1xuICAgIC8vIHNldEludGVydmFsKCgpPT4ge1xuICAgIC8vICAgdGhpcy5vcGVuRGlhbG9nKCk7IH0sNDAwMCk7IFxuICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMub3BlbkRpYWxvZygpOyB9LDQwMDApO1xuXG4gIH1cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICB0aGlzLmxvYWRpbmdDb21wb25lbnQubG9hZGluZyA9IGZhbHNlO1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgIFwic291cmNlXCIgOiB0aGlzLmdldERhdGFFbmRwb2ludERhdGEuc291cmNlXG4gICAgfTtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0gW107XG5cbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgaWYgKHJlc3VsdC5yZXNjICE9IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGEgPSByZXN1bHQucmVzO1xuICAgICAgfSBlbHNlIFxuICAgICAgY29uc29sZS5sb2coJ29wcGVzJyk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gIC8vICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihuZXdzVGl0bGVEaWFsb2csIHtcbiAgLy8gICAgIHdpZHRoOiAnMjUwcHgnLFxuICAvLyAgICAgLy8gZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH1cbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuXG5cblxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuLy8gICBlbWFpbDogc3RyaW5nO1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyAgIGNvbXBhbnk6IHN0cmluZztcbi8vICAgcGhvbmU6IG51bWJlcjtcbi8vIH1cblxuXG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICBzZWxlY3RvcjogJ25ld3NUaXRsZScsXG4vLyAgIHRlbXBsYXRlVXJsOiAnbmV3c1RpdGxlLmh0bWwnLFxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBuZXdzVGl0bGVEaWFsb2cge1xuLy8gICBwdWJsaWMgbmV3c1RpdGxlRm9ybTogRm9ybUdyb3VwO1xuLy8gICBjb25zdHJ1Y3Rvcihcbi8vICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8bmV3c1RpdGxlRGlhbG9nPixcbi8vICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgXG4vLyAgICAgLy8gcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXG4vLyAgICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xuLy8gICAgICAgdGhpcy5uZXdzVGl0bGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4vLyAgICAgICAgIGZ1bGxuYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgcGhvbmU6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuLy8gICAgICAgICBjb21wYW55OlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXG4vLyAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAvLyBvbk5vQ2xpY2soKTogdm9pZCB7XG4vLyAgIC8vICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbi8vICAgLy8gfVxuXG5cbi8vICAgbmV3c1RpdGxlRm9ybVN1Ym1pdCgpIHtcbi8vICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHMpIHtcbi8vICAgICAgIHRoaXMubmV3c1RpdGxlRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMubmV3c1RpdGxlRm9ybS52YWxpZCkge1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5uZXdzVGl0bGVGb3JtLnZhbHVlKTtcbi8vICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4vLyAgICAgfVxuICAgXG4vLyAgIH1cblxuLy8gICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbi8vICAgICB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbi8vICAgfVxuXG5cblxuXG4vLyB9Il19
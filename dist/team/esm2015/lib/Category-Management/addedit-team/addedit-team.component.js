/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../Service/api.service';
export class AddeditTeamComponent {
    /**
     * @param {?} fb
     * @param {?} activeroute
     * @param {?} _http
     * @param {?} router
     * @param {?} apiService
     */
    constructor(fb, activeroute, _http, router, apiService) {
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
            categoryName: ['', Validators.required],
            description: ['', Validators.required],
            status: [true,],
            role: ['']
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set TeamData(val) {
        this.DataListViaResolve = (val) || '<no name set>';
        this.DataListViaResolve = val;
        console.log("in ts ", this.DataListViaResolve);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverUrlData = (serverUrlval) || '<no name set>';
        this.serverUrlData = serverUrlval;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
        console.log("data", this.getDataEndpointData);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set singleEditData(val) {
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
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
    }
    /**
     * @param {?} Url
     * @return {?}
     */
    set ListPageRoute(Url) {
        this.listingPageUrl = (Url) || '<no name set>';
        this.listingPageUrl = Url;
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
            this.apiService.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData);
        }), 50);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getData();
        }), 50);
    }
    /**
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    inputUntouch(form, val) {
        form.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    CategoryManagementTeamFormSubmit() {
        if (this.CategoryManagementTeamForm.valid) {
            /** @type {?} */
            let x;
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
            response => {
                this.spinnerLoader = false;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listingPageUrl);
                }), 100);
            }));
        }
    }
    /**
     * @return {?}
     */
    getData() {
        /** @type {?} */
        let data = {
            "source": "rolemanagement"
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result = response;
            this.allData = result.res;
        }));
    }
    /**
     * @return {?}
     */
    ResetTeamForm() {
        this.CategoryManagementTeamForm.reset();
    }
}
AddeditTeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-team',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management</h2>\n  </mat-toolbar>\n\n  <span class=\"formspan\">\n  <mat-card-content class=\"example-container\">\n\n    <!-- ----------form starts here------------------ -->\n    <form class=\"example-form\"\n    name=\"CategoryManagementTeamForm\" (ngSubmit)=\"CategoryManagementTeamFormSubmit()\"\n          [formGroup]=\"CategoryManagementTeamForm\" >\n\n\n      <!-- ---------------------input for role name---------------- -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" \n        [formControl]=\"CategoryManagementTeamForm.controls['categoryName']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'categoryName')\">\n        <mat-error *ngIf=\"CategoryManagementTeamForm.controls['categoryName'].touched && !CategoryManagementTeamForm.controls['categoryName'].valid\n               && CategoryManagementTeamForm.controls['categoryName'].errors.required\">\n              Category Name field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- -----------------------text area------------------------>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Description\" \n        [formControl]=\"CategoryManagementTeamForm.controls['description']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'description')\"\n          ></textarea>\n          <mat-error *ngIf=\"CategoryManagementTeamForm.controls['description'].touched && !CategoryManagementTeamForm.controls['description'].valid\n          && CategoryManagementTeamForm.controls['description'].errors.required\">\n         Description field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- ------status for role-management---------- -->\n      <mat-checkbox [formControl]=\"CategoryManagementTeamForm.controls['status']\" color=\"primary\" >Active</mat-checkbox><br>\n\n      <mat-form-field>\n        <mat-label>Multiple Role</mat-label>\n        <mat-select formControlName=\"role\" multiple >\n          <mat-option [value]=0>\n            Select a category\n          </mat-option>\n          <mat-option *ngFor=\"let f of allData\" [value]=\"f.roleslug\">\n        {{f.roleslug}}\n      </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <!-- -------------------button form submission----------------------- -->\n      <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\" >{{ButtonText}}</button>\n      <!-- resetting the form -->\n      <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetTeamForm()\" >Reset</button>\n    </form>\n\n    <!-- -----------------------form ends here--------------------->\n  </mat-card-content>\n  \n\n</span>\n<mat-spinner  *ngIf=\"spinnerLoader\"></mat-spinner>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
            }] }
];
/** @nocollapse */
AddeditTeamComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: HttpClient },
    { type: Router },
    { type: ApiService }
];
AddeditTeamComponent.propDecorators = {
    TeamData: [{ type: Input }],
    serverUrl: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    singleEditData: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    ListPageRoute: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC10ZWFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ2F0ZWdvcnktTWFuYWdlbWVudC9hZGRlZGl0LXRlYW0vYWRkZWRpdC10ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTXZELE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBNEQvQixZQUFtQixFQUFlLEVBQVMsV0FBMkIsRUFDN0QsS0FBaUIsRUFBUyxNQUFjLEVBQVMsVUFBc0I7UUFEN0QsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUM3RCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUEzRHpFLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUssRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFLekIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFFekIsZUFBVSxHQUFLLFFBQVEsQ0FBQztRQW9EN0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLFdBQVcsRUFB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QjtTQUN6QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQy9DLE1BQU0sR0FBUSxRQUFRO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUUxQixDQUFDLEVBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7OztZQXhKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdzVGQUE0Qzs7YUFFN0M7Ozs7WUFSUSxXQUFXO1lBQ1gsY0FBYztZQUNkLFVBQVU7WUFETSxNQUFNO1lBRXRCLFVBQVU7Ozt1QkFrQmhCLEtBQUs7d0JBTUwsS0FBSzs4QkFLTCxLQUFLOzZCQU9MLEtBQUs7MEJBa0JMLEtBQUs7NEJBS0wsS0FBSzs7OztJQXBETiwwREFBNkM7O0lBQzdDLGtEQUFvQzs7SUFDcEMsdUNBQXNCOztJQUN0Qiw4Q0FBZ0M7O0lBQ2hDLG1EQUFnQzs7SUFDaEMsK0NBQTRCOztJQUM1Qiw2Q0FBMEI7O0lBQzFCLDZDQUE4Qjs7SUFDOUIsOENBQWdDOztJQUNoQyx5Q0FBcUI7O0lBQ3JCLDBDQUErQjs7SUFpRG5CLGtDQUFzQjs7SUFBRSwyQ0FBa0M7O0lBQ3BFLHFDQUF3Qjs7SUFBRSxzQ0FBcUI7O0lBQUUsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9TZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LXRlYW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC10ZWFtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC10ZWFtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0VGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBDYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgRGF0YUxpc3RWaWFSZXNvbHZlOiBhbnkgPSBbXTtcbiAgcHVibGljIGFsbERhdGE6YW55PVtdO1xuICBwdWJsaWMgU2luZ2xlZGF0YUVkaXQ6IGFueSA9IFtdO1xuICBwdWJsaWMgZ2V0RGF0YUVuZHBvaW50RGF0YTogYW55O1xuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBzcGlubmVyTG9hZGVyOiBib29sZWFuO1xuICBwdWJsaWMgbGlzdGluZ1BhZ2VVcmw6IGFueSA9ICcnO1xuICBwdWJsaWMgcGFyYW1zX2lkOmFueTtcbiAgcHVibGljIEJ1dHRvblRleHQ6YW55PVwiU3VibWl0XCI7XG4gIEBJbnB1dCgpICAgICAgICAgIC8vZ2V0dGluZyBhbGwgZGF0YSBsaXN0IHZpYSByZXNvbHZlIGNhbGwgZnJvbSBhcHBcbiAgc2V0IFRlYW1EYXRhKHZhbDogYW55KSB7XG4gICAgdGhpcy5EYXRhTGlzdFZpYVJlc29sdmUgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5EYXRhTGlzdFZpYVJlc29sdmUgPSB2YWw7XG4gICAgY29uc29sZS5sb2coXCJpbiB0cyBcIix0aGlzLkRhdGFMaXN0VmlhUmVzb2x2ZSk7XG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XG5cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2luZ2xlRWRpdERhdGEodmFsOmFueSl7XG4gICAgdGhpcy5TaW5nbGVkYXRhRWRpdCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLlNpbmdsZWRhdGFFZGl0ID0gdmFsO1xuICAgIGlmKHRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLl9pZCl7XG4gICAgICB0aGlzLkJ1dHRvblRleHQ9XCJVcGRhdGVcIjtcbiAgICB0aGlzLnBhcmFtc19pZD10aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5faWQ7XG4gICAgdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS5jb250cm9sc1snY2F0ZWdvcnlOYW1lJ10ucGF0Y2hWYWx1ZSh2YWxbMF0uY2F0ZWdvcnlOYW1lKTtcbiAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnBhdGNoVmFsdWUodmFsWzBdLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHZhbFswXS5zdGF0dXMpO1xuICAgIFxuICAgIC8vdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS5jb250cm9sc1sncm9sZSddLnBhdGNoVmFsdWUodmFsWzBdLnJvbGUpO1xuICAgIC8vIGZvciAoY29uc3QgaSBpbiB0aGlzLlNpbmdsZWRhdGFFZGl0WzBdLnJvbGUpIHtcbiAgICAgIFxuICAgIC8vICAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzWydyb2xlJ10ucGF0Y2hWYWx1ZSh0aGlzLlNpbmdsZWRhdGFFZGl0W2ldLnJvbGUpXG4gICAgLy8gfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgdXJsIG9mIGxpc3RpbmcgcGFnZSBmcm9tIGFwcFxuICBzZXQgTGlzdFBhZ2VSb3V0ZShVcmw6IGFueSkge1xuICAgIHRoaXMubGlzdGluZ1BhZ2VVcmwgPSAoVXJsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5saXN0aW5nUGFnZVVybCA9IFVybDtcbiAgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcblxuICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNhdGVnb3J5TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgcm9sZTogWycnXVxuICAgIH0pXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfSwgNTApO1xuICB9XG4gIGlucHV0VW50b3VjaChmb3JtOiBhbnksIHZhbDogYW55KSB7XG4gICAgZm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIENhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtU3VibWl0KCkge1xuICAgIGlmICh0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgeDogYW55O1xuICAgICAgZm9yICh4IGluIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0uY29udHJvbHMpIHtcbiAgICAgICAgdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWxpZCkge1xuICAgICAgICBpZiAodGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZS5zdGF0dXMpXG4gICAgICAgICAgdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTtcbiAgICAgIH1cbiAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICBpZiAodGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuX2lkKSB7XG4gICAgICAgIFxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiVGVhbV9jYXRlZ29yeVwiLFxuICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IHRoaXMucGFyYW1zX2lkLFxuICAgICAgICAgICAgJ2NhdGVnb3J5TmFtZSc6IHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0udmFsdWUuY2F0ZWdvcnlOYW1lLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICdzdGF0dXMnOiB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLnN0YXR1cyxcbiAgICAgICAgICAgICdyb2xlJzogdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZS5yb2xlXG4gICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBcInNvdXJjZVwiOiBcIlRlYW1fY2F0ZWdvcnlcIixcbiAgICAgICAgICBcImRhdGFcIjogdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgIFxuICAgICAgdGhpcy5zcGlubmVyTG9hZGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc3Bpbm5lckxvYWRlciA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMubGlzdGluZ1BhZ2VVcmwpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0RGF0YSgpe1xuICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICBcInNvdXJjZVwiOiBcInJvbGVtYW5hZ2VtZW50XCJcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYWxsRGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICBcbiAgICAgIH0pXG4gIH1cbiAgUmVzZXRUZWFtRm9ybSgpIHtcbiAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnJlc2V0KCk7XG4gIH1cbn0iXX0=
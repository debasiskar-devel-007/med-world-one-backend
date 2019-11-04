/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../Service/api.service';
var AddeditTeamComponent = /** @class */ (function () {
    function AddeditTeamComponent(fb, activeroute, _http, router, apiService) {
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
    Object.defineProperty(AddeditTeamComponent.prototype, "TeamData", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.DataListViaResolve = (val) || '<no name set>';
            this.DataListViaResolve = val;
            console.log("in ts ", this.DataListViaResolve);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditTeamComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditTeamComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
            console.log("data", this.getDataEndpointData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditTeamComponent.prototype, "singleEditData", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditTeamComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditTeamComponent.prototype, "ListPageRoute", {
        set: /**
         * @param {?} Url
         * @return {?}
         */
        function (Url) {
            this.listingPageUrl = (Url) || '<no name set>';
            this.listingPageUrl = Url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddeditTeamComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData);
        }), 50);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getData();
        }), 50);
    };
    /**
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    AddeditTeamComponent.prototype.inputUntouch = /**
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    function (form, val) {
        form.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    AddeditTeamComponent.prototype.CategoryManagementTeamFormSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.CategoryManagementTeamForm.valid) {
            /** @type {?} */
            var x = void 0;
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
            function (response) {
                _this.spinnerLoader = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listingPageUrl);
                }), 100);
            }));
        }
    };
    /**
     * @return {?}
     */
    AddeditTeamComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            "source": "rolemanagement"
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = response;
            _this.allData = result.res;
        }));
    };
    /**
     * @return {?}
     */
    AddeditTeamComponent.prototype.ResetTeamForm = /**
     * @return {?}
     */
    function () {
        this.CategoryManagementTeamForm.reset();
    };
    AddeditTeamComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit-team',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management</h2>\n  </mat-toolbar>\n\n  <span class=\"formspan\">\n  <mat-card-content class=\"example-container\">\n\n    <!-- ----------form starts here------------------ -->\n    <form class=\"example-form\"\n    name=\"CategoryManagementTeamForm\" (ngSubmit)=\"CategoryManagementTeamFormSubmit()\"\n          [formGroup]=\"CategoryManagementTeamForm\" >\n\n\n      <!-- ---------------------input for role name---------------- -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" \n        [formControl]=\"CategoryManagementTeamForm.controls['categoryName']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'categoryName')\">\n        <mat-error *ngIf=\"CategoryManagementTeamForm.controls['categoryName'].touched && !CategoryManagementTeamForm.controls['categoryName'].valid\n               && CategoryManagementTeamForm.controls['categoryName'].errors.required\">\n              Category Name field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- -----------------------text area------------------------>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Description\" \n        [formControl]=\"CategoryManagementTeamForm.controls['description']\"\n        (blur)=\"inputUntouch(CategoryManagementTeamForm,'description')\"\n          ></textarea>\n          <mat-error *ngIf=\"CategoryManagementTeamForm.controls['description'].touched && !CategoryManagementTeamForm.controls['description'].valid\n          && CategoryManagementTeamForm.controls['description'].errors.required\">\n         Description field can not be blank</mat-error>\n      </mat-form-field><br>\n\n      <!-- ------status for role-management---------- -->\n      <mat-checkbox [formControl]=\"CategoryManagementTeamForm.controls['status']\" color=\"primary\" >Active</mat-checkbox><br>\n\n      <mat-form-field>\n        <mat-label>Multiple Role</mat-label>\n        <mat-select formControlName=\"role\" multiple >\n          <mat-option [value]=0>\n            Select a category\n          </mat-option>\n          <mat-option *ngFor=\"let f of allData\" [value]=\"f.roleslug\">\n        {{f.roleslug}}\n      </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <!-- -------------------button form submission----------------------- -->\n      <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\" >{{ButtonText}}</button>\n      <!-- resetting the form -->\n      <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetTeamForm()\" >Reset</button>\n    </form>\n\n    <!-- -----------------------form ends here--------------------->\n  </mat-card-content>\n  \n\n</span>\n<mat-spinner  *ngIf=\"spinnerLoader\"></mat-spinner>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditTeamComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: HttpClient },
        { type: Router },
        { type: ApiService }
    ]; };
    AddeditTeamComponent.propDecorators = {
        TeamData: [{ type: Input }],
        serverUrl: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        singleEditData: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        ListPageRoute: [{ type: Input }]
    };
    return AddeditTeamComponent;
}());
export { AddeditTeamComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC10ZWFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ2F0ZWdvcnktTWFuYWdlbWVudC9hZGRlZGl0LXRlYW0vYWRkZWRpdC10ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZEO0lBaUVFLDhCQUFtQixFQUFlLEVBQVMsV0FBMkIsRUFDN0QsS0FBaUIsRUFBUyxNQUFjLEVBQVMsVUFBc0I7UUFEN0QsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUM3RCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUEzRHpFLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUssRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFLekIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFFekIsZUFBVSxHQUFLLFFBQVEsQ0FBQztRQW9EN0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENB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QyxFQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7SUFDRCxzQ0FBTzs7O0lBQVA7UUFBQSxpQkFTQzs7WUFSSyxJQUFJLEdBQVE7WUFDZCxRQUFRLEVBQUUsZ0JBQWdCO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsUUFBUTs7Z0JBQzVDLE1BQU0sR0FBUSxRQUFRO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUUxQixDQUFDLEVBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFDRCw0Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Z0JBeEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix3NUZBQTRDOztpQkFFN0M7Ozs7Z0JBUlEsV0FBVztnQkFDWCxjQUFjO2dCQUNkLFVBQVU7Z0JBRE0sTUFBTTtnQkFFdEIsVUFBVTs7OzJCQWtCaEIsS0FBSzs0QkFNTCxLQUFLO2tDQUtMLEtBQUs7aUNBT0wsS0FBSzs4QkFrQkwsS0FBSztnQ0FLTCxLQUFLOztJQStGUiwyQkFBQztDQUFBLEFBekpELElBeUpDO1NBcEpZLG9CQUFvQjs7O0lBQy9CLDBEQUE2Qzs7SUFDN0Msa0RBQW9DOztJQUNwQyx1Q0FBc0I7O0lBQ3RCLDhDQUFnQzs7SUFDaEMsbURBQWdDOztJQUNoQywrQ0FBNEI7O0lBQzVCLDZDQUEwQjs7SUFDMUIsNkNBQThCOztJQUM5Qiw4Q0FBZ0M7O0lBQ2hDLHlDQUFxQjs7SUFDckIsMENBQStCOztJQWlEbkIsa0NBQXNCOztJQUFFLDJDQUFrQzs7SUFDcEUscUNBQXdCOztJQUFFLHNDQUFxQjs7SUFBRSwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL1NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtdGVhbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LXRlYW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LXRlYW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkaXRUZWFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIENhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBEYXRhTGlzdFZpYVJlc29sdmU6IGFueSA9IFtdO1xuICBwdWJsaWMgYWxsRGF0YTphbnk9W107XG4gIHB1YmxpYyBTaW5nbGVkYXRhRWRpdDogYW55ID0gW107XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIHNwaW5uZXJMb2FkZXI6IGJvb2xlYW47XG4gIHB1YmxpYyBsaXN0aW5nUGFnZVVybDogYW55ID0gJyc7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6YW55O1xuICBwdWJsaWMgQnV0dG9uVGV4dDphbnk9XCJTdWJtaXRcIjtcbiAgQElucHV0KCkgICAgICAgICAgLy9nZXR0aW5nIGFsbCBkYXRhIGxpc3QgdmlhIHJlc29sdmUgY2FsbCBmcm9tIGFwcFxuICBzZXQgVGVhbURhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLkRhdGFMaXN0VmlhUmVzb2x2ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLkRhdGFMaXN0VmlhUmVzb2x2ZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyhcImluIHRzIFwiLHRoaXMuRGF0YUxpc3RWaWFSZXNvbHZlKTtcbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcblxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzaW5nbGVFZGl0RGF0YSh2YWw6YW55KXtcbiAgICB0aGlzLlNpbmdsZWRhdGFFZGl0ID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuU2luZ2xlZGF0YUVkaXQgPSB2YWw7XG4gICAgaWYodGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuX2lkKXtcbiAgICAgIHRoaXMuQnV0dG9uVGV4dD1cIlVwZGF0ZVwiO1xuICAgIHRoaXMucGFyYW1zX2lkPXRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLl9pZDtcbiAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzWydjYXRlZ29yeU5hbWUnXS5wYXRjaFZhbHVlKHZhbFswXS5jYXRlZ29yeU5hbWUpO1xuICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZSh2YWxbMF0uZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0uY29udHJvbHNbJ3N0YXR1cyddLnBhdGNoVmFsdWUodmFsWzBdLnN0YXR1cyk7XG4gICAgXG4gICAgLy90aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzWydyb2xlJ10ucGF0Y2hWYWx1ZSh2YWxbMF0ucm9sZSk7XG4gICAgLy8gZm9yIChjb25zdCBpIGluIHRoaXMuU2luZ2xlZGF0YUVkaXRbMF0ucm9sZSkge1xuICAgICAgXG4gICAgLy8gICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0uY29udHJvbHNbJ3JvbGUnXS5wYXRjaFZhbHVlKHRoaXMuU2luZ2xlZGF0YUVkaXRbaV0ucm9sZSlcbiAgICAvLyB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSB1cmwgb2YgbGlzdGluZyBwYWdlIGZyb20gYXBwXG4gIHNldCBMaXN0UGFnZVJvdXRlKFVybDogYW55KSB7XG4gICAgdGhpcy5saXN0aW5nUGFnZVVybCA9IChVcmwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RpbmdQYWdlVXJsID0gVXJsO1xuICAgXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYWN0aXZlcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xuXG4gICAgdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY2F0ZWdvcnlOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICByb2xlOiBbJyddXG4gICAgfSlcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICB9LCA1MCk7XG4gIH1cbiAgaW5wdXRVbnRvdWNoKGZvcm06IGFueSwgdmFsOiBhbnkpIHtcbiAgICBmb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm1TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0udmFsaWQpIHtcbiAgICAgIGxldCB4OiBhbnk7XG4gICAgICBmb3IgKHggaW4gdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS5jb250cm9scykge1xuICAgICAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbGlkKSB7XG4gICAgICAgIGlmICh0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLnN0YXR1cylcbiAgICAgICAgICB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpO1xuICAgICAgfVxuICAgICAgdmFyIGRhdGE6IGFueTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5faWQpIHtcbiAgICAgICAgXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWFtX2NhdGVnb3J5XCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wYXJhbXNfaWQsXG4gICAgICAgICAgICAnY2F0ZWdvcnlOYW1lJzogdGhpcy5DYXRlZ29yeU1hbmFnZW1lbnRUZWFtRm9ybS52YWx1ZS5jYXRlZ29yeU5hbWUsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgJ3N0YXR1cyc6IHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0udmFsdWUuc3RhdHVzLFxuICAgICAgICAgICAgJ3JvbGUnOiB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlLnJvbGVcbiAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiVGVhbV9jYXRlZ29yeVwiLFxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLkNhdGVnb3J5TWFuYWdlbWVudFRlYW1Gb3JtLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgXG4gICAgICB0aGlzLnNwaW5uZXJMb2FkZXIgPSB0cnVlO1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zcGlubmVyTG9hZGVyID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0aW5nUGFnZVVybCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXREYXRhKCl7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIFwic291cmNlXCI6IFwicm9sZW1hbmFnZW1lbnRcIlxuICAgICAgfVxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5hbGxEYXRhID0gcmVzdWx0LnJlcztcbiAgICAgIFxuICAgICAgfSlcbiAgfVxuICBSZXNldFRlYW1Gb3JtKCkge1xuICAgIHRoaXMuQ2F0ZWdvcnlNYW5hZ2VtZW50VGVhbUZvcm0ucmVzZXQoKTtcbiAgfVxufSJdfQ==
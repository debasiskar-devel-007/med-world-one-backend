/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../Service/upload.service';
export class AddEditTeamComponent {
    /**
     * @param {?} fb
     * @param {?} activeroute
     * @param {?} _http
     * @param {?} uploadService
     * @param {?} apiservice
     * @param {?} router
     */
    constructor(fb, activeroute, _http, uploadService, apiservice, router) {
        this.fb = fb;
        this.activeroute = activeroute;
        this._http = _http;
        this.uploadService = uploadService;
        this.apiservice = apiservice;
        this.router = router;
        this.teamData = [];
        this.allData = [];
        this.listrouteData = "";
        this.editarray = [];
        this.imageConfigData = '';
        this.SingleDataList = [];
        this.ButtonText = "Submit";
        this.HeaderText = "Add Team Member";
        this.flag = false;
        this.img_var = '';
        this.teamForm = this.fb.group({
            categoryname: ["", Validators.required],
            membername: ["", Validators.required],
            description: ["", Validators.required],
            multiplephone: this.fb.array([]),
            multipleemail: this.fb.array([]),
            bulletarray: this.fb.array([]),
            team_img: ['']
        });
    }
    /* Config Upload file lib */
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set singleData(val) {
        this.SingleDataList = (val) || '<no name set>';
        this.SingleDataList = val;
        if (this.activeroute.snapshot.params._id) {
            this.ButtonText = "Update";
            this.HeaderText = "Edit Team Member";
            this.flag = true;
            this.params_id = this.activeroute.snapshot.params._id;
            this.teamForm.controls['categoryname'].patchValue(val[0].categoryname);
            this.teamForm.controls['description'].patchValue(val[0].description);
            this.teamForm.controls['membername'].patchValue(val[0].membername);
            this.teamForm.controls['team_img'].patchValue(val[0].team_img);
            this.img_var = this.SingleDataList[0].team_img.basepath + this.SingleDataList[0].team_img.image;
            this.image_name = this.SingleDataList[0].team_img.name;
            this.image_type = this.SingleDataList[0].team_img.type;
            for (const i in this.SingleDataList[0].bulletarray) {
                this.addBulletListData(this.SingleDataList[0].bulletarray[i].bullet_name, this.SingleDataList[0].bulletarray[i].bullet_desc);
            }
            for (const i in this.SingleDataList[0].multiplephone) {
                this.addphone(this.SingleDataList[0].multiplephone[i].contactphone);
            }
            for (const i in this.SingleDataList[0].multipleemail) {
                this.addemail(this.SingleDataList[0].multipleemail[i].contactemail);
            }
        }
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
     * @param {?} val
     * @return {?}
     */
    set ListRoute(val) {
        this.listrouteData = (val) || '<no name set>';
        this.listrouteData = val;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
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
     * @return {?}
     */
    ngOnInit() {
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setaddEndpoint(this.addEndpointData);
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getData();
        }), 50);
        if (this.activeroute.snapshot.params._id == null) {
            this.addBulletListData('', '');
            this.addphone('');
            this.addemail('');
        }
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
     * for multiple phone function start here*
     * @param {?} a
     * @return {?}
     */
    addphone(a) {
        /** @type {?} */
        const mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
        mphone.push(this.fb.group({
            contactphone: [a]
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removephone(index) {
        /** @type {?} */
        const mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
        mphone.removeAt(index);
    }
    /**multiple phone end here**/
    /**
     * for multiple emails functions start here*
     * @param {?} a
     * @return {?}
     */
    addemail(a) {
        /** @type {?} */
        const memail = (/** @type {?} */ (this.teamForm.controls.multipleemail));
        memail.push(this.fb.group({
            contactemail: [a]
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeemail(index) {
        /** @type {?} */
        const mphone = (/** @type {?} */ (this.teamForm.controls.multipleemail));
        mphone.removeAt(index);
    }
    /**
     * multiple email functions end here*
     * @return {?}
     */
    getData() {
        /** @type {?} */
        let data = {
            "source": "Team_category"
        };
        this.apiservice.getData(data).subscribe((/**
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
     * resetting the form*
     * @return {?}
     */
    ResetForm() {
        this.teamForm.reset();
    }
    /**
     * bullet list function start here*
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    addBulletListData(a, b) {
        /** @type {?} */
        const bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
        bulletlist.push(this.fb.group({
            bullet_name: [a],
            bullet_desc: [b],
        }));
    }
    /**
     * @return {?}
     */
    deleteBulletListData() {
        /** @type {?} */
        const bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
        bulletlist.removeAt(1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    /**
     * bullet list function end here*
     * @return {?}
     */
    clear_image() {
        this.flag = false;
    }
    /**
     * @return {?}
     */
    TeamFormSubmit() {
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.teamForm.value.team_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/'
                        + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
        }
        else {
            this.teamForm.value.team_img = false;
        }
        /** @type {?} */
        let x;
        for (x in this.teamForm.controls) {
            this.teamForm.controls[x].markAsTouched();
        }
        if (this.teamForm.valid) {
            /** @type {?} */
            var data;
            if (this.activeroute.snapshot.params._id) { //update part
                data = {
                    "source": "Team_management",
                    "data": {
                        "id": this.params_id,
                        "categoryname": this.teamForm.value.categoryname,
                        "membername": this.teamForm.value.membername,
                        "description": this.teamForm.value.description,
                        "multiplephone": this.teamForm.value.multiplephone,
                        "multipleemail": this.teamForm.value.multipleemail,
                        "bulletarray": this.teamForm.value.bulletarray,
                        'team_img': this.teamForm.value.team_img
                    },
                    "sourceobj": ["categoryname"]
                };
            }
            else {
                data = {
                    //add part
                    "source": "Team_management",
                    "data": this.teamForm.value,
                    "sourceobj": ["categoryname"]
                };
            }
            ;
            this.spinnerLoader = true;
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                this.spinnerLoader = false;
                this.ResetForm();
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listrouteData);
                }), 100);
            }));
        }
        else {
            alert("error occured");
        }
    }
}
AddEditTeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-team',
                template: "<span class=\"formspan\">\n  <mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n      <h2 class=\"headerSpan\">{{HeaderText}}</h2>\n    </mat-toolbar>\n    <span class=\"formspan\">\n      <mat-card-content class=\"example-container\">\n        <form class=\"example-form\" novalidate [formGroup]=\"teamForm\" name=\"teamForm\" (ngSubmit)=\"TeamFormSubmit()\"\n          autocomplete=\"off\">\n          <div class=\"example-container\">\n\n            <mat-form-field>\n              <input matInput placeholder=\"Team Member Name\" [formControl]=\"teamForm.controls['membername']\"\n                (blur)=\"inputUntouch(teamForm,'membername')\">\n              <mat-error *ngIf=\"teamForm.controls['membername'].touched \n                && !teamForm.controls['membername'].valid\n                       && teamForm.controls['membername'].errors.required\">\n                Category Name field can not be blank</mat-error>\n            </mat-form-field><br>\n\n\n\n            <mat-form-field>\n              <textarea matInput placeholder=\"Description\" [formControl]=\"teamForm.controls['description']\"\n                (blur)=\"inputUntouch(teamForm,'description')\">\n                       </textarea>\n              <mat-error *ngIf=\"teamForm.controls['description'].touched && !teamForm.controls['description'].valid\n                   && teamForm.controls['description'].errors.required\">\n                Description field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n              <mat-label>Category Name</mat-label>\n              <mat-select formControlName=\"categoryname\">\n                <mat-option [value]=0>\n                  Select a category\n                </mat-option>\n                <mat-option *ngFor=\"let f of allData\" [value]=\"f._id\">\n                  {{f.categoryName}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!-- bullet list start here -->\n            <div formArrayName=\"bulletarray\" class=\"bulletarr\"\n              *ngFor=\"let blist of teamForm.controls.bulletarray?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n                <div class=\"top_header\">\n                  bullet list\n                </div>\n                <!-- ------------bullet name-----------  -->\n                <mat-form-field>\n                  <input matInput formControlName=\"bullet_name\" placeholder=\"Name\">\n\n                </mat-form-field><br>\n                <!-- -----------------------------------  -->\n\n\n                <!-- --------------------bullet description-----------------  -->\n                <mat-form-field>\n                  <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Description\"></textarea>\n\n                </mat-form-field><br>\n                <!-- ----------------------------------------------------------  -->\n\n              </ng-container>\n              <button type=\"button\" (click)=\"addBulletListData('','')\">\n                <mat-icon>add</mat-icon>\n              </button>\n              <button type=\"button\" (click)=\"deleteBulletListData()\" *ngIf=\"i!=0\">\n                <mat-icon>remove</mat-icon>\n              </button>\n            </div>\n            <!-- bullet list end here -->\n\n\n            <!--multiple phone start here -->\n            <div formArrayName=\"multiplephone\"\n              *ngFor=\"let plist of teamForm.controls.multiplephone?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactphone\" placeholder=\"contactphone\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addphone('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removephone(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple phone end here -->\n\n            <!-- multiple e-mail start here -->\n            <div formArrayName=\"multipleemail\"\n              *ngFor=\"let elist of teamForm.controls.multipleemail?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactemail\" placeholder=\"contactemail\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addemail('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removeemail(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple e-mail end here -->\n\n          </div>\n          <!-- file upload library start here -->\n          <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n          <mat-error *ngIf=\"ErrCode==true\">Please add just one image.</mat-error>\n\n          <!-- CARD VIEW  -->\n          <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n            <mat-card class=\"example-card\">\n              <img mat-card-image [attr.src]=\"img_var\">\n              <mat-card-title>{{ image_name }}</mat-card-title>\n              <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n              <span class=\"closecard\" (click)=\"clear_image()\">\n                <i class=\"material-icons\">clear</i>\n              </span>\n            </mat-card>\n          </mat-card-content>\n          <!-- file upload end here -->\n          <button mat-raised-button color=\"primary\" mat-button class=\"submitbtn\" type=\"submit\">{{ButtonText}}</button>\n          <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetForm()\">Reset</button>\n        </form>\n      </mat-card-content>\n    </span>\n    <mat-spinner *ngIf=\"spinnerLoader\"></mat-spinner>\n  </mat-card>\n",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:block;position:relative;text-align:left;width:100%;background:#fff;padding:1px 14px;box-sizing:border-box;margin:0}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.bulletarr{margin-top:20px;border:2px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize;margin-bottom:20px}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddEditTeamComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: HttpClient },
    { type: UploadService },
    { type: ApiService },
    { type: Router }
];
AddEditTeamComponent.propDecorators = {
    imageUpload: [{ type: Input }],
    singleData: [{ type: Input }],
    serverUrl: [{ type: Input }],
    ListRoute: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    addEndpoint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditTeamComponent.prototype.teamData;
    /** @type {?} */
    AddEditTeamComponent.prototype.allData;
    /** @type {?} */
    AddEditTeamComponent.prototype.teamForm;
    /** @type {?} */
    AddEditTeamComponent.prototype.params_id;
    /** @type {?} */
    AddEditTeamComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddEditTeamComponent.prototype.addEndpointData;
    /** @type {?} */
    AddEditTeamComponent.prototype.serverUrlData;
    /** @type {?} */
    AddEditTeamComponent.prototype.listrouteData;
    /** @type {?} */
    AddEditTeamComponent.prototype.editarray;
    /** @type {?} */
    AddEditTeamComponent.prototype.spinnerLoader;
    /** @type {?} */
    AddEditTeamComponent.prototype.imageConfigData;
    /** @type {?} */
    AddEditTeamComponent.prototype.SingleDataList;
    /** @type {?} */
    AddEditTeamComponent.prototype.ButtonText;
    /** @type {?} */
    AddEditTeamComponent.prototype.HeaderText;
    /** @type {?} */
    AddEditTeamComponent.prototype.ErrCode;
    /** @type {?} */
    AddEditTeamComponent.prototype.flag;
    /** @type {?} */
    AddEditTeamComponent.prototype.img_var;
    /** @type {?} */
    AddEditTeamComponent.prototype.image_name;
    /** @type {?} */
    AddEditTeamComponent.prototype.image_type;
    /** @type {?} */
    AddEditTeamComponent.prototype.fb;
    /** @type {?} */
    AddEditTeamComponent.prototype.activeroute;
    /** @type {?} */
    AddEditTeamComponent.prototype._http;
    /**
     * @type {?}
     * @private
     */
    AddEditTeamComponent.prototype.uploadService;
    /** @type {?} */
    AddEditTeamComponent.prototype.apiservice;
    /** @type {?} */
    AddEditTeamComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtdGVhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGQtZWRpdC10ZWFtL2FkZC1lZGl0LXRlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFxQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBUTdELE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7OztJQXFGL0IsWUFBbUIsRUFBZSxFQUFTLFdBQTJCLEVBQzdELEtBQWlCLEVBQVUsYUFBNEIsRUFDdkQsVUFBc0IsRUFBUyxNQUFjO1FBRm5DLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDN0QsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3ZELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEYvQyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFNbEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUVwQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVEsUUFBUSxD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Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsdWxNQUE2Qzs7YUFFOUM7Ozs7WUFYUSxXQUFXO1lBQ1gsY0FBYztZQUVkLFVBQVU7WUFDVixhQUFhO1lBRmIsVUFBVTtZQURNLE1BQU07OzswQkFpQzVCLEtBQUs7eUJBSUwsS0FBSzt3QkFnQ0wsS0FBSzt3QkFPTCxLQUFLOzhCQU9MLEtBQUs7MEJBTUwsS0FBSzs7OztJQTdFTix3Q0FBMEI7O0lBQzFCLHVDQUF5Qjs7SUFDekIsd0NBQTJCOztJQUMzQix5Q0FBc0I7O0lBQ3RCLG1EQUFnQzs7SUFDaEMsK0NBQTRCOztJQUM1Qiw2Q0FBMEI7O0lBQzFCLDZDQUEwQjs7SUFDMUIseUNBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLCtDQUFpQzs7SUFDakMsOENBQWdDOztJQUNoQywwQ0FBa0M7O0lBQ2xDLDBDQUEyQzs7SUFDM0MsdUNBQXdCOztJQUN4QixvQ0FBNkI7O0lBQzdCLHVDQUF5Qjs7SUFDekIsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBa0VYLGtDQUFzQjs7SUFBRSwyQ0FBa0M7O0lBQ3BFLHFDQUF3Qjs7Ozs7SUFBRSw2Q0FBb0M7O0lBQzlELDBDQUE2Qjs7SUFBRSxzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9TZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vU2VydmljZS91cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGFuYWx5emVBbmRWYWxpZGF0ZU5nTW9kdWxlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC10ZWFtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LXRlYW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC10ZWFtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0VGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB0ZWFtRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBhbGxEYXRhOiBhbnkgPSBbXTtcbiAgcHVibGljIHRlYW1Gb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBwdWJsaWMgc2VydmVyVXJsRGF0YTogYW55O1xuICBwdWJsaWMgbGlzdHJvdXRlRGF0YSA9IFwiXCI7XG4gIHB1YmxpYyBlZGl0YXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgc3Bpbm5lckxvYWRlcjogYm9vbGVhbjtcbiAgcHVibGljIGltYWdlQ29uZmlnRGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBTaW5nbGVEYXRhTGlzdDogYW55ID0gW107XG4gIHB1YmxpYyBCdXR0b25UZXh0OiBhbnkgPSBcIlN1Ym1pdFwiO1xuICBwdWJsaWMgSGVhZGVyVGV4dDogYW55ID0gXCJBZGQgVGVhbSBNZW1iZXJcIjtcbiAgcHVibGljIEVyckNvZGU6IGJvb2xlYW47XG4gIHB1YmxpYyBmbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbWdfdmFyOiBhbnkgPSAnJztcbiAgcHVibGljIGltYWdlX25hbWU6IGFueTtcbiAgcHVibGljIGltYWdlX3R5cGU6IGFueTtcblxuICAvKiBDb25maWcgVXBsb2FkIGZpbGUgbGliICovXG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzaW5nbGVEYXRhKHZhbDogYW55KSB7XG4gICAgdGhpcy5TaW5nbGVEYXRhTGlzdCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLlNpbmdsZURhdGFMaXN0ID0gdmFsO1xuICAgIGlmICh0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5faWQpIHtcbiAgICAgIHRoaXMuQnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICB0aGlzLkhlYWRlclRleHQgPSBcIkVkaXQgVGVhbSBNZW1iZXJcIlxuICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyYW1zX2lkID0gdGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuX2lkO1xuICAgICAgdGhpcy50ZWFtRm9ybS5jb250cm9sc1snY2F0ZWdvcnluYW1lJ10ucGF0Y2hWYWx1ZSh2YWxbMF0uY2F0ZWdvcnluYW1lKTtcbiAgICAgIHRoaXMudGVhbUZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZSh2YWxbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy50ZWFtRm9ybS5jb250cm9sc1snbWVtYmVybmFtZSddLnBhdGNoVmFsdWUodmFsWzBdLm1lbWJlcm5hbWUpO1xuXG4gICAgICB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzWyd0ZWFtX2ltZyddLnBhdGNoVmFsdWUodmFsWzBdLnRlYW1faW1nKTtcblxuICAgICAgdGhpcy5pbWdfdmFyID0gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS50ZWFtX2ltZy5iYXNlcGF0aCArIHRoaXMuU2luZ2xlRGF0YUxpc3RbMF0udGVhbV9pbWcuaW1hZ2U7XG4gICAgICB0aGlzLmltYWdlX25hbWUgPSB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLnRlYW1faW1nLm5hbWU7XG4gICAgICB0aGlzLmltYWdlX3R5cGUgPSB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLnRlYW1faW1nLnR5cGU7XG5cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLmJ1bGxldGFycmF5KSB7XG4gICAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdERhdGEodGhpcy5TaW5nbGVEYXRhTGlzdFswXS5idWxsZXRhcnJheVtpXS5idWxsZXRfbmFtZSxcbiAgICAgICAgICB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLmJ1bGxldGFycmF5W2ldLmJ1bGxldF9kZXNjKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLm11bHRpcGxlcGhvbmUpIHtcbiAgICAgICAgdGhpcy5hZGRwaG9uZSh0aGlzLlNpbmdsZURhdGFMaXN0WzBdLm11bHRpcGxlcGhvbmVbaV0uY29udGFjdHBob25lKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLm11bHRpcGxlZW1haWwpIHtcbiAgICAgICAgdGhpcy5hZGRlbWFpbCh0aGlzLlNpbmdsZURhdGFMaXN0WzBdLm11bHRpcGxlZW1haWxbaV0uY29udGFjdGVtYWlsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsdmFsO1xuXG4gIH1cblxuICBASW5wdXQoKSAgIC8vZ2V0dGluZyB0aGUgbGlzdGluZyByb3V0ZVxuICBzZXQgTGlzdFJvdXRlKHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0cm91dGVEYXRhID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubGlzdHJvdXRlRGF0YSA9IHZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UsXG4gICAgcHVibGljIGFwaXNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgdGhpcy50ZWFtRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY2F0ZWdvcnluYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBtZW1iZXJuYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXNjcmlwdGlvbjogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbXVsdGlwbGVwaG9uZTogdGhpcy5mYi5hcnJheShbXSksXG4gICAgICBtdWx0aXBsZWVtYWlsOiB0aGlzLmZiLmFycmF5KFtdKSxcbiAgICAgIGJ1bGxldGFycmF5OiB0aGlzLmZiLmFycmF5KFtdKSxcbiAgICAgIHRlYW1faW1nOiBbJyddXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfSwgNTApO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLl9pZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFkZEJ1bGxldExpc3REYXRhKCcnLCAnJyk7XG4gICAgICB0aGlzLmFkZHBob25lKCcnKTtcbiAgICAgIHRoaXMuYWRkZW1haWwoJycpO1xuICAgIH1cblxuICB9XG4gIGlucHV0VW50b3VjaChmb3JtOiBhbnksIHZhbDogYW55KSB7XG4gICAgZm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIC8qKmZvciBtdWx0aXBsZSBwaG9uZSBmdW5jdGlvbiBzdGFydCBoZXJlKiovXG5cbiAgYWRkcGhvbmUoYTogYW55KSB7XG4gICAgY29uc3QgbXBob25lID0gdGhpcy50ZWFtRm9ybS5jb250cm9scy5tdWx0aXBsZXBob25lIGFzIEZvcm1BcnJheTtcbiAgICBtcGhvbmUucHVzaCh0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvbnRhY3RwaG9uZTogW2FdXG4gICAgfSkpO1xuICB9XG4gIHJlbW92ZXBob25lKGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBtcGhvbmUgPSB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzLm11bHRpcGxlcGhvbmUgYXMgRm9ybUFycmF5O1xuICAgIG1waG9uZS5yZW1vdmVBdChpbmRleCk7XG5cbiAgfVxuICAvKiptdWx0aXBsZSBwaG9uZSBlbmQgaGVyZSoqL1xuXG4gIC8qKmZvciBtdWx0aXBsZSBlbWFpbHMgZnVuY3Rpb25zIHN0YXJ0IGhlcmUqKi9cbiAgYWRkZW1haWwoYTogYW55KSB7XG4gICAgY29uc3QgbWVtYWlsID0gdGhpcy50ZWFtRm9ybS5jb250cm9scy5tdWx0aXBsZWVtYWlsIGFzIEZvcm1BcnJheTtcbiAgICBtZW1haWwucHVzaCh0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvbnRhY3RlbWFpbDogW2FdXG4gICAgfSkpXG4gIH1cbiAgcmVtb3ZlZW1haWwoaW5kZXg6IGFueSkge1xuICAgIGNvbnN0IG1waG9uZSA9IHRoaXMudGVhbUZvcm0uY29udHJvbHMubXVsdGlwbGVlbWFpbCBhcyBGb3JtQXJyYXk7XG4gICAgbXBob25lLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG5cblxuICAvKiptdWx0aXBsZSBlbWFpbCBmdW5jdGlvbnMgZW5kIGhlcmUqKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgXCJzb3VyY2VcIjogXCJUZWFtX2NhdGVnb3J5XCJcbiAgICB9XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5hbGxEYXRhID0gcmVzdWx0LnJlcztcbiAgICB9KVxuICB9XG4gIC8qKnJlc2V0dGluZyB0aGUgZm9ybSoqL1xuICBSZXNldEZvcm0oKSB7XG4gICAgdGhpcy50ZWFtRm9ybS5yZXNldCgpO1xuICB9XG5cbiAgLyoqYnVsbGV0IGxpc3QgZnVuY3Rpb24gc3RhcnQgaGVyZSoqL1xuICBhZGRCdWxsZXRMaXN0RGF0YShhOiBhbnksIGI6IGFueSkge1xuICAgIGNvbnN0IGJ1bGxldGxpc3QgPSB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzLmJ1bGxldGFycmF5IGFzIEZvcm1BcnJheTtcbiAgICBidWxsZXRsaXN0LnB1c2godGhpcy5mYi5ncm91cCh7XG4gICAgICBidWxsZXRfbmFtZTogW2FdLFxuICAgICAgYnVsbGV0X2Rlc2M6IFtiXSxcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGVCdWxsZXRMaXN0RGF0YSgpIHtcbiAgICBjb25zdCBidWxsZXRsaXN0ID0gdGhpcy50ZWFtRm9ybS5jb250cm9scy5idWxsZXRhcnJheSBhcyBGb3JtQXJyYXk7XG4gICAgYnVsbGV0bGlzdC5yZW1vdmVBdCgxKTtcbiAgfVxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLyoqYnVsbGV0IGxpc3QgZnVuY3Rpb24gZW5kIGhlcmUqKi9cbiAgY2xlYXJfaW1hZ2UoKSB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gIH1cbiAgVGVhbUZvcm1TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLkVyckNvZGUgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRlYW1Gb3JtLnZhbHVlLnRlYW1faW1nID1cbiAgICAgICAge1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLydcbiAgICAgICAgICAgICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZWFtRm9ybS52YWx1ZS50ZWFtX2ltZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsZXQgeDogYW55O1xuICAgIGZvciAoeCBpbiB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGVhbUZvcm0udmFsaWQpIHtcbiAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICBpZiAodGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuX2lkKSB7ICAgICAgLy91cGRhdGUgcGFydFxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiVGVhbV9tYW5hZ2VtZW50XCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wYXJhbXNfaWQsXG4gICAgICAgICAgICBcImNhdGVnb3J5bmFtZVwiOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLmNhdGVnb3J5bmFtZSxcbiAgICAgICAgICAgIFwibWVtYmVybmFtZVwiOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLm1lbWJlcm5hbWUsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMudGVhbUZvcm0udmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBcIm11bHRpcGxlcGhvbmVcIjogdGhpcy50ZWFtRm9ybS52YWx1ZS5tdWx0aXBsZXBob25lLFxuICAgICAgICAgICAgXCJtdWx0aXBsZWVtYWlsXCI6IHRoaXMudGVhbUZvcm0udmFsdWUubXVsdGlwbGVlbWFpbCxcbiAgICAgICAgICAgIFwiYnVsbGV0YXJyYXlcIjogdGhpcy50ZWFtRm9ybS52YWx1ZS5idWxsZXRhcnJheSxcbiAgICAgICAgICAgICd0ZWFtX2ltZyc6IHRoaXMudGVhbUZvcm0udmFsdWUudGVhbV9pbWdcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImNhdGVnb3J5bmFtZVwiXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHBhcnRcbiAgICAgICAgICBcInNvdXJjZVwiOiBcIlRlYW1fbWFuYWdlbWVudFwiLFxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImNhdGVnb3J5bmFtZVwiXVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNwaW5uZXJMb2FkZXIgPSB0cnVlO1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zcGlubmVyTG9hZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuUmVzZXRGb3JtKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0cm91dGVEYXRhKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiZXJyb3Igb2NjdXJlZFwiKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
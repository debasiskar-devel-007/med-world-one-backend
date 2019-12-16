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
var AddEditTeamComponent = /** @class */ (function () {
    function AddEditTeamComponent(fb, activeroute, _http, uploadService, apiservice, router) {
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
    Object.defineProperty(AddEditTeamComponent.prototype, "imageUpload", {
        /* Config Upload file lib */
        set: /* Config Upload file lib */
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.imageConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditTeamComponent.prototype, "singleData", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
                for (var i in this.SingleDataList[0].bulletarray) {
                    this.addBulletListData(this.SingleDataList[0].bulletarray[i].bullet_name, this.SingleDataList[0].bulletarray[i].bullet_desc);
                }
                for (var i in this.SingleDataList[0].multiplephone) {
                    this.addphone(this.SingleDataList[0].multiplephone[i].contactphone);
                }
                for (var i in this.SingleDataList[0].multipleemail) {
                    this.addemail(this.SingleDataList[0].multipleemail[i].contactemail);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditTeamComponent.prototype, "serverUrl", {
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
    Object.defineProperty(AddEditTeamComponent.prototype, "ListRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.listrouteData = (val) || '<no name set>';
            this.listrouteData = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditTeamComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditTeamComponent.prototype, "addEndpoint", {
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
    /**
     * @return {?}
     */
    AddEditTeamComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setaddEndpoint(_this.addEndpointData);
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getData();
        }), 50);
        if (this.activeroute.snapshot.params._id == null) {
            this.addBulletListData('', '');
            this.addphone('');
            this.addemail('');
        }
    };
    /**
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    AddEditTeamComponent.prototype.inputUntouch = /**
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    function (form, val) {
        form.controls[val].markAsUntouched();
    };
    /**for multiple phone function start here**/
    /**
     * for multiple phone function start here*
     * @param {?} a
     * @return {?}
     */
    AddEditTeamComponent.prototype.addphone = /**
     * for multiple phone function start here*
     * @param {?} a
     * @return {?}
     */
    function (a) {
        /** @type {?} */
        var mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
        mphone.push(this.fb.group({
            contactphone: [a]
        }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddEditTeamComponent.prototype.removephone = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var mphone = (/** @type {?} */ (this.teamForm.controls.multiplephone));
        mphone.removeAt(index);
    };
    /**multiple phone end here**/
    /**for multiple emails functions start here**/
    /**multiple phone end here**/
    /**
     * for multiple emails functions start here*
     * @param {?} a
     * @return {?}
     */
    AddEditTeamComponent.prototype.addemail = /**multiple phone end here**/
    /**
     * for multiple emails functions start here*
     * @param {?} a
     * @return {?}
     */
    function (a) {
        /** @type {?} */
        var memail = (/** @type {?} */ (this.teamForm.controls.multipleemail));
        memail.push(this.fb.group({
            contactemail: [a]
        }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddEditTeamComponent.prototype.removeemail = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var mphone = (/** @type {?} */ (this.teamForm.controls.multipleemail));
        mphone.removeAt(index);
    };
    /**multiple email functions end here**/
    /**
     * multiple email functions end here*
     * @return {?}
     */
    AddEditTeamComponent.prototype.getData = /**
     * multiple email functions end here*
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            "source": "Team_category"
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = response;
            _this.allData = result.res;
        }));
    };
    /**resetting the form**/
    /**
     * resetting the form*
     * @return {?}
     */
    AddEditTeamComponent.prototype.ResetForm = /**
     * resetting the form*
     * @return {?}
     */
    function () {
        this.teamForm.reset();
    };
    /**bullet list function start here**/
    /**
     * bullet list function start here*
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    AddEditTeamComponent.prototype.addBulletListData = /**
     * bullet list function start here*
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
        bulletlist.push(this.fb.group({
            bullet_name: [a],
            bullet_desc: [b],
        }));
    };
    /**
     * @return {?}
     */
    AddEditTeamComponent.prototype.deleteBulletListData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bulletlist = (/** @type {?} */ (this.teamForm.controls.bulletarray));
        bulletlist.removeAt(1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddEditTeamComponent.prototype.trackByFn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    /**bullet list function end here**/
    /**
     * bullet list function end here*
     * @return {?}
     */
    AddEditTeamComponent.prototype.clear_image = /**
     * bullet list function end here*
     * @return {?}
     */
    function () {
        this.flag = false;
    };
    /**
     * @return {?}
     */
    AddEditTeamComponent.prototype.TeamFormSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        var x;
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
            function (response) {
                _this.spinnerLoader = false;
                _this.ResetForm();
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listrouteData);
                }), 100);
            }));
        }
        else {
            alert("error occured");
        }
    };
    AddEditTeamComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-team',
                    template: "<span class=\"formspan\">\n  <mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n      <h2 class=\"headerSpan\">{{HeaderText}}</h2>\n    </mat-toolbar>\n    <span class=\"formspan\">\n      <mat-card-content class=\"example-container\">\n        <form class=\"example-form\" novalidate [formGroup]=\"teamForm\" name=\"teamForm\" (ngSubmit)=\"TeamFormSubmit()\"\n          autocomplete=\"off\">\n          <div class=\"example-container\">\n\n            <mat-form-field>\n              <input matInput placeholder=\"Team Member Name\" [formControl]=\"teamForm.controls['membername']\"\n                (blur)=\"inputUntouch(teamForm,'membername')\">\n              <mat-error *ngIf=\"teamForm.controls['membername'].touched \n                && !teamForm.controls['membername'].valid\n                       && teamForm.controls['membername'].errors.required\">\n                Category Name field can not be blank</mat-error>\n            </mat-form-field><br>\n\n\n\n            <mat-form-field>\n              <textarea matInput placeholder=\"Description\" [formControl]=\"teamForm.controls['description']\"\n                (blur)=\"inputUntouch(teamForm,'description')\">\n                       </textarea>\n              <mat-error *ngIf=\"teamForm.controls['description'].touched && !teamForm.controls['description'].valid\n                   && teamForm.controls['description'].errors.required\">\n                Description field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n              <mat-label>Category Name</mat-label>\n              <mat-select formControlName=\"categoryname\">\n                <mat-option [value]=0>\n                  Select a category\n                </mat-option>\n                <mat-option *ngFor=\"let f of allData\" [value]=\"f._id\">\n                  {{f.categoryName}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!-- bullet list start here -->\n            <div formArrayName=\"bulletarray\" class=\"bulletarr\"\n              *ngFor=\"let blist of teamForm.controls.bulletarray?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n                <div class=\"top_header\">\n                  bullet list\n                </div>\n                <!-- ------------bullet name-----------  -->\n                <mat-form-field>\n                  <input matInput formControlName=\"bullet_name\" placeholder=\"Name\">\n\n                </mat-form-field><br>\n                <!-- -----------------------------------  -->\n\n\n                <!-- --------------------bullet description-----------------  -->\n                <mat-form-field>\n                  <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Description\"></textarea>\n\n                </mat-form-field><br>\n                <!-- ----------------------------------------------------------  -->\n\n              </ng-container>\n              <button type=\"button\" (click)=\"addBulletListData('','')\">\n                <mat-icon>add</mat-icon>\n              </button>\n              <button type=\"button\" (click)=\"deleteBulletListData()\" *ngIf=\"i!=0\">\n                <mat-icon>remove</mat-icon>\n              </button>\n            </div>\n            <!-- bullet list end here -->\n\n\n            <!--multiple phone start here -->\n            <div formArrayName=\"multiplephone\"\n              *ngFor=\"let plist of teamForm.controls.multiplephone?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactphone\" placeholder=\"contactphone\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addphone('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removephone(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple phone end here -->\n\n            <!-- multiple e-mail start here -->\n            <div formArrayName=\"multipleemail\"\n              *ngFor=\"let elist of teamForm.controls.multipleemail?.value; let i = index; trackBy: trackByFn\">\n              <ng-container [formGroupName]=\"i\">\n\n                <mat-form-field>\n                  <input matInput formControlName=\"contactemail\" placeholder=\"contactemail\">\n                  <span matSuffix>\n                    <i class=\"material-icons\" (click)=\"addemail('')\">add</i>\n                    <i *ngIf=\"i>0\" class=\"material-icons\" (click)=\"removeemail(i)\">remove</i>\n                  </span>\n                </mat-form-field><br>\n\n              </ng-container>\n            </div>\n            <!-- multiple e-mail end here -->\n\n          </div>\n          <!-- file upload library start here -->\n          <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n          <mat-error *ngIf=\"ErrCode==true\">Please add just one image.</mat-error>\n\n          <!-- CARD VIEW  -->\n          <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n            <mat-card class=\"example-card\">\n              <img mat-card-image [attr.src]=\"img_var\">\n              <mat-card-title>{{ image_name }}</mat-card-title>\n              <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n              <span class=\"closecard\" (click)=\"clear_image()\">\n                <i class=\"material-icons\">clear</i>\n              </span>\n            </mat-card>\n          </mat-card-content>\n          <!-- file upload end here -->\n          <button mat-raised-button color=\"primary\" mat-button class=\"submitbtn\" type=\"submit\">{{ButtonText}}</button>\n          <button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"ResetForm()\">Reset</button>\n        </form>\n      </mat-card-content>\n    </span>\n    <mat-spinner *ngIf=\"spinnerLoader\"></mat-spinner>\n  </mat-card>\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:block;position:relative;text-align:left;width:100%;background:#fff;padding:1px 14px;box-sizing:border-box;margin:0}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.bulletarr{margin-top:20px;border:2px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize;margin-bottom:20px}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditTeamComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: HttpClient },
        { type: UploadService },
        { type: ApiService },
        { type: Router }
    ]; };
    AddEditTeamComponent.propDecorators = {
        imageUpload: [{ type: Input }],
        singleData: [{ type: Input }],
        serverUrl: [{ type: Input }],
        ListRoute: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        addEndpoint: [{ type: Input }]
    };
    return AddEditTeamComponent;
}());
export { AddEditTeamComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtdGVhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGQtZWRpdC10ZWFtL2FkZC1lZGl0LXRlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFxQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzdEO0lBMEZFLDhCQUFtQixFQUFlLEVBQVMsV0FBMkIsRUFDN0QsS0FBaUIsRUFBVSxhQUE0QixFQUN2RCxVQUFzQixFQUFTLE1BQWM7UUFGbkMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUM3RCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDdkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0Ri9DLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQU1sQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBRXBCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBUSxRQUFRLENBQUM7UUFDM0IsZUFBVSxHQUFRLGlCQUFp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LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vU2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL1NlcnZpY2UvdXBsb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhbmFseXplQW5kVmFsaWRhdGVOZ01vZHVsZXMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtdGVhbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC10ZWFtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtdGVhbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdFRlYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdGVhbURhdGE6IGFueSA9IFtdO1xuICBwdWJsaWMgYWxsRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyB0ZWFtRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgcGFyYW1zX2lkOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGxpc3Ryb3V0ZURhdGEgPSBcIlwiO1xuICBwdWJsaWMgZWRpdGFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIHNwaW5uZXJMb2FkZXI6IGJvb2xlYW47XG4gIHB1YmxpYyBpbWFnZUNvbmZpZ0RhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgU2luZ2xlRGF0YUxpc3Q6IGFueSA9IFtdO1xuICBwdWJsaWMgQnV0dG9uVGV4dDogYW55ID0gXCJTdWJtaXRcIjtcbiAgcHVibGljIEhlYWRlclRleHQ6IGFueSA9IFwiQWRkIFRlYW0gTWVtYmVyXCI7XG4gIHB1YmxpYyBFcnJDb2RlOiBib29sZWFuO1xuICBwdWJsaWMgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW1nX3ZhcjogYW55ID0gJyc7XG4gIHB1YmxpYyBpbWFnZV9uYW1lOiBhbnk7XG4gIHB1YmxpYyBpbWFnZV90eXBlOiBhbnk7XG5cbiAgLyogQ29uZmlnIFVwbG9hZCBmaWxlIGxpYiAqL1xuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2luZ2xlRGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuU2luZ2xlRGF0YUxpc3QgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5TaW5nbGVEYXRhTGlzdCA9IHZhbDtcbiAgICBpZiAodGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuX2lkKSB7XG4gICAgICB0aGlzLkJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xuICAgICAgdGhpcy5IZWFkZXJUZXh0ID0gXCJFZGl0IFRlYW0gTWVtYmVyXCJcbiAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICB0aGlzLnBhcmFtc19pZCA9IHRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLl9pZDtcbiAgICAgIHRoaXMudGVhbUZvcm0uY29udHJvbHNbJ2NhdGVnb3J5bmFtZSddLnBhdGNoVmFsdWUodmFsWzBdLmNhdGVnb3J5bmFtZSk7XG4gICAgICB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnBhdGNoVmFsdWUodmFsWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMudGVhbUZvcm0uY29udHJvbHNbJ21lbWJlcm5hbWUnXS5wYXRjaFZhbHVlKHZhbFswXS5tZW1iZXJuYW1lKTtcblxuICAgICAgdGhpcy50ZWFtRm9ybS5jb250cm9sc1sndGVhbV9pbWcnXS5wYXRjaFZhbHVlKHZhbFswXS50ZWFtX2ltZyk7XG5cbiAgICAgIHRoaXMuaW1nX3ZhciA9IHRoaXMuU2luZ2xlRGF0YUxpc3RbMF0udGVhbV9pbWcuYmFzZXBhdGggKyB0aGlzLlNpbmdsZURhdGFMaXN0WzBdLnRlYW1faW1nLmltYWdlO1xuICAgICAgdGhpcy5pbWFnZV9uYW1lID0gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS50ZWFtX2ltZy5uYW1lO1xuICAgICAgdGhpcy5pbWFnZV90eXBlID0gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS50ZWFtX2ltZy50eXBlO1xuXG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS5idWxsZXRhcnJheSkge1xuICAgICAgICB0aGlzLmFkZEJ1bGxldExpc3REYXRhKHRoaXMuU2luZ2xlRGF0YUxpc3RbMF0uYnVsbGV0YXJyYXlbaV0uYnVsbGV0X25hbWUsXG4gICAgICAgICAgdGhpcy5TaW5nbGVEYXRhTGlzdFswXS5idWxsZXRhcnJheVtpXS5idWxsZXRfZGVzYyk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS5tdWx0aXBsZXBob25lKSB7XG4gICAgICAgIHRoaXMuYWRkcGhvbmUodGhpcy5TaW5nbGVEYXRhTGlzdFswXS5tdWx0aXBsZXBob25lW2ldLmNvbnRhY3RwaG9uZSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5TaW5nbGVEYXRhTGlzdFswXS5tdWx0aXBsZWVtYWlsKSB7XG4gICAgICAgIHRoaXMuYWRkZW1haWwodGhpcy5TaW5nbGVEYXRhTGlzdFswXS5tdWx0aXBsZWVtYWlsW2ldLmNvbnRhY3RlbWFpbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAvL2dldHRpbmcgdGhlIGxpc3Rpbmcgcm91dGVcbiAgc2V0IExpc3RSb3V0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMubGlzdHJvdXRlRGF0YSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3Ryb3V0ZURhdGEgPSB2YWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYWN0aXZlcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlLFxuICAgIHB1YmxpYyBhcGlzZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIHRoaXMudGVhbUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNhdGVnb3J5bmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWVtYmVybmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGVzY3JpcHRpb246IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG11bHRpcGxlcGhvbmU6IHRoaXMuZmIuYXJyYXkoW10pLFxuICAgICAgbXVsdGlwbGVlbWFpbDogdGhpcy5mYi5hcnJheShbXSksXG4gICAgICBidWxsZXRhcnJheTogdGhpcy5mYi5hcnJheShbXSksXG4gICAgICB0ZWFtX2ltZzogWycnXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxEYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH0sIDUwKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5faWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hZGRCdWxsZXRMaXN0RGF0YSgnJywgJycpO1xuICAgICAgdGhpcy5hZGRwaG9uZSgnJyk7XG4gICAgICB0aGlzLmFkZGVtYWlsKCcnKTtcbiAgICB9XG5cbiAgfVxuICBpbnB1dFVudG91Y2goZm9ybTogYW55LCB2YWw6IGFueSkge1xuICAgIGZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICAvKipmb3IgbXVsdGlwbGUgcGhvbmUgZnVuY3Rpb24gc3RhcnQgaGVyZSoqL1xuXG4gIGFkZHBob25lKGE6IGFueSkge1xuICAgIGNvbnN0IG1waG9uZSA9IHRoaXMudGVhbUZvcm0uY29udHJvbHMubXVsdGlwbGVwaG9uZSBhcyBGb3JtQXJyYXk7XG4gICAgbXBob25lLnB1c2godGhpcy5mYi5ncm91cCh7XG4gICAgICBjb250YWN0cGhvbmU6IFthXVxuICAgIH0pKTtcbiAgfVxuICByZW1vdmVwaG9uZShpbmRleDogYW55KSB7XG4gICAgY29uc3QgbXBob25lID0gdGhpcy50ZWFtRm9ybS5jb250cm9scy5tdWx0aXBsZXBob25lIGFzIEZvcm1BcnJheTtcbiAgICBtcGhvbmUucmVtb3ZlQXQoaW5kZXgpO1xuXG4gIH1cbiAgLyoqbXVsdGlwbGUgcGhvbmUgZW5kIGhlcmUqKi9cblxuICAvKipmb3IgbXVsdGlwbGUgZW1haWxzIGZ1bmN0aW9ucyBzdGFydCBoZXJlKiovXG4gIGFkZGVtYWlsKGE6IGFueSkge1xuICAgIGNvbnN0IG1lbWFpbCA9IHRoaXMudGVhbUZvcm0uY29udHJvbHMubXVsdGlwbGVlbWFpbCBhcyBGb3JtQXJyYXk7XG4gICAgbWVtYWlsLnB1c2godGhpcy5mYi5ncm91cCh7XG4gICAgICBjb250YWN0ZW1haWw6IFthXVxuICAgIH0pKVxuICB9XG4gIHJlbW92ZWVtYWlsKGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBtcGhvbmUgPSB0aGlzLnRlYW1Gb3JtLmNvbnRyb2xzLm11bHRpcGxlZW1haWwgYXMgRm9ybUFycmF5O1xuICAgIG1waG9uZS5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuXG5cbiAgLyoqbXVsdGlwbGUgZW1haWwgZnVuY3Rpb25zIGVuZCBoZXJlKiovXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIFwic291cmNlXCI6IFwiVGVhbV9jYXRlZ29yeVwiXG4gICAgfVxuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYWxsRGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgfSlcbiAgfVxuICAvKipyZXNldHRpbmcgdGhlIGZvcm0qKi9cbiAgUmVzZXRGb3JtKCkge1xuICAgIHRoaXMudGVhbUZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qKmJ1bGxldCBsaXN0IGZ1bmN0aW9uIHN0YXJ0IGhlcmUqKi9cbiAgYWRkQnVsbGV0TGlzdERhdGEoYTogYW55LCBiOiBhbnkpIHtcbiAgICBjb25zdCBidWxsZXRsaXN0ID0gdGhpcy50ZWFtRm9ybS5jb250cm9scy5idWxsZXRhcnJheSBhcyBGb3JtQXJyYXk7XG4gICAgYnVsbGV0bGlzdC5wdXNoKHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgYnVsbGV0X25hbWU6IFthXSxcbiAgICAgIGJ1bGxldF9kZXNjOiBbYl0sXG4gICAgfSkpO1xuICB9XG5cbiAgZGVsZXRlQnVsbGV0TGlzdERhdGEoKSB7XG4gICAgY29uc3QgYnVsbGV0bGlzdCA9IHRoaXMudGVhbUZvcm0uY29udHJvbHMuYnVsbGV0YXJyYXkgYXMgRm9ybUFycmF5O1xuICAgIGJ1bGxldGxpc3QucmVtb3ZlQXQoMSk7XG4gIH1cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8qKmJ1bGxldCBsaXN0IGZ1bmN0aW9uIGVuZCBoZXJlKiovXG4gIGNsZWFyX2ltYWdlKCkge1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICB9XG4gIFRlYW1Gb3JtU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xuICAgICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5FcnJDb2RlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50ZWFtRm9ybS52YWx1ZS50ZWFtX2ltZyA9XG4gICAgICAgIHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nXG4gICAgICAgICAgICArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS50eXBlXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVhbUZvcm0udmFsdWUudGVhbV9pbWcgPSBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy50ZWFtRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy50ZWFtRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRlYW1Gb3JtLnZhbGlkKSB7XG4gICAgICB2YXIgZGF0YTogYW55O1xuICAgICAgaWYgKHRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLl9pZCkgeyAgICAgIC8vdXBkYXRlIHBhcnRcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBcInNvdXJjZVwiOiBcIlRlYW1fbWFuYWdlbWVudFwiLFxuICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IHRoaXMucGFyYW1zX2lkLFxuICAgICAgICAgICAgXCJjYXRlZ29yeW5hbWVcIjogdGhpcy50ZWFtRm9ybS52YWx1ZS5jYXRlZ29yeW5hbWUsXG4gICAgICAgICAgICBcIm1lbWJlcm5hbWVcIjogdGhpcy50ZWFtRm9ybS52YWx1ZS5tZW1iZXJuYW1lLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgXCJtdWx0aXBsZXBob25lXCI6IHRoaXMudGVhbUZvcm0udmFsdWUubXVsdGlwbGVwaG9uZSxcbiAgICAgICAgICAgIFwibXVsdGlwbGVlbWFpbFwiOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLm11bHRpcGxlZW1haWwsXG4gICAgICAgICAgICBcImJ1bGxldGFycmF5XCI6IHRoaXMudGVhbUZvcm0udmFsdWUuYnVsbGV0YXJyYXksXG4gICAgICAgICAgICAndGVhbV9pbWcnOiB0aGlzLnRlYW1Gb3JtLnZhbHVlLnRlYW1faW1nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJjYXRlZ29yeW5hbWVcIl1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYXJ0XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWFtX21hbmFnZW1lbnRcIixcbiAgICAgICAgICBcImRhdGFcIjogdGhpcy50ZWFtRm9ybS52YWx1ZSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJjYXRlZ29yeW5hbWVcIl1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zcGlubmVyTG9hZGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc3Bpbm5lckxvYWRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLlJlc2V0Rm9ybSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMubGlzdHJvdXRlRGF0YSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcImVycm9yIG9jY3VyZWRcIik7XG4gICAgfVxuICB9XG59XG4iXX0=
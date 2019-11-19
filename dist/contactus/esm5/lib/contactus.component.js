/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.value;
    /** @type {?} */
    DialogData.prototype.Url;
}
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, apiService, http, router, cookieService, dialog) {
        this.fb = fb;
        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.value = '';
        this.link = '';
        this.Url = '';
        this.message = '';
        // This variable is use for show the Form title   
        this.email = [];
        this.phone = [];
        this.address = [];
        this.serverURL = ''; // url variable to fetch the add availability form page
        // url variable to fetch the add availability form page
        this.addEndpointData = '';
        this.routeingUrlValue = '';
        this.setJwtTokenValue = '';
        this.listingValue = '';
        this.logoImgValue = '';
        /*Using for google map start ----*/
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.contactUsForm = this.fb.group({
            name: ['', Validators.required],
            message: [''],
            // tslint:disable-next-line:max-line-length
            multipleemails: this.fb.array([this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
            phones: this.fb.array([this.fb.group({ phone: ['', Validators.required] })]),
            addresses: this.fb.array([this.fb.group({ address: ['', Validators.required] })])
        });
    }
    Object.defineProperty(ContactusComponent.prototype, "modaleLogo", {
        set: /**
         * @param {?} modaleLogoVal
         * @return {?}
         */
        function (modaleLogoVal) {
            this.link = modaleLogoVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "formTitle", {
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
    Object.defineProperty(ContactusComponent.prototype, "logoimg", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoImgValue = logoVal;
            console.log(this.logoImgValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "addlisting", {
        set: /**
         * @param {?} listingVal
         * @return {?}
         */
        function (listingVal) {
            this.listingValue = (listingVal) || '<no name set>';
            this.listingValue = listingVal;
            console.log('this.listingValue');
            console.log(this.listingValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "JwtToken", {
        set: /**
         * @param {?} JwtTokenVal
         * @return {?}
         */
        function (JwtTokenVal) {
            this.setJwtTokenValue = JwtTokenVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverURL = (serverUrlval) || '<no name set>';
            this.serverURL = serverUrlval;
            // console.log(this.serverURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
            console.log('this.addEndpointData');
            console.log(this.addEndpointData);
            // console.log(this.addEndpointData.endpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "routeingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.routeingUrlValue = (routeingUrlval) || '<no name set>';
            this.routeingUrlValue = routeingUrlval;
            // console.log(this.routeingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContactusComponent.prototype.ngOnInit = /**
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
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    Object.defineProperty(ContactusComponent.prototype, "multipleemails", {
        /* Multiple emails created start here*/
        get: /* Multiple emails created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add email field start here */
    /* Add email field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addEmail = /* Add email field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    };
    /* Add email field end here */
    /* Remove email field start here */
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeEmail = /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "addresses", {
        /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        get: /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('addresses')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addAddress = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    };
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeAddress = /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.addresses.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "phones", {
        /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        get: /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('phones')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addPhone = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    };
    /* Add phones field end here */
    /* Remove phones field start here */
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removePhone = /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.phones.removeAt(index);
    };
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    ContactusComponent.prototype.contactUsFormSubmit = /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a, e_2, _b, e_3, _c;
        /** @type {?} */
        var x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            try {
                // console.log('ok');
                // console.log(this.contactUsForm.value);
                // All emails sites in a Array start here
                for (var _d = tslib_1.__values(this.contactUsForm.value.multipleemails), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    this.email.push(key.emails);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                // All emails sites in a Array end here
                // All Phones sites in a Array start here
                // console.log(this.contactUsForm.value.phones);
                for (var _f = tslib_1.__values(this.contactUsForm.value.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var key = _g.value;
                    this.phone.push(key.phone);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                // All Phones sites in a Array end here
                // All addresses sites in a Array start here
                for (var _h = tslib_1.__values(this.contactUsForm.value.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var key = _j.value;
                    this.address.push(key.address);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            var allData = {};
            allData.name = this.contactUsForm.value.name;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            var data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.addEndpointData.token
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    /** @type {?} */
                    var dialogRef = _this.dialog.open(successModalComponent, {
                        width: '250px',
                        data: { value: result.status, Url: _this.link }
                    });
                    _this.formDirective.resetForm();
                }
            }));
        }
    };
    // contactUsForm submit function end here
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    ContactusComponent.prototype.inputUntouched = 
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ContactusComponent.prototype.goToListing = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    };
    ContactusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-contactus',
                    template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <div class=\"fromClass\">\n  <mat-form-field>\n      <input matInput placeholder=\"Name \" formControlName=\"name\" (blur)=\"inputUntouched('name')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['name'].valid && contactUsForm.controls['name'].errors.required && contactUsForm.controls['name'].touched\">Name field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\"  *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" class=\"fromClass\" >\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n     <!-- <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error> -->\n      <!-- <mat-error *ngIf=\"!item.valid  \">Email field can not be blank</mat-error> -->\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" *ngFor=\"let item of phones.controls; let pointIndex=index\" class=\"fromClass\">\n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <!-- <mat-error *ngIf=\"!item.valid  \">Phone field can not be blank</mat-error> -->\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" *ngFor=\"let item of addresses.controls; let pointIndex=index\"  class=\"fromClass\">\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" (blur)=\"inputUntouched('address')\"></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <!-- <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error> -->\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <div class=\"fromClass\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n  </div>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ContactusComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: HttpClient },
        { type: Router },
        { type: CookieService },
        { type: MatDialog }
    ]; };
    ContactusComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        modaleLogo: [{ type: Input }],
        formTitle: [{ type: Input }],
        logoimg: [{ type: Input }],
        addlisting: [{ type: Input }],
        JwtToken: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        routeingUrl: [{ type: Input }]
    };
    return ContactusComponent;
}());
export { ContactusComponent };
if (false) {
    /** @type {?} */
    ContactusComponent.prototype.formDirective;
    /** @type {?} */
    ContactusComponent.prototype.value;
    /** @type {?} */
    ContactusComponent.prototype.link;
    /** @type {?} */
    ContactusComponent.prototype.Url;
    /** @type {?} */
    ContactusComponent.prototype.message;
    /** @type {?} */
    ContactusComponent.prototype.formTitleValue;
    /** @type {?} */
    ContactusComponent.prototype.email;
    /** @type {?} */
    ContactusComponent.prototype.phone;
    /** @type {?} */
    ContactusComponent.prototype.address;
    /** @type {?} */
    ContactusComponent.prototype.serverURL;
    /** @type {?} */
    ContactusComponent.prototype.addEndpointData;
    /** @type {?} */
    ContactusComponent.prototype.routeingUrlValue;
    /** @type {?} */
    ContactusComponent.prototype.setJwtTokenValue;
    /** @type {?} */
    ContactusComponent.prototype.listingValue;
    /** @type {?} */
    ContactusComponent.prototype.logoImgValue;
    /** @type {?} */
    ContactusComponent.prototype.latitude;
    /** @type {?} */
    ContactusComponent.prototype.longitude;
    /** @type {?} */
    ContactusComponent.prototype.mapType;
    /** @type {?} */
    ContactusComponent.prototype.contactUsForm;
    /** @type {?} */
    ContactusComponent.prototype.fb;
    /** @type {?} */
    ContactusComponent.prototype.apiService;
    /** @type {?} */
    ContactusComponent.prototype.http;
    /** @type {?} */
    ContactusComponent.prototype.router;
    /** @type {?} */
    ContactusComponent.prototype.cookieService;
    /** @type {?} */
    ContactusComponent.prototype.dialog;
}
var successModalComponent = /** @class */ (function () {
    function successModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    /**
     * @return {?}
     */
    successModalComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    successModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'successModal',
                    template: "\n  \n<span style=\"text-align: center\"  *ngIf=\"data.Url != ''\" >\n<img style=\"max-width: 100%; text-align: center\" [src]=\"data.Url\">\n</span>\n\n<div mat-dialog-content>\n<p *ngIf=\"data.value.length <= 7\">Thanks! your account has been successfully created</p>\n<p *ngIf=\"data.value.length >= 8\">{{data.value}}</p>\n\n</div>\n<div mat-dialog-actions>\n<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\n</div>\n\n  "
                }] }
    ];
    /** @nocollapse */
    successModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return successModalComponent;
}());
export { successModalComponent };
if (false) {
    /** @type {?} */
    successModalComponent.prototype.dialogRef;
    /** @type {?} */
    successModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFhLFdBQVcsRUFBYSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTdFLGdDQUdDOzs7SUFGQywyQkFBYzs7SUFDZCx5QkFBUzs7QUFNWDtJQW9HRSw0QkFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsYUFBNEIsRUFBUyxNQUFpQjtRQUE3SixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBekZ6SyxVQUFLLEdBQU0sRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFNLEVBQUUsQ0FBQztRQUNiLFFBQUcsR0FBTSxFQUFFLENBQUM7UUFDWixZQUFPLEdBQVEsRUFBRSxDQUFDOztRQUdsQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUVwQixjQUFTLEdBQVEsRUFBRSxDQUFDLENBQU0sdURBQXVEOztRQUNqRixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsRUFBRSxDQUFDOztRQW1FOUIsYUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2QixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBTXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztZQUViLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzTSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUUsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBRWxGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqRkQsc0JBRUksMENBQVU7Ozs7O1FBRmQsVUFFZSxhQUFtQjtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUdELHNCQUVXLHlDQUFTOzs7OztRQUZwQixVQUVxQixZQUFxQjtZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUVXLHVDQUFPOzs7OztRQUZsQixVQUVtQixPQUFnQjtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDBDQUFVOzs7OztRQURkLFVBQ2UsVUFBZ0I7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFFSSx3Q0FBUTs7Ozs7UUFGWixVQUVhLFdBQWlCO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFFSSx5Q0FBUzs7Ozs7UUFGYixVQUVjLFlBQWlCO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDOUIsK0JBQStCO1FBRWpDLENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksMkNBQVc7Ozs7O1FBRGYsVUFDZ0IsY0FBbUI7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEMsOENBQThDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksMkNBQVc7Ozs7O1FBRGYsVUFDZ0IsY0FBbUI7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7WUFDdkMsc0NBQXNDO1FBQ3hDLENBQUM7OztPQUFBOzs7O0lBdUJELHFDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCwrQkFBK0I7UUFHL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25DLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCw4Q0FBOEM7SUFFaEQsQ0FBQztJQUVELHNCQUFJLDhDQUFjO1FBRGxCLHVDQUF1Qzs7Ozs7UUFDdkM7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQWEsQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVELGdDQUFnQzs7Ozs7SUFDaEMscUNBQVE7Ozs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2TSxDQUFDO0lBQ0QsOEJBQThCO0lBRTlCLG1DQUFtQzs7Ozs7OztJQUNuQyx3Q0FBVzs7Ozs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBT0Qsc0JBQUkseUNBQVM7UUFOYixpQ0FBaUM7UUFDakMscUNBQXFDO1FBR3JDLDBDQUEwQzs7Ozs7OztRQUUxQztZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUNELG9DQUFvQzs7Ozs7SUFDcEMsdUNBQVU7Ozs7SUFBVjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDRCxrQ0FBa0M7SUFFbEMsdUNBQXVDOzs7Ozs7O0lBQ3ZDLDBDQUFhOzs7Ozs7SUFBYixVQUFjLEtBQUs7UUFDakIsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFNRCxzQkFBSSxzQ0FBTTtRQUxWLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFHeEMsdUNBQXVDOzs7Ozs7O1FBQ3ZDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBYSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsb0NBQW9DOzs7OztJQUVwQyxxQ0FBUTs7OztJQUFSO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsK0JBQStCO0lBRS9CLG9DQUFvQzs7Ozs7OztJQUNwQyx3Q0FBVzs7Ozs7O0lBQVgsVUFBWSxLQUFLO1FBQ2Ysc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBS3JDLDJDQUEyQzs7Ozs7OztJQUMzQyxnREFBbUI7Ozs7OztJQUFuQjtRQUFBLGlCQXNFQzs7O1lBbkVLLENBQU07UUFDVixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUVoRDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7O2dCQUM1QixxQkFBcUI7Z0JBRXJCLHlDQUF5QztnQkFHekMseUNBQXlDO2dCQUV6QyxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFBLGdCQUFBLDRCQUFFO29CQUF0RCxJQUFNLEdBQUcsV0FBQTtvQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBRTdCOzs7Ozs7Ozs7O2dCQUNELHVDQUF1QztnQkFFdkMseUNBQXlDO2dCQUV6QyxnREFBZ0Q7Z0JBQ2hELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTlDLElBQU0sR0FBRyxXQUFBO29CQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFFNUI7Ozs7Ozs7Ozs7Z0JBQ04sdUNBQXVDO2dCQUVsQyw0Q0FBNEM7Z0JBRTVDLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWpELElBQU0sR0FBRyxXQUFBO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEM7Ozs7Ozs7Ozs7O2dCQUdHLE9BQU8sR0FBTyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMvQixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Z0JBRS9DLElBQUksR0FBUTtnQkFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNO2dCQUNyQyxNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO2FBQ3BDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxHQUFHOztvQkFDckMsTUFBVztnQkFDZixNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Ozt3QkFFekIsU0FBUyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO3dCQUN4RCxLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBQztxQkFDN0MsQ0FBQztvQkFFRixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNoQztZQUNILENBQUMsRUFBQyxDQUFDO1NBRUo7SUFJSCxDQUFDO0lBRUQseUNBQXlDOzs7Ozs7SUFJekMsMkNBQWM7Ozs7OztJQUFkLFVBQWUsR0FBUTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBM1JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNGhKQUF5Qzs7aUJBRTFDOzs7O2dCQW5CbUIsV0FBVztnQkFDdEIsVUFBVTtnQkFDVixVQUFVO2dCQUNWLE1BQU07Z0JBQ04sYUFBYTtnQkFDa0IsU0FBUzs7O2dDQW1COUMsU0FBUyxTQUFDLGtCQUFrQjs2QkFvQjVCLEtBQUs7NEJBT0wsS0FBSzswQkFRTCxLQUFLOzZCQU9MLEtBQUs7MkJBU0wsS0FBSzs0QkFNTCxLQUFLOzhCQVVMLEtBQUs7OEJBU0wsS0FBSzs7SUF3TVIseUJBQUM7Q0FBQSxBQTdSRCxJQTZSQztTQXRSWSxrQkFBa0I7OztJQUU3QiwyQ0FBaUU7O0lBRWpFLG1DQUFxQjs7SUFDckIsa0NBQW9COztJQUNwQixpQ0FBbUI7O0lBQ25CLHFDQUF5Qjs7SUFFekIsNENBQTJCOztJQUMzQixtQ0FBeUI7O0lBQ3pCLG1DQUF5Qjs7SUFDekIscUNBQTJCOztJQUUzQix1Q0FBMkI7O0lBQzNCLDZDQUFpQzs7SUFDakMsOENBQWtDOztJQUNsQyw4Q0FBa0M7O0lBQ2xDLDBDQUE4Qjs7SUFDOUIsMENBQThCOztJQW1FOUIsc0NBQXFCOztJQUNyQix1Q0FBdUI7O0lBQ3ZCLHFDQUFzQjs7SUFJdEIsMkNBQWdDOztJQUNwQixnQ0FBc0I7O0lBQUUsd0NBQTZCOztJQUFFLGtDQUF1Qjs7SUFBRSxvQ0FBcUI7O0lBQUUsMkNBQW1DOztJQUFFLG9DQUF3Qjs7QUE0TGxMO0lBc0JFLCtCQUNTLFNBQThDLEVBQ3JCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXFDO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDOzs7O0lBR0oseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsaWNBZVQ7aUJBRUY7Ozs7Z0JBN1R5QixZQUFZO2dEQWtVakMsTUFBTSxTQUFDLGVBQWU7O0lBUTNCLDRCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FaWSxxQkFBcUI7OztJQUc5QiwwQ0FBcUQ7O0lBQ3JELHFDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIFVybDogYW55O1xufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udGFjdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3R1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIENvbnRhY3R1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgdmFsdWU6IGFueT0nJztcbiAgcHVibGljIGxpbms6IGFueT0nJztcbiAgcHVibGljIFVybDogYW55PScnO1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG5cbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnk7ICAgICAgICAvLyBUaGlzIHZhcmlhYmxlIGlzIHVzZSBmb3Igc2hvdyB0aGUgRm9ybSB0aXRsZSAgIFxuICBwdWJsaWMgZW1haWw6IGFueVtdID0gW107XG4gIHB1YmxpYyBwaG9uZTogYW55W10gPSBbXTtcbiAgcHVibGljIGFkZHJlc3M6IGFueVtdID0gW107XG5cbiAgcHVibGljIHNlcnZlclVSTDogYW55ID0gJyc7ICAgICAgLy8gdXJsIHZhcmlhYmxlIHRvIGZldGNoIHRoZSBhZGQgYXZhaWxhYmlsaXR5IGZvcm0gcGFnZVxuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2V0Snd0VG9rZW5WYWx1ZTogYW55ID0gJyc7ICBcbiAgcHVibGljIGxpc3RpbmdWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBsb2dvSW1nVmFsdWU6IGFueSA9ICcnO1xuXG5cbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbW9kYWwgbG9nb1xuXG4gIHNldCBtb2RhbGVMb2dvKG1vZGFsZUxvZ29WYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxpbmsgPSBtb2RhbGVMb2dvVmFsO1xuICB9XG4gIFxuXG4gIEBJbnB1dCgpXG4gIFxuICBwdWJsaWMgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWwgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIFxuICBwdWJsaWMgc2V0IGxvZ29pbWcobG9nb1ZhbCA6IHN0cmluZykge1xuICAgIHRoaXMubG9nb0ltZ1ZhbHVlID0gbG9nb1ZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ29JbWdWYWx1ZSlcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhZGRsaXN0aW5nKGxpc3RpbmdWYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxpc3RpbmdWYWx1ZSA9IChsaXN0aW5nVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5saXN0aW5nVmFsdWUgPSBsaXN0aW5nVmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmxpc3RpbmdWYWx1ZScpXG4gICAgY29uc29sZS5sb2codGhpcy5saXN0aW5nVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIFxuICBzZXQgSnd0VG9rZW4oSnd0VG9rZW5WYWwgOiBhbnkpIHtcbiAgICB0aGlzLnNldEp3dFRva2VuVmFsdWUgPSBKd3RUb2tlblZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVSTCA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IHNlcnZlclVybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgdXJsIGFkZEVuZHBvaW50IGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5hZGRFbmRwb2ludERhdGEnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxuICAvKlVzaW5nIGZvciBnb29nbGUgbWFwIHN0YXJ0IC0tLS0qL1xuICBsYXRpdHVkZSA9IC0yOC42ODM1MjtcbiAgbG9uZ2l0dWRlID0gLTE0Ny4yMDc4NTtcbiAgbWFwVHlwZSA9ICdzYXRlbGxpdGUnO1xuICAvKlVzaW5nIGZvciBnb29nbGUgbWFwIGVuZCAtLS0tKi9cblxuXG4gIHB1YmxpYyBjb250YWN0VXNGb3JtOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgdGhpcy5jb250YWN0VXNGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWVzc2FnZTogWycnXSxcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIG11bHRpcGxlZW1haWxzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgZW1haWxzOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSB9KV0pLFxuICAgICAgcGhvbmVzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSldKSxcbiAgICAgIGFkZHJlc3NlczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IGFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSldKVxuXG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7XG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcblxuICB9XG4gIC8qIE11bHRpcGxlIGVtYWlscyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuICBnZXQgbXVsdGlwbGVlbWFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ211bHRpcGxlZW1haWxzJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgLyogQWRkIGVtYWlsIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgYWRkRW1haWwoKSB7XG4gICAgY29uc29sZS5sb2coJ29raycpO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMubXVsdGlwbGVlbWFpbHMucHVzaCh0aGlzLmZiLmdyb3VwKHsgZW1haWxzOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSB9KSk7XG4gIH1cbiAgLyogQWRkIGVtYWlsIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIGVtYWlsIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlRW1haWwoaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5tdWx0aXBsZWVtYWlscy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIGVtYWlsIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIGVtYWlscyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG4gIC8qIE11bHRpcGxlIGFkZHJlc3NlcyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuXG4gIGdldCBhZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ2FkZHJlc3NlcycpIGFzIEZvcm1BcnJheTtcbiAgfVxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgYWRkQWRkcmVzcygpIHtcbiAgICBjb25zb2xlLmxvZygnb2trJyk7XG4gICAgdGhpcy5hZGRyZXNzZXMucHVzaCh0aGlzLmZiLmdyb3VwKHsgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSk7XG4gIH1cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVBZGRyZXNzKGluZGV4KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMuYWRkcmVzc2VzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgYWRkcmVzc2VzIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIGFkZHJlc3NlcyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG4gIC8qIE11bHRpcGxlIHBob25lcyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuICBnZXQgcGhvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdwaG9uZXMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cblxuICBhZGRQaG9uZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2trJyk7XG4gICAgdGhpcy5waG9uZXMucHVzaCh0aGlzLmZiLmdyb3VwKHsgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpO1xuICB9XG5cbiAgLyogQWRkIHBob25lcyBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBwaG9uZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVQaG9uZShpbmRleCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLnBob25lcy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIHBob25lcyBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBwaG9uZXMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuXG5cbiAgLy8gY29udGFjdFVzRm9ybSBzdWJtaXQgZnVuY3Rpb24gc3RhcnQgaGVyZVxuICBjb250YWN0VXNGb3JtU3VibWl0KCkge1xuXG5cbiAgICBsZXQgeDogYW55O1xuICAgIGZvciAoeCBpbiB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGFjdFVzRm9ybS52YWxpZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29rJyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZSk7XG5cblxuICAgICAgLy8gQWxsIGVtYWlscyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm11bHRpcGxlZW1haWxzKSB7XG4gICAgICAgIHRoaXMuZW1haWwucHVzaChrZXkuZW1haWxzKTtcblxuICAgICAgfVxuICAgICAgLy8gQWxsIGVtYWlscyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIC8vIEFsbCBQaG9uZXMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5waG9uZXMpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLnBob25lcykge1xuICAgICAgICB0aGlzLnBob25lLnB1c2goa2V5LnBob25lKTtcblxuICAgICAgfVxuIC8vIEFsbCBQaG9uZXMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICAvLyBBbGwgYWRkcmVzc2VzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUuYWRkcmVzc2VzKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcy5wdXNoKGtleS5hZGRyZXNzKTtcbiAgICAgIH1cbiAgICAgIC8vIEFsbCBhZGRyZXNzZXMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICBsZXQgYWxsRGF0YTogYW55ID17fTtcbiAgICAgIGFsbERhdGEubmFtZSA9IHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5uYW1lO1xuICAgICAgYWxsRGF0YS5hZGRyZXNzID0gdGhpcy5hZGRyZXNzO1xuICAgICAgYWxsRGF0YS5waG9uZSA9IHRoaXMucGhvbmU7XG4gICAgICBhbGxEYXRhLmVtYWlsID0gdGhpcy5lbWFpbDtcbiAgICAgIGFsbERhdGEubWVzc2FnZSA9IHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5tZXNzYWdlOyBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFsbERhdGEpO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludERhdGEuc291cmNlLFxuICAgICAgICBcImRhdGFcIjogYWxsRGF0YSxcbiAgICAgICAgXCJ0b2tlblwiOiB0aGlzLmFkZEVuZHBvaW50RGF0YS50b2tlblxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgIFxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKHN1Y2Nlc3NNb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICAgICAgICBkYXRhOiB7dmFsdWU6IHJlc3VsdC5zdGF0dXMsIFVybDogdGhpcy5saW5rfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuXG5cbiAgfVxuXG4gIC8vIGNvbnRhY3RVc0Zvcm0gc3VibWl0IGZ1bmN0aW9uIGVuZCBoZXJlXG5cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ29rLS0tLScpO1xuICAgIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG4gIGdvVG9MaXN0aW5nKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VjY2Vzc01vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgXG48c3BhbiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiICAqbmdJZj1cImRhdGEuVXJsICE9ICcnXCIgPlxuPGltZyBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyXCIgW3NyY109XCJkYXRhLlVybFwiPlxuPC9zcGFuPlxuXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbjxwICpuZ0lmPVwiZGF0YS52YWx1ZS5sZW5ndGggPD0gN1wiPlRoYW5rcyEgeW91ciBhY2NvdW50IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjcmVhdGVkPC9wPlxuPHAgKm5nSWY9XCJkYXRhLnZhbHVlLmxlbmd0aCA+PSA4XCI+e3tkYXRhLnZhbHVlfX08L3A+XG5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG48YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwiXCIgY2RrRm9jdXNJbml0aWFsPk9rPC9idXR0b24+XG48L2Rpdj5cblxuICBgLFxuXG59KVxuZXhwb3J0IGNsYXNzIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPHN1Y2Nlc3NNb2RhbENvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICB9XG5cbiAgICBcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn0iXX0=
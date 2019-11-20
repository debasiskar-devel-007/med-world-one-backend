/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';
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
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, http, router, dialog, apiService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
        this.value = '';
        this.link = '';
        this.Url = '';
        this.message = '';
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.loginRouteingUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.typevalue = '';
        this.buttonNameValue = '';
        this.signUpForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    Object.defineProperty(SignUpComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = (formTitleVal) || '<no name set>';
            this.formTitleValue = formTitleVal;
            // console.log(this.formTitleValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "buttonName", {
        set: /**
         * @param {?} buttonNameVal
         * @return {?}
         */
        function (buttonNameVal) {
            this.buttonNameValue = (buttonNameVal) || '<no name set>';
            this.buttonNameValue = buttonNameVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            // console.log(this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "logo", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoValue = logoVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "modaleLogo", {
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
    Object.defineProperty(SignUpComponent.prototype, "userType", {
        set: /**
         * @param {?} typeval
         * @return {?}
         */
        function (typeval) {
            this.typevalue = typeval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
            console.log(this.addEndpointValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "forgetRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.forgetRouteingUrlValue = routeingUrlval;
            // console.log(this.forgetRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "loginRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.loginRouteingUrlValue = routeingUrlval;
            // console.log(this.loginRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignUpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /********* Sign Up Form Submit start here*********/
    /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    SignUpComponent.prototype.signUpFormSubmit = /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        // use for validation checking
        for (var x in this.signUpForm.controls) {
            this.signUpForm.controls[x].markAsTouched();
        }
        if (this.signUpForm.valid) {
            // let link: any = this.fullUrlValue;
            /** @type {?} */
            var allData = this.signUpForm.value;
            allData.type = this.typevalue;
            console.log(allData);
            /** @type {?} */
            var data = {
                'data': allData,
                "source": this.addEndpointValue.source
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    /** @type {?} */
                    var dialogRef = _this.dialog.open(successModalComponent, {
                        width: '250px',
                        data: { value: result.status, Url: _this.link }
                    });
                    // this.router.navigateByUrl('/' + )     // navigate to dashboard url 
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    _this.message = result.msg;
                }
            }));
        }
    };
    /********* Sign Up Form Submit end here*********/
    // This is use for navigate this component to forget component 
    /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    SignUpComponent.prototype.forgetpassword = /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    function () {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue.path);
    };
    // This is use for navigate this component to forget component 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    SignUpComponent.prototype.login = 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue.path);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SignUpComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.signUpForm.controls[val].markAsUntouched();
    };
    /**
     * @param {?} link
     * @return {?}
     */
    SignUpComponent.prototype.customFunction = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.router.navigateByUrl('/' + link);
    };
    SignUpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sign-up',
                    template: "<div class=\"main-div\">\r\n\r\n    \r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpFormSubmit()\" novalidate>\r\n\r\n\r\n      <mat-error class=\"error\" *ngIf=\"message != ''\">{{message}}</mat-error>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" (blur)=\"inputUntouched('firstname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['firstname'].valid && signUpForm.controls['firstname'].errors.required && signUpForm.controls['firstname'].touched\">\r\n          First Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" (blur)=\"inputUntouched('lastname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['lastname'].valid && signUpForm.controls['lastname'].errors.required && signUpForm.controls['lastname'].touched\">\r\n          Last Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].errors.required && signUpForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error *ngIf=\"!signUpForm.controls['email'].valid && !signUpForm.controls['email'].errors.required\">Email is\r\n          not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].errors.required && signUpForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n   \r\n      <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\r\n      <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Sign Up</button>\r\n      \r\n      \r\n      \r\n      <span class=\"signupfooter\">\r\n        <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.customURl ==''\" (click)=\"login()\">{{loginRouteingUrlValue.buttonName}}</a>\r\n\r\n        <a *ngIf=\"loginRouteingUrlValue.customURl !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.path ==''\" [href]=\"loginRouteingUrlValue.customURl\">{{loginRouteingUrlValue.buttonName}}</a>\r\n  \r\n                  <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink !='' && loginRouteingUrlValue.path =='' \" (click)=\"customFunction(loginRouteingUrlValue.customLink)\">{{loginRouteingUrlValue.buttonName}}</a>\r\n  \r\n   <a *ngIf=\"loginRouteingUrlValue.buttonName =='' && loginRouteingUrlValue.customLink ==''\" (click)=\"login()\">Login</a>\r\n\r\n              <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\" (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n          <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \" (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n          <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\" [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n\r\n          <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\" (click)=\"forgetpassword()\">Forget Password</a> \r\n\r\n      </span>\r\n\r\n\r\n      <button mat-raised-button color=\"primary\">Sign Up</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"forgetpassword()\">Forget Password</a>\r\n        <a (click)=\"login()\">Login</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    SignUpComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: MatDialog },
        { type: ApiService }
    ]; };
    SignUpComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        formTitle: [{ type: Input }],
        buttonName: [{ type: Input }],
        serverUrl: [{ type: Input }],
        logo: [{ type: Input }],
        modaleLogo: [{ type: Input }],
        userType: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        forgetRouteingUrl: [{ type: Input }],
        loginRouteingUrl: [{ type: Input }]
    };
    return SignUpComponent;
}());
export { SignUpComponent };
if (false) {
    /** @type {?} */
    SignUpComponent.prototype.value;
    /** @type {?} */
    SignUpComponent.prototype.link;
    /** @type {?} */
    SignUpComponent.prototype.Url;
    /** @type {?} */
    SignUpComponent.prototype.message;
    /** @type {?} */
    SignUpComponent.prototype.formDirective;
    /** @type {?} */
    SignUpComponent.prototype.formTitleValue;
    /** @type {?} */
    SignUpComponent.prototype.serverUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.loginRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.addEndpointValue;
    /** @type {?} */
    SignUpComponent.prototype.logoValue;
    /** @type {?} */
    SignUpComponent.prototype.typevalue;
    /** @type {?} */
    SignUpComponent.prototype.buttonNameValue;
    /** @type {?} */
    SignUpComponent.prototype.signUpForm;
    /** @type {?} */
    SignUpComponent.prototype.fb;
    /** @type {?} */
    SignUpComponent.prototype.http;
    /** @type {?} */
    SignUpComponent.prototype.router;
    /** @type {?} */
    SignUpComponent.prototype.dialog;
    /** @type {?} */
    SignUpComponent.prototype.apiService;
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
                    template: "\r\n<span style=\"text-align: center\"  *ngIf=\"data.Url != ''\" >\r\n  <img style=\"max-width: 100%; text-align: center\" [src]=\"data.Url\">\r\n</span>\r\n\r\n<div mat-dialog-content>\r\n  <p *ngIf=\"data.value.length <= 7\">Thanks! your account has been successfully created</p>\r\n  <p *ngIf=\"data.value.length >= 8\">{{data.value}}</p>\r\n  \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJNUMsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLHlCQUFTOztBQUdYO0lBdUZFLHlCQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsTUFBaUIsRUFBUyxVQUFzQjtRQUF4SCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpGcEksVUFBSyxHQUFNLEVBQUUsQ0FBQztRQUNkLFNBQUksR0FBTSxFQUFFLENBQUM7UUFDYixRQUFHLEdBQU0sRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUtsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QiwyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsMEJBQXFC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QkE3THlCLFlBQVk7Z0RBa01qQyxNQUFNLFNBQUMsZUFBZTs7SUFTM0IsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLHFCQUFxQjs7O0lBRzlCLDBDQUFxRDs7SUFDckQscUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBVcmw6IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2lnbi11cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ24tdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ24tdXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyB2YWx1ZTogYW55PScnO1xyXG4gIHB1YmxpYyBsaW5rOiBhbnk9Jyc7XHJcbiAgcHVibGljIFVybDogYW55PScnO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcclxuXHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBmb3JnZXRSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbG9naW5Sb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIHR5cGV2YWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGJ1dHRvbk5hbWVWYWx1ZTogYW55ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBGb3JtIG5hbWVcclxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gKGZvcm1UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJ1dHRvbk5hbWUgKGJ1dHRvbk5hbWVWYWwgOmFueSl7XHJcbiAgICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IChidXR0b25OYW1lVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XHJcblxyXG4gIH1cclxuQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xyXG5cclxuc2V0IGxvZ28obG9nb1ZhbCA6IGFueSkge1xyXG4gIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcclxufVxyXG5cclxuQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xyXG5cclxuc2V0IG1vZGFsZUxvZ28obW9kYWxlTG9nb1ZhbCA6IGFueSkge1xyXG4gIHRoaXMubGluayA9IG1vZGFsZUxvZ29WYWw7XHJcbn1cclxuXHJcbkBJbnB1dCgpXHJcbnNldCB1c2VyVHlwZSh0eXBldmFsOiBhbnkpIHtcclxuICB0aGlzLnR5cGV2YWx1ZSA9IHR5cGV2YWw7XHJcbn1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IEFuZCBzb3VyY2VcclxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludFZhbHVlKVxyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IGZvcmdldFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgbG9naW4gVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBsb2dpblJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAgIHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc2lnblVwRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNpZ25VcEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxyXG4gICAgICBmaXJzdG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGxhc3RuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgc2lnblVwRm9ybVN1Ym1pdCgpIHtcclxuICAgIC8vIHVzZSBmb3IgdmFsaWRhdGlvbiBjaGVja2luZ1xyXG4gICAgZm9yIChsZXQgeCBpbiB0aGlzLnNpZ25VcEZvcm0uY29udHJvbHMpIHtcclxuICAgICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZ25VcEZvcm0udmFsaWQpIHtcclxuICAgICAgLy8gbGV0IGxpbms6IGFueSA9IHRoaXMuZnVsbFVybFZhbHVlO1xyXG4gICAgICBsZXQgYWxsRGF0YTogYW55ID0gdGhpcy5zaWduVXBGb3JtLnZhbHVlO1xyXG4gICAgICBhbGxEYXRhLnR5cGUgPSB0aGlzLnR5cGV2YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2coYWxsRGF0YSk7XHJcblxyXG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICdkYXRhJzogYWxsRGF0YSxcclxuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oc3VjY2Vzc01vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dmFsdWU6IHJlc3VsdC5zdGF0dXMsIFVybDogdGhpcy5saW5rfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArICkgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgXHJcblxyXG5cclxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxyXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBmb3JnZXRwYXNzd29yZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZS5wYXRoKTtcclxuICB9XHJcblxyXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNpZ25VcEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJysgbGluayk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWNjZXNzTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi4vc3VjY2Vzc01vZGFsLmh0bWwnLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPHN1Y2Nlc3NNb2RhbENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICB9XHJcblxyXG4gICAgXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19
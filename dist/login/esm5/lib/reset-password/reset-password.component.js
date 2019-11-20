/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, http, router, route, apiService) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.fromTitleNameValue = '';
        this.serverUrlValue = '';
        this.message = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.accesscode = params['token'];
            console.log(_this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "fromTitleName", {
        // public signUpRouteingUrlValue: any = '';
        set: 
        // public signUpRouteingUrlValue: any = '';
        /**
         * @param {?} fromTitleNameVal
         * @return {?}
         */
        function (fromTitleNameVal) {
            this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
            this.fromTitleNameValue = fromTitleNameVal;
            console.log(this.fromTitleNameValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            console.log(this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "logo", {
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
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    //  this function is use for mach password and confirm Password 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    ResetPasswordComponent.prototype.machpassword = 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    function (passwordkye, confirmpasswordkye) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            /** @type {?} */
            var passwordInput = group.controls[passwordkye];
            /** @type {?} */
            var confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        });
    };
    /********* Reset Password Form Submit start here*********/
    /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    ResetPasswordComponent.prototype.resetPasswordSubmit = /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.resetPasswordForm.value);
        /** @type {?} */
        var x;
        for (x in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[x].markAsTouched();
        }
        if (this.resetPasswordForm.valid) {
            /** @type {?} */
            var data1 = { "password": this.resetPasswordForm.value.password, "accesscode": this.accesscode };
            /** @type {?} */
            var data = {
                'data': data1,
                "source": this.addEndpointValue.source
            }
            // data.accesscode = this.accesscode;
            ;
            // data.accesscode = this.accesscode;
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
                    _this.formDirective.resetForm(); // Use for reset the form
                }
                else {
                    _this.message = result.msg;
                }
            }));
        }
    };
    /********* Reset Password Form Submit end here*********/
    /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    ResetPasswordComponent.prototype.inputUntouched = /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.resetPasswordForm.controls[val].markAsUntouched();
    };
    ResetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-reset-password',
                    template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\r\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\">Reset Password</button>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ActivatedRoute },
        { type: ApiService }
    ]; };
    ResetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        fromTitleName: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        logo: [{ type: Input }]
    };
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
if (false) {
    /** @type {?} */
    ResetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ResetPasswordComponent.prototype.resetPasswordForm;
    /** @type {?} */
    ResetPasswordComponent.prototype.fromTitleNameValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.message;
    /** @type {?} */
    ResetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.accesscode;
    /** @type {?} */
    ResetPasswordComponent.prototype.fb;
    /** @type {?} */
    ResetPasswordComponent.prototype.http;
    /** @type {?} */
    ResetPasswordComponent.prototype.router;
    /** @type {?} */
    ResetPasswordComponent.prototype.route;
    /** @type {?} */
    ResetPasswordComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7SUEyREUsZ0NBQW1CLEVBQWUsRUFBUyxJQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFxQixFQUFTLFVBQXNCO1FBQS9JLGlCQWVDO1FBZmtCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQS9DeEksdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUE0Q3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFFaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdB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UUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pELENBQUM7O2dCQWpKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsd2xFQUE4Qzs7aUJBRS9DOzs7O2dCQVRRLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixNQUFNO2dCQUFFLGNBQWM7Z0JBQ3RCLFVBQVU7OztnQ0FZaEIsU0FBUyxTQUFDLGtCQUFrQjtnQ0FXNUIsS0FBSzs0QkFTTCxLQUFLOzhCQVFMLEtBQUs7dUJBTUwsS0FBSzs7SUEwR1IsNkJBQUM7Q0FBQSxBQXRKRCxJQXNKQztTQTlJWSxzQkFBc0I7OztJQUVqQywrQ0FBaUU7O0lBQ2pFLG1EQUFvQzs7SUFDcEMsb0RBQW9DOztJQUNwQyxnREFBZ0M7O0lBQ2hDLHlDQUF5Qjs7SUFDekIsa0RBQWtDOztJQUVsQywyQ0FBMkI7O0lBd0MzQiw0Q0FBMEI7O0lBRWQsb0NBQXNCOztJQUFFLHNDQUF1Qjs7SUFBRSx3Q0FBcUI7O0lBQUUsdUNBQTRCOztJQUFFLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXJlc2V0LXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuICBwdWJsaWMgcmVzZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgZnJvbVRpdGxlTmFtZVZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XHJcblxyXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xyXG4gIC8vIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBGb3JtIG5hbWVcclxuICBzZXQgZnJvbVRpdGxlTmFtZShmcm9tVGl0bGVOYW1lVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gKGZyb21UaXRsZU5hbWVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gZnJvbVRpdGxlTmFtZVZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybFZhbHVlKTtcclxuXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBhbmQgc291cmNlXHJcblxyXG4gIHB1YmxpYyBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnRWYWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXHJcblxyXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XHJcbiAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xyXG59XHJcblxyXG5cclxuICAvLyBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcclxuICAvLyBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xyXG4gIC8vICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgLy8gfVxyXG4gIHB1YmxpYyBhY2Nlc3Njb2RlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblxyXG4gICAgICB0aGlzLmFjY2Vzc2NvZGUgPSBwYXJhbXNbJ3Rva2VuJ107XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZXNzY29kZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucmVzZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICB9LCB7XHJcbiAgICAgIHZhbGlkYXRvcjogdGhpcy5tYWNocGFzc3dvcmQoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vIGNsZWFyIHRoZSBlbmRwb2ludCBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgfSwgNTApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xyXG5cclxuICB9XHJcbiAgLy8gIHRoaXMgZnVuY3Rpb24gaXMgdXNlIGZvciBtYWNoIHBhc3N3b3JkIGFuZCBjb25maXJtIFBhc3N3b3JkIFxyXG5cclxuICBtYWNocGFzc3dvcmQocGFzc3dvcmRreWU6IHN0cmluZywgY29uZmlybXBhc3N3b3Jka3llOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoZ3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xyXG4gICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3Jka3llXSxcclxuICAgICAgICBjb25maXJtcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1wYXNzd29yZGt5ZV07XHJcbiAgICAgIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSBjb25maXJtcGFzc3dvcmRJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMoeyBub3RFcXVpdmFsZW50OiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovIFxyXG4gIHJlc2V0UGFzc3dvcmRTdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlKTtcclxuICAgIGxldCB4OiBhbnk7XHJcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xyXG4gICAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGxldCBkYXRhMTogYW55ID0geyBcInBhc3N3b3JkXCI6IHRoaXMucmVzZXRQYXNzd29yZEZvcm0udmFsdWUucGFzc3dvcmQsIFwiYWNjZXNzY29kZVwiOiB0aGlzLmFjY2Vzc2NvZGUgfVxyXG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICdkYXRhJzogZGF0YTEsXHJcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gZGF0YS5hY2Nlc3Njb2RlID0gdGhpcy5hY2Nlc3Njb2RlO1xyXG5cclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTsgICAgICAgLy8gVXNlIGZvciByZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbi8qKioqKioqKiogUmVzZXQgUGFzc3dvcmQgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxyXG5cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMucmVzZXRQYXNzd29yZEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
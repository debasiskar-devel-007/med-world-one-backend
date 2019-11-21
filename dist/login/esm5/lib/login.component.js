/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, apiService, cookieService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.message = '';
        this.fromTitleValue = '';
        this.serverURL = '';
        this.signUpRouteingUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.routerStatusValue = '';
        this.logoValue = '';
        this.cookieSetValue = '';
        this.buttonNameValue = '';
        this.project_name = '';
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "fromTitle", {
        set: /**
         * @param {?} fromTitleVal
         * @return {?}
         */
        function (fromTitleVal) {
            this.fromTitleValue = (fromTitleVal) || '<no name set>';
            this.fromTitleValue = fromTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "logo", {
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
    Object.defineProperty(LoginComponent.prototype, "buttonName", {
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
    Object.defineProperty(LoginComponent.prototype, "fullUrl", {
        set: /**
         * @param {?} fullUrlVal
         * @return {?}
         */
        function (fullUrlVal) {
            this.serverURL = (fullUrlVal) || '<no name set>';
            this.serverURL = fullUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "endpoint", {
        set: /**
         * @param {?} endpointVal
         * @return {?}
         */
        function (endpointVal) {
            this.endpointValue = endpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "cookieSet", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.cookieSetValue = v;
            // console.log(this.cookieSetValue.cookie);
            // for (const key in this.cookieSetValue.cookie) {
            //   console.log(this.cookieSetValue.cookie[key]);
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "signUpRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.signUpRouteingUrlValue = routeingUrlval;
            console.log(this.signUpRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "forgetRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.forgetRouteingUrlValue = routeingUrlval;
            console.log(this.forgetRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "routerStatus", {
        set: /**
         * @param {?} routerStatusval
         * @return {?}
         */
        function (routerStatusval) {
            this.routerStatusValue = (routerStatusval) || '<no name set>';
            this.routerStatusValue = routerStatusval;
            // console.log(this.routerStatusValue);
            // console.log(this.routerStatusValue.data.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.endpointValue); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    /********* Login Form Submit start here*********/
    /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    LoginComponent.prototype.loginFormSubmit = /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var x;
        /****************** test*******************/
        // for (const key in this.cookieSetValue.cookie) {
        //   console.log(this.cookieSetValue.cookie[key].type);
        //   if (result.token == this.cookieSetValue.cookie[key].type) {
        //     console.log('+++++++++++++++');
        //   }
        // }
        // use for validation checking
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            var data = this.loginForm.value;
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // console.log(response);
                /** @type {?} */
                var result = {};
                result = response;
                //   let cookiekeyarr:any = [];
                //   let cookievaluearr:any = [];
                //   for(let j in result.item){
                //     // console.log(Object.values(result.item[j]));
                //     // cookiekeyarr = Object.keys(result.item[j]);
                //     // cookievaluearr = Object.values(result.item[j]);
                //     cookievaluearr.push(Object.keys(result.item[j]), Object.values(result.item[j]));
                //   }
                //   // console.log('cookiekeyarr'+cookiekeyarr);
                //   console.log(cookievaluearr);
                // //   setTimeout(()=>{
                //   // for (let key in cookiekeyarr){
                //     for(let value in cookievaluearr[0]){
                //       console.log('hi'+value);
                //       // this.cookieService.set(cookiekeyarr[key],cookievaluearr[value]);
                //     }
                //   // }
                // // },2000);
                //   // setTimeout(()=>{
                //   //   console.log(this.cookieService.getAll());
                //   // },4000);
                if (result.status == "success") {
                    // for (const key in this.cookieSetValue.cookie) {
                    //   console.log(this.cookieSetValue.cookie[key].type);
                    //   if (result == this.cookieSetValue.cookie[key].type) {
                    //     console.log('+++++++++++++++');
                    //   }
                    // }
                    _this.cookieService.set('user_details', JSON.stringify(result.item[0]));
                    _this.cookieService.set('jwtToken', result.token);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        // console.log(this.cookieService.getAll());
                    }), 1000);
                    // console.log('result')
                    // console.log(result.item[0].type)
                    for (var key in _this.routerStatusValue.data) {
                        // console.log(this.routerStatusValue.data[key].type);
                        if (result.item[0].type === _this.routerStatusValue.data[key].type) {
                            _this.router.navigateByUrl('/' + _this.routerStatusValue.data[key].routerNav); // navigate to dashboard url 
                        }
                    }
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                    _this.message = '';
                }
                else {
                    // display error message on html
                    _this.message = result.msg;
                }
            }));
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LoginComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.loginForm.controls[val].markAsUntouched();
    };
    // This is use for navigate this component to forget component 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.forgetpassword = 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue.path);
    };
    // This is use for navigate this component to sign-Up component 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.signup = 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue.path);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    LoginComponent.prototype.customFunction = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.router.navigateByUrl('/' + link);
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "<div class=\"main-div\">\r\n\r\n    <mat-card class=\"from\">\r\n            <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n                    <img  [src]=\"logoValue\">\r\n                </span>\r\n\r\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\r\n\r\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n            <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n                <mat-error\r\n                    *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].errors.required && loginForm.controls['email'].touched\">\r\n                    Email field can not be blank</mat-error>\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n                <mat-error\r\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\r\n                    Password field can not be blank</mat-error>\r\n            </mat-form-field>\r\n\r\n\r\n   \r\n            <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\r\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Login</button>\r\n            \r\n            \r\n            \r\n            <span class=\"signupfooter\">\r\n  <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl =='' \" (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \" (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n<a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink ==''  && signUpRouteingUrlValue.path ==''\" [attr.href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\" (click)=\"signup()\">Sign Up</a>\r\n\r\n                    <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\" (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \" (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\" [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\r\n\r\n\r\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\" (click)=\"forgetpassword()\">Forget Password</a> \r\n\r\n            </span>\r\n        </form>\r\n\r\n    </mat-card>\r\n\r\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService },
        { type: CookieService }
    ]; };
    LoginComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        fromTitle: [{ type: Input }],
        logo: [{ type: Input }],
        buttonName: [{ type: Input }],
        fullUrl: [{ type: Input }],
        endpoint: [{ type: Input }],
        cookieSet: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }],
        forgetRouteingUrl: [{ type: Input }],
        routerStatus: [{ type: Input }]
    };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.message;
    /** @type {?} */
    LoginComponent.prototype.formDirective;
    /** @type {?} */
    LoginComponent.prototype.fromTitleValue;
    /** @type {?} */
    LoginComponent.prototype.serverURL;
    /** @type {?} */
    LoginComponent.prototype.signUpRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.routerStatusValue;
    /** @type {?} */
    LoginComponent.prototype.endpointValue;
    /** @type {?} */
    LoginComponent.prototype.logoValue;
    /** @type {?} */
    LoginComponent.prototype.cookieSetValue;
    /** @type {?} */
    LoginComponent.prototype.buttonNameValue;
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.project_name;
    /** @type {?} */
    LoginComponent.prototype.fb;
    /** @type {?} */
    LoginComponent.prototype.http;
    /** @type {?} */
    LoginComponent.prototype.router;
    /** @type {?} */
    LoginComponent.prototype.apiService;
    /** @type {?} */
    LoginComponent.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBYSxVQUFVLEVBQXNCLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtuRDtJQTRGRSx3QkFBbUIsRUFBZSxFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLFVBQXNCLEVBQVMsYUFBNEI7UUFBbkksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBdEYvSSxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBSWxCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsMkJBQXNCLEdBQVEsRUFBRSxDQUFDO1FBQ2pDLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQXdFMUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFHNUIs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Qix1Q0FBaUU7O0lBRWpFLHdDQUFnQzs7SUFDaEMsbUNBQTJCOztJQUMzQixnREFBd0M7O0lBQ3hDLGdEQUF3Qzs7SUFDeEMsMkNBQW1DOztJQUNuQyx1Q0FBMEI7O0lBQzFCLG1DQUEyQjs7SUFDM0Isd0NBQWdDOztJQUNoQyx5Q0FBaUM7O0lBdUVqQyxtQ0FBNEI7O0lBQzVCLHNDQUE4Qjs7SUFFbEIsNEJBQXNCOztJQUFFLDhCQUF1Qjs7SUFBRSxnQ0FBcUI7O0lBQUUsb0NBQTZCOztJQUFFLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgTWluTGVuZ3RoVmFsaWRhdG9yLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgcHVibGljIGZyb21UaXRsZVZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGZvcmdldFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyByb3V0ZXJTdGF0dXNWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGVuZHBvaW50VmFsdWU6IGFueTtcclxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgY29va2llU2V0VmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBidXR0b25OYW1lVmFsdWU6IGFueSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXHJcbiAgc2V0IGZyb21UaXRsZShmcm9tVGl0bGVWYWw6IGFueSkge1xyXG4gICAgdGhpcy5mcm9tVGl0bGVWYWx1ZSA9IChmcm9tVGl0bGVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XHJcblxyXG4gIH1cclxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXHJcblxyXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XHJcbiAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xyXG59XHJcbkBJbnB1dCgpXHJcbnNldCBidXR0b25OYW1lIChidXR0b25OYW1lVmFsIDphbnkpe1xyXG4gIHRoaXMuYnV0dG9uTmFtZVZhbHVlID0gKGJ1dHRvbk5hbWVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcclxufVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgZnVsbFVybChmdWxsVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmVyVVJMID0gKGZ1bGxVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcclxuXHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcblxyXG4gIHNldCBlbmRwb2ludChlbmRwb2ludFZhbDogYW55KSB7XHJcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcclxuICB9XHJcblxyXG5ASW5wdXQoKVxyXG5cclxucHVibGljIHNldCBjb29raWVTZXQodiA6IGFueSkge1xyXG4gIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xyXG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuY29va2llU2V0VmFsdWUuY29va2llKTtcclxuICAvLyBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvb2tpZVNldFZhbHVlLmNvb2tpZSkge1xyXG4gICAgICAgICAgICBcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29va2llU2V0VmFsdWUuY29va2llW2tleV0pO1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSlcclxuICB9XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgcm91dGVyU3RhdHVzKHJvdXRlclN0YXR1c3ZhbDogYW55KSB7XHJcbiAgICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlID0gKHJvdXRlclN0YXR1c3ZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IHJvdXRlclN0YXR1c3ZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHByb2plY3RfbmFtZTogYW55ID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcclxuICAgIH0sIDUwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcclxuXHJcblxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmVuZHBvaW50VmFsdWUpOyAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50XHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XHJcblxyXG4gIH1cclxuXHJcbi8qKioqKioqKiogTG9naW4gRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgbG9naW5Gb3JtU3VibWl0KCkge1xyXG4gICAgbGV0IHg6IGFueTtcclxuLyoqKioqKioqKioqKioqKioqKiB0ZXN0KioqKioqKioqKioqKioqKioqKi8gXHJcbi8vIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29va2llU2V0VmFsdWUuY29va2llKSB7XHJcbi8vICAgY29uc29sZS5sb2codGhpcy5jb29raWVTZXRWYWx1ZS5jb29raWVba2V5XS50eXBlKTtcclxuLy8gICBpZiAocmVzdWx0LnRva2VuID09IHRoaXMuY29va2llU2V0VmFsdWUuY29va2llW2tleV0udHlwZSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJysrKysrKysrKysrKysrKycpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcclxuXHJcbiAgICBmb3IgKHggaW4gdGhpcy5sb2dpbkZvcm0uY29udHJvbHMpIHtcclxuICAgICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xyXG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGRMb2dpbihkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyAgIGxldCBjb29raWVrZXlhcnI6YW55ID0gW107XHJcbiAgICAgIC8vICAgbGV0IGNvb2tpZXZhbHVlYXJyOmFueSA9IFtdO1xyXG4gICAgICAvLyAgIGZvcihsZXQgaiBpbiByZXN1bHQuaXRlbSl7XHJcbiAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKHJlc3VsdC5pdGVtW2pdKSk7XHJcbiAgICAgIC8vICAgICAvLyBjb29raWVrZXlhcnIgPSBPYmplY3Qua2V5cyhyZXN1bHQuaXRlbVtqXSk7XHJcbiAgICAgIC8vICAgICAvLyBjb29raWV2YWx1ZWFyciA9IE9iamVjdC52YWx1ZXMocmVzdWx0Lml0ZW1bal0pO1xyXG4gICAgICAvLyAgICAgY29va2lldmFsdWVhcnIucHVzaChPYmplY3Qua2V5cyhyZXN1bHQuaXRlbVtqXSksIE9iamVjdC52YWx1ZXMocmVzdWx0Lml0ZW1bal0pKTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ2Nvb2tpZWtleWFycicrY29va2lla2V5YXJyKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb29raWV2YWx1ZWFycik7XHJcbiAgICAgIC8vIC8vICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAvLyAgIC8vIGZvciAobGV0IGtleSBpbiBjb29raWVrZXlhcnIpe1xyXG4gICAgICAvLyAgICAgZm9yKGxldCB2YWx1ZSBpbiBjb29raWV2YWx1ZWFyclswXSl7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdoaScrdmFsdWUpO1xyXG4gICAgICAvLyAgICAgICAvLyB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KGNvb2tpZWtleWFycltrZXldLGNvb2tpZXZhbHVlYXJyW3ZhbHVlXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgLy8gfVxyXG4gICAgICAvLyAvLyB9LDIwMDApO1xyXG4gICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgLy8gICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKSk7XHJcbiAgICAgIC8vICAgLy8gfSw0MDAwKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIC8vIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29va2llU2V0VmFsdWUuY29va2llKSB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29va2llU2V0VmFsdWUuY29va2llW2tleV0udHlwZSk7XHJcbiAgICAgICAgICAvLyAgIGlmIChyZXN1bHQgPT0gdGhpcy5jb29raWVTZXRWYWx1ZS5jb29raWVba2V5XS50eXBlKSB7XHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJysrKysrKysrKysrKysrKycpO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCd1c2VyX2RldGFpbHMnLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuaXRlbVswXSkpO1xyXG4gICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnand0VG9rZW4nLCByZXN1bHQudG9rZW4pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCkpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3VsdCcpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuaXRlbVswXS50eXBlKVxyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pdGVtWzBdLnR5cGUgPT09IHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnR5cGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnJvdXRlck5hdikgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBmb3JnZXRwYXNzd29yZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxyXG4gIHNpZ251cCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJysgbGluayk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
export class ForgetPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} router
     * @param {?} apiService
     * @param {?} snackBar
     */
    constructor(fb, router, apiService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.message = '';
        this.buttonNameValue = '';
        this.formTitleValue = ''; // This is From title
        // This is From title
        this.serverUrlValue = ''; //  This is Server url
        //  This is Server url
        this.signUpRouteingUrlValue = ''; // setting the navigate By Sign Up Url from project
        // setting the navigate By Sign Up Url from project
        this.loginRouteingUrlValue = ''; // setting the navigate By login Url from project
        // setting the navigate By login Url from project
        this.domanUrlValue = ''; // This is reset password url
        // This is reset password url
        this.addEndpointValue = ''; // This is endpoint url
        // This is endpoint url
        this.logoValue = ''; // This is from logo url
        // This is from logo url
        this.durationInSeconds = 5; // This is SnackBar set time
        // This is SnackBar set time
        this.static_msg = 'Please enter your valid email address and you will be sent a link to reset your password. You must use the same email id you have registered with us. If you no longer have the same email address then you must contact us directly with proof of your identity.';
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
    /**
     * @param {?} buttonNameVal
     * @return {?}
     */
    set buttonName(buttonNameVal) {
        this.buttonNameValue = (buttonNameVal) || '<no name set>';
        this.buttonNameValue = buttonNameVal;
    }
    /**
     * @param {?} domanUrlVal
     * @return {?}
     */
    set domanUrl(domanUrlVal) {
        this.domanUrlValue = (domanUrlVal) || '<no name set>';
        this.domanUrlValue = domanUrlVal;
        // console.log(this.domanUrlValue);
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = (formTitleVal) || '<no name set>';
        this.formTitleValue = formTitleVal;
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} addEndpointval
     * @return {?}
     */
    set addEndpoint(addEndpointval) {
        this.addEndpointValue = addEndpointval;
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set signUpRouteingUrl(routeingUrlval) {
        this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.signUpRouteingUrlValue = routeingUrlval;
        // console.log(this.signUpRouteingUrlValue)
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set loginRouteingUrl(routeingUrlval) {
        this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.loginRouteingUrlValue = routeingUrlval;
        // console.log(this.loginRouteingUrlValue)
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    }
    /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    forgetPasswordSubmit() {
        /** @type {?} */
        let x;
        //  This for-loop use for from blank or properly validated checking  
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) { //    validation checking
            this.openSnackBar(); // open snack-bar function
            // open snack-bar function
            /** @type {?} */
            let link = this.serverUrlValue;
            /** @type {?} */
            let data = this.forgetPasswordForm.value;
            data.domanUrl = this.domanUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                // console.log(response);
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
                    this.openSnackBar(); // open snack-bar function
                    // this is use for reset the from
                    this.formDirective.resetForm();
                    this.message = ''; // clear the from
                }
                else {
                    // display error message on html
                    this.message = result.msg; // show the error message
                }
            }));
        }
    }
    /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(snackBarComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    /**
     * ****** openSnackBar function open end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    signup() {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    }
    // This is use for navigate this component to login component 
    /**
     * @return {?}
     */
    login() {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    customFunction(link) {
        this.router.navigateByUrl('/' + link);
    }
}
ForgetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-forget-password',
                template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\" class=\"formTitleHeader\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\r\n      <p class=\"description\">{{static_msg}}</p>\r\n      <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\r\n          Email is not valid</mat-error>\r\n      </mat-form-field>\r\n<button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\r\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Login</button>\r\n      <span class=\"signupfooter\">\r\n      <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.customURl ==''\" (click)=\"login()\">{{loginRouteingUrlValue.buttonName}}</a>\r\n\r\n      <a *ngIf=\"loginRouteingUrlValue.customURl !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.path ==''\" [href]=\"loginRouteingUrlValue.customURl\">{{loginRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink !='' && loginRouteingUrlValue.path =='' \" (click)=\"customFunction(loginRouteingUrlValue.customLink)\">{{loginRouteingUrlValue.buttonName}}</a>\r\n\r\n <a *ngIf=\"loginRouteingUrlValue.buttonName =='' && loginRouteingUrlValue.customLink ==''\" (click)=\"login()\">Login</a>\r\n\r\n  <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl ==''\" (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \" (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.path ==''\" [href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\r\n\r\n\r\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\" (click)=\"signup()\">Sign Up</a>\r\n\r\n\r\n\r\n\r\n                \r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ForgetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Router },
    { type: ApiService },
    { type: MatSnackBar }
];
ForgetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    buttonName: [{ type: Input }],
    domanUrl: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    logo: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    signUpRouteingUrl: [{ type: Input }],
    loginRouteingUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ForgetPasswordComponent.prototype.message;
    /** @type {?} */
    ForgetPasswordComponent.prototype.buttonNameValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ForgetPasswordComponent.prototype.forgetPasswordForm;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formTitleValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.signUpRouteingUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.loginRouteingUrlValue;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.domanUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.durationInSeconds;
    /** @type {?} */
    ForgetPasswordComponent.prototype.static_msg;
    /** @type {?} */
    ForgetPasswordComponent.prototype.fb;
    /** @type {?} */
    ForgetPasswordComponent.prototype.router;
    /** @type {?} */
    ForgetPasswordComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.snackBar;
}
export class snackBarComponent {
}
snackBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-modale',
                template: "<span class=\"example\">\r\n    We have e-mailed your password reset link!\r\n  </span>",
                styles: [`
    .example {
      color: aliceblue;
      background-color: yellowgreen;
    }
  `]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQXVFbEMsWUFDUyxFQUFlLEVBQ2YsTUFBYyxFQUNkLFVBQXNCLEVBQ3JCLFFBQXFCO1FBSHRCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBMUV4QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBTTFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDLENBQVUscUJBQXFCOztRQUN4RCxtQkFBYyxHQUFRLEVBQUUsQ0FBQyxDQUFVLHNCQUFzQjs7UUFDekQsMkJBQXNCLEdBQVEsRUFBRSxDQUFDLENBQUUsbURBQW1EOztRQUN0RiwwQkFBcUIsR0FBUSxFQUFFLENBQUMsQ0FBRSxpREFBaUQ7O1FBQ2xGLGtCQUFhLEdBQVEsRUFBRSxDQUFDLENBQVUsNkJBQTZCOztRQUNoRSxxQkFBZ0IsR0FBUSxFQUFFLENBQUMsQ0FBUSx1QkFBdUI7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Qjs7O1lBVjdCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtR0FBeUM7eUJBQ2hDOzs7OztHQUtSO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWZvcmdldC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYnV0dG9uTmFtZVZhbHVlOiBhbnkgPSAnJztcclxuXHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgcHVibGljIGZvcmdldFBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7ICAgICAgICAgIC8vIFRoaXMgaXMgRnJvbSB0aXRsZVxyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7ICAgICAgICAgIC8vICBUaGlzIGlzIFNlcnZlciB1cmxcclxuICBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7ICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcclxuICBwdWJsaWMgbG9naW5Sb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJzsgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IGxvZ2luIFVybCBmcm9tIHByb2plY3RcclxuICBwcml2YXRlIGRvbWFuVXJsVmFsdWU6IGFueSA9ICcnOyAgICAgICAgICAvLyBUaGlzIGlzIHJlc2V0IHBhc3N3b3JkIHVybFxyXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJzsgICAgICAgIC8vIFRoaXMgaXMgZW5kcG9pbnQgdXJsXHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7ICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBmcm9tIGxvZ28gdXJsXHJcbiAgcHVibGljIGR1cmF0aW9uSW5TZWNvbmRzID0gNTsgICAgICAgICAgICAgLy8gVGhpcyBpcyBTbmFja0JhciBzZXQgdGltZVxyXG4gIHB1YmxpYyBzdGF0aWNfbXNnOmFueT0nUGxlYXNlIGVudGVyIHlvdXIgdmFsaWQgZW1haWwgYWRkcmVzcyBhbmQgeW91IHdpbGwgYmUgc2VudCBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4gWW91IG11c3QgdXNlIHRoZSBzYW1lIGVtYWlsIGlkIHlvdSBoYXZlIHJlZ2lzdGVyZWQgd2l0aCB1cy4gSWYgeW91IG5vIGxvbmdlciBoYXZlIHRoZSBzYW1lIGVtYWlsIGFkZHJlc3MgdGhlbiB5b3UgbXVzdCBjb250YWN0IHVzIGRpcmVjdGx5IHdpdGggcHJvb2Ygb2YgeW91ciBpZGVudGl0eS4nO1xyXG5cclxuICBASW5wdXQoKVxyXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcclxuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IChidXR0b25OYW1lVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSBidXR0b25OYW1lVmFsXHJcbn1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgZW1haWwgRG9tYW4gVVJMXHJcbiAgc2V0IGRvbWFuVXJsKGRvbWFuVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZG9tYW5VcmxWYWx1ZSA9IChkb21hblVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gZG9tYW5VcmxWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRvbWFuVXJsVmFsdWUpO1xyXG4gIH1cclxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXHJcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xyXG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IChmb3JtVGl0bGVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xyXG5cclxuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcclxuICAgIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgYW5kIHNvdXJjZVxyXG5cclxuICBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnR2YWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnR2YWw7XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgbG9naW5Sb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG4gICkge1xyXG5cclxuXHJcblxyXG4gICAgdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKiBGb3JnZXQgcGFzc3dvcmQgIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovXHJcbiAgZm9yZ2V0UGFzc3dvcmRTdWJtaXQoKSB7XHJcbiAgICBsZXQgeDogYW55O1xyXG5cclxuICAgIC8vICBUaGlzIGZvci1sb29wIHVzZSBmb3IgZnJvbSBibGFuayBvciBwcm9wZXJseSB2YWxpZGF0ZWQgY2hlY2tpbmcgIFxyXG4gICAgZm9yICh4IGluIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWxpZCkgeyAgICAvLyAgICB2YWxpZGF0aW9uIGNoZWNraW5nXHJcblxyXG4gICAgICB0aGlzLm9wZW5TbmFja0JhcigpOyAgICAgICAgICAgICAgLy8gb3BlbiBzbmFjay1iYXIgZnVuY3Rpb25cclxuXHJcbiAgICAgIGxldCBsaW5rOiBhbnkgPSB0aGlzLnNlcnZlclVybFZhbHVlO1xyXG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0udmFsdWU7XHJcblxyXG4gICAgICBkYXRhLmRvbWFuVXJsID0gdGhpcy5kb21hblVybFZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmZvcmdldFBhc3N3b3JkKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcigpOyAgICAgICAgICAgICAvLyBvcGVuIHNuYWNrLWJhciBmdW5jdGlvblxyXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJzsgICAgICAgICAvLyBjbGVhciB0aGUgZnJvbVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7ICAgICAgLy8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKiBGb3JnZXQgcGFzc3dvcmQgIEZvcm0gU3VibWl0IGVuZCBoZXJlKioqKioqKioqL1xyXG5cclxuXHJcbiAgLyoqKioqKioqKiBvcGVuU25hY2tCYXIgZnVuY3Rpb24gb3BlbiBzdGFydCBoZXJlKioqKioqKioqL1xyXG5cclxuXHJcbiAgb3BlblNuYWNrQmFyKCkge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChzbmFja0JhckNvbXBvbmVudCwge1xyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXHJcbiAgICB9KTtcclxuICB9XHJcbiAvKioqKioqKioqIG9wZW5TbmFja0JhciBmdW5jdGlvbiBvcGVuIGVuZCBoZXJlKioqKioqKioqL1xyXG5cclxuXHJcbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxyXG4gIHNpZ251cCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG4gICAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIGxvZ2luIGNvbXBvbmVudCBcclxuICAgIGxvZ2luKCkge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJysgbGluayk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1tb2RhbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ2V0LXBhc3N3b3JkTW9kYWxlLmh0bWwnLFxyXG4gIHN0eWxlczogW2BcclxuICAgIC5leGFtcGxlIHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbiAgICB9XHJcbiAgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBzbmFja0JhckNvbXBvbmVudCB7IH1cclxuIl19
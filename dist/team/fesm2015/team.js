import { Injectable, ɵɵdefineInjectable, Component, ɵɵinject, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpEventType, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ListingModule } from 'lib-listing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'file-upload';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TeamService {
    constructor() { }
}
TeamService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TeamService.ctorParameters = () => [];
/** @nocollapse */ TeamService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TeamService_Factory() { return new TeamService(); }, token: TeamService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TeamComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Team',
                template: "",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:auto;width:100%}.example-full-width{width:100%}td{padding-right:8px}.mat-card{background:#fff!important}.mat-dialog-content{border-radius:0;overflow:hidden!important;padding:0 24px!important;box-shadow:none!important}.mat-dialog-content .mat-dialog-title{background-color:#4f4f4f;border:0;padding:.35em;color:#fff}.mat-dialog-content .mat-card{transition:none!important;display:flex!important;position:relative;padding:5px;border-radius:0;align-items:center}.mat-dialog-content .mat-card .mat-card-content,.mat-dialog-content .mat-card .mat-card-header{white-space:normal;word-break:break-word}.mat-dialog-content .mat-card-header .mat-card-title{margin-bottom:0;font-size:16px}.mat-dialog-content .mat-dialog-actions{margin-bottom:0;justify-content:center}.mat-dialog-content .mat-dialog-actions button{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:10px auto 0;white-space:normal;padding:12px 10px;border-radius:0!important}.cdk-global-overlay-wrapper{align-items:center!important}.cdk-global-overlay-wrapper .mat-bottom-sheet-container bottom-sheet .mat-nav-list{display:flex;padding-top:0!important}.mat-bottom-sheet-container bottom-sheet .mat-nav-list .mat-list-item{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:5px;white-space:normal;padding:12px 10px;border-radius:0!important}.mat-bottom-sheet-container bottom-sheet .mat-nav-list{text-align:center}.mat-dialog-container .mat-dialog-actions button{display:inline-block;height:auto;background:#c33;font-size:18px;color:#fff!important;text-transform:uppercase;font-family:Ralewaybold;text-decoration:none!important;line-height:normal;text-align:center;margin:10px auto 0;white-space:normal;padding:12px 10px;border-radius:0!important}.mat-dialog-container .mat-card-header .mat-card-title{margin-bottom:0;font-size:16px;font-weight:600}.mat-form-field{margin:0 10px}"]
            }] }
];
/** @nocollapse */
TeamComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        this.fileservername = [];
        this.subjectForServerUrl = new Subject();
        this.subjectForaddEndpointUrl = new Subject();
        this.subjectForuploadEndpointUrl = new Subject(); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new Subject();
        this.subjectFordeletesingleEndpointUrl = new Subject();
        this.subjectForupdatestatusSingleEndpointUrl = new Subject();
        this.subjectForGetdataEndpointUrl = new Subject();
        this.subscriptionServer = this.getServerUrl().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.serverUrl = result;
            }
            else {
                this.serverUrl = null;
            }
        }));
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.addendpointUrl = result;
            }
            else {
                this.addendpointUrl = null;
            }
        }));
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.uploadEndpointUrl = result;
            }
            else {
                this.uploadEndpointUrl = null;
            }
        }));
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updateendpointUrl = result;
            }
            else {
                this.updateendpointUrl = null;
            }
        }));
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.deletesingle_endpointUrl = result;
            }
            else {
                this.deletesingle_endpointUrl = null;
            }
        }));
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updatestatus_single_endpointUrl = result;
            }
            else {
                this.updatestatus_single_endpointUrl = null;
            }
        }));
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.getdata_endpointUrl = result;
            }
            else {
                this.getdata_endpointUrl = null;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setServerUrl(value) {
        this.subjectForServerUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearServerUrl() {
        this.subjectForServerUrl.next(null);
    }
    /**
     * @return {?}
     */
    getServerUrl() {
        return this.subjectForServerUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setaddEndpoint(value) {
        this.subjectForaddEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearaddEndpoint() {
        this.subjectForaddEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getaddEndpoint() {
        return this.subjectForaddEndpointUrl.asObservable();
    }
    /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    setuploadEndpont(value) {
        this.subjectForuploadEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearuploadEndpoint() {
        this.subjectForuploadEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getuploadEndpoint() {
        return this.subjectForuploadEndpointUrl.asObservable();
    }
    /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    setupdateEndpoint(value) {
        this.subjectForupdateEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdateEndpoint() {
        this.subjectForupdateEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdateEndpoint() {
        return this.subjectForupdateEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setdeletesingleEndpoint(value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleardeletesingleEndpoint() {
        this.subjectFordeletesingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdeletesingleEndpoint() {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setupdatestatus_singleEndpoint(value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdatestatus_singleEndpoint() {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdatestatus_singleEndpoint() {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setgetdataEndpoint(value) {
        this.subjectForGetdataEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleargetdataEndpoint() {
        this.subjectForGetdataEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdataEndpoint() {
        return this.subjectForGetdataEndpointUrl.asObservable();
    }
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    addData(requestdata) {
        console.log('in adddata apiservice');
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'access-token': this.accesstoken 
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    uploadFile(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    getData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    CustomRequest(requestdata, endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient), ɵɵinject(HttpClient), ɵɵinject(CookieService)); }, token: ApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.accesstoken;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /** @type {?} */
    ApiService.prototype.serverUrl;
    /** @type {?} */
    ApiService.prototype.addendpointUrl;
    /** @type {?} */
    ApiService.prototype.uploadEndpointUrl;
    /** @type {?} */
    ApiService.prototype.updateendpointUrl;
    /** @type {?} */
    ApiService.prototype.deletesingle_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_single_endpointUrl;
    /** @type {?} */
    ApiService.prototype.deletemultiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_multiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.getdata_endpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForServerUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForaddEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForuploadEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdateEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectFordeletesingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdatestatusSingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForGetdataEndpointUrl;
    /** @type {?} */
    ApiService.prototype.subscriptionServer;
    /** @type {?} */
    ApiService.prototype.subscriptionaddEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionuploadEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdateEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptiondeletesingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdatestatusSingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionGetdataEndpoint;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.cookieService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://166.62.39.137:5009/uploads";
        this.response = {};
    }
    /**
     * @param {?} data
     * @param {?} userId
     * @return {?}
     */
    upload(data, userId) {
        return this.httpClient.post(this.SERVER_URL, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    /** @type {?} */
                    const uploadPercent = Math.round(100 * event.loaded / event.total);
                    this.response = { status: "process", data: { total: 100, loaded: uploadPercent } };
                    return this.response;
                case HttpEventType.Response:
                    return event.body;
                default:
                    return `Unhandled event: ${event.type}`;
                // return `Unhandled event: ${event.type}`;
            }
        })));
    }
}
UploadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UploadService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ UploadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(ɵɵinject(HttpClient)); }, token: UploadService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UploadService.prototype.SERVER_URL;
    /** @type {?} */
    UploadService.prototype.response;
    /**
     * @type {?}
     * @private
     */
    UploadService.prototype.httpClient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddEditTeamComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ],
                exports: [
                    A11yModule,
                    CdkStepperModule,
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatTreeModule,
                    PortalModule,
                    ScrollingModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddeditTeamComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListTeamComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.alldata = [];
        this.addPageVal = '';
        this.searchingendpoint = '';
        this.sourcenameViaapp = '';
        this.tokenVal = '';
        this.deleteendpointVal = '';
        this.addupdate = '';
        this.serverUrlData = '';
        this.editRouteval = '';
        this.alldata_skip = ["_id", "created_at"];
        this.alldata_modify_header = {
            "categoryName": "Category Name", "description": "Description",
            "rolename": "Role Name", "status": "Status", "role": "Role"
        };
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
        this.search_settings = {
            selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
            textsearch: [{ label: "Search By Category Name", field: 'categoryName' }],
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set TeamData(val) {
        this.alldata = (val) || '<no name set>';
        this.alldata = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set EditRoute(val) {
        this.editRouteval = (val) || '<no name set>';
        this.editRouteval = val;
        console.log(this.editRouteval);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set addButtonRoute(val) {
        this.addPageVal = (val) || '<no name set>';
        this.addPageVal = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set manageButtonRoute(val) {
        this.manageRoute = (val) || '<no name set>';
        this.manageRoute = (val);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set UpdateRoute(val) {
        this.addupdate = (val) || '<no name set>';
        this.addupdate = val;
        console.log(this.addupdate);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Token(val) {
        this.tokenVal = (val) || '<no name set>';
        this.tokenVal = val;
        console.log(this.tokenVal);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SourceName(val) {
        this.sourcenameViaapp = (val) || '<no name set>';
        this.sourcenameViaapp = val;
        console.log(this.sourcenameViaapp);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchEndpoint(val) {
        this.searchingendpoint = (val) || '<no name set>';
        this.searchingendpoint = val;
        console.log(this.searchingendpoint);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set DeleteEndpoint(val) {
        this.deleteendpointVal = (val) || '<no name set>';
        this.deleteendpointVal = val;
        console.log(this.deleteendpointVal);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverUrlData = (serverUrlval) || '<no name set>';
        this.serverUrlData = serverUrlval;
        console.log(this.serverUrlData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    addButton() {
        this.router.navigateByUrl('/' + this.addPageVal);
    }
    /**
     * @return {?}
     */
    manageTeamButton() {
        this.router.navigateByUrl('/' + this.manageRoute);
    }
}
ListTeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-list-team',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management List</h2>\n  </mat-toolbar>\n\n  <!-- add button start here -->\n  <mat-toolbar class=\"buttonsetToolbar\">\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Category</button>\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"manageTeamButton()\" >Manage Team</button>\n\n  </mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n \n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"alldata.length>0\" \n    [datasource]=\"alldata\"\n    [sourcedata]=\"sourcenameViaapp\"\n    [skip]=\"alldata_skip\" \n    [modify_header_array]=\"alldata_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [editroute]=\"editRouteval\"\n    [jwttoken]=\"tokenVal\" \n    [statusarr]=\"status\" \n    [updateendpoint]=\"addupdate\"\n    [deleteendpoint]=\"deleteendpointVal\"\n    [jwttoken]=\"tokenVal\"\n    [date_search_endpoint]=\"searchingendpoint\"\n    [date_search_source]=\"sourcenameViaapp\"\n    [search_settings]=\"search_settings\">\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
            }] }
];
/** @nocollapse */
ListTeamComponent.ctorParameters = () => [
    { type: Router }
];
ListTeamComponent.propDecorators = {
    TeamData: [{ type: Input }],
    EditRoute: [{ type: Input }],
    addButtonRoute: [{ type: Input }],
    manageButtonRoute: [{ type: Input }],
    UpdateRoute: [{ type: Input }],
    Token: [{ type: Input }],
    SourceName: [{ type: Input }],
    SearchEndpoint: [{ type: Input }],
    DeleteEndpoint: [{ type: Input }],
    serverUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListTeamComponent.prototype.alldata;
    /** @type {?} */
    ListTeamComponent.prototype.addPageVal;
    /** @type {?} */
    ListTeamComponent.prototype.searchingendpoint;
    /** @type {?} */
    ListTeamComponent.prototype.sourcenameViaapp;
    /** @type {?} */
    ListTeamComponent.prototype.tokenVal;
    /** @type {?} */
    ListTeamComponent.prototype.deleteendpointVal;
    /** @type {?} */
    ListTeamComponent.prototype.addupdate;
    /** @type {?} */
    ListTeamComponent.prototype.serverUrlData;
    /** @type {?} */
    ListTeamComponent.prototype.editRouteval;
    /** @type {?} */
    ListTeamComponent.prototype.manageRoute;
    /** @type {?} */
    ListTeamComponent.prototype.alldata_skip;
    /** @type {?} */
    ListTeamComponent.prototype.alldata_modify_header;
    /** @type {?} */
    ListTeamComponent.prototype.status;
    /** @type {?} */
    ListTeamComponent.prototype.search_settings;
    /** @type {?} */
    ListTeamComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TeamListComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.DataList = [];
        this.serverUrlData = '';
        this.tokenVal = '';
        this.DelEndpoint = '';
        this.editroute = '';
        this.updatendpoint = '';
        this.collectionName = '';
        this.searchingSource = '';
        this.searchingEndpoint = '';
        this.addPageRoute = '';
        this.data_skip = ["_id", "multipleemail", "bulletarray"];
        this.data_modify_header = { "membername": "Member Name", "description": "Description",
            "categoryName": "Category Name", "multiplephone": "Phone Numbers", "images": "Images"
        };
        this.search_settings = {
            textsearch: [{ label: "Search By Category Name", field: 'categoryname' },
                { label: "Search By Member Name", field: 'membername' },
                { label: "Search By E-Mail", field: 'multipleemail' }],
        };
        this.pendingmodelapplicationarray_detail_datatype = [{
                key: "images",
                value: 'image',
                fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/team/' // Image path 
            }];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set allData(val) {
        this.DataList = (val) || '<no name set>';
        this.DataList = val;
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
    set Token(val) {
        this.tokenVal = (val) || '<no name set>';
        this.tokenVal = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set DeleteEndpoint(val) {
        this.DelEndpoint = (val) || '<no name set>';
        this.DelEndpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set EditRoute(val) {
        this.editroute = (val) || '<no name set>';
        this.editroute = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set UpdateEndpoint(val) {
        this.updatendpoint = (val) || '<no name set>';
        this.updatendpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SourceName(val) {
        this.collectionName = (val) || '<no name set>';
        this.collectionName = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchSourceName(val) {
        this.searchingSource = (val) || '<no name set>';
        this.searchingSource = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchEndpoint(val) {
        this.searchingEndpoint = (val) || '<no name set>';
        this.searchingEndpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set AddPageRoute(val) {
        this.addPageRoute = (val) || '<no name set>';
        this.addPageRoute = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('this.preview_detail_listing');
        console.log(this.pendingmodelapplicationarray_detail_datatype);
    }
    /**
     * @return {?}
     */
    addButton() {
        this.router.navigateByUrl('/' + this.addPageRoute);
    }
}
TeamListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-team-list',
                template: "\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team List</h2>\n  </mat-toolbar>\n\n<!-- add button start here -->\n<mat-toolbar class=\"buttonsetToolbar\">\n  <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Member</button>\n</mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"DataList.length>0\" \n    [datasource]=\"DataList\"\n    [jwttoken]=\"tokenVal\" \n    [skip]=\"data_skip\" \n    [modify_header_array]=\"data_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [deleteendpoint]=\"DelEndpoint\"\n    [editroute]=\"editroute\"\n    [updateendpoint]=\"updatendpoint\"\n    [sourcedata]=\"collectionName\"\n    [date_search_source]=\"searchingSource\"\n    [date_search_endpoint]=\"searchingEndpoint\"\n    [search_settings]=\"search_settings\"\n    [detail_datatype]=\"pendingmodelapplicationarray_detail_datatype\"\n   >\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
            }] }
];
/** @nocollapse */
TeamListComponent.ctorParameters = () => [
    { type: Router }
];
TeamListComponent.propDecorators = {
    allData: [{ type: Input }],
    serverUrl: [{ type: Input }],
    Token: [{ type: Input }],
    DeleteEndpoint: [{ type: Input }],
    EditRoute: [{ type: Input }],
    UpdateEndpoint: [{ type: Input }],
    SourceName: [{ type: Input }],
    SearchSourceName: [{ type: Input }],
    SearchEndpoint: [{ type: Input }],
    AddPageRoute: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TeamListComponent.prototype.DataList;
    /** @type {?} */
    TeamListComponent.prototype.serverUrlData;
    /** @type {?} */
    TeamListComponent.prototype.tokenVal;
    /** @type {?} */
    TeamListComponent.prototype.DelEndpoint;
    /** @type {?} */
    TeamListComponent.prototype.editroute;
    /** @type {?} */
    TeamListComponent.prototype.updatendpoint;
    /** @type {?} */
    TeamListComponent.prototype.collectionName;
    /** @type {?} */
    TeamListComponent.prototype.searchingSource;
    /** @type {?} */
    TeamListComponent.prototype.searchingEndpoint;
    /** @type {?} */
    TeamListComponent.prototype.addPageRoute;
    /** @type {?} */
    TeamListComponent.prototype.data_skip;
    /** @type {?} */
    TeamListComponent.prototype.data_modify_header;
    /** @type {?} */
    TeamListComponent.prototype.search_settings;
    /** @type {?} */
    TeamListComponent.prototype.pendingmodelapplicationarray_detail_datatype;
    /** @type {?} */
    TeamListComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TeamModule {
}
TeamModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MaterialModule,
                    BrowserAnimationsModule,
                    ListingModule,
                    FileUploadModule
                ],
                providers: [ApiService],
                exports: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TeamComponent, TeamModule, TeamService, AddEditTeamComponent as ɵa, UploadService as ɵb, ApiService as ɵc, AddeditTeamComponent as ɵd, ListTeamComponent as ɵe, TeamListComponent as ɵf, MaterialModule as ɵg };
//# sourceMappingURL=team.js.map

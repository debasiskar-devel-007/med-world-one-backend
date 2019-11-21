import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, Component, NgModule, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild, Inject, defineInjectable, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ListingModule } from 'listing-angular7';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactusService {
    constructor() { }
}
ContactusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContactusService.ctorParameters = () => [];
/** @nocollapse */ ContactusService.ngInjectableDef = defineInjectable({ factory: function ContactusService_Factory() { return new ContactusService(); }, token: ContactusService, providedIn: "root" });

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
        // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
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
                'access-token': this.accesstoken //hard code written access-token(temp)
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
                'access-token': this.accesstoken //hard code written access-token(temp)
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
                'access-token': this.accesstoken
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
                'access-token': this.accesstoken
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
                'access-token': this.accesstoken
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
                'access-token': this.accesstoken
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
                'access-token': this.accesstoken
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
/** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: ApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactusComponent {
    /**
     * @param {?} fb
     * @param {?} apiService
     * @param {?} http
     * @param {?} router
     * @param {?} cookieService
     * @param {?} dialog
     */
    constructor(fb, apiService, http, router, cookieService, dialog) {
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
    /**
     * @param {?} modaleLogoVal
     * @return {?}
     */
    set modaleLogo(modaleLogoVal) {
        this.link = modaleLogoVal;
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logoimg(logoVal) {
        this.logoImgValue = logoVal;
        console.log(this.logoImgValue);
    }
    /**
     * @param {?} listingVal
     * @return {?}
     */
    set addlisting(listingVal) {
        this.listingValue = (listingVal) || '<no name set>';
        this.listingValue = listingVal;
        console.log('this.listingValue');
        console.log(this.listingValue);
    }
    /**
     * @param {?} JwtTokenVal
     * @return {?}
     */
    set JwtToken(JwtTokenVal) {
        this.setJwtTokenValue = JwtTokenVal;
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        // console.log(this.serverURL);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        console.log('this.addEndpointData');
        console.log(this.addEndpointData);
        // console.log(this.addEndpointData.endpoint);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set routeingUrl(routeingUrlval) {
        this.routeingUrlValue = (routeingUrlval) || '<no name set>';
        this.routeingUrlValue = routeingUrlval;
        // console.log(this.routeingUrlValue);
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
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    /* Multiple emails created start here*/
    /**
     * @return {?}
     */
    get multipleemails() {
        return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
    }
    /* Add email field start here */
    /**
     * @return {?}
     */
    addEmail() {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    }
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeEmail(index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    }
    /* Remove email field end here */
    /* Multiple emails created end here*/
    /* Multiple addresses created start here*/
    /**
     * @return {?}
     */
    get addresses() {
        return (/** @type {?} */ (this.contactUsForm.get('addresses')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addAddress() {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    }
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeAddress(index) {
        // console.log(index);
        this.addresses.removeAt(index);
    }
    /* Remove addresses field end here */
    /* Multiple addresses created end here*/
    /* Multiple phones created start here*/
    /**
     * @return {?}
     */
    get phones() {
        return (/** @type {?} */ (this.contactUsForm.get('phones')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addPhone() {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    }
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removePhone(index) {
        // console.log(index);
        this.phones.removeAt(index);
    }
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    contactUsFormSubmit() {
        /** @type {?} */
        let x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            // console.log('ok');
            // console.log(this.contactUsForm.value);
            // All emails sites in a Array start here
            for (const key of this.contactUsForm.value.multipleemails) {
                this.email.push(key.emails);
            }
            // All emails sites in a Array end here
            // All Phones sites in a Array start here
            // console.log(this.contactUsForm.value.phones);
            for (const key of this.contactUsForm.value.phones) {
                this.phone.push(key.phone);
            }
            // All Phones sites in a Array end here
            // All addresses sites in a Array start here
            for (const key of this.contactUsForm.value.addresses) {
                this.address.push(key.address);
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            let allData = {};
            allData.name = this.contactUsForm.value.name;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            let data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.addEndpointData.token
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    /** @type {?} */
                    const dialogRef = this.dialog.open(successModalComponent, {
                        width: '250px',
                        data: { value: result.status, Url: this.link }
                    });
                    this.formDirective.resetForm();
                }
            }));
        }
    }
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    goToListing() {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    }
}
ContactusComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus',
                template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <div class=\"fromClass\">\n  <mat-form-field>\n      <input matInput placeholder=\"Name \" formControlName=\"name\" (blur)=\"inputUntouched('name')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['name'].valid && contactUsForm.controls['name'].errors.required && contactUsForm.controls['name'].touched\">Name field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\"  *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" class=\"fromClass\" >\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n     <!-- <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error> -->\n      <!-- <mat-error *ngIf=\"!item.valid  \">Email field can not be blank</mat-error> -->\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" *ngFor=\"let item of phones.controls; let pointIndex=index\" class=\"fromClass\">\n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <!-- <mat-error *ngIf=\"!item.valid  \">Phone field can not be blank</mat-error> -->\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" *ngFor=\"let item of addresses.controls; let pointIndex=index\"  class=\"fromClass\">\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" (blur)=\"inputUntouched('address')\"></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <!-- <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error> -->\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <div class=\"fromClass\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n  </div>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ContactusComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: HttpClient },
    { type: Router },
    { type: CookieService },
    { type: MatDialog }
];
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
class successModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
successModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'successModal',
                template: `
  
<span style="text-align: center"  *ngIf="data.Url != ''" >
<img style="max-width: 100%; text-align: center" [src]="data.Url">
</span>

<div mat-dialog-content>
<p *ngIf="data.value.length <= 7">Thanks! your account has been successfully created</p>
<p *ngIf="data.value.length >= 8">{{data.value}}</p>

</div>
<div mat-dialog-actions>
<button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>
</div>

  `
            }] }
];
/** @nocollapse */
successModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoMaterialModule {
}
DemoMaterialModule.decorators = [
    { type: NgModule, args: [{
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
class LoadingComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.loading = false;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-loading',
                template: "\n\n\n\n<div style=\"width:100vw; height:100vh; display:table-cell; vertical-align:middle; text-align:center;\" *ngIf=\"loading==true\">\n  <mat-spinner></mat-spinner>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactusListingComponent {
    /**
     * @param {?} apiService
     * @param {?} http
     * @param {?} loadingComponent
     * @param {?} dialog
     */
    constructor(apiService, http, loadingComponent, dialog) {
        this.apiService = apiService;
        this.http = http;
        this.loadingComponent = loadingComponent;
        this.dialog = dialog;
        this.contactUsAllData = [];
        this.contactUsAllDataHeaderSkipValue = [];
        this.contactUsAllDataModifyHeaderValue = {};
        // tslint:disable-next-line:variable-name
        this.contactUsAllData_collection = 'events';
        this.serverURL = ''; // url variable to fetch the add availability form page
        // url variable to fetch the add availability form page
        this.addEndpointData = '';
        this.getDataEndpointData = '';
        this.updateendpointData = '';
        this.deleteendpointData = '';
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        console.log(this.serverURL);
    }
    /**
     * @param {?} contactUsAllDataHeaderSkipval
     * @return {?}
     */
    set contactUsAllDataHeader_skip(contactUsAllDataHeaderSkipval) {
        this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
        this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
        console.log(this.contactUsAllDataHeaderSkipValue);
    }
    /**
     * @param {?} contactUsAllDataModifyHeaderval
     * @return {?}
     */
    set contactUsAllDataModify_header(contactUsAllDataModifyHeaderval) {
        this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
        this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
        console.log('this.contactUsAllDataModifyHeaderValue');
        console.log(this.contactUsAllDataModifyHeaderValue);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        // console.log('this.addEndpointData');
        // console.log(this.addEndpointData)
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
        console.log('this.getDataEndpointData');
        console.log(this.getDataEndpointData);
    }
    /**
     * @param {?} updateendpointval
     * @return {?}
     */
    set updateendpoint(updateendpointval) {
        this.updateendpointData = (updateendpointval) || '<no name set>';
        this.updateendpointData = updateendpointval;
        console.log('this.updateendpointData');
        console.log(this.updateendpointData);
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointData = (deleteendpointval) || '<no name set>';
        this.deleteendpointData = deleteendpointval;
        console.log('this.deleteendpointData');
        console.log(this.deleteendpointData);
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
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        console.log(this.serverURL);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setgetdataEndpoint(this.getDataEndpointData.endpoint);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData);
        }), 50);
        console.log(this.addEndpointData);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getAllData();
        }), 100);
        // setInterval(()=> {
        //   this.openDialog(); },4000); 
        // setInterval(() => {this.openDialog(); },4000);
    }
    /**
     * @return {?}
     */
    getAllData() {
        this.loadingComponent.loading = false;
        /** @type {?} */
        let data;
        data = {
            "source": this.getDataEndpointData.source
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.loadingComponent.loading = true;
            /** @type {?} */
            let result = [];
            result = response;
            if (result.resc != 0) {
                console.log('result');
                console.log(result);
                this.contactUsAllData = result.res;
            }
            else
                console.log('oppes');
        }));
    }
}
ContactusListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus-listing',
                template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
            }] }
];
/** @nocollapse */
ContactusListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: HttpClient },
    { type: LoadingComponent },
    { type: MatDialog }
];
ContactusListingComponent.propDecorators = {
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    contactUsAllDataHeader_skip: [{ type: Input }],
    contactUsAllDataModify_header: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    updateendpoint: [{ type: Input }],
    deleteendpoint: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactusModule {
}
ContactusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ContactusComponent, successModalComponent, ContactusListingComponent, LoadingComponent],
                imports: [
                    DemoMaterialModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ListingModule,
                    HttpClientModule,
                ],
                exports: [ContactusComponent, ContactusListingComponent],
                providers: [ApiService, LoadingComponent, CookieService],
                bootstrap: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                entryComponents: [successModalComponent]
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

export { ContactusService, ContactusComponent, successModalComponent, ContactusModule, ApiService as ɵa, ContactusListingComponent as ɵb, LoadingComponent as ɵc, DemoMaterialModule as ɵd };

//# sourceMappingURL=contactus.js.map
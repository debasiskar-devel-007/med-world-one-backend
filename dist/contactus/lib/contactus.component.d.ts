import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef, MatDialog } from '@angular/material';
export interface DialogData {
    value: string;
    Url: any;
}
export declare class ContactusComponent implements OnInit {
    fb: FormBuilder;
    apiService: ApiService;
    http: HttpClient;
    router: Router;
    cookieService: CookieService;
    dialog: MatDialog;
    formDirective: FormGroupDirective;
    value: any;
    link: any;
    Url: any;
    message: any;
    formTitleValue: any;
    email: any[];
    phone: any[];
    address: any[];
    serverURL: any;
    addEndpointData: any;
    routeingUrlValue: any;
    setJwtTokenValue: any;
    listingValue: any;
    logoImgValue: any;
    modaleLogo: any;
    formTitle: string;
    logoimg: string;
    addlisting: any;
    JwtToken: any;
    serverUrl: any;
    addEndpoint: any;
    routeingUrl: any;
    latitude: number;
    longitude: number;
    mapType: string;
    contactUsForm: FormGroup;
    constructor(fb: FormBuilder, apiService: ApiService, http: HttpClient, router: Router, cookieService: CookieService, dialog: MatDialog);
    ngOnInit(): void;
    readonly multipleemails: FormArray;
    addEmail(): void;
    removeEmail(index: any): void;
    readonly addresses: FormArray;
    addAddress(): void;
    removeAddress(index: any): void;
    readonly phones: FormArray;
    addPhone(): void;
    removePhone(index: any): void;
    contactUsFormSubmit(): void;
    inputUntouched(val: any): void;
    goToListing(): void;
}
export declare class successModalComponent {
    dialogRef: MatDialogRef<successModalComponent>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<successModalComponent>, data: DialogData);
    onNoClick(): void;
}

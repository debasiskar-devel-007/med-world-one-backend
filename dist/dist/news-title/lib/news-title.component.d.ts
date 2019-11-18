import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
export interface DialogData {
    formTitleValue: any;
    serverUrlValue: any;
    addEndpointValue: any;
    logoValue: any;
}
export declare class NewsTitleComponent implements OnInit {
    fb: FormBuilder;
    apiService: ApiService;
    private _snackBar;
    dialog: MatDialog;
    formTitleValue: any;
    serverUrlValue: any;
    addEndpointValue: any;
    logoValue: any;
    formTitle: any;
    logo: string;
    serverUrl: any;
    addEndpoint: any;
    formDirective: FormGroupDirective;
    durationInSeconds: any;
    newsLatterForm: FormGroup;
    constructor(fb: FormBuilder, apiService: ApiService, _snackBar: MatSnackBar, dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): void;
}
export declare class modalData implements OnInit {
    dialogRef: MatDialogRef<modalData>;
    data: DialogData;
    apiService: ApiService;
    fb: FormBuilder;
    newsLatterForm: FormGroup;
    formDirective: FormGroupDirective;
    constructor(dialogRef: MatDialogRef<modalData>, data: DialogData, apiService: ApiService, fb: FormBuilder);
    ngOnInit(): void;
    onNoClick(): void;
    newsLatterFormSubmit(): void;
    inputUntouched(val: any): void;
}

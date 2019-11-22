import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddBlogComponent implements OnInit {
    private formBuilder;
    private blogService;
    private router;
    private cookieService;
    dialog: MatDialog;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    blogCatForm: FormGroup;
    header_txt: any;
    buttonText: any;
    configData: any;
    loader: boolean;
    successMessage: any;
    getParentCatArr: any;
    dialogRef: any;
    constructor(formBuilder: FormBuilder, blogService: BlogService, router: Router, cookieService: CookieService, dialog: MatDialog);
    ngOnInit(): void;
    setDefaultValue(defaultValue: any): void;
    generateForm(): void;
    config: any;
    openDialog(x: any): void;
    getParentData(): void;
    onSubmit(): void;
    inputBlur(val: any): void;
}
export declare class Modal2 {
    dialogRef: MatDialogRef<Modal2>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal2>, data: DialogData);
    onNoClick(): void;
}

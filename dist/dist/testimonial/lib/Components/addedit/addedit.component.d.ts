import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestimonialService } from '../../testimonial.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddeditComponent implements OnInit {
    private formBuilder;
    private testiService;
    private router;
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
    buttonText: string;
    testimonialForm: FormGroup;
    loader: boolean;
    configData: any;
    successMessage: string;
    dialogRef: any;
    imageConfigData: any;
    ErrCode: boolean;
    flag: boolean;
    img_var: any;
    header_name: any;
    image_name: any;
    image_type: any;
    constructor(formBuilder: FormBuilder, testiService: TestimonialService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    config: any;
    imageUpload: any;
    generateForm(): void;
    onSubmit(): void;
    setDefaultValue(defaultValue: any): void;
    openDialog(x: any): void;
    inputBlur(val: any): void;
    clear_image(): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}

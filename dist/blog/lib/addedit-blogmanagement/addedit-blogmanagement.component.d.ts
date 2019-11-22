import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
export interface DialogData {
    msg: any;
    videourl: any;
}
export declare class AddeditBlogmanagementComponent implements OnInit {
    private http;
    private apiservice;
    private activatedRoute;
    private router;
    private formBuilder;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    headerText: any;
    buttonText: any;
    blogCategoryArray: any;
    configData: any;
    blogManagementForm: FormGroup;
    serverUrlData: any;
    getDataEndpointData: any;
    addEndpointData: any;
    isSubmitted: boolean;
    video_prefix: any;
    options: any;
    filteredOptions: Observable<string[]>;
    myControl: FormControl;
    tags_array: any;
    dialogRef: any;
    params_id: any;
    setData: any;
    messageText: any;
    listUrl: any;
    testTag: any;
    imageConfigData: any;
    ErrCode: any;
    img_var: any;
    image_name: any;
    image_type: any;
    flag: boolean;
    images_array: any;
    images_array_edit: any;
    fileConfigData: any;
    file_array: any;
    file_array_edit: any;
    action2: any;
    config: any;
    serverUrl: any;
    getDataEndpoint: any;
    addEndpoint: any;
    listRoute: any;
    constructor(http: HttpClient, apiservice: ApiService, activatedRoute: ActivatedRoute, router: Router, formBuilder: FormBuilder, dialog: MatDialog, snackBar: MatSnackBar);
    ngOnInit(): void;
    private _filter;
    action: any;
    imageUpload: any;
    fileUpload: any;
    openDialog(x: any): void;
    trackByFn(index: any): any;
    addYoutubeVideo(vid_url: any, vid_tit: any, vid_desc: any): void;
    deleteCreds(): void;
    getBlogCategory(): void;
    getTagsCount(): void;
    singleData: any;
    onSubmit(): void;
    readonly onSignUpValidate: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    inputBlur(val: any): void;
    showval(event: any): void;
    preview_video(video_index: any): void;
    clearTags(index: any): void;
    openSnackBar(): void;
    clear_image(index: any): void;
    clearFileTags(index: any): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    videoid: any;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}
export declare class YoutubeComponent {
}

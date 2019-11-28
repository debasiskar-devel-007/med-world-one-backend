/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
    /** @type {?} */
    DialogData.prototype.videourl;
}
export class AddeditBlogmanagementComponent {
    // -----------------------------------------------------------------------------------------
    /**
     * @param {?} http
     * @param {?} apiservice
     * @param {?} activatedRoute
     * @param {?} router
     * @param {?} formBuilder
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Description...',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [''];
        this.myControl = new FormControl();
        this.tags_array = [];
        this.testTag = [];
        this.flag = false;
        this.images_array = [];
        this.images_array_edit = [];
        this.file_array = [];
        this.file_array_edit = [];
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required, Validators.maxLength(30)]],
            blogcat: ['',],
            description: ['', [Validators.required, Validators.maxLength(50)]],
            priority: ['', [Validators.required, Validators.maxLength(2)]],
            status: ['true', Validators.required],
            metatitle: ['', [Validators.required, Validators.maxLength(20)]],
            metadesc: ['', [Validators.required, Validators.maxLength(50)]],
            author: ['', [Validators.required, Validators.maxLength(20)]],
            credentials: this.formBuilder.array([]),
            tags: [''],
            blogs_image: [''],
            blogs_file: ['']
        });
    }
    // -----------------------------------------------------------------------
    // ----------------------------------------------Input Section-----------------------
    // Input receiving from add/edit app 
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} serverUrl
     * @return {?}
     */
    set serverUrl(serverUrl) {
        this.serverUrlData = (serverUrl) || '<no name set>';
        this.serverUrlData = serverUrl;
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
     * @param {?} listval
     * @return {?}
     */
    set listRoute(listval) {
        this.listUrl = (listval) || '<no name set>';
        this.listUrl = listval;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**Observable start here**/
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
        /**Observable end here**/
        if (!this.activatedRoute.snapshot.params.id)
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.addYoutubeVideo('', '', '');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getTagsCount();
        }), 50);
        if (this.action2 == 'edit') {
            this.headerText = "Edit Blog Management Data";
            this.flag = true;
            this.params_id = this.setData._id;
            this.buttonText = "Update";
            this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
            this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
            this.blogManagementForm.controls['description'].patchValue(this.setData.description);
            this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
            this.blogManagementForm.controls['status'].patchValue(this.setData.status);
            this.blogManagementForm.controls['metatitle'].patchValue(this.setData.metatitle);
            this.blogManagementForm.controls['metadesc'].patchValue(this.setData.metadesc);
            this.blogManagementForm.controls['blogs_image'].patchValue(this.setData.blogs_image);
            this.blogManagementForm.controls['blogs_file'].patchValue(this.setData.blogs_file);
            this.blogManagementForm.controls['author'].patchValue(this.setData.author);
            /*Image works*/
            for (let i = 0; i < this.setData.blogs_image.length; i++) {
                this.img_var = this.setData.blogs_image[i].basepath + this.setData.blogs_image[i].image;
                this.image_name = this.setData.blogs_image[i].name;
                this.image_type = this.setData.blogs_image[i].type;
                this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
                this.images_array.push({
                    "basepath": this.setData.blogs_image[i].basepath,
                    "image": this.setData.blogs_image[i].image,
                    "name": this.setData.blogs_image[i].name,
                    "type": this.setData.blogs_image[i].type
                });
            }
            /*File works*/
            for (let i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
                this.file_array_edit.push(this.setData.blogs_file[i2].name);
                this.file_array.push({
                    "basepath": this.setData.blogs_file[i2].basepath,
                    "file": this.setData.blogs_file[i2].file,
                    "name": this.setData.blogs_file[i2].name,
                    "type": this.setData.blogs_file[i2].type
                });
            }
            for (const vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    this.tags_array.push(element);
                }));
        }
        // ------------------------------Autocomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        // ------------------------------------------------------------------------------------------
    }
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().indexOf(filterValue) === 0));
    }
    // --------------------------------------------------------------------------------------------
    /**
     * @param {?} action
     * @return {?}
     */
    set action(action) {
        this.action2 = action;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set fileUpload(getConfig) {
        this.fileConfigData = getConfig;
    }
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '45%',
            height: '500px',
            data: { msg: x }
        });
        // this.sanitizer.bypassSecurityTrustResourceUrl
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    addYoutubeVideo(vid_url, vid_tit, vid_desc) {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [vid_url],
            video_title: [vid_tit],
            video_description: [vid_desc]
        }));
    }
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    deleteCreds() {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    }
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    getBlogCategory() {
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.blogCategoryArray = result.res;
        }));
    }
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    getTagsCount() {
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                this.options = result.res[0].tags;
        }));
    }
    // ----------------------------------------------------------------------------------
    //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
    /**
     * @param {?} editDatavals
     * @return {?}
     */
    set singleData(editDatavals) {
        this.setData = editDatavals;
    }
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    onSubmit() {
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            for (const loop in this.imageConfigData.files) {
                this.images_array =
                    this.images_array.concat({
                        "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[loop].name,
                        "type": this.imageConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_image = this.images_array;
        }
        else {
            this.blogManagementForm.value.blogs_image = false;
        }
        /*_____________________________________________________________________________________*/
        /*_________________________________________FILE UPLOADER_______________________________*/
        if (this.fileConfigData) {
            for (const loop in this.fileConfigData.files) {
                this.file_array =
                    this.file_array.concat({
                        "basepath": this.fileConfigData.files[loop].upload.data.basepath + '/' + this.fileConfigData.path + '/',
                        "file": this.fileConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.fileConfigData.files[loop].name,
                        "type": this.fileConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_file = this.file_array;
        }
        else {
            this.blogManagementForm.value.blogs_file = false;
        }
        // ___________________________________________________________________________________
        this.blogManagementForm.value.tags = this.tags_array;
        this.blogManagementForm.controls['description'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = parseInt("1");
            else
                this.blogManagementForm.value.status = parseInt("0");
            if (this.params_id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "description": this.blogManagementForm.value.description,
                        "priority": this.blogManagementForm.value.priority,
                        "status": this.blogManagementForm.value.status,
                        "metatitle": this.blogManagementForm.value.metatitle,
                        "metadesc": this.blogManagementForm.value.metadesc,
                        "tags": this.blogManagementForm.value.tags,
                        "credentials": this.blogManagementForm.value.credentials,
                        "blogs_image": this.blogManagementForm.value.blogs_image,
                        "blogs_file": this.blogManagementForm.value.blogs_file,
                        "author": this.blogManagementForm.value.author
                    },
                    "sourceobj": ["blogcat"]
                };
            }
            else {
                this.isSubmitted = true;
                /** @type {?} */
                var data;
                data = {
                    //add part
                    "source": "blogs",
                    "data": this.blogManagementForm.value,
                    "sourceobj": ["blogcat"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                /** @type {?} */
                let result;
                result = response;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listUrl);
                }), 3000);
            }));
        }
        else
            console.log("Form is invalid");
    }
    // -----------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    get onSignUpValidate() {
        return this.blogManagementForm.controls;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    }
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    showval(event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    }
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    preview_video(video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    }
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearTags(index) {
        this.tags_array.splice(index, 1);
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    }
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clear_image(index) {
        this.images_array.pop(this.setData.blogs_image[index]);
        this.images_array_edit.splice(index, 1);
    }
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearFileTags(index) {
        this.file_array.pop(this.setData.blogs_file[index]);
        this.file_array_edit.splice(index, 1);
    }
}
AddeditBlogmanagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-blogmanagement',
                template: "<mat-card>\r\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\r\n    </mat-toolbar>\r\n\r\n\r\n\r\n    <span class=\"formspan\">\r\n        <mat-card-content class=\"example-container\">\r\n            <form [formGroup]=\"blogManagementForm\">\r\n                <!-- ----------------------------Blog title---------------------------- -->\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\r\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid && !blogManagementForm.controls['blogtitle'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------ -->\r\n\r\n\r\n                <!-- -------------------------Blog Category---------------------------- -->\r\n                <mat-form-field>\r\n                    <mat-label>Blog Category</mat-label>\r\n                    <select matNativeControl formControlName=\"blogcat\"\r\n                      >\r\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- -------------------------Author---------------------------- -->\r\n                <mat-form-field>\r\n                    <mat-label>Author</mat-label>\r\n                    <input matInput formControlName=\"author\" placeholder=\"Author\">\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\r\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['author'].valid && !blogManagementForm.controls['author'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- ------------------------------------Blog Content------------------ -->\r\n\r\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\r\n                  ></ckeditor>\r\n                <mat-error\r\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\r\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\r\n                    Blog title is required.</mat-error>\r\n\r\n                <mat-error\r\n                    *ngIf=\"!blogManagementForm.controls['description'].valid && !blogManagementForm.controls['description'].errors.required\">\r\n                    Max length exceeded</mat-error>\r\n                <br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n\r\n\r\n                <!-- -----------------------------------Priority------------------------ -->\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\r\n                        >\r\n\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\r\n                        Priority is required.</mat-error>\r\n\r\n                    <!-- <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['priority'].valid && !blogManagementForm.controls['priority'].errors.required\">\r\n                        Max length exceeded</mat-error> -->\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Status---------------------------- -->\r\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n                <!-- --------------------------------Meta title-------------------------  -->\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\r\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\r\n                        Meta title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid && !blogManagementForm.controls['metatitle'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Meta Description------------------ -->\r\n                <mat-form-field>\r\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\r\n                      ></textarea>\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\r\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\r\n                        Meta description is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metadesc'].valid && !blogManagementForm.controls['metadesc'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field><br>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- --------------------------------------Video URL--------------------- -->\r\n                <mat-label>Attach Videos:</mat-label>\r\n                <div formArrayName=\"credentials\"\r\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\r\n                    <ng-container [formGroupName]=\"i\">\r\n                        <mat-form-field class=\"video_embed\">\r\n                            <input type=\"text\" matInput formControlName=\"video_url\">\r\n                            <span matPrefix>{{ video_prefix }}</span>\r\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\r\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\r\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\r\n                                contact_support\r\n                            </i>\r\n\r\n\r\n                        </mat-form-field>\r\n\r\n\r\n                        <!-- Video Title  -->\r\n                        <mat-form-field>\r\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\r\n                            <mat-icon matSuffix>title</mat-icon>\r\n                        </mat-form-field>\r\n                        <!-- Video Description  -->\r\n                        <mat-form-field>\r\n\r\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\r\n                                placeholder=\"Video description\"></textarea>\r\n                            <mat-icon matSuffix>description</mat-icon>\r\n                        </mat-form-field>\r\n\r\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\r\n                            <mat-icon matSuffix>add_box</mat-icon>\r\n                        </button>\r\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\r\n                                <mat-icon matSuffix>delete</mat-icon>\r\n                            </button></span>\r\n                    </ng-container>\r\n                </div><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- -----------------------------Multi Tags---------------------------- -->\r\n                <div>\r\n                    <mat-label>Tags:</mat-label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\r\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\r\n\r\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                {{option}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\r\n        && blogManagementForm.controls['tags'].errors.required\">\r\n                            Tags are required.</mat-error>\r\n\r\n                    </mat-form-field>\r\n                    <div>\r\n\r\n                        <mat-chip-list class=\"mat_chip\">\r\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\r\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\r\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\r\n                            </mat-chip>\r\n                        </mat-chip-list>\r\n\r\n                    </div>\r\n                </div>\r\n                <!-- ----------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\r\n                <h1>Blogs Image:</h1>\r\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <ng-container *ngIf=\"flag==true\">\r\n                    <!-- CARD VIEW  -->\r\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\r\n                        <mat-card class=\"example-card\">\r\n                            <img mat-card-image [src]=\"img.img_var\">\r\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\r\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\r\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\r\n\r\n                        </mat-card>\r\n                    </mat-card-content>\r\n                    <!-- ---------  -->\r\n                </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                <!-- ---------------------------------------------File Uploader--------------------- -->\r\n                <h1>Blogs File:</h1>\r\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <mat-chip-list class=\"mat_chip\">\r\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\r\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n\r\n\r\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\r\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\r\n\r\n            </form>\r\n        </mat-card-content>\r\n    </span>\r\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditBlogmanagementComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ApiService },
    { type: ActivatedRoute },
    { type: Router },
    { type: FormBuilder },
    { type: MatDialog },
    { type: MatSnackBar }
];
AddeditBlogmanagementComponent.propDecorators = {
    config: [{ type: Input }],
    serverUrl: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    listRoute: [{ type: Input }],
    action: [{ type: Input }],
    imageUpload: [{ type: Input }],
    fileUpload: [{ type: Input }],
    singleData: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.Editor;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.headerText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.buttonText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogCategoryArray;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.configData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogManagementForm;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.serverUrlData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.addEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.isSubmitted;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.video_prefix;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.options;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.filteredOptions;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.myControl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.tags_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.params_id;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.setData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.messageText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.listUrl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.testTag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.img_var;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_name;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_type;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.flag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.fileConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.action2;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.apiservice;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.formBuilder;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialog;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.snackBar;
}
// ------------------------------------Modal Component Works------------------------------
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Modal.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\r\n<div mat-dialog-content>\r\n \r\n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \r\n  \r\n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n "
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.videoid;
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
// ---------------------------------------------------------------------------------------
export class YoutubeComponent {
}
YoutubeComponent.decorators = [
    { type: Component, args: [{
                template: "<span class=\"log_image\">\r\n    <img src=\"/assets/images/youtube-link.jpg\">\r\n</span>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUluRSxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBV2hCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7O0lBNkZ6QyxZQUFvQixJQUFnQixFQUFVLFVBQXNCLEVBQzFELGNBQThCLEVBQVUsTUFBYyxFQUN0RCxXQUF3QixFQUFTLE1BQWlCLEVBQ25ELFFBQXFCO1FBSFYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0RCxnQkFBVyxHQUFYLFdBQVcs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Q0FBcUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSmxELFlBQU8sR0FBUSxFQUFFLENBQUM7SUFPbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVRQUF5QjthQUMxQjs7OztZQWhqQnlCLFlBQVk7NENBc2pCakMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0JBQWtCOztJQUdoQiwwQkFBcUM7O0lBQ3JDLHFCQUFnRDs7O0FBY3BELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1Qsc0dBQThCOzthQUUvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgbXNnOiBhbnk7XHJcbiAgdmlkZW91cmw6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LWJsb2dtYW5hZ2VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cclxuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXHJcbiAgZWRpdG9yQ29uZmlnID0ge1xyXG4gICAgcGxhY2Vob2xkZXI6ICdEZXNjcmlwdGlvbi4uLicsXHJcbiAgfTtcclxuICBwdWJsaWMgbW9kZWwgPSB7XHJcbiAgICBlZGl0b3JEYXRhOiAnJ1xyXG4gIH07XHJcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcclxuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gJ1NVQk1JVCc7XHJcbiAgcHVibGljIGJsb2dDYXRlZ29yeUFycmF5OiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xyXG4gIGJsb2dNYW5hZ2VtZW50Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XHJcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcclxuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnk7XHJcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XHJcbiAgb3B0aW9uczogYW55ID0gWycnXTtcclxuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIHRhZ3NfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGRpYWxvZ1JlZjogYW55O1xyXG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcclxuICBzZXREYXRhOiBhbnk7XHJcbiAgbWVzc2FnZVRleHQ6IGFueTtcclxuICBsaXN0VXJsOiBhbnk7XHJcbiAgdGVzdFRhZzogYW55ID0gW107XHJcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XHJcbiAgRXJyQ29kZTogYW55O1xyXG4gIGltZ192YXI6IGFueTtcclxuICBpbWFnZV9uYW1lOiBhbnk7XHJcbiAgaW1hZ2VfdHlwZTogYW55O1xyXG4gIGZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbWFnZXNfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGltYWdlc19hcnJheV9lZGl0OiBhbnkgPSBbXTtcclxuICBmaWxlQ29uZmlnRGF0YTogYW55O1xyXG4gIGZpbGVfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGZpbGVfYXJyYXlfZWRpdDogYW55ID0gW107XHJcbiAgYWN0aW9uMjphbnk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnB1dCBTZWN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gSW5wdXQgcmVjZWl2aW5nIGZyb20gYWRkL2VkaXQgYXBwIFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSBzZXJ2ZXJVcmw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xyXG5cclxuXHJcbiAgfVxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy9zZXR0aW5nIHRoZSBsaXN0aW5nIHVybCBmb3JtIHRoZSBhcHBsaWNhdGlvblxyXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmxpc3RVcmwgPSAobGlzdHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5saXN0VXJsID0gbGlzdHZhbDtcclxuXHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhcGlzZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xyXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgYmxvZ3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxyXG4gICAgICBibG9nY2F0OiBbJycsIF0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxyXG4gICAgICBwcmlvcml0eTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1heExlbmd0aCgyKV1dLFxyXG4gICAgICBzdGF0dXM6IFsndHJ1ZScsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBtZXRhdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjApXV0sXHJcbiAgICAgIG1ldGFkZXNjOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxyXG4gICAgICBhdXRob3I6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDIwKV1dLFxyXG4gICAgICBjcmVkZW50aWFsczogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXHJcbiAgICAgIHRhZ3M6IFsnJ10sXHJcbiAgICAgIGJsb2dzX2ltYWdlOiBbJyddLFxyXG4gICAgICBibG9nc19maWxlOiBbJyddXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8qKk9ic2VydmFibGUgc3RhcnQgaGVyZSoqL1xyXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xyXG4gICAgfSwgNTApO1xyXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xyXG4gICAgfSwgNTApO1xyXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xyXG4gICAgfSwgNTApO1xyXG4gICAgLyoqT2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xyXG5cclxuICAgIGlmICghdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKCcnLCAnJywgJycpO1xyXG4gICAgICB9LCA1MDApXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0QmxvZ0NhdGVnb3J5KCk7XHJcbiAgICB9LCA1MClcclxuXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0VGFnc0NvdW50KCk7XHJcbiAgICB9LCA1MClcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuYWN0aW9uMj09J2VkaXQnKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyVGV4dD1cIkVkaXQgQmxvZyBNYW5hZ2VtZW50IERhdGFcIjtcclxuICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYXJhbXNfaWQgPSB0aGlzLnNldERhdGEuX2lkO1xyXG4gICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3RpdGxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3RpdGxlKTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2djYXQnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nY2F0KTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1sncHJpb3JpdHknXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5wcmlvcml0eSk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snbWV0YXRpdGxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEubWV0YXRpdGxlKTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ21ldGFkZXNjJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEubWV0YWRlc2MpO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfaW1hZ2UnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZSk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nc19maWxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZSk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydhdXRob3InXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5hdXRob3IpO1xyXG5cclxuXHJcbiAgICAgIC8qSW1hZ2Ugd29ya3MqL1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaW1nX3ZhciA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5iYXNlcGF0aCArIHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5pbWFnZTtcclxuICAgICAgICB0aGlzLmltYWdlX25hbWUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlX3R5cGUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZTtcclxuICAgICAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnB1c2goeyAnaW1nX3Zhcic6IHRoaXMuaW1nX3ZhciwgJ2ltYWdlX25hbWUnOiB0aGlzLmltYWdlX25hbWUsICdpbWFnZV90eXBlJzogdGhpcy5pbWFnZV90eXBlIH0pO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LnB1c2goe1xyXG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGgsXHJcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5pbWFnZSxcclxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZSxcclxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKkZpbGUgd29ya3MqL1xyXG4gICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUubGVuZ3RoOyBpMisrKSB7XHJcbiAgICAgICAgdGhpcy5maWxlX2FycmF5X2VkaXQucHVzaCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlX2FycmF5LnB1c2goe1xyXG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0uYmFzZXBhdGgsXHJcbiAgICAgICAgICBcImZpbGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLmZpbGUsXHJcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLm5hbWUsXHJcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLnR5cGVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGZvciAoY29uc3QgdmlkIGluIHRoaXMuc2V0RGF0YS5jcmVkZW50aWFscykge1xyXG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3VybCxcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3RpdGxlLFxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fZGVzY3JpcHRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXREYXRhLnRhZ3MgIT0gXCJcIilcclxuICAgICAgICB0aGlzLnNldERhdGEudGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQXV0b2NvbXBsZXRlIEZ1bmN0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcclxuICAgICk7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB9XHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1fRmlsdGVyIEZVbmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFjdGlvbihhY3Rpb246IGFueSkge1xyXG4gICAgdGhpcy5hY3Rpb24yID0gYWN0aW9uO1xyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XHJcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZpbGVVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcclxuICAgIHRoaXMuZmlsZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0RBTCBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xyXG4gICAgICB3aWR0aDogJzQ1JScsXHJcbiAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgZGF0YTogeyBtc2c6IHggfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybFxyXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVkaWF0YmxlIG1hdGVyaWFsIEZvcm0gQXJyYXktLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdHJhY2tCeUZuKGluZGV4KSB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgQ3JlZGVudGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFkZFlvdXR1YmVWaWRlbyh2aWRfdXJsOiBhbnksIHZpZF90aXQ6IGFueSwgdmlkX2Rlc2M6IGFueSkge1xyXG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy5jcmVkZW50aWFscyBhcyBGb3JtQXJyYXk7XHJcbiAgICBjcmVkcy5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB2aWRlb191cmw6IFt2aWRfdXJsXSxcclxuICAgICAgdmlkZW9fdGl0bGU6IFt2aWRfdGl0XSxcclxuICAgICAgdmlkZW9fZGVzY3JpcHRpb246IFt2aWRfZGVzY11cclxuICAgIH0pKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURlbGV0ZSBDcmVkZXRpYWwgRnVjbnRpb25zLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGRlbGV0ZUNyZWRzKCkge1xyXG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy5jcmVkZW50aWFscyBhcyBGb3JtQXJyYXk7XHJcbiAgICBjcmVkcy5yZW1vdmVBdCgxKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQgQmxvZyBDYXRlZ29yeSBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgZ2V0QmxvZ0NhdGVnb3J5KCkge1xyXG4gICAgdmFyIGRhdGE6IGFueTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICdzb3VyY2UnOiAnYmxvZ19jYXRlZ29yeSdcclxuICAgIH07XHJcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLmJsb2dDYXRlZ29yeUFycmF5ID0gcmVzdWx0LnJlcztcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVEFHUyB2aWV3IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBnZXRUYWdzQ291bnQoKSB7XHJcbiAgICB2YXIgZGF0YTogYW55O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgJ3NvdXJjZSc6ICd0YWdzX3ZpZXcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzWzBdICE9IG51bGwpICAgICAgXHJcbiAgICAgICAgdGhpcy5vcHRpb25zPXJlc3VsdC5yZXNbMF0udGFncztcclxuICAgICAgXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVESVQgUkVTT0xWRSBGVU5DVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2luZ2xlIGRhdGEgZnJvbSByZXNvbHZlIGNhbGwgICYgc2V0IHRoZSB2YWx1ZSBmb3IgZWRpdFxyXG4gIHNldCBzaW5nbGVEYXRhKGVkaXREYXRhdmFsczogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEgPSBlZGl0RGF0YXZhbHM7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVUJNSVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICAgXHJcbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fSU1BR0UgVVBMT0FERVJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcclxuICAgICAgICB0aGlzLmltYWdlc19hcnJheSA9XHJcbiAgICAgICAgICB0aGlzLmltYWdlc19hcnJheS5jb25jYXQoe1xyXG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gdGhpcy5pbWFnZXNfYXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcblxyXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX0ZJTEUgVVBMT0FERVJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcbiAgICBpZiAodGhpcy5maWxlQ29uZmlnRGF0YSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlcykge1xyXG4gICAgICAgIHRoaXMuZmlsZV9hcnJheSA9XHJcbiAgICAgICAgICB0aGlzLmZpbGVfYXJyYXkuY29uY2F0KHtcclxuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5maWxlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxyXG4gICAgICAgICAgICBcImZpbGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS50eXBlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlID0gdGhpcy5maWxlX2FycmF5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuXHJcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xyXG5cclxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLm1hcmtBc1RvdWNoZWQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsaWQpIHtcclxuICAgICAgaWYgKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cylcclxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtc19pZCE9IG51bGwpIHsgICAgLy91cGRhdGUgcGFydFxyXG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xyXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcclxuICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wYXJhbXNfaWQsXHJcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcclxuICAgICAgICAgICAgXCJibG9nY2F0XCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2djYXQsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyxcclxuICAgICAgICAgICAgXCJtZXRhdGl0bGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUubWV0YXRpdGxlLFxyXG4gICAgICAgICAgICBcIm1ldGFkZXNjXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLm1ldGFkZXNjLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyxcclxuICAgICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5jcmVkZW50aWFscyxcclxuICAgICAgICAgICAgXCJibG9nc19pbWFnZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSxcclxuICAgICAgICAgICAgXCJibG9nc19maWxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUsXHJcbiAgICAgICAgICAgIFwiYXV0aG9yXCI6dGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYXV0aG9yXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRhOiBhbnk7XHJcbiAgICAgICAgZGF0YSA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHBhcnRcclxuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcclxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZSxcclxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFwaXNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuXHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0VXJsKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gaXMgaW52YWxpZFwiKTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4gIGdldCBvblNpZ25VcFZhbGlkYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcblxyXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xyXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNlbGVjdCBUYWdzIEF1dG9Db21wbGV0ZSBGaWVsZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc2hvd3ZhbChldmVudDogYW55KSB7XHJcbiAgICBcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVZJREVPIFVSTCBQUkVWSUVXLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcmV2aWV3X3ZpZGVvKHZpZGVvX2luZGV4KSB7XHJcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuY3JlZGVudGlhbHNbdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xFQVIgVEFHUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsZWFyVGFncyhpbmRleCkge1xyXG4gICAgdGhpcy50YWdzX2FycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgb3BlblNuYWNrQmFyKCkge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XHJcbiAgICAgIC8vIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICBwYW5lbENsYXNzOiBbJ3NuYWNrYmFyLWNvbG9yJ11cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEltYWdlIGNsZWFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsZWFyX2ltYWdlKGluZGV4KSB7XHJcbiAgICB0aGlzLmltYWdlc19hcnJheS5wb3AodGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2luZGV4XSk7XHJcbiAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEZpbGUgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xlYXJGaWxlVGFncyhpbmRleCkge1xyXG4gICAgdGhpcy5maWxlX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpbmRleF0pO1xyXG4gICAgdGhpcy5maWxlX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgdmlkZW9pZDogYW55ID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICd5b3V0dWJldGlwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IHtcclxuXHJcbn1cclxuXHJcbiJdfQ==
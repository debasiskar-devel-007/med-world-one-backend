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
                template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid && !blogManagementForm.controls['blogtitle'].errors.required\">\n                        Max length exceeded</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl formControlName=\"blogcat\"\n                      >\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\n                        </option>\n                    </select>\n\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Author</mat-label>\n                    <input matInput formControlName=\"author\" placeholder=\"Author\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Blog title is required.</mat-error>\n\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['author'].valid && !blogManagementForm.controls['author'].errors.required\">\n                        Max length exceeded</mat-error>\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n                  ></ckeditor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog title is required.</mat-error>\n\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid && !blogManagementForm.controls['description'].errors.required\">\n                    Max length exceeded</mat-error>\n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                    <!-- <mat-error\n                        *ngIf=\"!blogManagementForm.controls['priority'].valid && !blogManagementForm.controls['priority'].errors.required\">\n                        Max length exceeded</mat-error> -->\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid && !blogManagementForm.controls['metatitle'].errors.required\">\n                        Max length exceeded</mat-error>\n                </mat-form-field>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metadesc'].valid && !blogManagementForm.controls['metadesc'].errors.required\">\n                        Max length exceeded</mat-error>\n                </mat-form-field><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n        && blogManagementForm.controls['tags'].errors.required\">\n                            Tags are required.</mat-error>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                        <mat-card class=\"example-card\">\n                            <img mat-card-image [src]=\"img.img_var\">\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
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
                template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
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
                template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUluRSxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBV2hCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7O0lBNkZ6QyxZQUFvQixJQUFnQixFQUFVLFVBQXNCLEVBQzFELGNBQThCLEVBQVUsTUFBYyxFQUN0RCxXQUF3QixFQUFTLE1BQWlCLEVBQ25ELFFBQXFCO1FBSFYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0RCxnQkFBVyxHQUFYLFdBQVcs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Q0FBcUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSmxELFlBQU8sR0FBUSxFQUFFLENBQUM7SUFPbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCtPQUF5QjthQUMxQjs7OztZQWhqQnlCLFlBQVk7NENBc2pCakMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0JBQWtCOztJQUdoQiwwQkFBcUM7O0lBQ3JDLHFCQUFnRDs7O0FBY3BELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1Qsa0dBQThCOzthQUUvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogYW55O1xuICB2aWRlb3VybDogYW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdEZXNjcmlwdGlvbi4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWNsYXJhdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdTVUJNSVQnO1xuICBwdWJsaWMgYmxvZ0NhdGVnb3J5QXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBibG9nTWFuYWdlbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XG4gIG9wdGlvbnM6IGFueSA9IFsnJ107XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICB0YWdzX2FycmF5OiBhbnkgPSBbXTtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcbiAgc2V0RGF0YTogYW55O1xuICBtZXNzYWdlVGV4dDogYW55O1xuICBsaXN0VXJsOiBhbnk7XG4gIHRlc3RUYWc6IGFueSA9IFtdO1xuICBpbWFnZUNvbmZpZ0RhdGE6IGFueTtcbiAgRXJyQ29kZTogYW55O1xuICBpbWdfdmFyOiBhbnk7XG4gIGltYWdlX25hbWU6IGFueTtcbiAgaW1hZ2VfdHlwZTogYW55O1xuICBmbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlc19hcnJheTogYW55ID0gW107XG4gIGltYWdlc19hcnJheV9lZGl0OiBhbnkgPSBbXTtcbiAgZmlsZUNvbmZpZ0RhdGE6IGFueTtcbiAgZmlsZV9hcnJheTogYW55ID0gW107XG4gIGZpbGVfYXJyYXlfZWRpdDogYW55ID0gW107XG4gIGFjdGlvbjI6YW55O1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlucHV0IFNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElucHV0IHJlY2VpdmluZyBmcm9tIGFkZC9lZGl0IGFwcCBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAvL3NldHRpbmcgdGhlIGxpc3RpbmcgdXJsIGZvcm0gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0VXJsID0gKGxpc3R2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RVcmwgPSBsaXN0dmFsO1xuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXBpc2VydmljZTogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYmxvZ3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgYmxvZ2NhdDogWycnLCBdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXV0sXG4gICAgICBwcmlvcml0eTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1heExlbmd0aCgyKV1dLFxuICAgICAgc3RhdHVzOiBbJ3RydWUnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1ldGF0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1heExlbmd0aCgyMCldXSxcbiAgICAgIG1ldGFkZXNjOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxuICAgICAgYXV0aG9yOlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1heExlbmd0aCgyMCldXSxcbiAgICAgIGNyZWRlbnRpYWxzOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcbiAgICAgIHRhZ3M6IFsnJ10sXG4gICAgICBibG9nc19pbWFnZTogWycnXSxcbiAgICAgIGJsb2dzX2ZpbGU6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqT2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmdldGRhdGFFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgLyoqT2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFlvdXR1YmVWaWRlbygnJywgJycsICcnKTtcbiAgICAgIH0sIDUwMClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRCbG9nQ2F0ZWdvcnkoKTtcbiAgICB9LCA1MClcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldFRhZ3NDb3VudCgpO1xuICAgIH0sIDUwKVxuXG5cbiAgICBpZiAodGhpcy5hY3Rpb24yPT0nZWRpdCcpIHtcbiAgICAgIHRoaXMuaGVhZGVyVGV4dD1cIkVkaXQgQmxvZyBNYW5hZ2VtZW50IERhdGFcIjtcbiAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICB0aGlzLnBhcmFtc19pZCA9IHRoaXMuc2V0RGF0YS5faWQ7XG4gICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2d0aXRsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2d0aXRsZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ2NhdCddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2djYXQpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3ByaW9yaXR5J10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEucHJpb3JpdHkpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3N0YXR1cyddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnN0YXR1cyk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snbWV0YXRpdGxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEubWV0YXRpdGxlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydtZXRhZGVzYyddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLm1ldGFkZXNjKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nc19pbWFnZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nc19maWxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYXV0aG9yJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYXV0aG9yKTtcblxuXG4gICAgICAvKkltYWdlIHdvcmtzKi9cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuaW1nX3ZhciA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5iYXNlcGF0aCArIHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5pbWFnZTtcbiAgICAgICAgdGhpcy5pbWFnZV9uYW1lID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLm5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2VfdHlwZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS50eXBlO1xuICAgICAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnB1c2goeyAnaW1nX3Zhcic6IHRoaXMuaW1nX3ZhciwgJ2ltYWdlX25hbWUnOiB0aGlzLmltYWdlX25hbWUsICdpbWFnZV90eXBlJzogdGhpcy5pbWFnZV90eXBlIH0pO1xuICAgICAgICB0aGlzLmltYWdlc19hcnJheS5wdXNoKHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5iYXNlcGF0aCxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5pbWFnZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS50eXBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKkZpbGUgd29ya3MqL1xuICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlLmxlbmd0aDsgaTIrKykge1xuICAgICAgICB0aGlzLmZpbGVfYXJyYXlfZWRpdC5wdXNoKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5uYW1lKTtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5LnB1c2goe1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLmJhc2VwYXRoLFxuICAgICAgICAgIFwiZmlsZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0uZmlsZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS50eXBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIGZvciAoY29uc3QgdmlkIGluIHRoaXMuc2V0RGF0YS5jcmVkZW50aWFscykge1xuICAgICAgICB0aGlzLmFkZFlvdXR1YmVWaWRlbyh0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb191cmwsXG4gICAgICAgICAgdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fdGl0bGUsXG4gICAgICAgICAgdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fZGVzY3JpcHRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZXREYXRhLnRhZ3MgIT0gXCJcIilcbiAgICAgICAgdGhpcy5zZXREYXRhLnRhZ3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICB0aGlzLnRhZ3NfYXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQXV0b2NvbXBsZXRlIEZ1bmN0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tX0ZpbHRlciBGVW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY3Rpb24oYWN0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmFjdGlvbjIgPSBhY3Rpb247XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpbGVVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmZpbGVDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTU9EQUwgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICc0NSUnLFxuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmxcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVkaWF0YmxlIG1hdGVyaWFsIEZvcm0gQXJyYXktLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgQ3JlZGVudGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tLVxuICBhZGRZb3V0dWJlVmlkZW8odmlkX3VybDogYW55LCB2aWRfdGl0OiBhbnksIHZpZF9kZXNjOiBhbnkpIHtcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLmNyZWRlbnRpYWxzIGFzIEZvcm1BcnJheTtcbiAgICBjcmVkcy5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmlkZW9fdXJsOiBbdmlkX3VybF0sXG4gICAgICB2aWRlb190aXRsZTogW3ZpZF90aXRdLFxuICAgICAgdmlkZW9fZGVzY3JpcHRpb246IFt2aWRfZGVzY11cbiAgICB9KSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRGVsZXRlIENyZWRldGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tXG4gIGRlbGV0ZUNyZWRzKCkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMuY3JlZGVudGlhbHMgYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnJlbW92ZUF0KDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldCBCbG9nIENhdGVnb3J5IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldEJsb2dDYXRlZ29yeSgpIHtcbiAgICB2YXIgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICAnc291cmNlJzogJ2Jsb2dfY2F0ZWdvcnknXG4gICAgfTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmJsb2dDYXRlZ29yeUFycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVEFHUyB2aWV3IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFRhZ3NDb3VudCgpIHtcbiAgICB2YXIgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICAnc291cmNlJzogJ3RhZ3NfdmlldydcbiAgICB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc1swXSAhPSBudWxsKSAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnM9cmVzdWx0LnJlc1swXS50YWdzO1xuICAgICAgXG4gICAgICAgXG5cblxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVESVQgUkVTT0xWRSBGVU5DVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASW5wdXQoKSAgICAgICAgICAvL3NpbmdsZSBkYXRhIGZyb20gcmVzb2x2ZSBjYWxsICAmIHNldCB0aGUgdmFsdWUgZm9yIGVkaXRcbiAgc2V0IHNpbmdsZURhdGEoZWRpdERhdGF2YWxzOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEgPSBlZGl0RGF0YXZhbHM7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNVQk1JVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25TdWJtaXQoKSB7XG4gICAgIFxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19JTUFHRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBsb29wIGluIHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5ID1cbiAgICAgICAgICB0aGlzLmltYWdlc19hcnJheS5jb25jYXQoe1xuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IHRoaXMuaW1hZ2VzX2FycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG5cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fRklMRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG4gICAgaWYgKHRoaXMuZmlsZUNvbmZpZ0RhdGEpIHtcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheSA9XG4gICAgICAgICAgdGhpcy5maWxlX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmZpbGVDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImZpbGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSB0aGlzLmZpbGVfYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XG5cbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMpXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpO1xuICAgICAgaWYgKHRoaXMucGFyYW1zX2lkIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcbiAgICAgICAgICAgIFwiYmxvZ2NhdFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY2F0LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMsXG4gICAgICAgICAgICBcIm1ldGF0aXRsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5tZXRhdGl0bGUsXG4gICAgICAgICAgICBcIm1ldGFkZXNjXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLm1ldGFkZXNjLFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MsXG4gICAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgXCJibG9nc19pbWFnZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSxcbiAgICAgICAgICAgIFwiYmxvZ3NfZmlsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlLFxuICAgICAgICAgICAgXCJhdXRob3JcIjp0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5hdXRob3JcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYXJ0XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJibG9nY2F0XCJdXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBpc2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0VXJsKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgZWxzZVxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBpcyBpbnZhbGlkXCIpO1xuICAgIFxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG4gIGdldCBvblNpZ25VcFZhbGlkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scztcbiAgfVxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VsZWN0IFRhZ3MgQXV0b0NvbXBsZXRlIEZpZWxkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd3ZhbChldmVudDogYW55KSB7XG4gICAgXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1sndGFncyddLnBhdGNoVmFsdWUoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVklERU8gVVJMIFBSRVZJRVctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmV2aWV3X3ZpZGVvKHZpZGVvX2luZGV4KSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzW3ZpZGVvX2luZGV4XS52aWRlb191cmwpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xFQVIgVEFHUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhclRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLnRhZ3NfYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoWW91dHViZUNvbXBvbmVudCwge1xuICAgICAgLy8gZHVyYXRpb246IDE1MDAsXG4gICAgICBwYW5lbENsYXNzOiBbJ3NuYWNrYmFyLWNvbG9yJ11cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEltYWdlIGNsZWFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhcl9pbWFnZShpbmRleCkge1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaW5kZXhdKTtcbiAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CbG9ncyBGaWxlIGNsZWFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhckZpbGVUYWdzKGluZGV4KSB7XG4gICAgdGhpcy5maWxlX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpbmRleF0pO1xuICAgIHRoaXMuZmlsZV9hcnJheV9lZGl0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG59XG5cblxuXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTW9kYWwgQ29tcG9uZW50IFdvcmtzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gIHZpZGVvaWQ6IGFueSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7XG5cblxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAneW91dHViZXRpcC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZUNvbXBvbmVudCB7XG5cbn1cblxuIl19
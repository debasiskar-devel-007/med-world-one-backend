(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('file-upload'), require('@angular/material/dialog'), require('lib-listing'), require('@ckeditor/ckeditor5-angular'), require('rxjs'), require('ngx-cookie-service'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@angular/forms'), require('@angular/material'), require('rxjs/operators'), require('@ckeditor/ckeditor5-build-classic'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('blog', ['exports', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', 'file-upload', '@angular/material/dialog', 'lib-listing', '@ckeditor/ckeditor5-angular', 'rxjs', 'ngx-cookie-service', '@angular/common', '@angular/router', '@angular/common/http', '@angular/forms', '@angular/material', 'rxjs/operators', '@ckeditor/ckeditor5-build-classic', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global.blog = {}),global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.fileUpload,global.ng.material.dialog,global.libListing,global.ckeditor5Angular,global.rxjs,global.i2,global.ng.common,global.ng.router,global.ng.common.http,global.ng.forms,global.ng.material,global.rxjs.operators,global.ClassicEditor,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,fileUpload,dialog,libListing,ckeditor5Angular,rxjs,i2,common,router,i1,forms,material,operators,ClassicEditor,platformBrowser,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogService = /** @class */ (function () {
        function BlogService(_http, _authHttp, cookieService) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        BlogService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        BlogService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        BlogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BlogService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ BlogService.ngInjectableDef = i0.defineInjectable({ factory: function BlogService_Factory() { return new BlogService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: BlogService, providedIn: "root" });
        return BlogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogComponent = /** @class */ (function () {
        // ====================================================================================================
        function BlogComponent() {
            this.loader = false;
        }
        Object.defineProperty(BlogComponent.prototype, "config", {
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            set: 
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.blogListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description_html"],
                    listArray_modify_header: { "blogtitle": "Blog Title", "description": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "Search by blog title...", field: 'blogtitle' }, { label: "Search by parent category...", field: 'parentcategoryname' }],
                        selectsearch: [{ label: 'Search By status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BlogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BlogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-Blog',
                        template: "<mat-card *ngIf=\"loader==true\">\r\n    <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n    <lib-listing class=\"formfilterdiv\"\r\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\r\n        [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\r\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\r\n        [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\r\n        [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\r\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\r\n        [date_search_source]=\"blogListConfig.view\"\r\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\r\n       [search_settings]=\"blogListConfig.search_settings\"\r\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n    </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BlogComponent.ctorParameters = function () { return []; };
        BlogComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return BlogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { MatFileUploadModule } from 'angular-material-fileupload';
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddBlogComponent = /** @class */ (function () {
        // ==================================================
        function AddBlogComponent(formBuilder, blogService, router$$1, cookieService, dialog$$1) {
            this.formBuilder = formBuilder;
            this.blogService = blogService;
            this.router = router$$1;
            this.cookieService = cookieService;
            this.dialog = dialog$$1;
            /**
             * ckeditor start here
             */
            this.Editor = ClassicEditor; //for ckeditor
            //for ckeditor
            this.editorConfig = {
                placeholder: 'Type the content here!',
            };
            this.model = {
                editorData: ''
            };
            this.header_txt = "Add Blog Category";
            this.buttonText = "SUBMIT";
            this.loader = false;
            this.successMessage = "Submitted Successfully!!!";
            this.getParentCatArr = [];
        }
        /**
         * @return {?}
         */
        AddBlogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //generating the form
                this.generateForm();
                //getting the parent category
                this.getParentData();
                // --------------------------------checking the cases------------------------ 
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "SUBMIT";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "One row updated";
                        this.setDefaultValue(this.configData.defaultData);
                        this.header_txt = "EDIT";
                        break;
                }
                // --------------------------------------------------------------------------
            };
        // ================================================Default value======================================
        // ================================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddBlogComponent.prototype.setDefaultValue =
            // ================================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                this.blogCatForm.patchValue({
                    blogtitle: defaultValue.blogtitle,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                    description: defaultValue.description,
                    parent_id: defaultValue.parent_id
                });
            };
        // ==================================================================================================
        //  ============================GENERATING THE FORM=======================
        // ==================================================================================================
        //  ============================GENERATING THE FORM=======================
        /**
         * @return {?}
         */
        AddBlogComponent.prototype.generateForm =
            // ==================================================================================================
            //  ============================GENERATING THE FORM=======================
            /**
             * @return {?}
             */
            function () {
                this.blogCatForm = this.formBuilder.group({
                    blogtitle: ['', [forms.Validators.required, forms.Validators.maxLength(50)]],
                    priority: ['', [forms.Validators.required, forms.Validators.maxLength(2)]],
                    status: [true,],
                    description: ['', [forms.Validators.required, forms.Validators.maxLength(100)]],
                    parent_id: [0,]
                });
            };
        Object.defineProperty(AddBlogComponent.prototype, "config", {
            // ========================================================================
            //  Getting the input Configuration 
            set: 
            // ========================================================================
            //  Getting the input Configuration 
            /**
             * @param {?} getConfig
             * @return {?}
             */
            function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        // =========================================MODAL functions==========================================
        // =========================================MODAL functions==========================================
        /**
         * @param {?} x
         * @return {?}
         */
        AddBlogComponent.prototype.openDialog =
            // =========================================MODAL functions==========================================
            /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                this.dialogRef = this.dialog.open(Modal2, {
                    width: '250px',
                    data: { msg: x }
                });
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // ===================================================================================================
        //Getting the parent category
        // ===================================================================================================
        //Getting the parent category
        /**
         * @return {?}
         */
        AddBlogComponent.prototype.getParentData =
            // ===================================================================================================
            //Getting the parent category
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var postData = {
                    source: this.configData.source,
                    token: this.cookieService.get('jwtToken')
                };
                this.blogService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    _this.getParentCatArr = response.res;
                }));
            };
        // =========================SUBMIT function==================
        // =========================SUBMIT function==================
        /**
         * @return {?}
         */
        AddBlogComponent.prototype.onSubmit =
            // =========================SUBMIT function==================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.blogCatForm.controls['description'].markAsTouched();
                this.loader = true;
                /* stop here if form is invalid */
                if (this.blogCatForm.invalid) {
                    return;
                }
                else {
                    if (this.blogCatForm.value.status) {
                        this.blogCatForm.value.status = parseInt("1");
                    }
                    else {
                        this.blogCatForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.blogCatForm.value, this.configData.condition),
                        "sourceobj": ["parent_id"]
                    };
                    this.blogService.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            _this.openDialog(_this.successMessage);
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this.dialogRef.close();
                            }), 2000);
                            _this.router.navigate([_this.configData.callBack]);
                        }
                        else {
                            alert("Some error occurred. Please try again.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try again.");
                    }));
                }
            };
        // ==========================================================
        //Blur function
        // ==========================================================
        //Blur function
        /**
         * @param {?} val
         * @return {?}
         */
        AddBlogComponent.prototype.inputBlur =
            // ==========================================================
            //Blur function
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.blogCatForm.controls[val].markAsUntouched();
            };
        AddBlogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-add-blog',
                        template: "<!-- Form Header -->\r\n<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{header_txt}}</h2>\r\n  </mat-toolbar>\r\n\r\n  <!-- Blog Add or Edit Form Start Here -->\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form class=\"example-form\" autocomplete=\"off\" [formGroup]=\"blogCatForm\">\r\n\r\n\r\n\r\n        <!-- Blog title  -->\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Title\" formControlName=\"blogtitle\" >\r\n          <mat-error *ngIf=\"!blogCatForm.controls['blogtitle'].valid\r\n        && blogCatForm.controls['blogtitle'].errors.required\"> Blog title is required.</mat-error>\r\n          <mat-error\r\n            *ngIf=\"!blogCatForm.controls['blogtitle'].valid && !blogCatForm.controls['blogtitle'].errors.required\">\r\n            Max length exceeded</mat-error>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <!-- Priority   -->\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\r\n          <mat-error *ngIf=\"!blogCatForm.controls['priority'].valid\r\n        && blogCatForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\r\n          <mat-error\r\n            *ngIf=\"!blogCatForm.controls['priority'].valid && !blogCatForm.controls['priority'].errors.required\">\r\n            Can't have a lower priority</mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Status  -->\r\n\r\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\r\n\r\n\r\n        <!-- ckeditor using start here -->\r\n        <mat-label>Description</mat-label>\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\" ></ckeditor>\r\n        <mat-error *ngIf=\"!blogCatForm.controls['description'].valid\r\n        && blogCatForm.controls['description'].errors.required && blogCatForm.controls['description'].touched\" > Please describe.</mat-error>\r\n          <mat-error\r\n            *ngIf=\"!blogCatForm.controls['description'].valid && !blogCatForm.controls['description'].errors.required\">\r\n            Max length exceeded</mat-error>\r\n        <!-- ckeditor end here -->\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field>\r\n          <mat-label>Parent Category</mat-label>\r\n          <mat-select formControlName=\"parent_id\">\r\n            <mat-option [value]=0>\r\n              Select a category\r\n            </mat-option>\r\n            <mat-option *ngFor=\"let parCat of getParentCatArr\" value=\"{{ parCat._id }}\"> {{ parCat.blogtitle }}\r\n            </mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\r\n          (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        /** @nocollapse */
        AddBlogComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: BlogService },
                { type: router.Router },
                { type: i2.CookieService },
                { type: dialog.MatDialog }
            ];
        };
        AddBlogComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddBlogComponent;
    }());
    // ============================================MODAL COMPONENT===========================================
    var Modal2 = /** @class */ (function () {
        function Modal2(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        Modal2.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        Modal2.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
                    }] }
        ];
        /** @nocollapse */
        Modal2.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal2;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var appRoutes = [
        { path: 'add', component: AddBlogComponent },
        { path: 'edit/:id', component: AddBlogComponent },
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(appRoutes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return AppRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(_http, _authHttp, cookieService) {
            var _this = this;
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.serverUrl = result;
                }
                else {
                    _this.serverUrl = null;
                }
            }));
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.addendpointUrl = result;
                }
                else {
                    _this.addendpointUrl = null;
                }
            }));
            /*********added by souresh***********/
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.uploadEndpointUrl = result;
                }
                else {
                    _this.uploadEndpointUrl = null;
                }
            }));
            /************souresh end here**************/
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updateendpointUrl = result;
                }
                else {
                    _this.updateendpointUrl = null;
                }
            }));
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.deletesingle_endpointUrl = result;
                }
                else {
                    _this.deletesingle_endpointUrl = null;
                }
            }));
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updatestatus_single_endpointUrl = result;
                }
                else {
                    _this.updatestatus_single_endpointUrl = null;
                }
            }));
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.getdata_endpointUrl = result;
                }
                else {
                    _this.getdata_endpointUrl = null;
                }
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setServerUrl = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForServerUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearServerUrl = /**
         * @return {?}
         */
            function () {
                this.subjectForServerUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getServerUrl = /**
         * @return {?}
         */
            function () {
                return this.subjectForServerUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setaddEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForaddEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearaddEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForaddEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getaddEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForaddEndpointUrl.asObservable();
            };
        /*****added by souresh******/
        /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setuploadEndpont = /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForuploadEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearuploadEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForuploadEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getuploadEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForuploadEndpointUrl.asObservable();
            };
        /********souresh end here********/
        /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdateEndpoint = /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdateEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdateEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdateEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdateEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdateEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setdeletesingleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectFordeletesingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleardeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectFordeletesingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectFordeletesingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdatestatus_singleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdatestatusSingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdatestatusSingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setgetdataEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForGetdataEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleargetdataEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForGetdataEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdataEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForGetdataEndpointUrl.asObservable();
            };
        /**
         * @return {?}
         */
        ApiService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.addData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                console.log('in adddata apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******added by souresh************/
        /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.uploadFile = /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******souresh end here********/
        /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateData = /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.getData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.CustomRequest = /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
            function (requestdata, endpoint) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditBlogmanagementComponent = /** @class */ (function () {
        // -----------------------------------------------------------------------------------------
        function AddeditBlogmanagementComponent(http, apiservice, activatedRoute, router$$1, formBuilder, dialog$$1, snackBar$$1) {
            this.http = http;
            this.apiservice = apiservice;
            this.activatedRoute = activatedRoute;
            this.router = router$$1;
            this.formBuilder = formBuilder;
            this.dialog = dialog$$1;
            this.snackBar = snackBar$$1;
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
            this.myControl = new forms.FormControl();
            this.tags_array = [];
            this.testTag = [];
            this.flag = false;
            this.images_array = [];
            this.images_array_edit = [];
            this.file_array = [];
            this.file_array_edit = [];
            this.blogManagementForm = this.formBuilder.group({
                blogtitle: ['', [forms.Validators.required, forms.Validators.maxLength(30)]],
                blogcat: ['',],
                description: ['', [forms.Validators.required, forms.Validators.maxLength(50)]],
                priority: ['', [forms.Validators.required, forms.Validators.maxLength(2)]],
                status: ['true', forms.Validators.required],
                metatitle: ['', [forms.Validators.required, forms.Validators.maxLength(20)]],
                metadesc: ['', [forms.Validators.required, forms.Validators.maxLength(50)]],
                author: ['', [forms.Validators.required, forms.Validators.maxLength(20)]],
                credentials: this.formBuilder.array([]),
                tags: [''],
                blogs_image: [''],
                blogs_file: ['']
            });
        }
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "config", {
            // -----------------------------------------------------------------------
            // ----------------------------------------------Input Section-----------------------
            // Input receiving from add/edit app 
            set: 
            // -----------------------------------------------------------------------
            // ----------------------------------------------Input Section-----------------------
            // Input receiving from add/edit app 
            /**
             * @param {?} getConfig
             * @return {?}
             */
            function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrl
             * @return {?}
             */ function (serverUrl) {
                this.serverUrlData = (serverUrl) || '<no name set>';
                this.serverUrlData = serverUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "getDataEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.getDataEndpointData = (endpointUrlval) || '<no name set>';
                this.getDataEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "listRoute", {
            set: /**
             * @param {?} listval
             * @return {?}
             */ function (listval) {
                this.listUrl = (listval) || '<no name set>';
                this.listUrl = listval;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /**Observable start here**/
                this.apiservice.clearServerUrl();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setServerUrl(_this.serverUrlData);
                }), 50);
                this.apiservice.cleargetdataEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
                }), 50);
                this.apiservice.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setaddEndpoint(_this.addEndpointData);
                }), 50);
                /**Observable end here**/
                if (!this.activatedRoute.snapshot.params.id)
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.addYoutubeVideo('', '', '');
                    }), 500);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.getBlogCategory();
                }), 50);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.getTagsCount();
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
                    for (var i = 0; i < this.setData.blogs_image.length; i++) {
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
                    for (var i2$$1 = 0; i2$$1 < this.setData.blogs_file.length; i2$$1++) {
                        this.file_array_edit.push(this.setData.blogs_file[i2$$1].name);
                        this.file_array.push({
                            "basepath": this.setData.blogs_file[i2$$1].basepath,
                            "file": this.setData.blogs_file[i2$$1].file,
                            "name": this.setData.blogs_file[i2$$1].name,
                            "type": this.setData.blogs_file[i2$$1].type
                        });
                    }
                    for (var vid in this.setData.credentials) {
                        this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
                    }
                    if (this.setData.tags != "")
                        this.setData.tags.forEach(( /**
                         * @param {?} element
                         * @return {?}
                         */function (element) {
                            _this.tags_array.push(element);
                        }));
                }
                // ------------------------------Autocomplete Functions----------------------------------
                this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return _this._filter(value); })));
                // ------------------------------------------------------------------------------------------
            };
        // ------------------------------------_Filter FUnction----------------------------------
        // ------------------------------------_Filter FUnction----------------------------------
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype._filter =
            // ------------------------------------_Filter FUnction----------------------------------
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var filterValue = value.toLowerCase();
                return this.options.filter(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option.toLowerCase().indexOf(filterValue) === 0; }));
            };
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "action", {
            // --------------------------------------------------------------------------------------------
            set: 
            // --------------------------------------------------------------------------------------------
            /**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                this.action2 = action;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "imageUpload", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.imageConfigData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "fileUpload", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.fileConfigData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        // ------------------------------------MODAL Function--------------------------------------------
        // ------------------------------------MODAL Function--------------------------------------------
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.openDialog =
            // ------------------------------------MODAL Function--------------------------------------------
            /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                this.dialogRef = this.dialog.open(Modal, {
                    width: '45%',
                    height: '500px',
                    data: { msg: x }
                });
                // this.sanitizer.bypassSecurityTrustResourceUrl
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // ----------------------------------------------------------------------------------------------
        // ----------------------------Ediatble material Form Array-------------------
        // ----------------------------------------------------------------------------------------------
        // ----------------------------Ediatble material Form Array-------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.trackByFn =
            // ----------------------------------------------------------------------------------------------
            // ----------------------------Ediatble material Form Array-------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return index;
            };
        // -----------------------------------------------------------------------------
        // ----------------------------------Add Credential Fucntions-----------------
        // -----------------------------------------------------------------------------
        // ----------------------------------Add Credential Fucntions-----------------
        /**
         * @param {?} vid_url
         * @param {?} vid_tit
         * @param {?} vid_desc
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.addYoutubeVideo =
            // -----------------------------------------------------------------------------
            // ----------------------------------Add Credential Fucntions-----------------
            /**
             * @param {?} vid_url
             * @param {?} vid_tit
             * @param {?} vid_desc
             * @return {?}
             */
            function (vid_url, vid_tit, vid_desc) {
                /** @type {?} */
                var creds = ( /** @type {?} */(this.blogManagementForm.controls.credentials));
                creds.push(this.formBuilder.group({
                    video_url: [vid_url],
                    video_title: [vid_tit],
                    video_description: [vid_desc]
                }));
            };
        // ---------------------------------------------------------------------------
        // ---------------------------------Delete Credetial Fucntions----------------
        // ---------------------------------------------------------------------------
        // ---------------------------------Delete Credetial Fucntions----------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.deleteCreds =
            // ---------------------------------------------------------------------------
            // ---------------------------------Delete Credetial Fucntions----------------
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var creds = ( /** @type {?} */(this.blogManagementForm.controls.credentials));
                creds.removeAt(1);
            };
        // ----------------------------------------------------------------------------
        // ----------------------------------Get Blog Category Function-------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------Get Blog Category Function-------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.getBlogCategory =
            // ----------------------------------------------------------------------------
            // ----------------------------------Get Blog Category Function-------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var data;
                data = {
                    'source': 'blog_category'
                };
                this.apiservice.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    /** @type {?} */
                    var result;
                    result = response;
                    _this.blogCategoryArray = result.res;
                }));
            };
        // ----------------------------------------------------------------------------------
        // ----------------------------------TAGS view Function-------------------
        // ----------------------------------------------------------------------------------
        // ----------------------------------TAGS view Function-------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.getTagsCount =
            // ----------------------------------------------------------------------------------
            // ----------------------------------TAGS view Function-------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var data;
                data = {
                    'source': 'tags_view'
                };
                this.apiservice.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    /** @type {?} */
                    var result;
                    result = response;
                    if (result != null && result.res != null && result.res[0] != null)
                        _this.options = result.res[0].tags;
                }));
            };
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "singleData", {
            // ----------------------------------------------------------------------------------
            //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
            set: 
            // ----------------------------------------------------------------------------------
            //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
            /**
             * @param {?} editDatavals
             * @return {?}
             */
            function (editDatavals) {
                this.setData = editDatavals;
            },
            enumerable: true,
            configurable: true
        });
        // -----------------------------------------------------------------------------------
        // ---------------------------------SUBMIT----------------------------------------
        // -----------------------------------------------------------------------------------
        // ---------------------------------SUBMIT----------------------------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.onSubmit =
            // -----------------------------------------------------------------------------------
            // ---------------------------------SUBMIT----------------------------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /*__________________________IMAGE UPLOADER________________________________________*/
                if (this.imageConfigData) {
                    for (var loop in this.imageConfigData.files) {
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
                    for (var loop in this.fileConfigData.files) {
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
                    this.apiservice.addData(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.router.navigateByUrl('/' + _this.listUrl);
                        }), 3000);
                    }));
                }
                else
                    console.log("Form is invalid");
            };
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "onSignUpValidate", {
            // -----------------------------------------------------------------------------------
            get: 
            // -----------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return this.blogManagementForm.controls;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.inputBlur = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.blogManagementForm.controls[val].markAsUntouched();
            };
        // -------------------------------Select Tags AutoComplete Field-----------------------
        // -------------------------------Select Tags AutoComplete Field-----------------------
        /**
         * @param {?} event
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.showval =
            // -------------------------------Select Tags AutoComplete Field-----------------------
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.keyCode == 13) {
                    this.tags_array.push(event.target.value);
                    this.blogManagementForm.controls['tags'].patchValue("");
                    return;
                }
            };
        // ------------------------------------------------------------------------------------
        // ---------------------------------------VIDEO URL PREVIEW-----------------------------
        // ------------------------------------------------------------------------------------
        // ---------------------------------------VIDEO URL PREVIEW-----------------------------
        /**
         * @param {?} video_index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.preview_video =
            // ------------------------------------------------------------------------------------
            // ---------------------------------------VIDEO URL PREVIEW-----------------------------
            /**
             * @param {?} video_index
             * @return {?}
             */
            function (video_index) {
                this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
            };
        // -------------------------------------------------------------------------------------
        // --------------------------------------------CLEAR TAGS---------------------------------
        // -------------------------------------------------------------------------------------
        // --------------------------------------------CLEAR TAGS---------------------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.clearTags =
            // -------------------------------------------------------------------------------------
            // --------------------------------------------CLEAR TAGS---------------------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                this.tags_array.splice(index, 1);
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.openSnackBar =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                this.snackBar.openFromComponent(YoutubeComponent, {
                    // duration: 1500,
                    panelClass: ['snackbar-color']
                });
            };
        // --------------------------------------Blogs Image clear-------------------------------
        // --------------------------------------Blogs Image clear-------------------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.clear_image =
            // --------------------------------------Blogs Image clear-------------------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                this.images_array.pop(this.setData.blogs_image[index]);
                this.images_array_edit.splice(index, 1);
            };
        // ------------------------------------------------------------------------------------
        // --------------------------------------Blogs File clear-------------------------------
        // ------------------------------------------------------------------------------------
        // --------------------------------------Blogs File clear-------------------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.clearFileTags =
            // ------------------------------------------------------------------------------------
            // --------------------------------------Blogs File clear-------------------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                this.file_array.pop(this.setData.blogs_file[index]);
                this.file_array_edit.splice(index, 1);
            };
        AddeditBlogmanagementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit-blogmanagement',
                        template: "<mat-card>\r\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\r\n    </mat-toolbar>\r\n\r\n\r\n\r\n    <span class=\"formspan\">\r\n        <mat-card-content class=\"example-container\">\r\n            <form [formGroup]=\"blogManagementForm\">\r\n                <!-- ----------------------------Blog title---------------------------- -->\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\r\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid && !blogManagementForm.controls['blogtitle'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------ -->\r\n\r\n\r\n                <!-- -------------------------Blog Category---------------------------- -->\r\n                <mat-form-field>\r\n                    <mat-label>Blog Category</mat-label>\r\n                    <select matNativeControl formControlName=\"blogcat\"\r\n                      >\r\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- -------------------------Author---------------------------- -->\r\n                <mat-form-field>\r\n                    <mat-label>Author</mat-label>\r\n                    <input matInput formControlName=\"author\" placeholder=\"Author\">\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\r\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['author'].valid && !blogManagementForm.controls['author'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- ------------------------------------Blog Content------------------ -->\r\n\r\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\r\n                  ></ckeditor>\r\n                <mat-error\r\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\r\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\r\n                    Blog title is required.</mat-error>\r\n\r\n                <mat-error\r\n                    *ngIf=\"!blogManagementForm.controls['description'].valid && !blogManagementForm.controls['description'].errors.required\">\r\n                    Max length exceeded</mat-error>\r\n                <br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n\r\n\r\n                <!-- -----------------------------------Priority------------------------ -->\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\r\n                        >\r\n\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\r\n                        Priority is required.</mat-error>\r\n\r\n                    <!-- <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['priority'].valid && !blogManagementForm.controls['priority'].errors.required\">\r\n                        Max length exceeded</mat-error> -->\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Status---------------------------- -->\r\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n                <!-- --------------------------------Meta title-------------------------  -->\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\r\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\r\n                        Meta title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid && !blogManagementForm.controls['metatitle'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Meta Description------------------ -->\r\n                <mat-form-field>\r\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\r\n                      ></textarea>\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\r\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\r\n                        Meta description is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metadesc'].valid && !blogManagementForm.controls['metadesc'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field><br>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- --------------------------------------Video URL--------------------- -->\r\n                <mat-label>Attach Videos:</mat-label>\r\n                <div formArrayName=\"credentials\"\r\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\r\n                    <ng-container [formGroupName]=\"i\">\r\n                        <mat-form-field class=\"video_embed\">\r\n                            <input type=\"text\" matInput formControlName=\"video_url\">\r\n                            <span matPrefix>{{ video_prefix }}</span>\r\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\r\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\r\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\r\n                                contact_support\r\n                            </i>\r\n\r\n\r\n                        </mat-form-field>\r\n\r\n\r\n                        <!-- Video Title  -->\r\n                        <mat-form-field>\r\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\r\n                            <mat-icon matSuffix>title</mat-icon>\r\n                        </mat-form-field>\r\n                        <!-- Video Description  -->\r\n                        <mat-form-field>\r\n\r\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\r\n                                placeholder=\"Video description\"></textarea>\r\n                            <mat-icon matSuffix>description</mat-icon>\r\n                        </mat-form-field>\r\n\r\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\r\n                            <mat-icon matSuffix>add_box</mat-icon>\r\n                        </button>\r\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\r\n                                <mat-icon matSuffix>delete</mat-icon>\r\n                            </button></span>\r\n                    </ng-container>\r\n                </div><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- -----------------------------Multi Tags---------------------------- -->\r\n                <div>\r\n                    <mat-label>Tags:</mat-label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\r\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\r\n\r\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                {{option}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\r\n        && blogManagementForm.controls['tags'].errors.required\">\r\n                            Tags are required.</mat-error>\r\n\r\n                    </mat-form-field>\r\n                    <div>\r\n\r\n                        <mat-chip-list class=\"mat_chip\">\r\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\r\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\r\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\r\n                            </mat-chip>\r\n                        </mat-chip-list>\r\n\r\n                    </div>\r\n                </div>\r\n                <!-- ----------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\r\n                <h1>Blogs Image:</h1>\r\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <ng-container *ngIf=\"flag==true\">\r\n                    <!-- CARD VIEW  -->\r\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\r\n                        <mat-card class=\"example-card\">\r\n                            <img mat-card-image [src]=\"img.img_var\">\r\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\r\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\r\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\r\n\r\n                        </mat-card>\r\n                    </mat-card-content>\r\n                    <!-- ---------  -->\r\n                </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                <!-- ---------------------------------------------File Uploader--------------------- -->\r\n                <h1>Blogs File:</h1>\r\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <mat-chip-list class=\"mat_chip\">\r\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\r\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n\r\n\r\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\r\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\r\n\r\n            </form>\r\n        </mat-card-content>\r\n    </span>\r\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditBlogmanagementComponent.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: ApiService },
                { type: router.ActivatedRoute },
                { type: router.Router },
                { type: forms.FormBuilder },
                { type: material.MatDialog },
                { type: material.MatSnackBar }
            ];
        };
        AddeditBlogmanagementComponent.propDecorators = {
            config: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            getDataEndpoint: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            listRoute: [{ type: i0.Input }],
            action: [{ type: i0.Input }],
            imageUpload: [{ type: i0.Input }],
            fileUpload: [{ type: i0.Input }],
            singleData: [{ type: i0.Input }]
        };
        return AddeditBlogmanagementComponent;
    }());
    // ------------------------------------Modal Component Works------------------------------
    var Modal = /** @class */ (function () {
        function Modal(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.videoid = '';
        }
        /**
         * @return {?}
         */
        Modal.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        Modal.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\r\n<div mat-dialog-content>\r\n \r\n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \r\n  \r\n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n "
                    }] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal;
    }());
    // ---------------------------------------------------------------------------------------
    var YoutubeComponent = /** @class */ (function () {
        function YoutubeComponent() {
        }
        YoutubeComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<span class=\"log_image\">\r\n    <img src=\"/assets/images/youtube-link.jpg\">\r\n</span>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        return YoutubeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var YoutubeplayerComponent = /** @class */ (function () {
        function YoutubeplayerComponent(sanitizer) {
            this.sanitizer = sanitizer;
        }
        Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this.id = (id) || '<no name set>';
                this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YoutubeplayerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        YoutubeplayerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-youtubeplayer',
                        template: "\r\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        YoutubeplayerComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        YoutubeplayerComponent.propDecorators = {
            videoid: [{ type: i0.Input }]
        };
        return YoutubeplayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingBlogmanagementlibComponent = /** @class */ (function () {
        // ====================================================================================================
        function ListingBlogmanagementlibComponent(apiService) {
            this.apiService = apiService;
            this.loader = false;
        }
        Object.defineProperty(ListingBlogmanagementlibComponent.prototype, "config", {
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            set: 
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.blogListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description_html", "credentials", "blogs_file", "blogs_image"],
                    listArray_modify_header: {
                        "blogtitle": "Blog Title", "description": "Description",
                        "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                        "author": "Author"
                    },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "Search by blog title...", field: 'blogtitle' }, { label: "Search by author...", field: 'author' }],
                        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListingBlogmanagementlibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListingBlogmanagementlibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-listing-blogmanagementlib',
                        template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\r\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\r\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\r\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\r\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\r\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\r\n      [date_search_source]=\"blogListConfig.view\"\r\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\r\n     [search_settings]=\"blogListConfig.search_settings\"\r\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                        styles: ["body{display:none!important}"]
                    }] }
        ];
        /** @nocollapse */
        ListingBlogmanagementlibComponent.ctorParameters = function () {
            return [
                { type: ApiService }
            ];
        };
        ListingBlogmanagementlibComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListingBlogmanagementlibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogModule = /** @class */ (function () {
        function BlogModule() {
        }
        BlogModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            BlogComponent,
                            AddBlogComponent,
                            AddeditBlogmanagementComponent,
                            Modal,
                            YoutubeplayerComponent,
                            YoutubeComponent,
                            ListingBlogmanagementlibComponent, Modal2
                        ],
                        imports: [
                            DemoMaterialModule,
                            router.RouterModule,
                            AppRoutingModule,
                            libListing.ListingModule,
                            i1.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            platformBrowser.BrowserModule,
                            ckeditor5Angular.CKEditorModule,
                            libListing.ListingModule,
                            fileUpload.FileUploadModule,
                            common.CommonModule,
                        ],
                        exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                        providers: [ApiService],
                        entryComponents: [Modal2, Modal, YoutubeComponent],
                    },] }
        ];
        return BlogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BlogService = BlogService;
    exports.BlogComponent = BlogComponent;
    exports.BlogModule = BlogModule;
    exports.ɵa = AddBlogComponent;
    exports.ɵb = Modal2;
    exports.ɵc = AddeditBlogmanagementComponent;
    exports.ɵd = Modal;
    exports.ɵe = YoutubeComponent;
    exports.ɵf = ApiService;
    exports.ɵj = AppRoutingModule;
    exports.ɵh = ListingBlogmanagementlibComponent;
    exports.ɵi = DemoMaterialModule;
    exports.ɵg = YoutubeplayerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=blog.umd.js.map
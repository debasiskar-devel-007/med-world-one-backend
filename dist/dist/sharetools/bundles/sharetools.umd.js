(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-facebook'), require('@angular/common'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/platform-browser'), require('jw-angular-social-buttons')) :
    typeof define === 'function' && define.amd ? define('sharetools', ['exports', '@angular/core', 'ngx-facebook', '@angular/common', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/platform-browser', 'jw-angular-social-buttons'], factory) :
    (global = global || self, factory(global.sharetools = {}, global.ng.core, global.ngxFacebook, global.ng.common, global.ng.cdk.a11y, global.ng.cdk['drag-drop'], global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material['bottom-sheet'], global.ng.material.button, global.ng.material['button-toggle'], global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.stepper, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material['grid-list'], global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.core, global.ng.material.paginator, global.ng.material['progress-bar'], global.ng.material['progress-spinner'], global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slider, global.ng.material['slide-toggle'], global.ng.material['snack-bar'], global.ng.material.sort, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.ng.platformBrowser, global.jwAngularSocialButtons));
}(this, function (exports, core, ngxFacebook, common, a11y, dragDrop, portal, scrolling, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, stepper$1, datepicker, dialog, divider, expansion, gridList, icon, input, list, menu, core$1, paginator, progressBar, progressSpinner, radio, select, sidenav, slider, slideToggle, snackBar, sort, table$1, tabs, toolbar, tooltip, tree$1, platformBrowser, jwAngularSocialButtons) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharetoolsService = /** @class */ (function () {
        function SharetoolsService() {
        }
        SharetoolsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SharetoolsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SharetoolsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SharetoolsService_Factory() { return new SharetoolsService(); }, token: SharetoolsService, providedIn: "root" });
        return SharetoolsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharetoolsComponent = /** @class */ (function () {
        function SharetoolsComponent(fb) {
            this.fb = fb;
            this.ConfigData = [];
            /** @type {?} */
            var initParams = {
                appId: '2391556517777524',
                xfbml: true,
                version: 'v2.8'
            };
            fb.init(initParams);
        }
        Object.defineProperty(SharetoolsComponent.prototype, "Config", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.ConfigData = (val) || '<no name set>';
                this.ConfigData = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SharetoolsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} url
         * @return {?}
         */
        SharetoolsComponent.prototype.share = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            /** @type {?} */
            var params = {
                href: url,
                method: 'share'
            };
            this.fb.ui(params)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return console.log(res); }))
                .catch((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return console.error(e); }));
        };
        /**
         * @param {?} url
         * @return {?}
         */
        SharetoolsComponent.prototype.shareLink = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            window.open(url, 'newwindow', 'width=400, height=400');
        };
        SharetoolsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-sharetools',
                        template: "<span class=\"mainclass\">\n    <!-- facebook share start here -->\n    <ng-container class=\"mainclass\" *ngFor=\"let val of ConfigData \">\n        <button mat-button type=\"button\" (click)=\"share(ConfigData[0].link)\" color=\"primary\"\n            *ngIf=\"val.type =='facebook'\" class=\"social\" style=\"padding: 0;\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/facebook.png\">\n\n        </button>\n\n        <!-- twitter share start hetre -->\n        <a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?url={{ConfigData[1].link}}\"\n            target=\"_blank\">\n            <button mat-button class=\"social\" color=\"primary\" *ngIf=\"val.type =='twitter'\">\n                <img style=\"max-width: 100%;\" src=\"../assets/images/twitter.png\">\n            </button>\n        </a>\n        <!-- linkedin start hetre -->\n\n        <button class=\"linkedinbtn\" linkedin\n            (click)=\"shareLink('https://www.linkedin.com/cws/share?url='+ ConfigData[2].link)\" mat-button class=\"social\"\n            color=\"primary\" *ngIf=\"val.type =='linkedin'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/linkedin.png\">\n\n        </button>\n\n        <!-- tumbler start here -->\n        <button mat-button class=\"social\" (click)=\"shareLink('http://www.tumblr.com/share?url=' + ConfigData[3].link)\"\n            color=\"primary\" *ngIf=\"val.type =='tumbler'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/tumblr.png\">\n\n        </button>\n\n\n    </ng-container>\n\n\n\n</span>\n\n<!-- <div class=\"linkedinbtn\" class=\"col\">\n    <linkedin-share url=\"https://jasonwatmore.com\"></linkedin-share>\n</div> -->\n\n<!-- <div id=\"linkedIn\" class=\"a2a_kit\" style=\"left:0px; top:150px;\">\n    <a class=\"a2a_button_linkedin_share\" data-url=\"https://example.com/\"></a>                    \n</div> -->",
                        styles: [".mainclass{text-align:center;display:block}.social{padding:0!important;min-width:50px!important}.linkedinbtn{height:35px;min-width:35px!important;width:35px;position:relative;overflow:hidden;background:red;border-radius:50%;padding:0!important}.share-linked-in{background:#0077b5;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        SharetoolsComponent.ctorParameters = function () { return [
            { type: ngxFacebook.FacebookService }
        ]; };
        SharetoolsComponent.propDecorators = {
            Config: [{ type: core.Input }]
        };
        return SharetoolsComponent;
    }());
    if (false) {
        /** @type {?} */
        SharetoolsComponent.prototype.ConfigData;
        /**
         * @type {?}
         * @private
         */
        SharetoolsComponent.prototype.fb;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule
                        ],
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
                            core$1.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core$1.MatRippleModule,
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
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharetoolsModule = /** @class */ (function () {
        function SharetoolsModule() {
        }
        SharetoolsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SharetoolsComponent],
                        imports: [
                            MaterialModule,
                            platformBrowser.BrowserModule,
                            ngxFacebook.FacebookModule.forRoot(),
                            jwAngularSocialButtons.JwSocialButtonsModule
                        ],
                        exports: [SharetoolsComponent],
                        schemas: [
                            core.CUSTOM_ELEMENTS_SCHEMA
                        ],
                    },] }
        ];
        return SharetoolsModule;
    }());

    exports.SharetoolsComponent = SharetoolsComponent;
    exports.SharetoolsModule = SharetoolsModule;
    exports.SharetoolsService = SharetoolsService;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sharetools.umd.js.map

import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FacebookService, FacebookModule } from 'ngx-facebook';
import { CommonModule } from '@angular/common';
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
import { BrowserModule } from '@angular/platform-browser';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharetoolsService = /** @class */ (function () {
    function SharetoolsService() {
    }
    SharetoolsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SharetoolsService.ctorParameters = function () { return []; };
    /** @nocollapse */ SharetoolsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharetoolsService_Factory() { return new SharetoolsService(); }, token: SharetoolsService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'lib-sharetools',
                    template: "<span class=\"mainclass\">\n    <!-- facebook share start here -->\n    <ng-container class=\"mainclass\" *ngFor=\"let val of ConfigData \">\n        <button mat-button type=\"button\" (click)=\"share(ConfigData[0].link)\" color=\"primary\"\n            *ngIf=\"val.type =='facebook'\" class=\"social\" style=\"padding: 0;\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/facebook.png\">\n\n        </button>\n\n        <!-- twitter share start hetre -->\n        <a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?url={{ConfigData[1].link}}\"\n            target=\"_blank\">\n            <button mat-button class=\"social\" color=\"primary\" *ngIf=\"val.type =='twitter'\">\n                <img style=\"max-width: 100%;\" src=\"../assets/images/twitter.png\">\n            </button>\n        </a>\n        <!-- linkedin start hetre -->\n\n        <button class=\"linkedinbtn\" linkedin\n            (click)=\"shareLink('https://www.linkedin.com/cws/share?url='+ ConfigData[2].link)\" mat-button class=\"social\"\n            color=\"primary\" *ngIf=\"val.type =='linkedin'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/linkedin.png\">\n\n        </button>\n\n        <!-- tumbler start here -->\n        <button mat-button class=\"social\" (click)=\"shareLink('http://www.tumblr.com/share?url=' + ConfigData[3].link)\"\n            color=\"primary\" *ngIf=\"val.type =='tumbler'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/tumblr.png\">\n\n        </button>\n\n\n    </ng-container>\n\n\n\n</span>\n\n<!-- <div class=\"linkedinbtn\" class=\"col\">\n    <linkedin-share url=\"https://jasonwatmore.com\"></linkedin-share>\n</div> -->\n\n<!-- <div id=\"linkedIn\" class=\"a2a_kit\" style=\"left:0px; top:150px;\">\n    <a class=\"a2a_button_linkedin_share\" data-url=\"https://example.com/\"></a>                    \n</div> -->",
                    styles: [".mainclass{text-align:center;display:block}.social{padding:0!important;min-width:50px!important}.linkedinbtn{height:35px;min-width:35px!important;width:35px;position:relative;overflow:hidden;background:red;border-radius:50%;padding:0!important}.share-linked-in{background:#0077b5;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    SharetoolsComponent.ctorParameters = function () { return [
        { type: FacebookService }
    ]; };
    SharetoolsComponent.propDecorators = {
        Config: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ],
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
        { type: NgModule, args: [{
                    declarations: [SharetoolsComponent],
                    imports: [
                        MaterialModule,
                        BrowserModule,
                        FacebookModule.forRoot(),
                        JwSocialButtonsModule
                    ],
                    exports: [SharetoolsComponent],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                },] }
    ];
    return SharetoolsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SharetoolsComponent, SharetoolsModule, SharetoolsService, MaterialModule as ɵa };
//# sourceMappingURL=sharetools.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(router) {
        this.router = router;
        this.DataList = [];
        this.serverUrlData = '';
        this.tokenVal = '';
        this.DelEndpoint = '';
        this.editroute = '';
        this.updatendpoint = '';
        this.collectionName = '';
        this.searchingSource = '';
        this.searchingEndpoint = '';
        this.addPageRoute = '';
        this.data_skip = ["_id", "multipleemail", "bulletarray"];
        this.data_modify_header = { "membername": "Member Name", "description": "Description",
            "categoryName": "Category Name", "multiplephone": "Phone Numbers", "images": "Images"
        };
        this.search_settings = {
            textsearch: [{ label: "Search By Category Name", field: 'categoryname' },
                { label: "Search By Member Name", field: 'membername' },
                { label: "Search By E-Mail", field: 'multipleemail' }],
        };
        this.pendingmodelapplicationarray_detail_datatype = [{
                key: "images",
                value: 'image',
                fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/team/' // Image path 
            }];
    }
    Object.defineProperty(TeamListComponent.prototype, "allData", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.DataList = (val) || '<no name set>';
            this.DataList = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "Token", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.tokenVal = (val) || '<no name set>';
            this.tokenVal = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "DeleteEndpoint", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.DelEndpoint = (val) || '<no name set>';
            this.DelEndpoint = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "EditRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.editroute = (val) || '<no name set>';
            this.editroute = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "UpdateEndpoint", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.updatendpoint = (val) || '<no name set>';
            this.updatendpoint = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "SourceName", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.collectionName = (val) || '<no name set>';
            this.collectionName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "SearchSourceName", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.searchingSource = (val) || '<no name set>';
            this.searchingSource = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "SearchEndpoint", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.searchingEndpoint = (val) || '<no name set>';
            this.searchingEndpoint = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamListComponent.prototype, "AddPageRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.addPageRoute = (val) || '<no name set>';
            this.addPageRoute = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TeamListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('this.preview_detail_listing');
        console.log(this.pendingmodelapplicationarray_detail_datatype);
    };
    /**
     * @return {?}
     */
    TeamListComponent.prototype.addButton = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.addPageRoute);
    };
    TeamListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-team-list',
                    template: "\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team List</h2>\n  </mat-toolbar>\n\n<!-- add button start here -->\n<mat-toolbar class=\"buttonsetToolbar\">\n  <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Member</button>\n</mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"DataList.length>0\" \n    [datasource]=\"DataList\"\n    [jwttoken]=\"tokenVal\" \n    [skip]=\"data_skip\" \n    [modify_header_array]=\"data_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [deleteendpoint]=\"DelEndpoint\"\n    [editroute]=\"editroute\"\n    [updateendpoint]=\"updatendpoint\"\n    [sourcedata]=\"collectionName\"\n    [date_search_source]=\"searchingSource\"\n    [date_search_endpoint]=\"searchingEndpoint\"\n    [search_settings]=\"search_settings\"\n    [detail_datatype]=\"pendingmodelapplicationarray_detail_datatype\"\n   >\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                    styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    TeamListComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    TeamListComponent.propDecorators = {
        allData: [{ type: Input }],
        serverUrl: [{ type: Input }],
        Token: [{ type: Input }],
        DeleteEndpoint: [{ type: Input }],
        EditRoute: [{ type: Input }],
        UpdateEndpoint: [{ type: Input }],
        SourceName: [{ type: Input }],
        SearchSourceName: [{ type: Input }],
        SearchEndpoint: [{ type: Input }],
        AddPageRoute: [{ type: Input }]
    };
    return TeamListComponent;
}());
export { TeamListComponent };
if (false) {
    /** @type {?} */
    TeamListComponent.prototype.DataList;
    /** @type {?} */
    TeamListComponent.prototype.serverUrlData;
    /** @type {?} */
    TeamListComponent.prototype.tokenVal;
    /** @type {?} */
    TeamListComponent.prototype.DelEndpoint;
    /** @type {?} */
    TeamListComponent.prototype.editroute;
    /** @type {?} */
    TeamListComponent.prototype.updatendpoint;
    /** @type {?} */
    TeamListComponent.prototype.collectionName;
    /** @type {?} */
    TeamListComponent.prototype.searchingSource;
    /** @type {?} */
    TeamListComponent.prototype.searchingEndpoint;
    /** @type {?} */
    TeamListComponent.prototype.addPageRoute;
    /** @type {?} */
    TeamListComponent.prototype.data_skip;
    /** @type {?} */
    TeamListComponent.prototype.data_modify_header;
    /** @type {?} */
    TeamListComponent.prototype.search_settings;
    /** @type {?} */
    TeamListComponent.prototype.pendingmodelapplicationarray_detail_datatype;
    /** @type {?} */
    TeamListComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50L3RlYW0tbGlzdC90ZWFtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBdUZFLDJCQUFtQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQWpGM0IsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQUssRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUssRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBTSxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBSyxFQUFFLENBQUM7UUFDckIsbUJBQWMsR0FBSyxFQUFFLENBQUM7UUFDdEIsb0JBQWUsR0FBSyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQUssRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUssRUFBRSxDQUFDO1FBUXBCLGNBQVMsR0FBUSxDQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsdUJBQWtCLEdBQVEsRUFBRSxZQUFZLEVBQUcsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhO1lBQzNGLGNBQWMsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsUUFBUTtTQUNoRixDQUFDO1FBQ0ssb0JBQWUsR0FDbkI7WUFDRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO2dCQUN4RSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRyxLQUFLLEVBQUMsWUFBWSxFQUFDO2dCQUN0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QUNELHFDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBL0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMG5DQUF5Qzs7aUJBRTFDOzs7O2dCQU53QixNQUFNOzs7MEJBb0I1QixLQUFLOzRCQXNCTCxLQUFLO3dCQUtMLEtBQUs7aUNBTUwsS0FBSzs0QkFLTCxLQUFLO2lDQUtMLEtBQUs7NkJBS0wsS0FBSzttQ0FLTCxLQUFLO2lDQUtMLEtBQUs7K0JBS0wsS0FBSzs7SUFnQlIsd0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQTVGWSxpQkFBaUI7OztJQUM1QixxQ0FBMEI7O0lBQzFCLDBDQUErQjs7SUFDL0IscUNBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIsMENBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLDRDQUE4Qjs7SUFDOUIsOENBQWdDOztJQUNoQyx5Q0FBMkI7O0lBUTNCLHNDQUE4RDs7SUFDOUQsK0NBRUM7O0lBQ0YsNENBT0s7O0lBQ0gseUVBSUk7O0lBZ0RPLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZWFtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVhbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVhbS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZWFtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBEYXRhTGlzdDogYW55ID0gW107XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHRva2VuVmFsOmFueT0nJztcbiAgcHVibGljIERlbEVuZHBvaW50OmFueT0nJztcbiAgcHVibGljIGVkaXRyb3V0ZSA6YW55PScnO1xuICBwdWJsaWMgdXBkYXRlbmRwb2ludDphbnk9Jyc7XG4gIHB1YmxpYyBjb2xsZWN0aW9uTmFtZTphbnk9Jyc7XG4gIHB1YmxpYyBzZWFyY2hpbmdTb3VyY2U6YW55PScnO1xuICBwdWJsaWMgc2VhcmNoaW5nRW5kcG9pbnQ6YW55PScnO1xuICBwdWJsaWMgYWRkUGFnZVJvdXRlOmFueT0nJztcblxuIFxuICBASW5wdXQoKSAgICAvL2dldHRpbmcgYWxsIGRhdGEgdmlhIHJlc29sdmUgY2FsbCBmcm9tIGFwcFxuICBzZXQgYWxsRGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuRGF0YUxpc3QgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5EYXRhTGlzdCA9IHZhbDtcbiAgfVxuICBwdWJsaWMgZGF0YV9za2lwOiBhbnkgPSBbXCJfaWRcIixcIm11bHRpcGxlZW1haWxcIixcImJ1bGxldGFycmF5XCJdO1xuICBwdWJsaWMgZGF0YV9tb2RpZnlfaGVhZGVyOiBhbnkgPSB7IFwibWVtYmVybmFtZVwiIDogXCJNZW1iZXIgTmFtZVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uXCIsXG4gIFwiY2F0ZWdvcnlOYW1lXCI6XCJDYXRlZ29yeSBOYW1lXCIsXCJtdWx0aXBsZXBob25lXCI6XCJQaG9uZSBOdW1iZXJzXCIsXCJpbWFnZXNcIjpcIkltYWdlc1wiXG4gfTtcbiBwdWJsaWMgc2VhcmNoX3NldHRpbmdzOiBhbnkgPVxuICAgIHtcbiAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnY2F0ZWdvcnluYW1lJyB9LFxuICAgICAgeyBsYWJlbDogXCJTZWFyY2ggQnkgTWVtYmVyIE5hbWVcIiAsIGZpZWxkOidtZW1iZXJuYW1lJ30sXG4gICAgICB7IGxhYmVsOiBcIlNlYXJjaCBCeSBFLU1haWxcIiAsIGZpZWxkOidtdWx0aXBsZWVtYWlsJ31dLFxuICAgICAgLy8gc2VsZWN0c2VhcmNoOlt7bGFiZWw6J1NlYXJjaCBCeSBlbWFpbCcsZmllbGQ6Jyd9XSxcbiAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IEUtTWFpbHNcIixmaWVsZDonbXVsdGlwbGVlbWFpbCd9XVxuICAgIH07XG4gICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTphbnk9W3tcbiAgICAgIGtleTogXCJpbWFnZXNcIixcbiAgICAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZWFtLycgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICB9XTtcbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgICAgIC8vZ2V0dGluZyB0b2tlbiBmcm9tIGFwcGxpY2F0aW9uXG4gIHNldCBUb2tlbih2YWw6YW55KXtcbiAgICB0aGlzLnRva2VuVmFsID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudG9rZW5WYWwgPSB2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAvL2dldHRpbmcgZGVsZXRlIGVuZHBvaW50IGZyb20gYXBwbGljYXRpb25cbiAgc2V0IERlbGV0ZUVuZHBvaW50KHZhbDphbnkpe1xuICAgIHRoaXMuRGVsRW5kcG9pbnQgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5EZWxFbmRwb2ludCA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyBlZGl0IHJvdXRlIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IEVkaXRSb3V0ZSh2YWw6YW55KXtcbiAgICB0aGlzLmVkaXRyb3V0ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmVkaXRyb3V0ZSA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyB0aGUgdXBkYXRlIGVuZHBvaW50IGZyb20gYXBwbGljYXRpb25cbiAgc2V0IFVwZGF0ZUVuZHBvaW50KHZhbDphbnkpe1xuICAgIHRoaXMudXBkYXRlbmRwb2ludCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnVwZGF0ZW5kcG9pbnQgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAgICAvL2dldHRpbmcgdGhlIHNvdXJjZSBuYW1lIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IFNvdXJjZU5hbWUodmFsOmFueSl7XG4gICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gdmFsO1xuICB9IFxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyB0aGUgc2VhcmNoaW5nIGVuZHBvaW50IGZyb20gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBTZWFyY2hTb3VyY2VOYW1lKHZhbDphbnkpe1xuICAgIHRoaXMuc2VhcmNoaW5nU291cmNlID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VhcmNoaW5nU291cmNlID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAvL2dldHRpbmcgdGhlIHNlYXJjaCBlbmRwb2ludCBmcm9tIGVuZHBvaW50XG4gIHNldCBTZWFyY2hFbmRwb2ludCh2YWw6YW55KXtcbiAgICB0aGlzLnNlYXJjaGluZ0VuZHBvaW50ID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VhcmNoaW5nRW5kcG9pbnQgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAvL2dldHRpbmcgdGhlIGFkZCBwYWdlIHJvdXRlIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IEFkZFBhZ2VSb3V0ZSh2YWw6YW55KXtcbiAgICB0aGlzLmFkZFBhZ2VSb3V0ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZFBhZ2VSb3V0ZSA9IHZhbDtcbiAgfVxuIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5wcmV2aWV3X2RldGFpbF9saXN0aW5nJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlKVxuICB9XG4gIGFkZEJ1dHRvbigpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5hZGRQYWdlUm91dGUpO1xuICB9XG5cbn1cbiJdfQ==
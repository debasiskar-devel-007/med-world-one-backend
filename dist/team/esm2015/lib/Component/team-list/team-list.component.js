/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class TeamListComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set allData(val) {
        this.DataList = (val) || '<no name set>';
        this.DataList = val;
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverUrlData = (serverUrlval) || '<no name set>';
        this.serverUrlData = serverUrlval;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Token(val) {
        this.tokenVal = (val) || '<no name set>';
        this.tokenVal = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set DeleteEndpoint(val) {
        this.DelEndpoint = (val) || '<no name set>';
        this.DelEndpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set EditRoute(val) {
        this.editroute = (val) || '<no name set>';
        this.editroute = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set UpdateEndpoint(val) {
        this.updatendpoint = (val) || '<no name set>';
        this.updatendpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SourceName(val) {
        this.collectionName = (val) || '<no name set>';
        this.collectionName = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchSourceName(val) {
        this.searchingSource = (val) || '<no name set>';
        this.searchingSource = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchEndpoint(val) {
        this.searchingEndpoint = (val) || '<no name set>';
        this.searchingEndpoint = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set AddPageRoute(val) {
        this.addPageRoute = (val) || '<no name set>';
        this.addPageRoute = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('this.preview_detail_listing');
        console.log(this.pendingmodelapplicationarray_detail_datatype);
    }
    /**
     * @return {?}
     */
    addButton() {
        this.router.navigateByUrl('/' + this.addPageRoute);
    }
}
TeamListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-team-list',
                template: "\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team List</h2>\n  </mat-toolbar>\n\n<!-- add button start here -->\n<mat-toolbar class=\"buttonsetToolbar\">\n  <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Member</button>\n</mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"DataList.length>0\" \n    [datasource]=\"DataList\"\n    [jwttoken]=\"tokenVal\" \n    [skip]=\"data_skip\" \n    [modify_header_array]=\"data_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [deleteendpoint]=\"DelEndpoint\"\n    [editroute]=\"editroute\"\n    [updateendpoint]=\"updatendpoint\"\n    [sourcedata]=\"collectionName\"\n    [date_search_source]=\"searchingSource\"\n    [date_search_endpoint]=\"searchingEndpoint\"\n    [search_settings]=\"search_settings\"\n    [detail_datatype]=\"pendingmodelapplicationarray_detail_datatype\"\n   >\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
            }] }
];
/** @nocollapse */
TeamListComponent.ctorParameters = () => [
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50L3RlYW0tbGlzdC90ZWFtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFrRjVCLFlBQW1CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBakYzQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBSyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBSyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFNLEVBQUUsQ0FBQztRQUNsQixrQkFBYSxHQUFLLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFLLEVBQUUsQ0FBQztRQUN0QixvQkFBZSxHQUFLLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBSyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBSyxFQUFFLENBQUM7UUFRcEIsY0FBUyxHQUFRLENBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCx1QkFBa0IsR0FBUSxFQUFFLFlBQVksRUFBRyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWE7WUFDM0YsY0FBYyxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxRQUFRO1NBQ2hGLENBQUM7UUFDSyxvQkFBZSxHQUNuQjtZQUNFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7Z0JBQ3hFLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFHLEtBQUss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bkNBQXlDOzthQUUxQzs7OztZQU53QixNQUFNOzs7c0JBb0I1QixLQUFLO3dCQXNCTCxLQUFLO29CQUtMLEtBQUs7NkJBTUwsS0FBSzt3QkFLTCxLQUFLOzZCQUtMLEtBQUs7eUJBS0wsS0FBSzsrQkFLTCxLQUFLOzZCQUtMLEtBQUs7MkJBS0wsS0FBSzs7OztJQTNFTixxQ0FBMEI7O0lBQzFCLDBDQUErQjs7SUFDL0IscUNBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIsMENBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLDRDQUE4Qjs7SUFDOUIsOENBQWdDOztJQUNoQyx5Q0FBMkI7O0lBUTNCLHNDQUE4RDs7SUFDOUQsK0NBRUM7O0lBQ0YsNENBT0s7O0lBQ0gseUVBSUk7O0lBZ0RPLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZWFtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVhbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVhbS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZWFtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBEYXRhTGlzdDogYW55ID0gW107XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHRva2VuVmFsOmFueT0nJztcbiAgcHVibGljIERlbEVuZHBvaW50OmFueT0nJztcbiAgcHVibGljIGVkaXRyb3V0ZSA6YW55PScnO1xuICBwdWJsaWMgdXBkYXRlbmRwb2ludDphbnk9Jyc7XG4gIHB1YmxpYyBjb2xsZWN0aW9uTmFtZTphbnk9Jyc7XG4gIHB1YmxpYyBzZWFyY2hpbmdTb3VyY2U6YW55PScnO1xuICBwdWJsaWMgc2VhcmNoaW5nRW5kcG9pbnQ6YW55PScnO1xuICBwdWJsaWMgYWRkUGFnZVJvdXRlOmFueT0nJztcblxuIFxuICBASW5wdXQoKSAgICAvL2dldHRpbmcgYWxsIGRhdGEgdmlhIHJlc29sdmUgY2FsbCBmcm9tIGFwcFxuICBzZXQgYWxsRGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuRGF0YUxpc3QgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5EYXRhTGlzdCA9IHZhbDtcbiAgfVxuICBwdWJsaWMgZGF0YV9za2lwOiBhbnkgPSBbXCJfaWRcIixcIm11bHRpcGxlZW1haWxcIixcImJ1bGxldGFycmF5XCJdO1xuICBwdWJsaWMgZGF0YV9tb2RpZnlfaGVhZGVyOiBhbnkgPSB7IFwibWVtYmVybmFtZVwiIDogXCJNZW1iZXIgTmFtZVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uXCIsXG4gIFwiY2F0ZWdvcnlOYW1lXCI6XCJDYXRlZ29yeSBOYW1lXCIsXCJtdWx0aXBsZXBob25lXCI6XCJQaG9uZSBOdW1iZXJzXCIsXCJpbWFnZXNcIjpcIkltYWdlc1wiXG4gfTtcbiBwdWJsaWMgc2VhcmNoX3NldHRpbmdzOiBhbnkgPVxuICAgIHtcbiAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnY2F0ZWdvcnluYW1lJyB9LFxuICAgICAgeyBsYWJlbDogXCJTZWFyY2ggQnkgTWVtYmVyIE5hbWVcIiAsIGZpZWxkOidtZW1iZXJuYW1lJ30sXG4gICAgICB7IGxhYmVsOiBcIlNlYXJjaCBCeSBFLU1haWxcIiAsIGZpZWxkOidtdWx0aXBsZWVtYWlsJ31dLFxuICAgICAgLy8gc2VsZWN0c2VhcmNoOlt7bGFiZWw6J1NlYXJjaCBCeSBlbWFpbCcsZmllbGQ6Jyd9XSxcbiAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IEUtTWFpbHNcIixmaWVsZDonbXVsdGlwbGVlbWFpbCd9XVxuICAgIH07XG4gICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTphbnk9W3tcbiAgICAgIGtleTogXCJpbWFnZXNcIixcbiAgICAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZWFtLycgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICB9XTtcbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgICAgIC8vZ2V0dGluZyB0b2tlbiBmcm9tIGFwcGxpY2F0aW9uXG4gIHNldCBUb2tlbih2YWw6YW55KXtcbiAgICB0aGlzLnRva2VuVmFsID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudG9rZW5WYWwgPSB2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAvL2dldHRpbmcgZGVsZXRlIGVuZHBvaW50IGZyb20gYXBwbGljYXRpb25cbiAgc2V0IERlbGV0ZUVuZHBvaW50KHZhbDphbnkpe1xuICAgIHRoaXMuRGVsRW5kcG9pbnQgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5EZWxFbmRwb2ludCA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyBlZGl0IHJvdXRlIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IEVkaXRSb3V0ZSh2YWw6YW55KXtcbiAgICB0aGlzLmVkaXRyb3V0ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmVkaXRyb3V0ZSA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyB0aGUgdXBkYXRlIGVuZHBvaW50IGZyb20gYXBwbGljYXRpb25cbiAgc2V0IFVwZGF0ZUVuZHBvaW50KHZhbDphbnkpe1xuICAgIHRoaXMudXBkYXRlbmRwb2ludCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnVwZGF0ZW5kcG9pbnQgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAgICAvL2dldHRpbmcgdGhlIHNvdXJjZSBuYW1lIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IFNvdXJjZU5hbWUodmFsOmFueSl7XG4gICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gdmFsO1xuICB9IFxuICBASW5wdXQoKSAgICAgIC8vZ2V0dGluZyB0aGUgc2VhcmNoaW5nIGVuZHBvaW50IGZyb20gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBTZWFyY2hTb3VyY2VOYW1lKHZhbDphbnkpe1xuICAgIHRoaXMuc2VhcmNoaW5nU291cmNlID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VhcmNoaW5nU291cmNlID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAvL2dldHRpbmcgdGhlIHNlYXJjaCBlbmRwb2ludCBmcm9tIGVuZHBvaW50XG4gIHNldCBTZWFyY2hFbmRwb2ludCh2YWw6YW55KXtcbiAgICB0aGlzLnNlYXJjaGluZ0VuZHBvaW50ID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VhcmNoaW5nRW5kcG9pbnQgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAvL2dldHRpbmcgdGhlIGFkZCBwYWdlIHJvdXRlIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IEFkZFBhZ2VSb3V0ZSh2YWw6YW55KXtcbiAgICB0aGlzLmFkZFBhZ2VSb3V0ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZFBhZ2VSb3V0ZSA9IHZhbDtcbiAgfVxuIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5wcmV2aWV3X2RldGFpbF9saXN0aW5nJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlKVxuICB9XG4gIGFkZEJ1dHRvbigpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5hZGRQYWdlUm91dGUpO1xuICB9XG5cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var ListTeamComponent = /** @class */ (function () {
    function ListTeamComponent(router) {
        this.router = router;
        this.alldata = [];
        this.addPageVal = '';
        this.searchingendpoint = '';
        this.sourcenameViaapp = '';
        this.tokenVal = '';
        this.deleteendpointVal = '';
        this.addupdate = '';
        this.serverUrlData = '';
        this.editRouteval = '';
        this.alldata_skip = ["_id", "created_at"];
        this.alldata_modify_header = {
            "categoryName": "Category Name", "description": "Description",
            "rolename": "Role Name", "status": "Status", "role": "Role"
        };
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
        this.search_settings = {
            selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
            textsearch: [{ label: "Search By Category Name", field: 'categoryName' }],
        };
    }
    Object.defineProperty(ListTeamComponent.prototype, "TeamData", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.alldata = (val) || '<no name set>';
            this.alldata = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "EditRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.editRouteval = (val) || '<no name set>';
            this.editRouteval = val;
            console.log(this.editRouteval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "addButtonRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.addPageVal = (val) || '<no name set>';
            this.addPageVal = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "manageButtonRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.manageRoute = (val) || '<no name set>';
            this.manageRoute = (val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "UpdateRoute", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.addupdate = (val) || '<no name set>';
            this.addupdate = val;
            console.log(this.addupdate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "Token", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.tokenVal = (val) || '<no name set>';
            this.tokenVal = val;
            console.log(this.tokenVal);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "SourceName", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.sourcenameViaapp = (val) || '<no name set>';
            this.sourcenameViaapp = val;
            console.log(this.sourcenameViaapp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "SearchEndpoint", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.searchingendpoint = (val) || '<no name set>';
            this.searchingendpoint = val;
            console.log(this.searchingendpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "DeleteEndpoint", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.deleteendpointVal = (val) || '<no name set>';
            this.deleteendpointVal = val;
            console.log(this.deleteendpointVal);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTeamComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
            console.log(this.serverUrlData);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListTeamComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ListTeamComponent.prototype.addButton = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.addPageVal);
    };
    /**
     * @return {?}
     */
    ListTeamComponent.prototype.manageTeamButton = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.manageRoute);
    };
    ListTeamComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-list-team',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management List</h2>\n  </mat-toolbar>\n\n  <!-- add button start here -->\n  <mat-toolbar class=\"buttonsetToolbar\">\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Category</button>\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"manageTeamButton()\" >Manage Team</button>\n\n  </mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n \n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"alldata.length>0\" \n    [datasource]=\"alldata\"\n    [sourcedata]=\"sourcenameViaapp\"\n    [skip]=\"alldata_skip\" \n    [modify_header_array]=\"alldata_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [editroute]=\"editRouteval\"\n    [jwttoken]=\"tokenVal\" \n    [statusarr]=\"status\" \n    [updateendpoint]=\"addupdate\"\n    [deleteendpoint]=\"deleteendpointVal\"\n    [jwttoken]=\"tokenVal\"\n    [date_search_endpoint]=\"searchingendpoint\"\n    [date_search_source]=\"sourcenameViaapp\"\n    [search_settings]=\"search_settings\">\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                    styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    ListTeamComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    ListTeamComponent.propDecorators = {
        TeamData: [{ type: Input }],
        EditRoute: [{ type: Input }],
        addButtonRoute: [{ type: Input }],
        manageButtonRoute: [{ type: Input }],
        UpdateRoute: [{ type: Input }],
        Token: [{ type: Input }],
        SourceName: [{ type: Input }],
        SearchEndpoint: [{ type: Input }],
        DeleteEndpoint: [{ type: Input }],
        serverUrl: [{ type: Input }]
    };
    return ListTeamComponent;
}());
export { ListTeamComponent };
if (false) {
    /** @type {?} */
    ListTeamComponent.prototype.alldata;
    /** @type {?} */
    ListTeamComponent.prototype.addPageVal;
    /** @type {?} */
    ListTeamComponent.prototype.searchingendpoint;
    /** @type {?} */
    ListTeamComponent.prototype.sourcenameViaapp;
    /** @type {?} */
    ListTeamComponent.prototype.tokenVal;
    /** @type {?} */
    ListTeamComponent.prototype.deleteendpointVal;
    /** @type {?} */
    ListTeamComponent.prototype.addupdate;
    /** @type {?} */
    ListTeamComponent.prototype.serverUrlData;
    /** @type {?} */
    ListTeamComponent.prototype.editRouteval;
    /** @type {?} */
    ListTeamComponent.prototype.manageRoute;
    /** @type {?} */
    ListTeamComponent.prototype.alldata_skip;
    /** @type {?} */
    ListTeamComponent.prototype.alldata_modify_header;
    /** @type {?} */
    ListTeamComponent.prototype.status;
    /** @type {?} */
    ListTeamComponent.prototype.search_settings;
    /** @type {?} */
    ListTeamComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10ZWFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ2F0ZWdvcnktTWFuYWdlbWVudC9saXN0LXRlYW0vbGlzdC10ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFrQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RDtJQXNGRSwyQkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFoRjFCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsaUJBQVksR0FBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxQywwQkFBcUIsR0FBUTtZQUNsQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhO1lBQzdELFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLEVBQUcsTUFBTTtTQUM1RCxDQUFDO1FBQ0ssV0FBTSxHQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0Usb0JBQWUsR0FDcEI7WUFDRSxZQUFZLEVBQUUsQ0FBQyxFQUFF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MkRRLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0LXRlYW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC10ZWFtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC10ZWFtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0VGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhbGxkYXRhOiBhbnkgPSBbXTtcbiAgcHVibGljIGFkZFBhZ2VWYWw6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VhcmNoaW5nZW5kcG9pbnQ6IGFueSA9ICcnO1xuICBwdWJsaWMgc291cmNlbmFtZVZpYWFwcDogYW55ID0gJyc7XG4gIHB1YmxpYyB0b2tlblZhbDogYW55ID0gJyc7XG4gIHB1YmxpYyBkZWxldGVlbmRwb2ludFZhbDogYW55ID0gJyc7XG4gIHB1YmxpYyBhZGR1cGRhdGU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVXJsRGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyBlZGl0Um91dGV2YWw6IGFueSA9ICcnO1xuICBwdWJsaWMgbWFuYWdlUm91dGU6IGFueTtcbiAgcHVibGljIGFsbGRhdGFfc2tpcDogYW55ID0gW1wiX2lkXCIsIFwiY3JlYXRlZF9hdFwiXTtcbiAgcHVibGljIGFsbGRhdGFfbW9kaWZ5X2hlYWRlcjogYW55ID0ge1xuICAgIFwiY2F0ZWdvcnlOYW1lXCI6IFwiQ2F0ZWdvcnkgTmFtZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgICBcInJvbGVuYW1lXCI6IFwiUm9sZSBOYW1lXCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsXCJyb2xlXCIgOiBcIlJvbGVcIlxuICB9O1xuICBwdWJsaWMgc3RhdHVzOiBhbnkgPSBbeyB2YWw6IDEsICduYW1lJzogJ0FjdGl2ZScgfSwgeyB2YWw6IDAsICduYW1lJzogJ0luYWN0aXZlJyB9XTtcbiAgcHVibGljIHNlYXJjaF9zZXR0aW5nczogYW55ID1cbiAgICB7XG4gICAgICBzZWxlY3RzZWFyY2g6IFt7IGxhYmVsOiAnU2VhcmNoIEJ5IFN0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiB0aGlzLnN0YXR1cyB9XSxcbiAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnY2F0ZWdvcnlOYW1lJyB9XSxcblxuICAgIH07XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9nZXR0aW5nIGFsbCBkYXRhIGxpc3QgdmlhIHJlc29sdmUgY2FsbCBmcm9tIGFwcFxuICBzZXQgVGVhbURhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmFsbGRhdGEgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hbGxkYXRhID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vZ2V0dGluZyBlZGl0IHBhZ2Ugcm91dGUgZnJvbSBhcHBcbiAgc2V0IEVkaXRSb3V0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZWRpdFJvdXRldmFsID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZWRpdFJvdXRldmFsID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdFJvdXRldmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYWRkQnV0dG9uUm91dGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZFBhZ2VWYWwgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRQYWdlVmFsID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAvL21hbmFnZSB0ZWFtIGJ1dHRvbiByb3V0ZVxuICBzZXQgbWFuYWdlQnV0dG9uUm91dGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLm1hbmFnZVJvdXRlID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubWFuYWdlUm91dGUgPSAodmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgVXBkYXRlUm91dGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZHVwZGF0ZSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZHVwZGF0ZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFkZHVwZGF0ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IFRva2VuKHZhbDogYW55KSB7XG4gICAgdGhpcy50b2tlblZhbCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnRva2VuVmFsID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudG9rZW5WYWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBTb3VyY2VOYW1lKHZhbDogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VuYW1lVmlhYXBwID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc291cmNlbmFtZVZpYWFwcCA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNvdXJjZW5hbWVWaWFhcHApO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBTZWFyY2hFbmRwb2ludCh2YWw6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoaW5nZW5kcG9pbnQgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZWFyY2hpbmdlbmRwb2ludCA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGluZ2VuZHBvaW50KTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgRGVsZXRlRW5kcG9pbnQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50VmFsID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnRWYWwgPSB2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5kZWxldGVlbmRwb2ludFZhbCk7XG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybERhdGEpO1xuICB9XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgYWRkQnV0dG9uKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5hZGRQYWdlVmFsKTtcbiAgfVxuICBtYW5hZ2VUZWFtQnV0dG9uKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5tYW5hZ2VSb3V0ZSk7XG4gIH1cbn1cbiJdfQ==
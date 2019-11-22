/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class ListTeamComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set TeamData(val) {
        this.alldata = (val) || '<no name set>';
        this.alldata = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set EditRoute(val) {
        this.editRouteval = (val) || '<no name set>';
        this.editRouteval = val;
        console.log(this.editRouteval);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set addButtonRoute(val) {
        this.addPageVal = (val) || '<no name set>';
        this.addPageVal = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set manageButtonRoute(val) {
        this.manageRoute = (val) || '<no name set>';
        this.manageRoute = (val);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set UpdateRoute(val) {
        this.addupdate = (val) || '<no name set>';
        this.addupdate = val;
        console.log(this.addupdate);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Token(val) {
        this.tokenVal = (val) || '<no name set>';
        this.tokenVal = val;
        console.log(this.tokenVal);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SourceName(val) {
        this.sourcenameViaapp = (val) || '<no name set>';
        this.sourcenameViaapp = val;
        console.log(this.sourcenameViaapp);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set SearchEndpoint(val) {
        this.searchingendpoint = (val) || '<no name set>';
        this.searchingendpoint = val;
        console.log(this.searchingendpoint);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set DeleteEndpoint(val) {
        this.deleteendpointVal = (val) || '<no name set>';
        this.deleteendpointVal = val;
        console.log(this.deleteendpointVal);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverUrlData = (serverUrlval) || '<no name set>';
        this.serverUrlData = serverUrlval;
        console.log(this.serverUrlData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    addButton() {
        this.router.navigateByUrl('/' + this.addPageVal);
    }
    /**
     * @return {?}
     */
    manageTeamButton() {
        this.router.navigateByUrl('/' + this.manageRoute);
    }
}
ListTeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-list-team',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Team Category Management List</h2>\n  </mat-toolbar>\n\n  <!-- add button start here -->\n  <mat-toolbar class=\"buttonsetToolbar\">\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\" >Add Team Category</button>\n    <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"manageTeamButton()\" >Manage Team</button>\n\n  </mat-toolbar>\n<!-- adding button end here -->\n<mat-card-content class=\"listing-content-admin\">\n \n  <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"alldata.length>0\" \n    [datasource]=\"alldata\"\n    [sourcedata]=\"sourcenameViaapp\"\n    [skip]=\"alldata_skip\" \n    [modify_header_array]=\"alldata_modify_header\" \n    [apiurl]=\"serverUrlData\" \n    [editroute]=\"editRouteval\"\n    [jwttoken]=\"tokenVal\" \n    [statusarr]=\"status\" \n    [updateendpoint]=\"addupdate\"\n    [deleteendpoint]=\"deleteendpointVal\"\n    [jwttoken]=\"tokenVal\"\n    [date_search_endpoint]=\"searchingendpoint\"\n    [date_search_source]=\"sourcenameViaapp\"\n    [search_settings]=\"search_settings\">\n</lib-listing>\n</mat-card-content>\n</mat-card>",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
            }] }
];
/** @nocollapse */
ListTeamComponent.ctorParameters = () => [
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10ZWFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RlYW0vIiwic291cmNlcyI6WyJsaWIvQ2F0ZWdvcnktTWFuYWdlbWVudC9saXN0LXRlYW0vbGlzdC10ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFrQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBaUY1QixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhGMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUM1QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzFDLDBCQUFxQixHQUFRO1lBQ2xDLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWE7WUFDN0QsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRyxNQUFNO1NBQzVELENBQUM7UUFDSyxXQUFNLEdBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3RSxvQkFBZSxHQUNwQjtZQUNF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LENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBL0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsaXhDQUF5Qzs7YUFFMUM7Ozs7WUFOd0IsTUFBTTs7O3VCQStCNUIsS0FBSzt3QkFLTCxLQUFLOzZCQU1MLEtBQUs7Z0NBS0wsS0FBSzswQkFLTCxLQUFLO29CQU1MLEtBQUs7eUJBTUwsS0FBSzs2QkFNTCxLQUFLOzZCQU1MLEtBQUs7d0JBTUwsS0FBSzs7OztJQTFFTixvQ0FBeUI7O0lBQ3pCLHVDQUE0Qjs7SUFDNUIsOENBQW1DOztJQUNuQyw2Q0FBa0M7O0lBQ2xDLHFDQUEwQjs7SUFDMUIsOENBQW1DOztJQUNuQyxzQ0FBMkI7O0lBQzNCLDBDQUErQjs7SUFDL0IseUNBQThCOztJQUM5Qix3Q0FBd0I7O0lBQ3hCLHlDQUFpRDs7SUFDakQsa0RBR0U7O0lBQ0YsbUNBQW9GOztJQUNwRiw0Q0FLSTs7SUEyRFEsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3QtdGVhbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LXRlYW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LXRlYW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RUZWFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGFsbGRhdGE6IGFueSA9IFtdO1xuICBwdWJsaWMgYWRkUGFnZVZhbDogYW55ID0gJyc7XG4gIHB1YmxpYyBzZWFyY2hpbmdlbmRwb2ludDogYW55ID0gJyc7XG4gIHB1YmxpYyBzb3VyY2VuYW1lVmlhYXBwOiBhbnkgPSAnJztcbiAgcHVibGljIHRva2VuVmFsOiBhbnkgPSAnJztcbiAgcHVibGljIGRlbGV0ZWVuZHBvaW50VmFsOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZHVwZGF0ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIGVkaXRSb3V0ZXZhbDogYW55ID0gJyc7XG4gIHB1YmxpYyBtYW5hZ2VSb3V0ZTogYW55O1xuICBwdWJsaWMgYWxsZGF0YV9za2lwOiBhbnkgPSBbXCJfaWRcIiwgXCJjcmVhdGVkX2F0XCJdO1xuICBwdWJsaWMgYWxsZGF0YV9tb2RpZnlfaGVhZGVyOiBhbnkgPSB7XG4gICAgXCJjYXRlZ29yeU5hbWVcIjogXCJDYXRlZ29yeSBOYW1lXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgIFwicm9sZW5hbWVcIjogXCJSb2xlIE5hbWVcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIixcInJvbGVcIiA6IFwiUm9sZVwiXG4gIH07XG4gIHB1YmxpYyBzdGF0dXM6IGFueSA9IFt7IHZhbDogMSwgJ25hbWUnOiAnQWN0aXZlJyB9LCB7IHZhbDogMCwgJ25hbWUnOiAnSW5hY3RpdmUnIH1dO1xuICBwdWJsaWMgc2VhcmNoX3NldHRpbmdzOiBhbnkgPVxuICAgIHtcbiAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IHRoaXMuc3RhdHVzIH1dLFxuICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIEJ5IENhdGVnb3J5IE5hbWVcIiwgZmllbGQ6ICdjYXRlZ29yeU5hbWUnIH1dLFxuXG4gICAgfTtcblxuICBASW5wdXQoKSAgICAgICAgICAvL2dldHRpbmcgYWxsIGRhdGEgbGlzdCB2aWEgcmVzb2x2ZSBjYWxsIGZyb20gYXBwXG4gIHNldCBUZWFtRGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuYWxsZGF0YSA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFsbGRhdGEgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9nZXR0aW5nIGVkaXQgcGFnZSByb3V0ZSBmcm9tIGFwcFxuICBzZXQgRWRpdFJvdXRlKHZhbDogYW55KSB7XG4gICAgdGhpcy5lZGl0Um91dGV2YWwgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5lZGl0Um91dGV2YWwgPSB2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0Um91dGV2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhZGRCdXR0b25Sb3V0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkUGFnZVZhbCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZFBhZ2VWYWwgPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgICAgICAgIC8vbWFuYWdlIHRlYW0gYnV0dG9uIHJvdXRlXG4gIHNldCBtYW5hZ2VCdXR0b25Sb3V0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMubWFuYWdlUm91dGUgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5tYW5hZ2VSb3V0ZSA9ICh2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBVcGRhdGVSb3V0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkdXBkYXRlID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkdXBkYXRlID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkdXBkYXRlKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgVG9rZW4odmFsOiBhbnkpIHtcbiAgICB0aGlzLnRva2VuVmFsID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudG9rZW5WYWwgPSB2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy50b2tlblZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IFNvdXJjZU5hbWUodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZW5hbWVWaWFhcHAgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zb3VyY2VuYW1lVmlhYXBwID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc291cmNlbmFtZVZpYWFwcCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IFNlYXJjaEVuZHBvaW50KHZhbDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hpbmdlbmRwb2ludCA9ICh2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlYXJjaGluZ2VuZHBvaW50ID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoaW5nZW5kcG9pbnQpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBEZWxldGVFbmRwb2ludCh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnRWYWwgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludFZhbCA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRlbGV0ZWVuZHBvaW50VmFsKTtcbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBhZGRCdXR0b24oKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmFkZFBhZ2VWYWwpO1xuICB9XG4gIG1hbmFnZVRlYW1CdXR0b24oKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLm1hbmFnZVJvdXRlKTtcbiAgfVxufVxuIl19
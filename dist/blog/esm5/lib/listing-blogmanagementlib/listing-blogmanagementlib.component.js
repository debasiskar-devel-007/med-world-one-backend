/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
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
        { type: Component, args: [{
                    selector: 'lib-listing-blogmanagementlib',
                    template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\r\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\r\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\r\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\r\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\r\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\r\n      [date_search_source]=\"blogListConfig.view\"\r\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\r\n     [search_settings]=\"blogListConfig.search_settings\"\r\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                    styles: ["body{display:none!important}"]
                }] }
    ];
    /** @nocollapse */
    ListingBlogmanagementlibComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    ListingBlogmanagementlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingBlogmanagementlibComponent;
}());
export { ListingBlogmanagementlibComponent };
if (false) {
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.blogListConfig;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk1QztJQWlERSx1R0FBdUc7SUFJdkcsMkNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUExQzFDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUE0Q3hCLENBQUM7SUF4Q0Qsc0JBQ0kscURBQU07UUFKVix5RkFBeUY7UUFFekYsd0dBQXdHOzs7Ozs7OztRQUN4RyxVQUNXLFlBQWlCO1lBRTFCLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUMvSix1QkFBdUIsRUFBRTtvQkFDdkIsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYTtvQkFDdkQsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtvQkFDeEYsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2dCQUNELHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7Z0JBQ3ZCLGVBQWUsRUFBRTtvQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO29CQUN4SCxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ25JO2FBT0YsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBU0Qsb0RBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6Qywrd0NBQXlEOztpQkFFMUQ7Ozs7Z0JBUlEsVUFBVTs7O3lCQW1CaEIsS0FBSzs7SUE2Q1Isd0NBQUM7Q0FBQSxBQTVERCxJQTREQztTQXZEWSxpQ0FBaUM7OztJQUs1QywyREFBb0I7O0lBQ3BCLG1EQUF3Qjs7Ozs7SUEwQ1osdURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XHJcbiAgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcclxuXHJcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xyXG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxyXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXHJcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxyXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXHJcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLCBcImltYWdlXCIsIFwibWV0YXRpdGxlXCIsIFwibWV0YWRlc2NcIiwgXCJkZXNjcmlwdGlvbl9odG1sXCIsIFwiY3JlZGVudGlhbHNcIiwgXCJibG9nc19maWxlXCIsIFwiYmxvZ3NfaW1hZ2VcIl0sXHJcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XHJcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiLCBcInBhcmVudGNhdGVnb3J5bmFtZVwiOiBcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIlxyXG4gICAgICB9LFxyXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcclxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXHJcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxyXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxyXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxyXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcclxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XHJcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIGJ5IGJsb2cgdGl0bGUuLi5cIiwgZmllbGQ6ICdibG9ndGl0bGUnIH0seyBsYWJlbDogXCJTZWFyY2ggYnkgYXV0aG9yLi4uXCIsIGZpZWxkOiAnYXV0aG9yJyB9XSxcclxuICAgICAgICBzZWxlY3RzZWFyY2g6IFt7IGxhYmVsOiAnU2VhcmNoIEJ5IFN0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0gfV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cclxuICAgICAgLy8gIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xyXG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxyXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxyXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxyXG4gICAgICAvLyB9XSxcclxuICAgIH1cclxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG59Il19
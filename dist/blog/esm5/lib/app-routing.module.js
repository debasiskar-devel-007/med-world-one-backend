/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
/** @type {?} */
var appRoutes = [
    { path: 'add', component: AddBlogComponent },
    { path: 'edit/:id', component: AddBlogComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes)],
                    exports: [RouterModule]
                },] }
    ];
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy8iLCJzb3VyY2VzIjpbImxpYi9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFBOztJQUMxRCxTQUFTLEdBQVc7SUFDeEIsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRyxnQkFBZ0IsRUFBRTtJQUMzQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFHLGdCQUFnQixFQUFFO0NBRWpEO0FBRUQ7SUFBQTtJQUlnQyxDQUFDOztnQkFKaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBQytCLHVCQUFDO0NBQUEsQUFKakMsSUFJaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNZXRhR3VhcmQgfSBmcm9tICdAbmd4LW1ldGEvY29yZSc7XHJcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZC1ibG9nL2FkZC1ibG9nLmNvbXBvbmVudCdcclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge3BhdGg6J2FkZCcsIGNvbXBvbmVudCA6IEFkZEJsb2dDb21wb25lbnQgfSxcclxuICB7cGF0aDonZWRpdC86aWQnLCBjb21wb25lbnQgOiBBZGRCbG9nQ29tcG9uZW50IH0sXHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19
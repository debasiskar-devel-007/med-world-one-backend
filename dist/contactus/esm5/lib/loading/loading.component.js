/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = false;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-loading',
                    template: "\n\n\n\n<div style=\"width:100vw; height:100vh; display:table-cell; vertical-align:middle; text-align:center;\" *ngIf=\"loading==true\">\n  <mat-spinner></mat-spinner>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return LoadingComponent;
}());
export { LoadingComponent };
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0dXMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFFbkg7SUFPRSwwQkFBb0IsTUFBYztRQUFsQyxpQkFrQkQ7UUFsQnFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEM0IsWUFBTyxHQUFRLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ3RDLFFBQVEsSUFBSSxFQUFFO2dCQUNWLEtBQUssS0FBSyxZQUFZLGVBQWUsQ0FBQyxDQUFDO29CQUNuQyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLEtBQUssWUFBWSxhQUFhLENBQUM7Z0JBQ3BDLEtBQUssS0FBSyxZQUFZLGdCQUFnQixDQUFDO2dCQUN2QyxLQUFLLEtBQUssWUFBWSxlQUFlLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLE1BQU07aUJBQ1Q7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ0wsTUFBTTtpQkFDVDthQUNKO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUMsbUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMkxBQXVDOztpQkFFeEM7Ozs7Z0JBTjJFLE1BQU07O0lBZ0NsRix1QkFBQztDQUFBLEFBOUJELElBOEJDO1NBekJZLGdCQUFnQjs7O0lBQzNCLG1DQUE0Qjs7Ozs7SUFDaEIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVycm9yLCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWw6XG4gICAgICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
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
export { SharetoolsComponent };
if (false) {
    /** @type {?} */
    SharetoolsComponent.prototype.ConfigData;
    /**
     * @type {?}
     * @private
     */
    SharetoolsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmV0b29scy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZXRvb2xzLyIsInNvdXJjZXMiOlsibGliL3NoYXJldG9vbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFvQyxNQUFNLGNBQWMsQ0FBQztBQUVqRjtJQWlCRSw2QkFBb0IsRUFBbUI7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFUaEMsZUFBVSxHQUFRLEVBQUUsQ0FBQzs7WUFXdEIsVUFBVSxHQUFlO1lBQzNCLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdEIsQ0FBQztJQWhCRCxzQkFDSSx1Q0FBTTs7Ozs7UUFEVixVQUNXLEdBQVE7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV4QixDQUFDOzs7T0FBQTs7OztJQWFELHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsbUNBQUs7Ozs7SUFBTCxVQUFNLEdBQVc7O1lBRVgsTUFBTSxHQUFhO1lBQ3JCLElBQUksRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLE9BQU87U0FDaEI7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDZixJQUFJOzs7O1FBQUMsVUFBQyxHQUFlLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixFQUFDO2FBQzNDLEtBQUs7Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxHQUFHO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixnNURBQTBDOztpQkFHM0M7Ozs7Z0JBUFEsZUFBZTs7O3lCQVlyQixLQUFLOztJQXNDUiwwQkFBQztDQUFBLEFBaERELElBZ0RDO1NBMUNZLG1CQUFtQjs7O0lBRTlCLHlDQUE0Qjs7Ozs7SUFTaEIsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UsIEluaXRQYXJhbXMsIFVJUGFyYW1zLCBVSVJlc3BvbnNlIH0gZnJvbSAnbmd4LWZhY2Vib29rJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNoYXJldG9vbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hhcmV0b29scy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJldG9vbHMuY29tcG9uZW50LmNzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmV0b29sc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIENvbmZpZ0RhdGE6IGFueSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBDb25maWcodmFsOiBhbnkpIHtcbiAgICB0aGlzLkNvbmZpZ0RhdGEgPSAodmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5Db25maWdEYXRhID0gdmFsO1xuXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGYWNlYm9va1NlcnZpY2UpIHtcblxuICAgIGxldCBpbml0UGFyYW1zOiBJbml0UGFyYW1zID0ge1xuICAgICAgYXBwSWQ6ICcyMzkxNTU2NTE3Nzc3NTI0JyxcbiAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgdmVyc2lvbjogJ3YyLjgnXG4gICAgfTtcbiAgICBmYi5pbml0KGluaXRQYXJhbXMpO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNoYXJlKHVybDogc3RyaW5nKSB7XG5cbiAgICBsZXQgcGFyYW1zOiBVSVBhcmFtcyA9IHtcbiAgICAgIGhyZWY6IHVybCxcbiAgICAgIG1ldGhvZDogJ3NoYXJlJ1xuICAgIH07XG5cbiAgICB0aGlzLmZiLnVpKHBhcmFtcylcbiAgICAgIC50aGVuKChyZXM6IFVJUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gIH1cblxuICBzaGFyZUxpbmsodXJsKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbmV3d2luZG93JywgJ3dpZHRoPTQwMCwgaGVpZ2h0PTQwMCcpO1xuICB9XG5cblxufVxuIl19
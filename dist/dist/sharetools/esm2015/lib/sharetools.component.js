/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
export class SharetoolsComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.ConfigData = [];
        /** @type {?} */
        let initParams = {
            appId: '2391556517777524',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Config(val) {
        this.ConfigData = (val) || '<no name set>';
        this.ConfigData = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    share(url) {
        /** @type {?} */
        let params = {
            href: url,
            method: 'share'
        };
        this.fb.ui(params)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => console.log(res)))
            .catch((/**
         * @param {?} e
         * @return {?}
         */
        (e) => console.error(e)));
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareLink(url) {
        window.open(url, 'newwindow', 'width=400, height=400');
    }
}
SharetoolsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sharetools',
                template: "<span class=\"mainclass\">\n    <!-- facebook share start here -->\n    <ng-container class=\"mainclass\" *ngFor=\"let val of ConfigData \">\n        <button mat-button type=\"button\" (click)=\"share(ConfigData[0].link)\" color=\"primary\"\n            *ngIf=\"val.type =='facebook'\" class=\"social\" style=\"padding: 0;\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/facebook.png\">\n\n        </button>\n\n        <!-- twitter share start hetre -->\n        <a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?url={{ConfigData[1].link}}\"\n            target=\"_blank\">\n            <button mat-button class=\"social\" color=\"primary\" *ngIf=\"val.type =='twitter'\">\n                <img style=\"max-width: 100%;\" src=\"../assets/images/twitter.png\">\n            </button>\n        </a>\n        <!-- linkedin start hetre -->\n\n        <button class=\"linkedinbtn\" linkedin\n            (click)=\"shareLink('https://www.linkedin.com/cws/share?url='+ ConfigData[2].link)\" mat-button class=\"social\"\n            color=\"primary\" *ngIf=\"val.type =='linkedin'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/linkedin.png\">\n\n        </button>\n\n        <!-- tumbler start here -->\n        <button mat-button class=\"social\" (click)=\"shareLink('http://www.tumblr.com/share?url=' + ConfigData[3].link)\"\n            color=\"primary\" *ngIf=\"val.type =='tumbler'\">\n            <img style=\"max-width: 100%;\" src=\"../assets/images/tumblr.png\">\n\n        </button>\n\n\n    </ng-container>\n\n\n\n</span>\n\n<!-- <div class=\"linkedinbtn\" class=\"col\">\n    <linkedin-share url=\"https://jasonwatmore.com\"></linkedin-share>\n</div> -->\n\n<!-- <div id=\"linkedIn\" class=\"a2a_kit\" style=\"left:0px; top:150px;\">\n    <a class=\"a2a_button_linkedin_share\" data-url=\"https://example.com/\"></a>                    \n</div> -->",
                styles: [".mainclass{text-align:center;display:block}.social{padding:0!important;min-width:50px!important}.linkedinbtn{height:35px;min-width:35px!important;width:35px;position:relative;overflow:hidden;background:red;border-radius:50%;padding:0!important}.share-linked-in{background:#0077b5;color:#fff}"]
            }] }
];
/** @nocollapse */
SharetoolsComponent.ctorParameters = () => [
    { type: FacebookService }
];
SharetoolsComponent.propDecorators = {
    Config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SharetoolsComponent.prototype.ConfigData;
    /**
     * @type {?}
     * @private
     */
    SharetoolsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmV0b29scy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZXRvb2xzLyIsInNvdXJjZXMiOlsibGliL3NoYXJldG9vbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFvQyxNQUFNLGNBQWMsQ0FBQztBQVFqRixNQUFNLE9BQU8sbUJBQW1COzs7O0lBVzlCLFlBQW9CLEVBQW1CO1FBQW5CLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBVGhDLGVBQVUsR0FBUSxFQUFFLENBQUM7O1lBV3RCLFVBQVUsR0FBZTtZQUMzQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXRCLENBQUM7Ozs7O0lBaEJELElBQ0ksTUFBTSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQWUsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUV4QixDQUFDOzs7O0lBYUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQVc7O1lBRVgsTUFBTSxHQUFhO1lBQ3JCLElBQUksRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLE9BQU87U0FDaEI7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDZixJQUFJOzs7O1FBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDM0MsS0FBSzs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZzVEQUEwQzs7YUFHM0M7Ozs7WUFQUSxlQUFlOzs7cUJBWXJCLEtBQUs7Ozs7SUFGTix5Q0FBNEI7Ozs7O0lBU2hCLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZWJvb2tTZXJ2aWNlLCBJbml0UGFyYW1zLCBVSVBhcmFtcywgVUlSZXNwb25zZSB9IGZyb20gJ25neC1mYWNlYm9vayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaGFyZXRvb2xzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoYXJldG9vbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGFyZXRvb2xzLmNvbXBvbmVudC5jc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJldG9vbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBDb25maWdEYXRhOiBhbnkgPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgQ29uZmlnKHZhbDogYW55KSB7XG4gICAgdGhpcy5Db25maWdEYXRhID0gKHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuQ29uZmlnRGF0YSA9IHZhbDtcblxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRmFjZWJvb2tTZXJ2aWNlKSB7XG5cbiAgICBsZXQgaW5pdFBhcmFtczogSW5pdFBhcmFtcyA9IHtcbiAgICAgIGFwcElkOiAnMjM5MTU1NjUxNzc3NzUyNCcsXG4gICAgICB4ZmJtbDogdHJ1ZSxcbiAgICAgIHZlcnNpb246ICd2Mi44J1xuICAgIH07XG4gICAgZmIuaW5pdChpbml0UGFyYW1zKTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzaGFyZSh1cmw6IHN0cmluZykge1xuXG4gICAgbGV0IHBhcmFtczogVUlQYXJhbXMgPSB7XG4gICAgICBocmVmOiB1cmwsXG4gICAgICBtZXRob2Q6ICdzaGFyZSdcbiAgICB9O1xuXG4gICAgdGhpcy5mYi51aShwYXJhbXMpXG4gICAgICAudGhlbigocmVzOiBVSVJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICB9XG5cbiAgc2hhcmVMaW5rKHVybCkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ25ld3dpbmRvdycsICd3aWR0aD00MDAsIGhlaWdodD00MDAnKTtcbiAgfVxuXG5cbn1cbiJdfQ==
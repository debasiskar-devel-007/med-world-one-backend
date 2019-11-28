/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var YoutubeplayerComponent = /** @class */ (function () {
    function YoutubeplayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.id = (id) || '<no name set>';
            this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YoutubeplayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YoutubeplayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-youtubeplayer',
                    template: "\r\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    YoutubeplayerComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    YoutubeplayerComponent.propDecorators = {
        videoid: [{ type: Input }]
    };
    return YoutubeplayerComponent;
}());
export { YoutubeplayerComponent };
if (false) {
    /** @type {?} */
    YoutubeplayerComponent.prototype.id;
    /** @type {?} */
    YoutubeplayerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQWFFLGdDQUFtQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQUksQ0FBQztJQUw5QyxzQkFDSSwyQ0FBTzs7Ozs7UUFEWCxVQUNZLEVBQU87WUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsZ0NBQWdDLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0YsQ0FBQzs7O09BQUE7Ozs7SUFHRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLCtMQUE2Qzs7aUJBRTlDOzs7O2dCQU5RLFlBQVk7OzswQkFVbEIsS0FBSzs7SUFVUiw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksc0JBQXNCOzs7SUFDakMsb0NBQU87O0lBT0ssMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWIteW91dHViZXBsYXllcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlcGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpZDphbnk7XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgdmlkZW9pZChpZDogYW55KSB7XHJcbiAgICB0aGlzLmlkID0gKGlkKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nK2lkKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
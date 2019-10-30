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
                    template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQWFFLGdDQUFtQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQUksQ0FBQztJQUw5QyxzQkFDSSwyQ0FBTzs7Ozs7UUFEWCxVQUNZLEVBQU87WUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsZ0NBQWdDLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0YsQ0FBQzs7O09BQUE7Ozs7SUFHRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDZMQUE2Qzs7aUJBRTlDOzs7O2dCQU5RLFlBQVk7OzswQkFVbEIsS0FBSzs7SUFVUiw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksc0JBQXNCOzs7SUFDakMsb0NBQU87O0lBT0ssMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXlvdXR1YmVwbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4veW91dHViZXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVwbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpZDphbnk7XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgdmlkZW9pZChpZDogYW55KSB7XG4gICAgdGhpcy5pZCA9IChpZCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuaWQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycraWQpO1xuICB9XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=
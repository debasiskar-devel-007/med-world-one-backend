/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class YoutubeplayerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set videoid(id) {
        this.id = (id) || '<no name set>';
        this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YoutubeplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-youtubeplayer',
                template: "\r\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                styles: [""]
            }] }
];
/** @nocollapse */
YoutubeplayerComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
YoutubeplayerComponent.propDecorators = {
    videoid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    YoutubeplayerComponent.prototype.id;
    /** @type {?} */
    YoutubeplayerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU96RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBUWpDLFlBQW1CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFBSSxDQUFDOzs7OztJQUw5QyxJQUNJLE9BQU8sQ0FBQyxFQUFPO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLGdDQUFnQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwrTEFBNkM7O2FBRTlDOzs7O1lBTlEsWUFBWTs7O3NCQVVsQixLQUFLOzs7O0lBRk4sb0NBQU87O0lBT0ssMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWIteW91dHViZXBsYXllcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlcGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpZDphbnk7XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgdmlkZW9pZChpZDogYW55KSB7XHJcbiAgICB0aGlzLmlkID0gKGlkKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nK2lkKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
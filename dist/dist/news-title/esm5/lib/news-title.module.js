/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NewsTitleComponent, modalData, ListingNewsletterComponent],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule
                    ],
                    exports: [NewsTitleComponent, ListingNewsletterComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService],
                    entryComponents: [NewsTitleComponent, modalData]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBQUE7SUFjK0IsQ0FBQzs7Z0JBZC9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLENBQUM7b0JBQ3pFLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQixFQUFDLFdBQVc7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFDLDBCQUEwQixDQUFDO29CQUN4RCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUMsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7aUJBQ2hEOztJQUM4QixzQkFBQztDQUFBLEFBZGhDLElBY2dDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEgfSBmcm9tICcuL25ld3MtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7IFxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW05ld3NUaXRsZUNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czpbTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGFdXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NUaXRsZU1vZHVsZSB7IH1cblxuXG5cbiJdfQ==
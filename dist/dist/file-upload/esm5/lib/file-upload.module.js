/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Module/material-module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from "listing-angular7";
import { DragDropDirective } from './directive/drag-drop.directive';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { PreviewFilesComponent } from './component/preview-files/preview-files.component';
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FileUploadComponent,
                        DragDropDirective,
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ],
                    imports: [
                        BrowserModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        ListingModule,
                    ],
                    providers: [],
                    exports: [FileUploadComponent],
                    entryComponents: [
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ]
                },] }
    ];
    return FileUploadModule;
}());
export { FileUploadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQvIiwic291cmNlcyI6WyJsaWIvZmlsZS11cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUUxRjtJQUFBO0lBd0JnQyxDQUFDOztnQkF4QmhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsZUFBZSxFQUFFO3dCQUNmLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBeEJqQyxJQXdCaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9Nb2R1bGUvbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSBcImxpc3RpbmctYW5ndWxhcjdcIjtcbmltcG9ydCB7IERyYWdEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbGVydE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hbGVydC1tZXNzYWdlL2FsZXJ0LW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJldmlld0ZpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcHJldmlldy1maWxlcy9wcmV2aWV3LWZpbGVzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZpbGVVcGxvYWRDb21wb25lbnQsXG4gICAgRHJhZ0Ryb3BEaXJlY3RpdmUsXG4gICAgQWxlcnRNZXNzYWdlQ29tcG9uZW50LFxuICAgIERpYWxvZ0JveENvbXBvbmVudCxcbiAgICBQcmV2aWV3RmlsZXNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtGaWxlVXBsb2FkQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQWxlcnRNZXNzYWdlQ29tcG9uZW50LFxuICAgIERpYWxvZ0JveENvbXBvbmVudCxcbiAgICBQcmV2aWV3RmlsZXNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkTW9kdWxlIHsgfVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ServicelibComponent } from './servicelib.component';
import { DemoMaterialModule } from './modules/material-module';
import { AddeditServiceComponent, Modal } from './Component/addedit-service/addedit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload';
export class ServicelibModule {
}
ServicelibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                imports: [
                    DemoMaterialModule,
                    HttpClientModule,
                    RouterModule,
                    CKEditorModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    BrowserModule,
                    ListingModule,
                    FileUploadModule
                ],
                exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                entryComponents: [Modal]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFtQi9DLE1BQU0sT0FBTyxnQkFBZ0I7OztZQWpCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFDLHVCQUF1QixFQUFDLEtBQUssQ0FBQztnQkFDakUsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDO2dCQUM1RCxlQUFlLEVBQUMsQ0FBQyxLQUFLLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmljZWxpYkNvbXBvbmVudCB9IGZyb20gJy4vc2VydmljZWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBBZGRlZGl0U2VydmljZUNvbXBvbmVudCAsTW9kYWx9IGZyb20gJy4vQ29tcG9uZW50L2FkZGVkaXQtc2VydmljZS9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSAsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlcnZpY2VsaWJDb21wb25lbnQsQWRkZWRpdFNlcnZpY2VDb21wb25lbnQsTW9kYWxdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtTZXJ2aWNlbGliQ29tcG9uZW50LEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50LE1vZGFsXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbF1cbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZWxpYk1vZHVsZSB7IH1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TestimonialComponent } from './testimonial.component';
import { AddeditComponent, Modal } from './Components/addedit/addedit.component';
import { DemoMaterialModule } from './Modules/material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload';
export class TestimonialModule {
}
TestimonialModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestimonialComponent, AddeditComponent, Modal],
                imports: [
                    DemoMaterialModule,
                    CKEditorModule,
                    HttpClientModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    BrowserModule,
                    ListingModule,
                    FileUploadModule
                ],
                exports: [TestimonialComponent, AddeditComponent],
                entryComponents: [Modal]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRyxLQUFLLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUMsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFtQi9DLE1BQU0sT0FBTyxpQkFBaUI7OztZQWpCN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQztnQkFDN0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hELGVBQWUsRUFBQyxDQUFDLEtBQUssQ0FBRTthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbENvbXBvbmVudCB9IGZyb20gJy4vdGVzdGltb25pYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZGVkaXRDb21wb25lbnQgLCBNb2RhbCB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGRlZGl0L2FkZGVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlcy9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Rlc3RpbW9uaWFsQ29tcG9uZW50LCBBZGRlZGl0Q29tcG9uZW50ICxNb2RhbF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1Rlc3RpbW9uaWFsQ29tcG9uZW50LEFkZGVkaXRDb21wb25lbnRdICxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbCBdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFsTW9kdWxlIHsgfVxuIl19
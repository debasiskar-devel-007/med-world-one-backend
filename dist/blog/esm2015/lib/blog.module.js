/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module';
import { FileUploadModule } from 'file-upload';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent, Modal2 } from './add-blog/add-blog.component';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent, Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
export class BlogModule {
}
BlogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BlogComponent,
                    AddBlogComponent,
                    AddeditBlogmanagementComponent,
                    Modal,
                    YoutubeplayerComponent,
                    YoutubeComponent,
                    ListingBlogmanagementlibComponent, Modal2
                ],
                imports: [
                    DemoMaterialModule,
                    RouterModule,
                    AppRoutingModule,
                    ListingModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserModule,
                    CKEditorModule,
                    ListingModule,
                    FileUploadModule,
                    CommonModule,
                ],
                exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                providers: [ApiService],
                entryComponents: [Modal2, Modal, YoutubeComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBa0NwSCxNQUFNLE9BQU8sVUFBVTs7O1lBL0J0QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUVoQiw4QkFBOEI7b0JBQzlCLEtBQUs7b0JBQ0wsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGlDQUFpQyxFQUFDLE1BQU07aUJBQ3pDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFFYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsOEJBQThCLEVBQUMsaUNBQWlDLENBQUM7Z0JBQzVHLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQzthQUVsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSdcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFlvdXR1YmVwbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCbG9nQ29tcG9uZW50LFxuICAgIEFkZEJsb2dDb21wb25lbnQsXG4gICAgXG4gICAgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgIE1vZGFsLFxuICAgIFlvdXR1YmVwbGF5ZXJDb21wb25lbnQsXG4gICAgWW91dHViZUNvbXBvbmVudCxcbiAgICBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQsTW9kYWwyXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBcbiAgXSxcbiAgZXhwb3J0czogW0Jsb2dDb21wb25lbnQsIEFkZEJsb2dDb21wb25lbnQsIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTW9kYWwyLE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBCbG9nTW9kdWxlIHsgfVxuIl19